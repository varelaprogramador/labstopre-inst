"use client";

import * as React from "react";
import flags from "react-phone-number-input/flags";
import * as RPNInput from "react-phone-number-input";
import { cn } from "@/lib/utils";
import { Input, InputProps } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type PhoneInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
> &
    Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
        onChange?: (value: RPNInput.Value | undefined) => void;
    };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
    React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
        ({ className, onChange, ...props }, ref) => {
            return (
                <RPNInput.default
                    ref={ref}
                    className={cn("flex", className)}
                    flagComponent={FlagComponent}
                    countrySelectComponent={CountrySelect}
                    inputComponent={InputComponent}
                    onChange={(value) => onChange?.(value)}
                    {...props}
                />
            );
        }
    );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => (
        <Input
            className={cn("rounded-e-lg rounded-s-none", className)}
            {...props}
            ref={ref}
        />
    )
);
InputComponent.displayName = "InputComponent";

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
    disabled?: boolean;
    value: RPNInput.Country;
    onChange: (value: RPNInput.Country) => void;
    options: CountrySelectOption[];
};

const CountrySelect = ({
    disabled,
    value,
    onChange,
    options,
}: CountrySelectProps) => {
    const [search, setSearch] = React.useState(""); // Estado para o termo de busca
    const [filteredOptions, setFilteredOptions] = React.useState(options);

    React.useEffect(() => {
        // Filtrar opções com base no termo de busca
        setFilteredOptions(
            options.filter(({ label }) =>
                label.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, options]);

    const handleSelect = (country: RPNInput.Country) => onChange(country);

    return (
        <Select
            defaultValue="BR"
            disabled={disabled}
            value={value}
            key={"FLAGS_SELECT"}
            onValueChange={handleSelect}
        >
            <SelectTrigger className="flex gap-2 rounded-s-lg border  py-2  max-w-[170px] rounded-r-none border-r-0">
                <SelectValue placeholder="Selecionar país" />
            </SelectTrigger>
            <SelectContent>
                {/* Campo de busca */}
                <div className="p-2 fixed top-0 left-0 w-full bg-white z-10">
                    <Input
                        placeholder="Buscar país"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full"
                    />
                </div>
                {/* Lista de opções filtradas */}
                {filteredOptions.length > 0 ? (
                    filteredOptions.map(({ value: optionValue, label }, index) => (
                        <SelectItem key={optionValue + "-" + index} value={optionValue}>
                            <div
                                className="flex items-center  gap-2"
                                key={optionValue + "- item"}
                            >
                                <FlagComponent
                                    key={optionValue + " - " + index}
                                    country={optionValue}
                                    countryName={label}
                                />
                                <span>
                                    {label} (+
                                    {RPNInput.getCountryCallingCode(optionValue || "BR")})
                                </span>
                            </div>
                        </SelectItem>
                    ))
                ) : (
                    <div className="p-2 text-center text-sm text-gray-500">
                        Nenhum país encontrado
                    </div>
                )}
            </SelectContent>
        </Select>
    );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
    const Flag = flags[country];

    return (
        <span className="flex h-4  overflow-hidden rounded-sm bg-foreground/20">
            {Flag && <Flag title={countryName} />}
        </span>
    );
};
FlagComponent.displayName = "FlagComponent";

export { PhoneInput };
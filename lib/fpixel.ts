declare global {
  interface Window {
    fbq: (event: string, action: string, options?: object) => void
  }
}

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking
export const event = (name: string, options = {}) => {
  window.fbq('track', name, options)
}

export const purchase = (value: number, currency: string = 'BRL') => {
  window.fbq('track', 'Purchase', { value, currency })
}

export const lead = () => {
  window.fbq('track', 'Lead')
}

export const viewContent = (
  content_name: string,
  content_category?: string,
) => {
  window.fbq('track', 'ViewContent', {
    content_name,
    content_category,
  })
}

export const addToCart = (value: number, currency: string = 'BRL') => {
  window.fbq('track', 'AddToCart', { value, currency })
}

export const initiateCheckout = (value: number, currency: string = 'BRL') => {
  window.fbq('track', 'InitiateCheckout', { value, currency })
}

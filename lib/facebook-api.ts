const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN!
const API_ENDPOINT = `https://graph.facebook.com/v19.0/${process.env.FB_PIXEL_ID}/events`

type FacebookEvent = {
  event_name: string
  event_time: number
  event_source_url?: string
  user_data?: {
    email?: string
    phone?: string
    client_ip_address?: string
    client_user_agent?: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  custom_data?: Record<string, any>
  action_source:
    | 'website'
    | 'email'
    | 'app'
    | 'phone_call'
    | 'chat'
    | 'physical_store'
    | 'system_generated'
    | 'other'
}

export async function sendFacebookEvent(event: FacebookEvent) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${FACEBOOK_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        data: [
          {
            ...event,
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
          },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`Facebook Conversion API Error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error sending Facebook event:', error)
    return null
  }
}

export async function trackLead(userData: { email: string; phone?: string }) {
  return sendFacebookEvent({
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data: {
      email: userData.email,
      phone: userData.phone,
      client_ip_address: '', // Should be filled server-side
      client_user_agent: navigator.userAgent,
    },
  })
}

export async function trackPageView(url: string) {
  return sendFacebookEvent({
    event_name: 'PageView',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_source_url: url,
  })
}

export async function trackPurchase(value: number, currency: string = 'BRL') {
  return sendFacebookEvent({
    event_name: 'Purchase',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    custom_data: {
      value,
      currency,
    },
  })
}

export async function trackViewContent(
  content_name: string,
  content_category?: string,
) {
  return sendFacebookEvent({
    event_name: 'ViewContent',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    custom_data: {
      content_name,
      content_category,
    },
  })
}

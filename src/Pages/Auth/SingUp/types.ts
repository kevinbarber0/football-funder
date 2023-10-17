export interface registerFormDataType { 
    category_id: number|null,
    org_name?: string | null,
    org_address1?: string | null,
    org_address2?: string | null,
    org_phone_number?: string | null,
    org_city?: string | null,
    org_post_code?: string | null,
    org_country?: string | null,
    address_line1: string | null,
    address_line2: string | null,
    city?: string | null,
    post_code?: string | null,
    country?: string | null ,
    phone_number: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    password: string | null
    profile_url?: string | null
}
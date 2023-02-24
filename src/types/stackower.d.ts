export interface SomeString {
    items: Topic[],
    has_more: boolean,
    quota_max: boolean,
    quota_remaining: number
}

interface Topic {
    tags: string[],
    owner: Owner
}

interface Owner {
    account_id: number,
    reputation: number,
    user_id: number,
    user_type: string,
    profile_image: string,
    display_name: string,
    link: string
}
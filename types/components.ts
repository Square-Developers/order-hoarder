import { DBUser, MetaData } from "./user"

export interface UserLastModifiedTokenProps {
    id: string
    squareTokenLastUpdated: string
}

export interface UserMerchantDataProps {
    id: string
    merchantId: string
}

export interface CreateUserProps {
    id: string
    user: DBUser
}

export interface UpsertMetaDataProps {
    id: string
    metaData: MetaData
}

export interface NavBarItems {
    label: string;
    link: string;
}

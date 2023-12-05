// @ts-nocheck
import { forwardRef, useEffect } from 'react'
import { Group, Avatar, Text, Select, Loader } from '@mantine/core'
import useSWR from 'swr'

interface SelectItem {
    image: string | undefined;
    label: string | undefined;
    value: string | undefined;
    description: string | undefined;
}

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap>
                <Avatar src={image} />

                <div>
                    <Text size='sm'>{label}</Text>
                    <Text size='xs'>
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    )
)


const LocationSelect = ({ setMerchantId }) => {
    // TODO: set type on this
    // TODO: handle error
    const { data: { locations, isTokenValid } = { locations: null,
isTokenValid: null }, isValidating } = useSWR('api/locations/list_locations')
    useEffect(() =>{
    }, [locations, isTokenValid])

    if (isValidating) {
        return <Loader/>
    } else {
        if (locations && isTokenValid){
            return (
                <Select
                    placeholder='Choose a location'
                    itemComponent={SelectItem}
                    data={locations.map((location) => {
                        return {
                            image: location.logoUrl,
                            label: location.businessName,
                            value: location.id,
                            description: location.address?.addressLine1
                        }
                    })}
                    onChange={(e) => setMerchantId(e)}
                    searchable
                    maxDropdownHeight={400}
                    nothingFound='No locations found'
                    filter={(value, item) =>
                        item?.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
                        item.description.toLowerCase().includes(value.toLowerCase().trim())
                    }
                />
            )
        } else {
            return <h3>No Location Data Found</h3>
        }
    }
}

export default LocationSelect
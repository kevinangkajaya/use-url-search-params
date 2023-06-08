import { useEffect, useState } from "react"

/**
 * @param {NextJsRouter} router router instance from useRouter
 * @returns 
 */
const initUrlSearchParam = (router: any) => {
    /**
     * 
     * @param {string} initialValue inital value of the state 
     * @param {string} urlSearchParamKey key name on the url params
     * @param {bool} giveDelay give delay when changing url params. Useful when changing state may be too fast.
     * @returns 
     */
    const useUrlSearchParam = (initialValue: string = "",
        urlSearchParamKey: string = "",
        giveDelay: boolean = false,
    ) => {
        const [data, set_data] = useState(initialValue)

        const [init_already, set_init_already] = useState(false)

        useEffect(() => {
            let urlSearchParams = new URLSearchParams(window.location.search)
            let valueFromUrl = urlSearchParams.get(urlSearchParamKey) || initialValue

            set_data(valueFromUrl)
            set_init_already(true)
        }, [])

        useEffect(() => {
            if (!init_already) return;

            if (giveDelay === true) {
                let timeout = setTimeout(() => {
                    setValueToUrlSearchParams()
                }, 500);

                return () => {
                    clearTimeout(timeout)
                }
            } else {
                setValueToUrlSearchParams()
            }

        }, [data])

        const setValueToUrlSearchParams = () => {
            let urlSearchParams = new URLSearchParams(window.location.search)
            urlSearchParams.set(urlSearchParamKey, data)

            router.push({
                pathname: router.pathname,
                search: urlSearchParams.toString()
            }, undefined, { scroll: false })
        }

        return [data, set_data] as const
    }

    return useUrlSearchParam
}

export default initUrlSearchParam
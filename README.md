# Use URL Search Params
### Introduction
Only for NextJS! Custom hook using UrlSearchParams to automate link given in the url. For example, when you are changing `<input type="text" id="name" value="John" />`, the result would appear in url (http://localhost?name=John)

### Installing as a package
`npm install @kevinangkajaya/use-url-search-params`

### Usage
```
import useUrlSearchParams from "@kevinangkajaya/use-url-search-params"

const initialValue = "", 
const urlSearchParamKey = "name", 
const giveDelay = true
const [name, set_name] = useUrlSearchParam(initialValue, urlSearchParamKey, giveDelay)

return(
    <input type="search" id="name" className="form-control" value={name}
        title="Search name" placeholder="Search name"
        onChange={(e) => set_name(e.target.value)} />
)
```

### Props 
| Name | Value | Default | Description  |
| ------------- | ------------- | --- | -----|
| initialValue | string | "" | inital value of the state   |
| urlSearchParamKey | string | "" | Key name on the url params  |
| giveDelay | bool | false | Give delay when changing url params. Useful when changing state may be too fast. |
| router | NextJsRouter | null | You need to pass an instance of router (from useRouter) to this variable |

### Return Value
ReactJS Custom Hook
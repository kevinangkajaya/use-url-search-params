# Use URL Search Params
### Introduction
For ReactJS and NextJS! Custom hook using UrlSearchParams to automate link given in the url. For example, when you are changing `<input type="text" id="name" value="John" />`, the result would appear in url (http://localhost?name=John)

### Installing as a package
`npm install @kevinangkajaya/use-url-search-params`

### Usage
```
import initUrlSearchParam from '@kevinangkajaya/use-url-search-params';
import { useRouter } from 'next/router';

const router = useRouter()
const initialValue = ""
const urlSearchParamKey = "name"
const giveDelay = true

const useUrlSearchParam = initUrlSearchParam(router)

const [name, set_name] = useUrlSearchParam(initialValue, urlSearchParamKey, giveDelay)

return(
    <input type="search" id="name" className="form-control" value={name}
        title="Search name" placeholder="Search name"
        onChange={(e) => set_name(e.target.value)} />
)
```

### Props initUrlSearchParam
| Name | Value | Default | Description  |
| ------------- | ------------- | --- | -----|
| router | ReactJs or NextJs Router | null | You need to pass an instance of router (from useRouter) to this variable |

### Props useUrlSearchParam
| Name | Value | Default | Description  |
| ------------- | ------------- | --- | -----|
| initialValue | string | "" | inital value of the state   |
| urlSearchParamKey | string | "" | Key name on the url params  |
| giveDelay | bool | false | Give delay when changing url params. Useful when changing state may be too fast. |

### Return Value initUrlSearchParam
Closure function to call useUrlSearchParam

### Return Value useUrlSearchParam
ReactJS Custom Hook
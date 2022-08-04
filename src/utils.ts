function capitalize(stringToCapitalize: String): String {
    return (stringToCapitalize && stringToCapitalize[0].toUpperCase() + stringToCapitalize.slice(1)) || ""
}


export default capitalize;
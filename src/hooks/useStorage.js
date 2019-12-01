const useStorage = storageItem => {
    //useEffect(() => , [storageItem])

    var value = JSON.parse(localStorage.getItem(storageItem));
    var setItem = newValue => localStorage.setItem(storageItem, JSON.stringify(newValue));
    return [value, setItem];
}

export default useStorage;
function truncationName(name) {
    const partsStr = name.split('.');

    if (name.length <= 10) {
        return name;
    } else {
        const newName = partsStr[0].slice(0, 7) + '.' + partsStr[1];
        return newName;
    }
}

export default truncationName;
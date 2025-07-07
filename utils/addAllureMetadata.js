export function addAllureMetadata(testInfo, metadata) {
    Object.entries(metadata).forEach(([type, values]) => {
        if (Array.isArray(values)) {
            values.forEach((value) => {
                testInfo.annotations.push({ type, description: value });
            });
        } else {
            testInfo.annotations.push({ type, description: values });
        }
    });
}

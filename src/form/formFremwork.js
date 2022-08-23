export default function formFremwork(config, validation) {
    return {
        ...config,
        value: '',
        touched: false,
        valid: !!validation,
        validation
    }
}
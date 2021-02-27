const generateToken = () => {
    let token = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 32; i++)
        token += possible.charAt(Math.floor(Math.random() * possible.length));
    return token;
}
export default generateToken

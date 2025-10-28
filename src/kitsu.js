class kitsu{
    constructor(){
        this.api = "https://kitsu.io/api"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest","Content-Type":"application/vnd.api+json"}
    }
    async req(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(data),
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async register(email,password,name){
        return (await this.req(`${this.api}/edge/users`,{"data":{"attributes":{"email":email,"name":name,"password":password},"type":"users"}}));
    }
    async recover_password(email){
        return (await this.req(`${this.api}/edge/users/_recover`,{"username":email}));
    }
    async search_anime(name){
        return new Promise((resolve, reject) => {
            fetch(`${this.api}/edge/anime?filter[text]=${name}`)
            .then(response => response.json())
            .then(commits =>resolve(commits))
    })}
}
module.exports = {kitsu};
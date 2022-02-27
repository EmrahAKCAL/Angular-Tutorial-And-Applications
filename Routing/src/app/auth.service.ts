export class AuthService {
    loggedIn= false; //kullanıcı varsayılan olarak alacak değer
    redirectUrl: string; //kullanıcı login olduğunda gidebilecek
    isAuthenticated(){
        const promise= new Promise((resolve, reject)=>{ //eğer başarılı bir sonuç dönüyorsa resolve içerisine, eğer bir hata sonucun döndürüyorsa reject içerisine geri gönderir.
            setTimeout(()=>{
                resolve(this.loggedIn); //bir hata yoksa geri loggedIn i gönderecek
            }, 700);

        });
        return promise; //kullanıcı o anki durumunu kontrol edecek
    }
    login(){
        this.loggedIn= true; //Eğer kullanıcı login() metotunu çağırırsa gelecek olan değer
    }
    logout(){
        this.loggedIn= false; //Eğer kullanıcı logout() metotunu çağırırsa gelecek olan değer
    }
}
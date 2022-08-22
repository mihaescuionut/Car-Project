export default class Api{

    api(path,method='GET',body=null,requiresAuth=false,credentials=null){
        const url="https://car-app-ionut.herokuapp.com/"+path;
        // http://localhost:3000/
        // https://car-app-ionut.herokuapp.com/
        const options={
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        }

        if(body){
            options.body = JSON.stringify(body);
        }
        if(requiresAuth){

        }

        return fetch(url, options);
    }

    async getAllCars(){

        try{
            let allCars = await this.api('api/v1/allCars');
            if(allCars.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return allCars.json();
            }
        }catch(e){
            console.log(e);
        }
    }

    async deleteCar(id){
        try{
            let del = await this.api(`api/v1/delete/${id}`, 'DELETE')
            if(del.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return del.json();
            }
        }catch(e){
            console.log(e);
        }
    }

    async getAllFavourites(){
        try{
            let fav = await this.api('api/v1/allFavourites');
            if(fav.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return fav.json();
            }
        }catch(e){
            console.log(e);
        }
    }

    async addToFav(id){
        try{
            let fav = await this.api(`api/v1/addToFav/${id}`, 'PUT')
            if(fav.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return fav.json();
            }
        }catch(e){
            console.log(e);
        }
    }
    
    async editCar(id, car){
        try{
            let edit = await this.api(`api/v1/editCar/${id}`, 'PUT', car);
            if(edit.status!==200){
                throw new Error(
                    console.log('error')
                )
            }else{
                return edit.json();
            }
        }catch(e){
            console.log(e);
        }
    }
}
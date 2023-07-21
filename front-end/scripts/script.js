
const pages = {}

pages.base_url = "http://localhost/login-api";
    

    pages.getAPI = async (url) =>{
        try{
            return await axios(url)
        }catch(error){
            pages.print_message("Error from GET API: " + error)
        }
    }
    
    pages.postAPI = async (api_url, api_data) => {
        try{
            return await axios.post(
                api_url,
                api_data
            );
        }catch(error){
            pages.print_message(" FATAL Error from Linking (POST)" + error)
        }
    }
    
    //the below is the script for the index page
    pages.page_index = async () => {
        const index_url = pages.base_url + "login-page.php"
        const response = await pages.getAPI(index_url)
        const name = response.data[1].name;
        document.getElementById("title").innerHTML = "Hello " + name;
    }
    
    //the below is the script for the articles page
    pages.page_login = () => {
        const login_url = pages.base_url + "login-page.php";
        pages.print_message("Hello Artciles from JS")
    }
    
    //this will load the scripts of the mentioned page
    pages.loadFor = (page) => {
        eval("pages.page_" + page + "();")
    }
    

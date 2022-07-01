//My api key
var apikey = {
    key: 'a40f4a90-39a5-4eb1-89ff-ef845cd580f7'
}

const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key

//GET Fetch Requisition
fetch(url + "&sort=cmc_rank&limit=12")
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        var texto = "";
        // Get 10 coins and symbols
        for (let i = 0; i < 12; i++) {
            //Show API information

            texto = texto + `
        <div class="feature col ">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            </div>
                <h2>${api.data[i].name}</h2>
                <p>${api.data[i].symbol}</p>
                <p>Rank: ${api.data[i].rank}</p>
                <p>
                ${new Date(api.data[i].first_historical_data).toLocaleString('pt-br')} -
                ${new Date(api.data[i].last_historical_data).toLocaleString('pt-br')}
                </p>
        </div>

                    `;

            document.getElementById("coins").innerHTML = texto;


        }
        console.log(url);
    })
    .catch((error) => {
        console.error(error.message);
    });
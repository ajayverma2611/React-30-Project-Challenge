

const dummyApiResponse={
    showLightDarkMode:true,
    showTicTacToeBoard:false,
    showRabdomColorgenerator:true,
    showAccordian:true,
    showQrCodeGenerator:true,
};

function featureFlagsDataServiceCall(){
    return new Promise((resolve,reject)=>{
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500);
        else reject("Some error occures! Please try again later");
    });
}

export default featureFlagsDataServiceCall;
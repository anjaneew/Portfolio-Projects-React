type ChannelType = {
    name: string , 
    audio: string ,
    value: string, 
    label: string,
    image: string
}

export const data:ChannelType[] = [
    { name:"pause" , 
      audio:"" ,
      value: "pause", 
      label: "Channel Select",
      image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/placeholder.png"
    }, 

    { name:"shaa" , 
        audio:"https://radio.lotustechnologieslk.net:2020/stream/shaafmgarden" ,
        value: "shaa", 
      label: "ෂා",
        image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/shaa.png",
    }, 

    { name:"sri" , 
        audio:"http://207.148.74.192:7860/stream2.mp3" ,
        value: "sri", 
      label: "ශ්‍රී",
        image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/sri.png",},

    { name:"hiru" , 
        audio:"https://radio.lotustechnologieslk.net:2020/stream/hirufmgarden" ,
        value: "hiru", 
      label: "හිරු",
        image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/hiru.png",},

    { name:"neth" , 
        audio:"https://cp11.serverse.com/proxy/nethfm/stream" ,
        value: "neth", 
      label: "නෙත්",
        image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/neth.png",},

    { name:"derana" , 
        audio:"https://cp12.serverse.com/proxy/fmderana/stream" ,
        value: "derana", 
      label: "දෙරණ",
        image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/derana.png",}, 

    { name:"lakhada" , 
        audio:"https://cp12.serverse.com/proxy/itnfm?mp=/stream" ,
        value: "lakhada", 
      label: "ලක්හඩ",
        image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/lakhada.png",}, 

    { name:"city-fm" , 
        audio:"http://220.247.227.20:8000/citystream" ,
        value: "city-fm", 
      label: "City FM",
        image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/city-fm.png",}, 

    { name:"swadesheeya-sewaya" , 
        audio:"http://220.247.227.6:8000/Snsstream" ,
        value: "swadesheeya-sewaya", 
      label: "ස්වදේශීය සේවය",
        image: "https://raw.githubusercontent.com/anjaneew/Portfolio-Projects/refs/heads/main/radioApp/images/swadesheeya-sewaya.png",},  
];
const celulares = [
    {
        id: '1',
        title: 'Xiaomi Redmi Note 11',
        description: 'El Xiaomi Redmi Note 11 es uno de los teléfonos que suena como candidato al rey de la calidad-precio en 2022. Su diseño es llamativo, sus especificaciones pueden resultar suficientes, pero si por algo puede resultar atractivo este teléfono es por su precio más asequible. En Xataka, llevamos una semana utilizando uno de los teléfonos más importantes para la gama media de este año, y en este análisis vamos a contaros nuestra experiencia con él. ',
        price: '$293.00 USD',
        pictureUrl: 'https://m.media-amazon.com/images/I/51+xdsFVOcL._AC_SS450_.jpg'
    },
    {
        id: '2',
        title: 'Apple Iphone 14',
        description: 'En un contexto de móviles en gran parte grandes (a partir de pantallas de 6,4 pulgadas), las propuestas más compactas escasean y de hecho, en la nueva remesa de Apple para este año, vemos que la marca ha matado el formato ‘mini’. Y en el análisis del iPhone 14 vemos el que ahora queda como opción base, si bien no podemos hablar del más pequeño estrictamente.',
        price: '$1,077.00 USD',
        pictureUrl:'https://m.media-amazon.com/images/I/61cwywLZR-L._AC_SL1500_.jpg'
    },
    {
        id: '3',
        title: 'Samsung Galaxy S22 Ultra',
        description: 'El Samsung Galaxy S22 Ultra supone uno de los movimientos más importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.',
        price: '$1,159.00 USD',
        pictureUrl: 'https://doto.vtexassets.com/arquivos/ids/188908-800-auto?v=637994707632070000&width=800&height=auto&aspect=true'
    },
    {
        id: '4',
        title: 'Google Pixel 7 Pro',
        description: 'Google Pixel 7 Pro es el mejor teléfono de Google; alimentado por Google Tensor G2, es más rápido, más eficiente y más seguro, con la mejor calidad de fotos y video hasta en Pixel',
        price: '$1,100.00 USD',
        pictureUrl: 'https://m.media-amazon.com/images/I/71to9xkUHrL.jpg'
    },
    {
        id: '5',
        title: 'Asus ROG Phone 6',
        description: 'The legend has evolved! The ROG Phone 6 is the latest incarnation of world-beating gaming phone. It harnesses the brute gaming power of the latest Qualcomm® Snapdragon® 8+ Gen 1 Mobile Platform, with a new class leading GameCool 6 thermal system that lets you smash every barrier and break every limit, and a 165 Hz display for a revolutionary visual experience.',
        price: '$1,450.00 USD',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_892831-MLA51228682661_082022-O.jpg'
    }
]   
const tablets = [
    {
        id: '6',
        title: 'Lenovo Tab P11 Pro',
        description: 'Lenovo Tab P11 Pro, 11.5" RAM 6GB, 128 GB with keyboard and Precision Pen 2, Qualcomm Snapdragon 730G ',
        price: '$800.00 USD',
        pictureUrl: 'https://m.media-amazon.com/images/I/61-vTWn86BS._AC_UL320_.jpg'
    },
    {
        id: '7',
        title: 'Samsung Tab A8',
        description: 'Tablet Samsung Tab A8 32GB 2022 10.5" 3GB RAM',
        price: '$250.00 USD',
        pictureUrl: 'https://ss628.liverpool.com.mx/sm/1114998130.jpg'
    },
    {
        id: '8',
        title: 'Apple IPad Air',
        description: 'Apple IPad Air 10.9" 8GB',
        price: '$750.00 USD',
        pictureUrl: 'https://ss628.liverpool.com.mx/sm/1117485141.jpg'
    },
    {
        id: '9',
        title: 'Huawei MatePad T10',
        description: 'Tablet Huawei Matepad T10 4GB RAM, 64GB 9.7"',
        price: '$250.00 USD',
        pictureUrl: 'https://ss628.liverpool.com.mx/sm/1119534719.jpg'
    },
    {
        id: '10',
        title: 'Ghia Notghia-285',
        description: 'Tablet Ghia Notghia-285 7" 1GB RAM 16GB storage.',
        price: '$75.00 USD',
        pictureUrl: 'https://ss628.liverpool.com.mx/sm/1100987674.jpg'
    },
]

const accesorios = [
    {
        id: '11',
        title: 'Real Tempered Glass Protector',
        description: "Screen protector for your cell phone, 9H grade quality.",
        price: '$2.50 USD',
        pictureUrl: 'https://images.segundamano.mx/api/v1/smmx/images/45/4573074727.jpg?rule=medium'
    },
    {
        id: '12',
        title: 'Iphone 14 Transparent Sillicon Case Protector',
        description: "Case protector for your Iphone 14, customizable sillicon made.",
        price: '$10.00 USD',
        pictureUrl: 'https://m.media-amazon.com/images/I/41b+XUEDKVL._SL500_.jpg'
    },
    {
        id: '13',
        title: 'Xiaomi Redmi Airdots, Mi True Wireless Earbuds Basic',
        description: "Tecnología True Wireless, Bluetooth 5.0, para una conexión super rápida.. Distancia de 10 metros del dispositivo emisor. ",
        price: '$25.00 USD',
        pictureUrl: 'https://m.media-amazon.com/images/I/61vHOrW5NkL._AC_SX355_.jpg'
    },
    {
        id: '14',
        title: 'Bluetooth Keyboard for 9.6" to 10" Tablet',
        description: "Adjustable magnetic case protector, with bluetooth wireless keyboard for tablet.",
        price: '$25.00 USD',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_743689-MLM49007654797_022022-O.jpg'
    },
    {
        id: '15',
        title: 'USB Turbo Charger Type-C 25W for Android Phone',
        description: "25W type-C USB turbo charger for any Android phone.",
        price: '$15.00 USD',
        pictureUrl: 'https://m.media-amazon.com/images/I/51tuDtRvq-L._AC_SY355_.jpg'
    },
]
export const getItems = (category) => {
    let items = [];
    switch(category){
        case "celulares":
            items = celulares;
            break;
        case "tablets":
            items = tablets;
            break;
        case "accesorios":
            items = accesorios;
            break;
        default:
            items = [...items,...celulares, ...tablets, ...accesorios];
            break;
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 2000);
    })
}

export const getItemById = (id) => {
    const items = [...celulares, ...tablets, ...accesorios];
    const result = items.find((item) => {return (id===item.id)})
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 2000);
    });
}
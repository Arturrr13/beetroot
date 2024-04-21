export type Item = {
    userId: number,
    id: number,
    title: string, 
    body: string
}

export interface Coin {
    meta:   Meta;
    values: Value[];
    status: string;
}

export interface Meta {
    symbol:         string;
    interval:       string;
    currency_base:  string;
    currency_quote: string;
    exchange:       string;
    type:           string;
}

export interface Value {
    datetime: Date;
    open:     string;
    high:     string;
    low:      string;
    close:    string;
}

export interface Weather {
    cod:     string;
    message: number;
    cnt:     number;
    list:    List[];
    city:    City;
}

export interface City {
    id:         number;
    name:       string;
    coord:      Coord;
    country:    string;
    population: number;
    timezone:   number;
    sunrise:    number;
    sunset:     number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface List {
    dt:         number;
    main:       Main;
    weather:    WeatherElement[];
    clouds:     Clouds;
    wind:       Wind;
    visibility: number;
    pop:        number;
    sys:        Sys;
    dt_txt:     Date;
}

export interface Clouds {
    all: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf:    number;
}

export interface Sys {
    pod: string;
}

export interface WeatherElement {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}

export interface SeparateData {
    temp: number;
    feels_like: number;
    icon: string;
    main: string;
    description: string;
    dt_txt: string;
    city_name: string;
    wind_speed: number;
}

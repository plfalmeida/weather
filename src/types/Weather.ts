
export interface WeatherInfo {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}

export interface WeatherState {
  cities: string[];
  currentWeather: WeatherInfo;
  // TODO: Add correct type
  hourlyDetail: {
    hourly:   any[];
    timezone: string;
  };
  locale: string;
}

export interface TemperatureInfo {
  current: number;
  max:     number;
  min:     number;
}

export interface DayInfo {
  name:  string;
  value: number;
}

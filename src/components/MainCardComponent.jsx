import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaSyncAlt } from "react-icons/fa";
import { formatDate } from "../helpers/extraFunctions";
import { useDispatch } from "react-redux";
import { Newbox } from "./SmallComponents";
import icon03d from '../assets/03d.png';
import cloudy from '../assets/cloudy.jpg';
import { useMemo } from "react";

// Mapping of weather icons to URLs
const weatherIconMap = {
    '01d': 'http://openweathermap.org/img/wn/01d.png',
    '01n': 'http://openweathermap.org/img/wn/01n.png',
    '02d': 'http://openweathermap.org/img/wn/02d.png',
    '02n': 'http://openweathermap.org/img/wn/02n.png',
    '03d': icon03d,
    '03n': 'http://openweathermap.org/img/wn/03n.png',
    '04d': 'http://openweathermap.org/img/wn/04d.png',
    '04n': 'http://openweathermap.org/img/wn/04n.png',
    '09d': 'http://openweathermap.org/img/wn/09d.png',
    '09n': 'http://openweathermap.org/img/wn/09n.png',
    '10d': 'http://openweathermap.org/img/wn/10d.png',
    '10n': 'http://openweathermap.org/img/wn/10n.png',
    '11d': 'http://openweathermap.org/img/wn/11d.png',
    '11n': 'http://openweathermap.org/img/wn/11n.png',
    '13d': 'http://openweathermap.org/img/wn/13d.png',
    '13n': 'http://openweathermap.org/img/wn/13n.png',
    '50d': 'http://openweathermap.org/img/wn/50d.png',
    '50n': 'http://openweathermap.org/img/wn/50n.png',
};

// Mapping of weather icons to background images
const weatherBackgroundMap = {
    '01d': cloudy,
    '01n': cloudy,
    '02d': cloudy,
    '02n': cloudy,
    '03d': cloudy,
    '03n': cloudy,
    '04d': cloudy,
    '04n': cloudy,
    '09d': cloudy,
    '09n': cloudy,
    '10d': cloudy,
    '10n': cloudy,
    '11d': cloudy,
    '11n': cloudy,
    '13d': cloudy,
    '13n': cloudy,
    '50d': cloudy,
    '50n': cloudy,
};

export const MainCardComponent = ({ data, isRotate, setIsRotate, handleSyncData }) => {
    const dispatch = useDispatch();
    const todayDate = useMemo(() => formatDate(new Date()), []);
    const weatherIcon = data.weather[0].icon;

    const iconUrl = useMemo(() => weatherIconMap[weatherIcon], [weatherIcon]);
    const backgroundImageUrl = useMemo(() => weatherBackgroundMap[weatherIcon], [weatherIcon]);

    return (
        <Newbox>
            <Box
                p="20px"
                textAlign="center"
                backgroundImage={`url(${backgroundImageUrl})`}
                backgroundSize="cover"
                backgroundPosition="center"
                color="black"
            >
                <Flex justify="end">
                    <Icon
                        onClick={() => handleSyncData(dispatch)}
                        onAnimationEnd={() => setIsRotate(false)}
                        className={isRotate ? "iconRotate" : undefined}
                        cursor="pointer"
                        w="23px"
                        h="23px"
                        as={FaSyncAlt}
                    />
                </Flex>
                <Heading fontSize={['14px', '16px']} opacity={0.4}>
                    {todayDate}
                </Heading>
                <Heading>{data.name}</Heading>
                <Flex justify="center" mb="10px" backgroundColor="rgba(0, 0, 0, 0.2)">
                    <img src={iconUrl} alt={data.weather[0].description} style={{ display: 'block', height: "100px" }} />
                </Flex>
                <Heading fontSize={['20px', '35px']}>
                    {Math.round(data.main.temp - 273)}
                    <sup>o</sup>C
                </Heading>
                <Heading fontSize={['18px', '22px']} opacity={0.8}>
                    {data.weather[0].main}
                </Heading>
            </Box>
        </Newbox>
    );
};

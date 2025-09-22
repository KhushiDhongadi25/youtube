import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SUGGEST_API, YOUTUBE_VIDEO_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // API call

    const timer = setTimeout(() => {
      console.log("API Call for ", searchQuery);
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // make an api call after every key press
    // but if the difference between 2 api calls is <200ms
    // decline the api call of suggestions
  }, [searchQuery]);

  /**
   *
   * key - i
   * render the component
   * useEffect();
   * start timer => make api call after 200ms
   *
   * key - ip
   * re render the component
   * useEffect();
   * start new timer again => make api call after 200ms
   *
   * setTimeout() => <200ms -> clearTimeout() => api call cancelled
   * setTimeout() => >200ms => api call made
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGEST_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAVFBMVEX///8AAADy8vLOzs6lpaVhYWHV1dWXl5cpKSn7+/va2tri4uLu7u6/v7+pqakZGRno6OhXV1eLi4s5OTmenp5vb29FRUWAgICysrJNTU0wMDB2dnayYtTAAAABLElEQVR4nO3aXa6DIBBAYUavVbHWP2yr3f8+q2/3cXiZMc35VnBCgAAhBAAAAAAAAAAAAPxz7x9/ph79PaevqwYxNlSdvm+crPNO06gOnD36RGZ14OITuGj7Wp8+kVYb2Pj0NdrA68/BcfPo2zJ2ws5hmSwZ++AxDftUm0q9egICAAAAoUhrZWpNRU5ftD/xi0R9X7d7BO76S8nHo0/ko+27/MX98k8f4enT99T2hdonsFYHFqtH35qxExYv83XSvLJ26jaWxiJPHwAAAFfSFsYyj4PlbPvyUVVzmdP3tj7wn94Z42f+KeU06MfQ5VJ3XOu0fa3LAB5D+DtPHy5fFkQ2bZ/PIs5axi4PhOrnwVOa9sbUPqWcvhDGeDMV9V/fAAAAAAAAAAAAgJ/wBXioI6lt5v4FAAAAAElFTkSuQmCC"
        />
        <a href="/">
          <img
            className="h-8 ml-4 "
            alt="logo"
            src="https://www.nicepng.com/png/detail/940-9401665_television-show-icons-youtube-subscribe-computer-video-logo.png"
          />
        </a>
      </div>
      <div className="h-9 col-span-10">
        <div>
          <input
            id="search"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            <img
              className="h-5 pb-1"
              alt="search-logo"
              src=" https://cdn-icons-png.flaticon.com/512/622/622669.png"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[27rem] shadow-lg rounded-lg border border-gray-400">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-around">
        <img
          alt="mic"
          src="https://img.favpng.com/8/24/18/microphone-icon-png-favpng-kcPPJr914R2LjGCJukTmthVGF.jpg"
          className="h-8 mr-4 rounded-full"
        />
        <img
          alt="notif"
          src="https://icons.veryicon.com/png/o/object/material-design-icons/notifications-1.png"
          className="h-8 mr-4"
        />
        <img
          className="h-8"
          alt="user"
          src="https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg"
        />
      </div>
    </div>
  );
};

export default Head;

// debouncing

// typing slow = diff between strokes is high= 200ms
// typing fast = diff between strokes is low= 30ms

// debouncing with 200ms
//  -if diff between 2 key strokes is <200ms, DECLINE API CALL
//  -if diff between 2 key strokes is >200ms, MAKE API CALL

// in console: fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=iphone")
// and get the data from network tab in response (search suggestions for iphone)

// makes an api call for each and every stroke of key which is bad for performance in search bar.
// debouncing is used to avoid this issue
// debouncing: making an api call after user has stopped typing for a specific time period.
// useEffect(() => {
//   const timer = setTimeout(() => {
//     console.log("api call for ", search);
//   }, 500);
//   return () => {
//     clearTimeout(timer);
//   };
// }, [search]);
// useSelector: used to read the value from the store
// useDispatch: used to dispatch the action to the store
// useSelector and useDispatch are hooks provided by react-redux to interact with the redux store in functional components.
//

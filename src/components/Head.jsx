import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 "
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAVFBMVEX///8AAADy8vLOzs6lpaVhYWHV1dWXl5cpKSn7+/va2tri4uLu7u6/v7+pqakZGRno6OhXV1eLi4s5OTmenp5vb29FRUWAgICysrJNTU0wMDB2dnayYtTAAAABLElEQVR4nO3aXa6DIBBAYUavVbHWP2yr3f8+q2/3cXiZMc35VnBCgAAhBAAAAAAAAAAAAPxz7x9/ph79PaevqwYxNlSdvm+crPNO06gOnD36RGZ14OITuGj7Wp8+kVYb2Pj0NdrA68/BcfPo2zJ2ws5hmSwZ++AxDftUm0q9egICAAAAoUhrZWpNRU5ftD/xi0R9X7d7BO76S8nHo0/ko+27/MX98k8f4enT99T2hdonsFYHFqtH35qxExYv83XSvLJ26jaWxiJPHwAAAFfSFsYyj4PlbPvyUVVzmdP3tj7wn94Z42f+KeU06MfQ5VJ3XOu0fa3LAB5D+DtPHy5fFkQ2bZ/PIs5axi4PhOrnwVOa9sbUPqWcvhDGeDMV9V/fAAAAAAAAAAAAgJ/wBXioI6lt5v4FAAAAAElFTkSuQmCC"
        />
        <img
          className="h-8 ml-4 "
          alt="logo"
          src="https://www.nicepng.com/png/detail/940-9401665_television-show-icons-youtube-subscribe-computer-video-logo.png"
        />
      </div>
      <div className="h-9 col-span-10 flex justify-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          <img
            className="h-5 pb-1"
            alt="search-logo"
            src=" https://cdn-icons-png.flaticon.com/512/622/622669.png"
          />
        </button>
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

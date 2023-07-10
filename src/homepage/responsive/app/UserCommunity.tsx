import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Ellipse1008 from "../../../assets/community/Ellipse1008.png";
import Ellipse10010 from "../../../assets/community/Ellipse10010.png";
import Ellipse10011 from "../../../assets/community/Ellipse10011.png";
import Ellipse1009 from "../../../assets/community/Ellipse1009.png";
import { apiURL, accessToken } from "../../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../../../redux/slices/Auth";
import { setPollCommunityId } from "../../../redux/slices/CreatePoll";

interface Community {
  id: number;
  name: string;
  description: string;
}

interface FavoriteProps {
  searchQuery: string;
}

function UserCommunity({ searchQuery }: FavoriteProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [activeCommunity, setActiveCommunity] = useState<number | null>(null);
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("accessToken");

  const { data, isLoading, isError, error } = useQuery("communityData", () =>
    fetch(`${apiURL}/community_members/user`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message}</div>;
  }

  const favorites = [
    { image: Ellipse1008, name: "Party" },
    { image: Ellipse10010, name: "Game Ball Weekend" },
    { image: Ellipse10011, name: "Tv Phum C Ey" },
    { image: Ellipse1009, name: "Saturday Phirk" },
  ];

  const filteredFavorites = favorites.filter((favorite) =>
    favorite.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCommunityClick = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
    community: Community
  ): void => {
    setActiveCommunity(community.id);
    dispatch(setPollCommunityId(`${community.id}`));
    localStorage.setItem("communityId", `${community.id}`);
    console.log("Clicked", community.id);
    setIsClicked(true);
  };

  console.log("data", data);

  if (data.length === 0) {
    return (
      <div className="profile flex flex-col gap-y-3 pb-4 ml-5 mr-1 overflow-hidden hover:overflow-auto community-scrolling">
        You have not join any community yet.
      </div>
    );
  }

  return (
    <div className="profile flex flex-col gap-y-1 pb-4 ml-5 mr-1 overflow-hidden hover:overflow-auto community-scrolling">
      {data?.community.map((community: any, index: any) => {
        return (
          <div
            className={`h-10 w-full pl-4  hover:bg-blue-50 hover:delay-100   ${
              activeCommunity === community.id &&
              "bg-blue-100 border-l-2 border-blue-400  transform -skew-x-0"
            }`}
            key={community.id}
            onClick={(e) => handleCommunityClick(e, community)}
          >
            <div className={`flex flex-row  items-center cursor-pointer `}>
              <img
                src={Ellipse1008}
                alt={`Community ${community.id}`}
                className="w-8 h-8 rounded-full mr-2 border-[1px] mt-1 border-blue-500"
              />
              <h1>{community.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserCommunity;

import { useState } from "react";
import Area from "../components/Area";
import { Badge, Icon, Tab, TabGroup, TabList } from "@tremor/react";
import { RiSortAlphabetAsc, RiSortAlphabetDesc } from "@remixicon/react";

const pageConfig = {
  title: "Home Control",
  areas: [
    {
      name: "Office",
      toggleIds: ["switch.office_lamp_switch_2"],
    },
    {
      name: "Living Room",
      toggleIds: ["switch.sonoff_s40lite_switch"],
    },
    {
      name: "Outdoor Lights",
      toggleIds: [
        "switch.third_reality_inc_3rsp02028bz_switch",
        "switch.mesh_switch_2",
        "switch.perimeter_string_lights_switch_2",
      ],
    },
    {
      name: "Garage",
      toggleIds: ["light.garage_door_light"],
      openingIds: ["binary_sensor.third_reality_inc_3rdts01056z_opening"],
    },
    {
      name: "Sprinkler System",
      toggleIds: [
        "switch.back_yard_grass",
        "switch.back_yard_planters",
        "switch.front_yard_grass",
        "switch.front_yard_bushes",
        "switch.driveway_planter",
      ],
    },
  ],
};

export default function HomeControl() {
  const [sortType, setSortType] = useState("A-Z");

  const scrollToArea = (area: string) => {
    const element = document.getElementById(area);
    if (element) {
      element.scrollIntoView();
    }
  };

  const aToZ = (areaA: any, areaB: any) => areaA.name.localeCompare(areaB.name);
  const zToA = (areaA: any, areaB: any) => areaB.name.localeCompare(areaA.name);

  const sortTypes = [
    { name: "A-Z", sort: aToZ, icon: RiSortAlphabetAsc },
    { name: "Z-A", sort: zToA, icon: RiSortAlphabetDesc },
  ];

  const handleSortTypeChange = (sortType: string) => {
    setSortType(sortType);
  };

  return (
    <div className="w-100">
      <h1 className="text-4xl text-tremor-default-strong dark:text-dark-tremor-content-strong ml-4">
        {pageConfig.title}
      </h1>
      <div className="mx-4">
        <div className="flex flex-row gap-4 flex-wrap w-100 my-4">
          <TabGroup defaultIndex={0}>
            <TabList variant="solid">
              {sortTypes.map((sortType) => (
                <Tab
                  key={sortType.name}
                  onClick={() => handleSortTypeChange(sortType.name)}
                >
                  <Icon icon={sortType.icon} color="yellow" />
                </Tab>
              ))}
            </TabList>
          </TabGroup>
        </div>
        <div className="flex justify-start flex-wrap gap-3 m-4 md:hidden">
          {pageConfig.areas
            .sort(sortTypes.find((sort) => sort.name === sortType)?.sort)
            .map((area) => (
              <Badge
                color={"white"}
                key={"badge_" + area.name}
                size={"lg"}
                onClick={() => scrollToArea(area.name)}
              >
                {area.name}
              </Badge>
            ))}
        </div>
      </div>
      <div className="grid grid-flow-row gap-8 mt-10 md:flex md:flex-wrap md:mx-10">
        {pageConfig.areas.map((area) => (
          <Area key={"area_" + area.name} {...area} />
        ))}
      </div>{" "}
    </div>
  );
}

import Area from "../components/Area";
import { Badge } from "@tremor/react";

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
      ],
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
    {
      name: "Garage",
      toggleIds: ["light.garage_door_light"],
      openingIds: ["binary_sensor.third_reality_inc_3rdts01056z_opening"],
    },
  ],
};

export default function HomeControl() {
  const scrollToArea = (area: string) => {
    const element = document.getElementById(area);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <>
      <h1 className="text-4xl text-tremor-default-strong dark:text-dark-tremor-content-strong ml-4">
        {pageConfig.title}
      </h1>
      <div className="flex justify-start flex-wrap gap-3 m-4">
        {pageConfig.areas.map((area) => (
          <Badge size={"lg"} onClick={() => scrollToArea(area.name)}>
            {area.name}
          </Badge>
        ))}
      </div>
      <div className="grid grid-flow-row gap-8 mt-10">
        <Area name="Office" toggleIds={["switch.office_lamp_switch_2"]} />
        <Area name="Living Room" toggleIds={["switch.sonoff_s40lite_switch"]} />
        <Area
          name="Outdoor Lights"
          toggleIds={[
            "switch.third_reality_inc_3rsp02028bz_switch",
            "switch.mesh_switch_2",
          ]}
        />
        <Area
          name="Sprinkler System"
          toggleIds={[
            "switch.back_yard_grass",
            "switch.back_yard_planters",
            "switch.front_yard_grass",
            "switch.front_yard_bushes",
            "switch.driveway_planter",
          ]}
        />
        <Area
          name="Garage"
          toggleIds={["light.garage_door_light"]}
          openingIds={["binary_sensor.third_reality_inc_3rdts01056z_opening"]}
        />
      </div>{" "}
    </>
  );
}

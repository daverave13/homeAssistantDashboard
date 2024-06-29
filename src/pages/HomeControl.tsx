import Area from "../components/Area";

export default function HomeControl() {
  return (
    <>
      <h1 className="text-5xl text-tremor-default-strong dark:text-dark-tremor-content-strong">
        Home Control
      </h1>
      <div className="grid grid-flow-row gap-8 mt-10 mx-10">
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
          toggleIds={[
            "light.garage_door_light",
            "binary_sensor.third_reality_inc_3rdts01056z_opening",
          ]}
          openingIds={["binary_sensor.third_reality_inc_3rdts01056z_opening"]}
        />
      </div>{" "}
    </>
  );
}

import Area from "../components/Area";

export default function HomeControl() {
  return (
    <>
      <h1 className="text-5xl text-tremor-default-strong dark:text-dark-tremor-content-strong">
        Home Control
      </h1>
      <div className="grid grid-flow-row gap-8 mt-10 mx-10">
        <Area name="Office" entityIds={["switch.office_lamp_switch_2"]} />
        <Area name="Living Room" entityIds={["switch.sonoff_s40lite_switch"]} />
        <Area
          name="Patio"
          entityIds={["switch.third_reality_inc_3rsp02028bz_switch"]}
        /><Area
        name="Sprinkler System"
        entityIds={["switch.back_yard_grass", "switch.back_yard_planters", "switch.front_yard_grass", "switch.front_yard_bushes", "switch.driveway_planter"]}
      />
      </div>{" "}
    </>
  );
}

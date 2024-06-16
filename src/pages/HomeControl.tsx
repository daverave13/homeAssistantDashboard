import Area from "../components/Area";

export default function HomeControl() {
  return (
    <>
      <h1 className="text-5xl text-tremor-default-strong dark:text-dark-tremor-content-strong">
        Home Control
      </h1>
      <div className="flex flex-wrap justify-center my-20">
        <Area name="Office" entityIds={["switch.office_lamp_switch_2"]} />
        <Area name="LivingRoom" entityIds={["switch.sonoff_s40lite_switch"]} />
        <Area
          name="Patio"
          entityIds={["switch.third_reality_inc_3rsp02028bz_switch"]}
        />
      </div>{" "}
    </>
  );
}

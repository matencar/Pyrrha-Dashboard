import React, { useContext } from "react";
import FirefighterGauge from "../FirefighterGauge";
import FirefighterChartHolder from "../FirefighterChartHolder";
import Context from "../../context/app";
import Utils from "../../utils/Utils";

function FirefighterDetailsGaugeSet({
  chart,
  setChart,
  type,
  setType,
  increment,
  setIncrement,
  firefighterId,
  firefighterFirst,
  firefighterLast,
  firefighterCode,
  firefighterEmail,
  deviceId,
  temperature,
  humidity,
  carbonMonoxide,
  nitrogenDioxide,
  timestampMins,
  deviceTimestamp,
  carbonMonoxideTwa10min,
  carbonMonoxideTwa30min,
  carbonMonoxideTwa60min,
  carbonMonoxideTwa240min,
  carbonMonoxideTwa480min,
  carbonMonoxideGauge10min,
  carbonMonoxideGauge30min,
  carbonMonoxideGauge60min,
  carbonMonoxideGauge240min,
  carbonMonoxideGauge480min,
  nitrogenDioxideTwa10min,
  nitrogenDioxideTwa30min,
  nitrogenDioxideTwa60min,
  nitrogenDioxideTwa240min,
  nitrogenDioxideTwa480min,
  nitrogenDioxideGauge10min,
  nitrogenDioxideGauge30min,
  nitrogenDioxideGauge60min,
  nitrogenDioxideGauge240min,
  nitrogenDioxideGauge480min,
}) {
  console.log("FirefighterDetailsGaugeSet", increment);

  const { t } = useContext(Context);

  return (
    <>
      <div className="bx--row">
        <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
          <div className="bx--grid bx--grid--full-width dashboard-content">
            <div className="bx--row dashboard-tile">
              <div className="bx--col-md-8 label-firefighter">
                {firefighterCode} - {firefighterFirst} {firefighterLast}
                <br />
                {t("content.details.now")}
              </div>
            </div>
            <div className="bx--row dashboard-tile">
              <div className="bx--col bx--col-md-2">
                <div>
                  <FirefighterGauge
                    firefighterId={firefighterId}
                    type={"CO"}
                    value={carbonMonoxide}
                    unit={"ppm"}
                    increment={"now"}
                    gauge={Utils.getWhole("CO", carbonMonoxide)}
                  />
                </div>
                <div className="label-legend">
                  <a
                    href="javascript:void(0)"
                    className="bx--link label-legend-link"
                    onClick={() => {
                      console.log("Setting type to CO");
                      setType("CO");
                    }}
                  >
                    CO
                  </a>
                </div>
              </div>
              <div className="bx--col bx--col-md-2">
                <div>
                  <FirefighterGauge
                    firefighterId={firefighterId}
                    type={"NO2"}
                    value={nitrogenDioxide}
                    unit={"ppm"}
                    increment={"now"}
                    gauge={Utils.getWhole("NO2", nitrogenDioxide)}
                  />
                </div>
                <div className="label-legend">
                  <a
                    href="javascript:void(0)"
                    className="bx--link label-legend-link"
                    onClick={() => {
                      console.log("Setting type to CO");
                      setType("NO2");
                    }}
                  >
                    NO<sub>2</sub>
                  </a>
                </div>
              </div>
              <div className="bx--col bx--col-md-2">
                <div>
                  <FirefighterGauge
                    firefighterId={firefighterId}
                    type={"Tmp"}
                    value={temperature}
                    unit={"°C"}
                    increment={"now"}
                    gauge={Utils.getWhole("Tmp", temperature)}
                  />
                </div>
                <div className="label-legend">
                  {t("content.common.temperature")}
                </div>
              </div>
              <div className="bx--col bx--col-md-2">
                <div>
                  <FirefighterGauge
                    firefighterId={firefighterId}
                    type={"Hum"}
                    value={humidity}
                    unit={"%"}
                    increment={"now"}
                    gauge={Utils.getWhole("Hum", humidity)}
                  />
                </div>
                <div className="label-legend">
                  {t("content.common.humidity")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {(increment === "10min" || increment === "all") && (
          <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
            <div className="bx--grid bx--grid--full-width dashboard-content">
              <div className="bx--row dashboard-tile">
                <div className="bx--col-md-8 label-firefighter">
                  {firefighterCode} - {firefighterFirst} {firefighterLast}
                  <br />
                  {t("content.details.10min")}
                </div>
              </div>
              <div className="bx--row dashboard-tile">
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"CO"}
                      value={carbonMonoxideTwa10min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={carbonMonoxideGauge10min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log(
                          "Setting type to CO and increment to 10min"
                        );
                        setType("CO");
                        setIncrement("10min");
                      }}
                    >
                      CO
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"NO2"}
                      value={nitrogenDioxideTwa10min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={nitrogenDioxideGauge10min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log(
                          "Setting type to CO and increment to 10min"
                        );
                        setType("NO2");
                        setIncrement("10min");
                      }}
                    >
                      NO<sub>2</sub>
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Tmp"}
                      value={"-"}
                      increment={increment}
                      unit={"°C"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.temperature")}
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Hum"}
                      value={"-"}
                      increment={increment}
                      unit={"%"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.humidity")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(increment === "30min" || increment === "all") && (
          <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
            <div className="bx--grid bx--grid--full-width dashboard-content">
              <div className="bx--row dashboard-tile">
                <div className="bx--col-md-8 label-firefighter">
                  {firefighterCode} - {firefighterFirst} {firefighterLast}
                  <br />
                  {t("content.details.30min")}
                </div>
              </div>
              <div className="bx--row dashboard-tile">
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"CO"}
                      value={carbonMonoxideTwa30min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={carbonMonoxideGauge30min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log(
                          "Setting type to CO and increment to 30min"
                        );
                        setType("CO");
                        setIncrement("30min");
                      }}
                    >
                      CO
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"NO2"}
                      value={nitrogenDioxideTwa30min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={nitrogenDioxideGauge30min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log(
                          "Setting type to CO and increment to 30min"
                        );
                        setType("NO2");
                        setIncrement("30min");
                      }}
                    >
                      NO<sub>2</sub>
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Tmp"}
                      value={"-"}
                      increment={increment}
                      unit={"°C"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.temperature")}
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Hum"}
                      value={"-"}
                      increment={increment}
                      unit={"%"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.humidity")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(increment === "1hr" || increment === "all") && (
          <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
            <div className="bx--grid bx--grid--full-width dashboard-content">
              <div className="bx--row dashboard-tile">
                <div className="bx--col-md-8 label-firefighter">
                  {firefighterCode} - {firefighterFirst} {firefighterLast}
                  <br />
                  {t("content.details.1hr")}
                </div>
              </div>
              <div className="bx--row dashboard-tile">
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"CO"}
                      value={carbonMonoxideTwa60min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={carbonMonoxideGauge60min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log("Setting type to CO and increment to 1hr");
                        setType("CO");
                        setIncrement("1hr");
                      }}
                    >
                      CO
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"NO2"}
                      value={nitrogenDioxideTwa60min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={nitrogenDioxideGauge60min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log("Setting type to CO and increment to 1hr");
                        setType("NO2");
                        setIncrement("1hr");
                      }}
                    >
                      NO<sub>2</sub>
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Tmp"}
                      value={"-"}
                      increment={increment}
                      unit={"°C"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.temperature")}
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Hum"}
                      value={"-"}
                      increment={increment}
                      unit={"%"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.humidity")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(increment === "4hr" || increment === "all") && (
          <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
            <div className="bx--grid bx--grid--full-width dashboard-content">
              <div className="bx--row dashboard-tile">
                <div className="bx--col-md-8 label-firefighter">
                  {firefighterCode} - {firefighterFirst} {firefighterLast}
                  <br />
                  {t("content.details.4hr")}
                </div>
              </div>
              <div className="bx--row dashboard-tile">
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"CO"}
                      value={carbonMonoxideTwa240min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={carbonMonoxideGauge240min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log("Setting type to CO and increment to 4hr");
                        setType("CO");
                        setIncrement("4hr");
                      }}
                    >
                      CO
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"NO2"}
                      value={nitrogenDioxideTwa240min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={nitrogenDioxideGauge240min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log("Setting type to CO and increment to 4hr");
                        setType("NO2");
                        setIncrement("4hr");
                      }}
                    >
                      NO<sub>2</sub>
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Tmp"}
                      value={"-"}
                      increment={increment}
                      unit={"°C"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.temperature")}
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Hum"}
                      value={"-"}
                      increment={increment}
                      unit={"%"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.humidity")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(increment === "8hr" || increment === "all") && (
          <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
            <div className="bx--grid bx--grid--full-width dashboard-content">
              <div className="bx--row dashboard-tile">
                <div className="bx--col-md-8 label-firefighter">
                  {firefighterCode} - {firefighterFirst} {firefighterLast}
                  <br />
                  {t("content.details.8hr")}
                </div>
              </div>
              <div className="bx--row dashboard-tile">
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"CO"}
                      value={carbonMonoxideTwa480min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={carbonMonoxideGauge480min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log("Setting type to CO and increment to 8hr");
                        setType("CO");
                        setIncrement("8hr");
                      }}
                    >
                      CO
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"NO2"}
                      value={nitrogenDioxideTwa480min}
                      increment={increment}
                      unit={"ppm"}
                      gauge={nitrogenDioxideGauge480min}
                    />
                  </div>
                  <div className="label-legend">
                    <a
                      href="javascript:void(0)"
                      className="bx--link label-legend-link"
                      onClick={() => {
                        console.log("Setting type to CO and increment to 8hr");
                        setType("NO2");
                        setIncrement("8hr");
                      }}
                    >
                      NO<sub>2</sub>
                    </a>
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Tmp"}
                      value={"-"}
                      increment={increment}
                      unit={"°C"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.temperature")}
                  </div>
                </div>
                <div className="bx--col bx--col-md-2">
                  <div>
                    <FirefighterGauge
                      firefighterId={firefighterId}
                      type={"Hum"}
                      value={"-"}
                      increment={increment}
                      unit={"%"}
                    />
                  </div>
                  <div className="label-legend">
                    {t("content.common.humidity")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-1">
          <FirefighterChartHolder
            firefighterId={firefighterId}
            type={!type ? "CO" : type}
            data={chart}
            unit={"ppm"}
            gauge={""}
            increment={
              increment === "all" ? t("content.details.10min") : increment
            }
          />
        </div>
      </div>
    </>
  );
}

export default FirefighterDetailsGaugeSet;

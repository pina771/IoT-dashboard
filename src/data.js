// TODO: Ovo će trebati pretvoriti u format kao dummyData
export const temp = {
  entity_id: "sensor.average_temperature",
  state: "24.37",
  attributes: {
    unit_of_measurement: "°C",
    friendly_name: "Average temperature",
  },
  last_changed: "2022-05-26T11:59:27.079499+00:00",
  last_updated: "2022-05-26T11:59:27.079499+00:00",
  context: {
    id: "0181003c65673cdad03916837ed1e6ac",
    parent_id: null,
    user_id: null,
  },
};

export async function generateData() {
  const NUM_POINTS = 300;
  const start = Date.parse("2022-05-25T11:15:33.97");

  const pointData = [];
  const max = 45;
  const min = 35;

  for (let i = 0; i < NUM_POINTS; ++i) {
    pointData.push({
      x: start + i * 30000,
      y: Math.random() * (max - min) + min,
    });
  }
  return pointData;
}
export const dummyData2 = [
  { x: "2022-05-19T00:04", y: 46.02 },
  { x: "2022-05-20T00:04", y: 11.88 },
  { x: "2022-05-21T00:13", y: 1.19 },
  { x: "2022-05-22T00:14", y: 43.41 },
  { x: "2022-05-23T00:15", y: 11.43 },
  { x: "2022-05-24T00:23", y: 48.77 },
];

export const mockTemp24Hrs = [
  [
    {
      entity_id: "sensor.average_temperature",
      state: "25.41",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-05-31T10:15:09.161818+00:00",
      last_updated: "2022-05-31T10:15:09.161818+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "unknown",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:04:08.589186+00:00",
      last_updated: "2022-06-01T08:04:08.589186+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "0.0",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:04:17.340974+00:00",
      last_updated: "2022-06-01T08:04:17.340974+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.77",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:04:31.749006+00:00",
      last_updated: "2022-06-01T08:04:31.749006+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.08",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:09:24.605346+00:00",
      last_updated: "2022-06-01T08:09:24.605346+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "11.8",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:09:44.873115+00:00",
      last_updated: "2022-06-01T08:09:44.873115+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "11.79",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:10:15.204379+00:00",
      last_updated: "2022-06-01T08:10:15.204379+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "11.82",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:10:25.458870+00:00",
      last_updated: "2022-06-01T08:10:25.458870+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.08",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:23:08.007017+00:00",
      last_updated: "2022-06-01T08:23:08.007017+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.38",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:23:38.305164+00:00",
      last_updated: "2022-06-01T08:23:38.305164+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.65",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:24:18.662743+00:00",
      last_updated: "2022-06-01T08:24:18.662743+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.91",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:25:39.099547+00:00",
      last_updated: "2022-06-01T08:25:39.099547+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.16",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:27:09.574511+00:00",
      last_updated: "2022-06-01T08:27:09.574511+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.42",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:28:50.081010+00:00",
      last_updated: "2022-06-01T08:28:50.081010+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.72",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:33:00.963242+00:00",
      last_updated: "2022-06-01T08:33:00.963242+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.97",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:46:43.343246+00:00",
      last_updated: "2022-06-01T08:46:43.343246+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "14.24",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:50:24.111897+00:00",
      last_updated: "2022-06-01T08:50:24.111897+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.96",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:56:25.246934+00:00",
      last_updated: "2022-06-01T08:56:25.246934+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.69",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T08:57:25.614418+00:00",
      last_updated: "2022-06-01T08:57:25.614418+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.82",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T09:00:26.295593+00:00",
      last_updated: "2022-06-01T09:00:26.295593+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.38",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T09:01:17.134078+00:00",
      last_updated: "2022-06-01T09:01:17.134078+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "13.13",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T09:02:07.478614+00:00",
      last_updated: "2022-06-01T09:02:07.478614+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.86",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T09:04:08.044998+00:00",
      last_updated: "2022-06-01T09:04:08.044998+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.61",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T09:16:20.243424+00:00",
      last_updated: "2022-06-01T09:16:20.243424+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.34",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T09:35:03.458934+00:00",
      last_updated: "2022-06-01T09:35:03.458934+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.23",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T09:55:06.918180+00:00",
      last_updated: "2022-06-01T09:55:06.918180+00:00",
    },
    {
      entity_id: "sensor.average_temperature",
      state: "12.25",
      attributes: {
        unit_of_measurement: "°C",
        friendly_name: "Average temperature",
      },
      last_changed: "2022-06-01T10:05:39.363614+00:00",
      last_updated: "2022-06-01T10:05:39.363614+00:00",
    },
  ],
];

import React from "react";

import BDK33 from "./components/Pages/TemplateInstances/33-BDK/33-BDK";
import BDK34 from "./components/Pages/TemplateInstances/34-BDK/34-BDK";
import BDK35 from "./components/Pages/TemplateInstances/35-BDK/35-BDK";
import AktionsTagGerechteBildung from "./components/Pages/TemplateInstances/AktionsTagGerechteBildung/AktionsTagGerechteBildung";
import Arbeitsprogramm2020_21 from "./components/Pages/TemplateInstances/Arbeitsprogramm2020/Arbeitsprogramm2020_21";
import BezirksvorstandssitzungenOnline from "./components/Pages/TemplateInstances/BezirksvorstandssitzungenOnline/OnlineSitzungenBSV";
import GlobalerKlimaStreik19_03_21 from "./components/Pages/TemplateInstances/GlobalerKlimaStreik19_03_21/GlobalerKlimaStreik";
import DSSQ_06_12_20 from "./components/Pages/TemplateInstances/KeinMeterFürQuerdenken/DSSQ06_12_20";
import RedHandDay2021 from "./components/Pages/TemplateInstances/RedHandDay_2021/RedHandDay";
import ResolutionAbschiebungen from "./components/Pages/TemplateInstances/ResolutionAbschiebungen/ResolutionAbschiebungen";
import ResolutionLGBTQ from "./components/Pages/TemplateInstances/ResolutionLGBTQ/ResolutionLGBTQ";
import ResolutionWirtschaftAlsFach from "./components/Pages/TemplateInstances/ResolutionWirtschaftAlsFach/ResolutionWirtschaftAlsFach";
import Satzung from "./components/Pages/TemplateInstances/Satzung/Satzung";
import WahlUndGeschaeftsOrdnung from "./components/Pages/TemplateInstances/WahlUndGeschaeftsordnung/WahlUndGeschaeftsordnung";
import ZeroCovid from "./components/Pages/TemplateInstances/Zero-Covid/ZeroCovid";
import LetzterSchultag2022 from "./components/Pages/TemplateInstances/LetzterSchultag2022/LetzterSchultag2022";

/// immer in der richtigen Reihenfolge einfügen
/// Format: ReactComponentName, path, (title)

const allPosts = [
  [LetzterSchultag2022, "/letzter-schultag-2022"],
  [BDK35, "/35-bdk"],
  [BDK34, "/34-bdk"],
  [AktionsTagGerechteBildung, "/aktionstag-gerechte-bildung"],
  [ZeroCovid, "/rede-zerocovid"],
  [GlobalerKlimaStreik19_03_21, "/rede-globaler-klimastreik-19-03-21"],
  [RedHandDay2021, "/rede-red-hand-day"],
  [DSSQ_06_12_20, "/rede-dssq"],
  [BezirksvorstandssitzungenOnline, "/bezirksvorstandssitzungen-online"],
  [Arbeitsprogramm2020_21, "/arbeitsprogramm-2020-21"],
  [BDK33, "/einladung-32-bdk-6-6-2020"],
  [ResolutionWirtschaftAlsFach, "/wirtschaft-als-fach"],
  [ResolutionAbschiebungen, "/resolution-abschiebungen"],
  [ResolutionLGBTQ, "/lgbtq"],
  [WahlUndGeschaeftsOrdnung, "/wahl-und-geschaeftsordnung"],
  [Satzung, "/satzung"]
];
const allResolutions = [
  [ResolutionWirtschaftAlsFach, "/wirtschaft-als-fach", "Resolution Wirtschaft als Fach"],
  [ResolutionAbschiebungen, "/resolution-abschiebungen", "Resolution Abschiebungen"],
  [ResolutionLGBTQ, "/lgbtq", "Resolution LGBTQ+"],
];
const allSpeeches = [
  [ZeroCovid, "/rede-zerocovid"],
  [GlobalerKlimaStreik19_03_21, "/rede-globaler-klimastreik-19-03-21", "Rede zum globalen Klimastreik"],
  [RedHandDay2021, "/rede-red-hand-day", "Rede zum Red Hand Day"],
  [DSSQ_06_12_20, "/rede-dssq", "Rede zur 'Kein Meter für Querdenken!' - Kundgebung"]
];
const allDocuments = [
  [Arbeitsprogramm2020_21, "/arbeitsprogramm-2020-21", "Arbeitsprogramm 2020/21"],
  [Satzung, "/satzung", "Satzung"],
  [WahlUndGeschaeftsOrdnung, "/wahl-und-geschaeftsordnung", "Wahl- und Geschäftsordnung"]
];

const PostContext = React.createContext({
  posts: allPosts,
  resolutions: allResolutions,
  speeches: allSpeeches,
  documents: allDocuments
});

export default PostContext;
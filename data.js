// Extracted search data from the supplied registration register.
const jobCardData = [
  {
    "name": "Name of Applicant",
    "father_husband": "Father/Husband Name",
    "gender": "Gender",
    "age": "Age",
    "job_card": "Job card number",
    "issue_date": "Job-card issue date",
    "remarks": "Reasons, if Job Card NOT issued & any other remarks"
  },
  {
    "name": "Remomo",
    "father_husband": "Lt.Nthio",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/1",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Longshithung*",
    "father_husband": "remomo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/2",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Ponthungo",
    "father_husband": "Lt.Nthio",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/3",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Sangmomo",
    "father_husband": "Lt.Tsuchio",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/4",
    "issue_date": "23/8/2007",
    "remarks": ""
  },
  {
    "name": "benri",
    "father_husband": "Sangmomo",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/5",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhonyami",
    "father_husband": "N.Lotha",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/6",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nyamo",
    "father_husband": "Lt.Y.Lotha",
    "gender": "M",
    "age": "64",
    "job_card": "NL-04-003-003-003/7-A",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Vanjamo",
    "father_husband": "Nyamo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/8",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Wosemo",
    "father_husband": "Lt.Amomo",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/9",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khothungo*",
    "father_husband": "Phyokhamo",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/10",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Njamo",
    "father_husband": "Lt.nkhanyimo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/11",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lidemo*",
    "father_husband": "Lt.Nkhanyimo",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/12",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Johncho",
    "father_husband": "",
    "gender": "F",
    "age": "78",
    "job_card": "NL-04-003-003-003/13",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phyosali",
    "father_husband": "Lt.Nchumomo",
    "gender": "F",
    "age": "75",
    "job_card": "NL-04-003-003-003/14",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yama",
    "father_husband": "Lt. Nkhao",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/15",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yibomo",
    "father_husband": "Lt.Pankao",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/16",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khyingo",
    "father_husband": "Lt.Nyinmsao",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/17",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phyokhamo*",
    "father_husband": "Lt.N.Ddyuo",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/18",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nghao*",
    "father_husband": "Phyokhamo",
    "gender": "M",
    "age": "64",
    "job_card": "NL-04-003-003-003/19",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Amos",
    "father_husband": "Phachio",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/20",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "yanthungo",
    "father_husband": "lt.Nthio",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/21",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "yaktamo*",
    "father_husband": "Lt.Zaremo",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/22",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nzamo*",
    "father_husband": "Lt.lanben",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/23",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Kithungo",
    "father_husband": "Lt.Lanben",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/24",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "lozano*",
    "father_husband": "Lt.nthungo",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/25",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Yitsov",
    "father_husband": "Lt.nyimsao",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/26",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yitsow Kithan",
    "father_husband": "",
    "gender": "M",
    "age": "78",
    "job_card": "NL-04-003-003-003/26",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Abemo",
    "father_husband": "yama",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/27",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Jenirao",
    "father_husband": "Lt.yankio",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/28",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ntsomo*",
    "father_husband": "Lt.T.Lotha",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/29",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Rishemo*",
    "father_husband": "",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/30",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Yanbanlo*",
    "father_husband": "lt.C.Lotha",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/31",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Mhonbemo*",
    "father_husband": "lt.thungjamo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/32",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "yihamo",
    "father_husband": "Lt.thungjamo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/33",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Manglo",
    "father_husband": "Lt.Wonyimo",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/34",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yiasali",
    "father_husband": "Lt.thungjamo",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/35",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhao*",
    "father_husband": "Lt.Chijamo",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/36-A",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Renben",
    "father_husband": "Lt.Litamo",
    "gender": "M",
    "age": "63",
    "job_card": "NL-04-003-003-003/37",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Evothung",
    "father_husband": "Lt.Jophao",
    "gender": "M",
    "age": "72",
    "job_card": "NL-04-003-003-003/38",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nkhalumi*",
    "father_husband": "",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/38",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Nrao*",
    "father_husband": "Lt.M.lotha",
    "gender": "F",
    "age": "68",
    "job_card": "NL-04-003-003-003/39",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Tsenyimo",
    "father_husband": "Lt.L.lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/40",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Pungnov*",
    "father_husband": "",
    "gender": "F",
    "age": "56",
    "job_card": "NL-04-003-003-003/40",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Nkomo",
    "father_husband": "Lt.Wojamo",
    "gender": "M",
    "age": "69",
    "job_card": "NL-04-003-003-003/41",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nyanbeni*",
    "father_husband": "",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/41",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Shovung",
    "father_husband": "Limomo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/42",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Limomo*",
    "father_husband": "Lt.S.Lotha",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/43",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Pyingi",
    "father_husband": "Limomo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/44",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ntsemo",
    "father_husband": "Lt.W.Lotha",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/45",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nghamomo",
    "father_husband": "Lt.Kiao",
    "gender": "M",
    "age": "63",
    "job_card": "NL-04-003-003-003/46",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chanchu*",
    "father_husband": "",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/46",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "Shayimo*",
    "father_husband": "Lt.Rhanchumo",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/47",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thungjanbeni*",
    "father_husband": "",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/47",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Ellis",
    "father_husband": "Lt.Rhachunmo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/48",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhalo*",
    "father_husband": "",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/48",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "Wothungo",
    "father_husband": "Lt.Rhachumo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/49",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Samti*",
    "father_husband": "Lt.L.Lotha",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/50",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Narayan",
    "father_husband": "T.Loyha",
    "gender": "F",
    "age": "57",
    "job_card": "NL-04-003-003-003/51",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yimbemo*",
    "father_husband": "N.Lotha",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/52",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Rhonthungo",
    "father_husband": "Amos",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/53",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Yamongo*",
    "father_husband": "Lt.Orhyuo",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/54",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Yizao*",
    "father_husband": "Lt.Motsuo",
    "gender": "M",
    "age": "69",
    "job_card": "NL-04-003-003-003/55",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Zanyimo",
    "father_husband": "Lt.Vankhomo",
    "gender": "M",
    "age": "73",
    "job_card": "NL-04-003-003-003/56",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Vanmoni*",
    "father_husband": "",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/56",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Orensao",
    "father_husband": "Lt.Njamomo",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/57",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhonthung",
    "father_husband": "",
    "gender": "M",
    "age": "48",
    "job_card": "NL-04-003-003-003/58",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yinamani",
    "father_husband": "Lt.Ntanmomo",
    "gender": "F",
    "age": "67",
    "job_card": "NL-04-003-003-003/59",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Womomo",
    "father_husband": "Lt.Nremo",
    "gender": "M",
    "age": "72",
    "job_card": "NL-04-003-003-003/60",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lumbeni",
    "father_husband": "Tsemon",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/61",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Grace*",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/61",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yanpvu*",
    "father_husband": "Lt.Lomongo",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/62",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Wobamo*",
    "father_husband": "Lt.Motsuo",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/63",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Tsemon",
    "father_husband": "Womomo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/64",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzehungi*",
    "father_husband": "",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/64",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Nsemo*",
    "father_husband": "Lt.K.Lotha",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/65",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Aben",
    "father_husband": "Lt.Lomomo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/66",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nyamo",
    "father_husband": "",
    "gender": "F",
    "age": "70",
    "job_card": "NL-04-003-003-003/67",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rhondamu",
    "father_husband": "Lt.Sangmomo",
    "gender": "F",
    "age": "75",
    "job_card": "NL-04-003-003-003/68",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Jonthungo",
    "father_husband": "Lt.E.Lotha",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/69",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Limhathung*",
    "father_husband": "Lt.Sangmomo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/70",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Thungdamo",
    "father_husband": "Lt.Avungo",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/71",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ahao",
    "father_husband": "",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/72",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Atsemo*",
    "father_husband": "Lt.Vankhomo",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/73",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Wobemo*",
    "father_husband": "",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/73",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Jophao",
    "father_husband": "Yizao",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/74",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lisemo*",
    "father_husband": "Lt.W.Lotha",
    "gender": "M",
    "age": "65",
    "job_card": "NL-04-003-003-003/75",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Chumben",
    "father_husband": "Lisemo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/76",
    "issue_date": "13/8/2007",
    "remarks": ""
  },
  {
    "name": "Khonbeno*",
    "father_husband": "",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/76",
    "issue_date": "13/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Pyingtsemo",
    "father_husband": "Rabomo",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/77",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rabomo*",
    "father_husband": "Lt.K.Lotha",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/78",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Emilo T Tsopoe",
    "father_husband": "Tsumongo",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-005-007-007/78-A",
    "issue_date": "11/4/2022",
    "remarks": ""
  },
  {
    "name": "Chumjamo",
    "father_husband": "Longase",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/79",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Peter",
    "father_husband": "Sabemo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/80",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yinimi*",
    "father_husband": "",
    "gender": "F",
    "age": "46",
    "job_card": "NL-04-003-003-003/80",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yanarao",
    "father_husband": "Lt.K.Lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/81",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phanchilo*",
    "father_husband": "",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/81",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "Tsikemo",
    "father_husband": "Yanarao",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/82",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanbensiu*",
    "father_husband": "Lt.E.Lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/83",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yisali*",
    "father_husband": "",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/83",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Lumti",
    "father_husband": "Lt.Kilo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/84",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzano*",
    "father_husband": "",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/84",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Sabemo*",
    "father_husband": "Lt.W.Lotha",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/85",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Lonase*",
    "father_husband": "Lt.K.Lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/86",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Jenithung",
    "father_husband": "Lt.Kilo",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/87",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungbemo",
    "father_husband": "Lt.S.Lotha",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/88",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhontsen",
    "father_husband": "Thungbemo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/89",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "lily*",
    "father_husband": "",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/89",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Moyithung",
    "father_husband": "Nmhao",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/90",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Aromo",
    "father_husband": "",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/91",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Myamo*",
    "father_husband": "C.Lotha",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/92",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "aKHEMO*",
    "father_husband": "rEMOMO",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/93",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Zuthunglo*",
    "father_husband": "A.Lotha",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/94",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "PINYIMO*",
    "father_husband": "Lt.E.Lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/95",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Anthony",
    "father_husband": "Pinyimo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/96",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "aBENO",
    "father_husband": "lT.hAWO",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/97",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rhonbemo*",
    "father_husband": "Lt.E.Lotha",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/98",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Shanjo*",
    "father_husband": "Rhondemo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/99",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 24/9/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "shancho*",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/99",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 24/9/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Sancho Shitiry*",
    "father_husband": "",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/99",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 24/9/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Libanthung*",
    "father_husband": "Remomo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/100",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Remomo",
    "father_husband": "Lt.E.Shitio",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/101",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ratsano*",
    "father_husband": "",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/101",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 29/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "Nmhao",
    "father_husband": "Lt.Wosuo",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/102",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Sankhalo*",
    "father_husband": "Wosuo",
    "gender": "F",
    "age": "69",
    "job_card": "NL-04-003-003-003/103",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/2/2025; Reason: Duplicate Job Card"
  },
  {
    "name": "Woben",
    "father_husband": "Pinyimo",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/104",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chibemo*",
    "father_husband": "Lt.Wosuo",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/105",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Womoni*",
    "father_husband": "",
    "gender": "F",
    "age": "57",
    "job_card": "NL-04-003-003-003/105",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Benjan*",
    "father_husband": "Lt.Wobamo",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/106",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Khontsungu",
    "father_husband": "Renao",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/107",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yankhumo",
    "father_husband": "Lt.Yibomo",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/108",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khonyimo*",
    "father_husband": "Lt.Wobamo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/109",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Tsoalo",
    "father_husband": "",
    "gender": "F",
    "age": "78",
    "job_card": "NL-04-003-003-003/110",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "yANBENI*",
    "father_husband": "",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/110",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 29/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "rOBEN*",
    "father_husband": "lT.mHONCHUMO",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/111",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Thungchumo",
    "father_husband": "Lt.Mhonchumo",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/112",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Sangmomo",
    "father_husband": "Lt.Rajamo",
    "gender": "F",
    "age": "70",
    "job_card": "NL-04-003-003-003/113",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhonsali Tsopoe*",
    "father_husband": "",
    "gender": "F",
    "age": "68",
    "job_card": "NL-04-003-003-003/113",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 29/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "Pyozhuv*",
    "father_husband": "Lt.Rentsamo",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/114",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Sulumo*",
    "father_husband": "Lt.P.Lotha",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/115",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Duplicate Job Card"
  },
  {
    "name": "Yanphamo*",
    "father_husband": "",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/115",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Duplicate Job Card"
  },
  {
    "name": "Chumremo*",
    "father_husband": "Ritsemo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/116",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhonlumi*",
    "father_husband": "",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/116",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Renao",
    "father_husband": "Lt.Yibomo",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/117",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rachi",
    "father_husband": "Lt.Zana",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/118",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khochobeni*",
    "father_husband": "",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/118",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yiramo*",
    "father_husband": "Lt.N.Lotha",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/119",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Benthungo*",
    "father_husband": "",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/119",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Yanbani",
    "father_husband": "Lt.Jonthungo",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/120",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khothungo",
    "father_husband": "Lt.Ayako",
    "gender": "M",
    "age": "75",
    "job_card": "NL-04-003-003-003/121",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yantung*",
    "father_husband": "",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/121",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yanjamo*",
    "father_husband": "Lt.Elansao",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/122",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Tongti",
    "father_husband": "Lt.Kiasao",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/123",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Renbeni*",
    "father_husband": "",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/123",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yontomo",
    "father_husband": "Lt.Wolumo",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/124",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lokyonglu",
    "father_husband": "Lt.Wojamo",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/125",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chumbeni*",
    "father_husband": "",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/125",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Likhamo",
    "father_husband": "Lt.Wolumo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/126",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Merilo*",
    "father_husband": "",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/126",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yantsomo",
    "father_husband": "Lt.Nchumbomo",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/127",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungbenshan*",
    "father_husband": "S.Lotha",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/128",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Mebeno*",
    "father_husband": "E.Lotha",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/129",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Athongo",
    "father_husband": "Lt.P.Lotha",
    "gender": "M",
    "age": "72",
    "job_card": "NL-04-003-003-003/130",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tsumongo",
    "father_husband": "Kirhyuo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/131",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Kilo*",
    "father_husband": "Lt.Nrisao",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/132",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhabeni*",
    "father_husband": "",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/132",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nribemo",
    "father_husband": "Lt.Nchumbomo",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/133",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Remomo",
    "father_husband": "lT.aYAKO",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/134",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "kHONCHIO",
    "father_husband": "lT.yIKHYAO",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/135",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "jOMONI*",
    "father_husband": "",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/135",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Shoav",
    "father_husband": "Lt.Ayako",
    "gender": "F",
    "age": "70",
    "job_card": "NL-04-003-003-003/136",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Kirhyuo*",
    "father_husband": "Lt.Nrisao",
    "gender": "M",
    "age": "68",
    "job_card": "NL-04-003-003-003/137",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Raben",
    "father_husband": "Lt.Elisao",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/138",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Zuben",
    "father_husband": "Lt.Sanrhumo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/139",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tumchobeni*",
    "father_husband": "",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/139",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 29/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "Yantsashan",
    "father_husband": "Lt.Rajamo",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/140",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Shamomo",
    "father_husband": "Lt.Hakao",
    "gender": "M",
    "age": "68",
    "job_card": "NL-04-003-003-003/141",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanbomo",
    "father_husband": "",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/142",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Achumo*",
    "father_husband": "Shamomo",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/143",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Soren",
    "father_husband": "",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/144",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rhanben",
    "father_husband": "",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/145",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Meribeni*",
    "father_husband": "K.Lotha",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/146",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Tsamomo",
    "father_husband": "Lt.Liphamo",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/147",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khochelo*",
    "father_husband": "",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/147",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Wonbemo",
    "father_husband": "Lt.Ekyimo",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/148",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khonchiv*",
    "father_husband": "",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/148",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "Sanchumo*",
    "father_husband": "Lt.L.Lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/149",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Yikhyao",
    "father_husband": "Lt.S.Odyuo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/150",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nrithung",
    "father_husband": "Lt.Yanbanlo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/151",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhabeni*",
    "father_husband": "",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/151",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Achum",
    "father_husband": "Pithungo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/152",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Merithung",
    "father_husband": "Lt.Wozamo",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/153",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhonjan",
    "father_husband": "Lt.Wothungo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/154",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tsenbeni*",
    "father_husband": "",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/154",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yanpo",
    "father_husband": "Lt.Evonthung",
    "gender": "M",
    "age": "73",
    "job_card": "NL-04-003-003-003/155",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nyimthungo",
    "father_husband": "",
    "gender": "M",
    "age": "65",
    "job_card": "NL-04-003-003-003/156",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khonchiv*",
    "father_husband": "",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/156",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Tsikiv",
    "father_husband": "Lt.Tsamomo",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/157",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanarhomo*",
    "father_husband": "Lt.Jonpan",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/158",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Chimomo*",
    "father_husband": "Lt.Opvuo",
    "gender": "M",
    "age": "66",
    "job_card": "NL-04-003-003-003/159",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Rilow",
    "father_husband": "Lt.Zuthunglo",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/160",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ethungmoni",
    "father_husband": "Lt.Nyansao",
    "gender": "F",
    "age": "63",
    "job_card": "NL-04-003-003-003/161",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phyochumo*",
    "father_husband": "Lt.Wojamo",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/162",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thungbenshan",
    "father_husband": "Lt.Nyansao",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/163",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Wothungo",
    "father_husband": "Lt.Wojamo",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/164",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanreno*",
    "father_husband": "",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/164",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Mhao",
    "father_husband": "Lt.Lanthamo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/165",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "epio*",
    "father_husband": "",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/165",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Rilumo",
    "father_husband": "Lt>Tsatheo",
    "gender": "F",
    "age": "59",
    "job_card": "NL-04-003-003-003/166",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungsali*",
    "father_husband": "",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/166",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Khyalano",
    "father_husband": "Lt.Khonben",
    "gender": "F",
    "age": "70",
    "job_card": "NL-04-003-003-003/167",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhonchumi*",
    "father_husband": "",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/167",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "Yibemo",
    "father_husband": "Lt.Thungben",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/168",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chongirali*",
    "father_husband": "",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/169",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhonbemo*",
    "father_husband": "Lrt.Thungben",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/170",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Khangshio",
    "father_husband": "Lt.Jonpan",
    "gender": "M",
    "age": "75",
    "job_card": "NL-04-003-003-003/171",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nchumomo*",
    "father_husband": "Lt.Yanarhomo",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/172",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Rabungu*",
    "father_husband": "",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/172",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nthungo",
    "father_husband": "Lt.Jonpan",
    "gender": "M",
    "age": "64",
    "job_card": "NL-04-003-003-003/173",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khyolamo*",
    "father_husband": "Nthungo",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/174",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Oren",
    "father_husband": "L.Y.Lotha",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/175",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nralo*",
    "father_husband": "Lt.Phubemo",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/176",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanra",
    "father_husband": "Lt.Ekyimo",
    "gender": "F",
    "age": "70",
    "job_card": "NL-04-003-003-003/177",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Myingthungo",
    "father_husband": "Jenikhon",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/178",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chumjano*",
    "father_husband": "",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/178",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "Elamo",
    "father_husband": "Lt.W.Humtsue",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/179",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Benchilo*",
    "father_husband": "",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/179",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "Pyingjamo",
    "father_husband": "Lt.Tsanthungo",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/180",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ayangla*",
    "father_husband": "",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/180",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Nchemo",
    "father_husband": "Pyingjamo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/181",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Zubenthung*",
    "father_husband": "Akho",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/182",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/2/2025; Reason: Duplicate Job Card"
  },
  {
    "name": "mary*",
    "father_husband": "",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/182",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/2/2025; Reason: Duplicate Job Card"
  },
  {
    "name": "Renchithung Kithan",
    "father_husband": "Lobemo",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-005-007-007/182-A",
    "issue_date": "11/4/2022",
    "remarks": ""
  },
  {
    "name": "Aremo",
    "father_husband": "Lt.Tsanthungo",
    "gender": "M",
    "age": "69",
    "job_card": "NL-04-003-003-003/183",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Jonsuv*",
    "father_husband": "",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/183",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "Sanchumo*",
    "father_husband": "Lt.P.Humtsoe",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/184",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Yanarao*",
    "father_husband": "Lt.Zubonthung",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/185",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanakhon*",
    "father_husband": "Lt.Yansao",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/186",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Tsenyani*",
    "father_husband": "",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/186",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Rakomo",
    "father_husband": "",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/187",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungamoni*",
    "father_husband": "",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/187",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Phyophio",
    "father_husband": "",
    "gender": "M",
    "age": "73",
    "job_card": "NL-04-003-003-003/188",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Pithunglo*",
    "father_husband": "",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/188",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Amalo*",
    "father_husband": "Lt.W.Humy\\tsoe",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/189",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Kumchio*",
    "father_husband": "Lt.S.Lotha",
    "gender": "M",
    "age": "63",
    "job_card": "NL-04-003-003-003/190",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Ajano*",
    "father_husband": "Lt.W.Lotha",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/191",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Mhonlumo",
    "father_husband": "Kumchio",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/192",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Kingo",
    "father_husband": "Lt.K.Humtsoe",
    "gender": "M",
    "age": "66",
    "job_card": "NL-04-003-003-003/193",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tsumongi*",
    "father_husband": "",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/193",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Person shifted to a new family"
  },
  {
    "name": "Tsenbemo",
    "father_husband": "Kingo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/194",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzano*",
    "father_husband": "",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/194",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "Wojamo*",
    "father_husband": "Lt.F.Patton",
    "gender": "M",
    "age": "63",
    "job_card": "NL-04-003-003-003/195",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Kilio*",
    "father_husband": "Wojamo",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/196",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Tsilumvu*",
    "father_husband": "",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/196",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Nkhanyimo",
    "father_husband": "Lt.Rilumo",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/197",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzano*",
    "father_husband": "",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/197",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Elhio",
    "father_husband": "Lt.Phanthungo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/198",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "aNTHONY*",
    "father_husband": "lT.nTHIUO",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/199",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "wOTHUNGO",
    "father_husband": "lT.nTHIO",
    "gender": "F",
    "age": "56",
    "job_card": "NL-04-003-003-003/200",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "nYAMO",
    "father_husband": "kHONYIMO",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/201",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "wOCHUMO*",
    "father_husband": "lT.cHITHUNGO",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/202",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "kHACHUMO*",
    "father_husband": "wOCHUMO",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/203",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thungchumo",
    "father_husband": "Lt.Mhonyimo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/204",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mary*",
    "father_husband": "",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/204",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Tsenyimi",
    "father_husband": "Lt.Mhonyimi",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/205",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nchumo",
    "father_husband": "Nremo",
    "gender": "M",
    "age": "48",
    "job_card": "NL-04-003-003-003/206",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzani*",
    "father_husband": "",
    "gender": "F",
    "age": "20",
    "job_card": "NL-04-003-003-003/206",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Nremo*",
    "father_husband": "Lt.Y.Patton",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/207",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nwonyimo*",
    "father_husband": "Lt.M.Patton",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/208",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Longshi*",
    "father_husband": "Lt.Lisemo",
    "gender": "M",
    "age": "64",
    "job_card": "NL-04-003-003-003/209",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "N.John*",
    "father_husband": "Lt.Raphamo",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/210",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Tsemoni*",
    "father_husband": "",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/211",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Khonyimi*",
    "father_husband": "Lt.Yanpvu",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/212",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thungrhumo",
    "father_husband": "Lt.Mhonsao",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/213",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nlongtsu*",
    "father_husband": "Lt.R.Patton",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/214",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nyimsao",
    "father_husband": "Nlongtsu",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/215",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lochumlo*",
    "father_husband": "",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/215",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Sabemo*",
    "father_husband": "Lt.Yikhyao",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/216",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nlongtsu",
    "father_husband": "Lt.C.Patton",
    "gender": "M",
    "age": "75",
    "job_card": "NL-04-003-003-003/217",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanbamo",
    "father_husband": "Lt.Rilumo",
    "gender": "M",
    "age": "66",
    "job_card": "NL-04-003-003-003/218",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "PVUCHIRAO",
    "father_husband": "yANBAMO",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/219",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "LUCY*",
    "father_husband": "",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/219",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "cHONGIRAO",
    "father_husband": "YANBAMO",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/220",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "MHONO*",
    "father_husband": "",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/220",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Mathew",
    "father_husband": "Azamo",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/221",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungjamo*",
    "father_husband": "",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/221",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Azamo*",
    "father_husband": "Lt.L.Humtsore",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/222",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nchumbani",
    "father_husband": "Lt.E.Lotha",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/223",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "LIBAN",
    "father_husband": "Lt.yikhamo",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/224",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lobomo",
    "father_husband": "Lt.Elansao",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/225",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nrihano*",
    "father_husband": "",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/225",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Khyomoni*",
    "father_husband": "Lt. Elansao",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/226",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Renbon*",
    "father_husband": "Yiotso",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/227",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Langlamo",
    "father_husband": "Akhango",
    "gender": "M",
    "age": "63",
    "job_card": "NL-04-003-003-003/228",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Yibomo*",
    "father_husband": "Achumo",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/229",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Rensali",
    "father_husband": "Lt.Yirao",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/230",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yantsemo",
    "father_husband": "Lt.Phyobemo",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/231",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chimoni*",
    "father_husband": "",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/231",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Mhonthung",
    "father_husband": "Nvamo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/232",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yimoni*",
    "father_husband": "lt.Sangmomo",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/233",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yikhayn*",
    "father_husband": "Lt.Alow",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/234",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Sacheo*",
    "father_husband": "Lt.Khusao",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/235",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhabamo*",
    "father_husband": "",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/235",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nyimtsemo*",
    "father_husband": "",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/236",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Agnes*",
    "father_husband": "",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/236",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "jenio*",
    "father_husband": "Lt.S Patton",
    "gender": "M",
    "age": "48",
    "job_card": "NL-04-003-003-003/237",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Phyokjamo*",
    "father_husband": "Lt.S.Pottan",
    "gender": "M",
    "age": "65",
    "job_card": "NL-04-003-003-003/238",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nyamo",
    "father_husband": "Lt.Khyolamo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/239",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Motsuthung*",
    "father_husband": "",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/239",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "Nsemo*",
    "father_husband": "Wochamo",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/240",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 10/4/2024; Reason: unwilling to work"
  },
  {
    "name": "Yimani Patton",
    "father_husband": "",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/240",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nchumbemo",
    "father_husband": "Lt.Nyimkhomo",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/241",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mongchio*",
    "father_husband": "Lt.C.Kitton",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/242",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yichongo",
    "father_husband": "Lt.W Patton",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/243",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Wodemo",
    "father_husband": "Yichongo",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/244",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Wodemo lotha",
    "father_husband": "",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/244",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Salamo",
    "father_husband": "Lt.C.patton",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/245",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lolamvu*",
    "father_husband": "",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/245",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yangviu*",
    "father_husband": "Lt.S.Pottan",
    "gender": "F",
    "age": "59",
    "job_card": "NL-04-003-003-003/246",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Lichumo",
    "father_husband": "Lt.Nriamo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/247",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Akhango",
    "father_husband": "Lt.Ezanthung",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/248",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lozano*",
    "father_husband": "",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/248",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Tsua*",
    "father_husband": "Lt.nyimlamo",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/249",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Njanbeni*",
    "father_husband": "Lt.Chitensio",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/250",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Jenikon*",
    "father_husband": "Lt.Tsenro",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/251",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Ponthunglo*",
    "father_husband": "Limomo Kikon",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/252",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 10/4/2024; Reason: unwilling to work"
  },
  {
    "name": "Benthunglo Kikon",
    "father_husband": "",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/252",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Shanpo",
    "father_husband": "Khonyimo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/253",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yitso*",
    "father_husband": "Lt.Ravungo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/254",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thungben",
    "father_husband": "Njamo",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/255",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzinimo",
    "father_husband": "Yiotso",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/256",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rabomo",
    "father_husband": "Lt.Tsenchio",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/257",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "James*",
    "father_husband": "Jenikhon",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/258",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Ngheo",
    "father_husband": "Lt.Tsungio",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/259",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Zizao",
    "father_husband": "Lt.Chijamo",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/260",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nchumbomo",
    "father_husband": "Sacheo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/261",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Akho",
    "father_husband": "Lt.yantsuo",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/262",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungbemo",
    "father_husband": "Phyojamo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/263",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Oren",
    "father_husband": "Lt.Tsumongo",
    "gender": "M",
    "age": "48",
    "job_card": "NL-04-003-003-003/264",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhonchumo*",
    "father_husband": "Ponshan",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/265",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Nkhao*",
    "father_husband": "Lt.Thungchio",
    "gender": "M",
    "age": "68",
    "job_card": "NL-04-003-003-003/266",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Wodemo*",
    "father_husband": "Nkhao",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/267",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Vanjamo*",
    "father_husband": "Lt.Phyobemo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/268",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Etsamo*",
    "father_husband": "",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/269",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nyhenyalo",
    "father_husband": "Lt.Tsanthungo",
    "gender": "F",
    "age": "63",
    "job_card": "NL-04-003-003-003/270",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nyanthung",
    "father_husband": "Lt.Tsumongo",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/271",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanjano",
    "father_husband": "Lt.Chipvuo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/272",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Suchamo*",
    "father_husband": "Lt.Nrio",
    "gender": "M",
    "age": "69",
    "job_card": "NL-04-003-003-003/273",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "yamongo*",
    "father_husband": "",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/274",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Wobemo",
    "father_husband": "Nyanchumo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/275",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nyanchumo",
    "father_husband": "Lt.Yanpan",
    "gender": "M",
    "age": "70",
    "job_card": "NL-04-003-003-003/276",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phalamo*",
    "father_husband": "Lt.Chumtamo",
    "gender": "M",
    "age": "67",
    "job_card": "NL-04-003-003-003/277",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Olamvu*",
    "father_husband": "",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/277",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nsemo",
    "father_husband": "Lt.Jonzamo",
    "gender": "M",
    "age": "65",
    "job_card": "NL-04-003-003-003/278",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lichio",
    "father_husband": "Lt.Pinyimo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/279",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nchumbemo",
    "father_husband": "Lt.Wolamo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/280",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Renjamo",
    "father_husband": "Lt.Lishao",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/281",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ratseno*",
    "father_husband": "Lt.Pinyimo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/282",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Augustin",
    "father_husband": "Lt.Nyamo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/283",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chibemmo*",
    "father_husband": "Lt.Fuchumo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/284",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Motsuo",
    "father_husband": "Lt.Khojamo",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/285",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tsungrithung",
    "father_husband": "Lt.Lisemo",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/286",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Loyibeni*",
    "father_husband": "",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/286",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yenjamo*",
    "father_husband": "Lt.Tsentso",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/287",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Rabeni*",
    "father_husband": "Lt.Tsenro",
    "gender": "F",
    "age": "63",
    "job_card": "NL-04-003-003-003/288",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanbemo*",
    "father_husband": "Poshamo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/289",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Longshithung",
    "father_husband": "Ngheo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/290",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanban*",
    "father_husband": "Lt.Atsamo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/291",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yinimi*",
    "father_husband": "",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/291",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yikhyao",
    "father_husband": "Lt.Mongchio",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/292",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Orenthung*",
    "father_husband": "Lt.Yima",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/293",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nchumbemo",
    "father_husband": "Lt.Jenio",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/294",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Loyiv",
    "father_husband": "Lt.Nthungmomo",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/295",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Jonsumo*",
    "father_husband": "Lt.Yanchio",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/298",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Ero*",
    "father_husband": "",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/299",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Phankhao",
    "father_husband": "Lt.Phyobemo",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/300",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Sabemo",
    "father_husband": "Lt.Yanchio",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/301",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khonyimo",
    "father_husband": "Lt.Mongchio",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/302",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yichongo",
    "father_husband": "Lt.Khumshumo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/303",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "yamolo*",
    "father_husband": "Lt.Aromo",
    "gender": "M",
    "age": "65",
    "job_card": "NL-04-003-003-003/304",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Ntseno",
    "father_husband": "Lt.Ralithung",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/305",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phanchio*",
    "father_husband": "Lt.Khumshumo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/306",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Chimomo",
    "father_husband": "Lt.Mongchio",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/307",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nramo",
    "father_husband": "chimomo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/308",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tsenanyimo*",
    "father_husband": "Lt.Vanrhyuo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/309",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nyimbeni*",
    "father_husband": "",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/309",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Chumlamo",
    "father_husband": "Lt.Khyolamo",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/310",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhono*",
    "father_husband": "",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/310",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yanthungo*",
    "father_husband": "Chumlamo",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/311",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Abel*",
    "father_husband": "Lt.Chumsio",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/313",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Khonthungo",
    "father_husband": "Lt.Khyolamo",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/314",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhonyimo",
    "father_husband": "Lt.Tsunglamo",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/315",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Elhibamo*",
    "father_husband": "Chilo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/316",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Chilo",
    "father_husband": "Lt.Thamomo",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/317",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Kumchio",
    "father_husband": "",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/318",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rhansali*",
    "father_husband": "Lt.:Thamomo",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/319",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Chipvulo*",
    "father_husband": "Lt.Phyobemo",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/320",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thunjamo",
    "father_husband": "Lt.Shanbamo",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/321",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Konao*",
    "father_husband": "Nyimthungo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/322",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Sankhao*",
    "father_husband": "Lt.Rakho",
    "gender": "M",
    "age": "63",
    "job_card": "NL-04-003-003-003/323",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhonchumo*",
    "father_husband": "Lt.Liao",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/324",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Ntsemo",
    "father_husband": "Lt.Khonsao",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/325",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rilanbumo*",
    "father_husband": "Lt.Yanchhio",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/326",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Abeni*",
    "father_husband": "",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/326",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Ezomongo",
    "father_husband": "Lt.Rilumo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/327",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lojamo*",
    "father_husband": "Lt.Phyobemo",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/328",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yiboni*",
    "father_husband": "",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/328",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Wothungo*",
    "father_husband": "Lt.Rhanchumo",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/329",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Kumchilo*",
    "father_husband": "",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/329",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Tsumomo",
    "father_husband": "Lt.Lisemo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/330",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhonchumi*",
    "father_husband": "",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/330",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "Yanbeni*",
    "father_husband": "",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/331",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Daniel",
    "father_husband": "Lt.Lomongo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/332",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzehungo",
    "father_husband": "Lt.Mhonsao",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/333",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ratsemo",
    "father_husband": "Lt.Renthungo",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/334",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzilo*",
    "father_husband": "",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/334",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Yanshumo",
    "father_husband": "Sacheo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/335",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Njano*",
    "father_husband": "Lt.Renthungo",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/336",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Nrao",
    "father_husband": "Motsuo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/337",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Longshi",
    "father_husband": "W.Muzhui",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/338",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Boshoni",
    "father_husband": "Lt.N.Lotha",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/339",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Jenithung*",
    "father_husband": "Akhango",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/340",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Nribemo*",
    "father_husband": "",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/341",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Subeno",
    "father_husband": "Nthungo",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/342",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanbeni",
    "father_husband": "",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/343",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lithungbemo",
    "father_husband": "Yanthungo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/344",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chumthungo",
    "father_husband": "Roben",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/345",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rentsamo",
    "father_husband": "Tsikvuo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/346",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhabemo*",
    "father_husband": "Kilio",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/347",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Duplicate Job Card"
  },
  {
    "name": "Chipvulo*",
    "father_husband": "Ngheo",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/348",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Chimoni",
    "father_husband": "Mhonbemo",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/349",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phyokhamo*",
    "father_husband": "Motsuo",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/350",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Olamvu*",
    "father_husband": "Olamvu",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/351",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumlo*",
    "father_husband": "Phyojamo",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/352",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Peter*",
    "father_husband": "Pyingjamo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/353",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "ARHONI YANTHAN",
    "father_husband": "CHIPO LOTHA",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-022-022/353",
    "issue_date": "",
    "remarks": ""
  },
  {
    "name": "Nchumbeni",
    "father_husband": "Lt.Thungben",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/354",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhathung*",
    "father_husband": "Khonyimo",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/355",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Phyokhamo*",
    "father_husband": "Phyojamo",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/356",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Vencent",
    "father_husband": "",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/357",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "zUBEMO*",
    "father_husband": "rISHEMO",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/358",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "lIJANBEMO*",
    "father_husband": "cHUMLAMO",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/359",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "pHYOPHIO*",
    "father_husband": "kHONYIMO",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/360",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "aBENTHUNG*",
    "father_husband": "lT.n.pATTON",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/361",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Tsanboni*",
    "father_husband": "Lt.Tsenro",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/362",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhontsen",
    "father_husband": "Thungbemo",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/363",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yentsao",
    "father_husband": "Npio",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/364",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nmhao*",
    "father_husband": "Lt.V.Patton",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/365",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumbemo*",
    "father_husband": "Lt.Tsamomo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/366",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Lichumo*",
    "father_husband": "Rilumo",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/367",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Pario*",
    "father_husband": "Lt.Nyansao",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/368",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanrenthung",
    "father_husband": "Nthungo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/369",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Meribemo",
    "father_husband": "Yontomo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/370",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanthungshan",
    "father_husband": "Khonthungo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/371",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nzanbemo",
    "father_husband": "Thungjamo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/372",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yantsuthung*",
    "father_husband": "Peter Tungoe",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/373",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 10/4/2024; Reason: unwilling to work"
  },
  {
    "name": "Yingathung P Tungoe",
    "father_husband": "",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/373",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Shiben",
    "father_husband": "Yihamo",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/374",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhabemo*",
    "father_husband": "Nthungo",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/375",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Chumjanbeni*",
    "father_husband": "Shayimo",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/376",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Chumdemo*",
    "father_husband": "Shanjo",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/377",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Atseno",
    "father_husband": "Orensao",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/378",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tsulan*",
    "father_husband": "Pyingtsemo",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/379",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumbeni",
    "father_husband": "RIlumo",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/380",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rhanjamo",
    "father_husband": "Longase",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/381",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Areni*",
    "father_husband": "",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/381",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 12/10/2025; Reason: unwilling to work"
  },
  {
    "name": "Emano*",
    "father_husband": "Yanpvu",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/382",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Aben*",
    "father_husband": "Tsungrithung",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/383",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanphamo*",
    "father_husband": "Sulumo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/384",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Lucy",
    "father_husband": "Soren",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/385",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Zuthunglo*",
    "father_husband": "Pyochummo",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/386",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nnili",
    "father_husband": "Khangshio",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/387",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhono*",
    "father_husband": "Yikhyao",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/388",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Bosoni*",
    "father_husband": "Mhonbemo",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/389",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Orenjani*",
    "father_husband": "Pingi",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/390",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Sankhano",
    "father_husband": "Akhemo",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/391",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chumbenthung*",
    "father_husband": "Ntsomo",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/392",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Womongo*",
    "father_husband": "Yizao",
    "gender": "M",
    "age": "48",
    "job_card": "NL-04-003-003-003/393",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Etsibeni",
    "father_husband": "Renjamo",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/394",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Achumo*",
    "father_husband": "Mhonchumo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/395",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yilumo",
    "father_husband": "Kilio",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/396",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungchibeni",
    "father_husband": "Jenikhon",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/397",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phyodemo*",
    "father_husband": "Nkhao",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/398",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Moyithuuung*",
    "father_husband": "N.Nmhao",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/399",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 15/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "Thungdemo",
    "father_husband": "",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/399",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Liyani*",
    "father_husband": "Phalamo",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/400",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thunjamo",
    "father_husband": "Nmhao",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/401",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungdemo",
    "father_husband": "Jenikhon",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/402",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rashamo",
    "father_husband": "Ramongo",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/403",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Kiathung",
    "father_husband": "Remomo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/404",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Libemo*",
    "father_husband": "Nmhao",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/405",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Lothunglo*",
    "father_husband": "Yanphamo",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/406",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Longshilo",
    "father_husband": "Mhao",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/407",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Jonah",
    "father_husband": "Thungbemo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/408",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Areni",
    "father_husband": "Chumjamo",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/409",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nyanbenni",
    "father_husband": "Tsikvuo",
    "gender": "F",
    "age": "56",
    "job_card": "NL-04-003-003-003/410",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Ayingro*",
    "father_husband": "Nyansao",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/411",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanchibeni*",
    "father_husband": "Nthungo",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/412",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Wontsuthung*",
    "father_husband": "Mhonbeni",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/413",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Khyolamo*",
    "father_husband": "Yibemo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/414",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Senbeni*",
    "father_husband": "Lt.Wobansao",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/415",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Zanabemo*",
    "father_husband": "Jenikhon",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/416",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Wobemo",
    "father_husband": "Lt.N.Lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/417",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Zana*",
    "father_husband": "Lt.Liyo",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/418",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Abel",
    "father_husband": "Lt.Chipvuo",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/419",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Merijan*",
    "father_husband": "Phalamo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/420",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Wolumo*",
    "father_husband": "Lt.Nthungo",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/421",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Zujamo",
    "father_husband": "Rhonbemo",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/422",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhabemo*",
    "father_husband": "Lidemo",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/423",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Yanbeni",
    "father_husband": "Lisemo",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/424",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tsilumvu",
    "father_husband": "Wojamo",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/425",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Therali*",
    "father_husband": "Lt.Wothungo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/426",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Arenthung*",
    "father_husband": "Lt.Wolumo",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/427",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Khothungo",
    "father_husband": "Renbemo",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/428",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Libeni",
    "father_husband": "Mhonbemo",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/429",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Michal*",
    "father_husband": "Lt.T.Lotha",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/430",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Noyingo*",
    "father_husband": "Lt.Wozamo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/431",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Libanthung",
    "father_husband": "REMOMO",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/432",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "pONSHAMO",
    "father_husband": "cHUMTHUNGO",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/433",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Akhemo",
    "father_husband": "R.Shitio",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/433-A",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Phyophio*",
    "father_husband": "Lt.T.Lotha",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/434",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanthiv",
    "father_husband": "Khonyimo",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/435",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Renbenthung*",
    "father_husband": "Lt.A.Lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/436",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nzehungi*",
    "father_husband": "Roben",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/437",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 15/10/2025; Reason: Person shifted to a new family"
  },
  {
    "name": "s kithan",
    "father_husband": "",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/437",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Evothung*",
    "father_husband": "Khangshio",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/438",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Lireni*",
    "father_husband": "Nchumomo",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/439",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thunngjanbeno*",
    "father_husband": "Lt.Evon",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/440",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Simon*",
    "father_husband": "Kilio",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/441",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Yankho",
    "father_husband": "Lt.Wojamo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/442",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Chenithung",
    "father_husband": "Lt.Wosuo",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/443",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "tsenbemo",
    "father_husband": "Chimomo",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/444",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lozano",
    "father_husband": "Akhango",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/445",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Zajamo*",
    "father_husband": "Mhonbemo",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/446",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Ayingla*",
    "father_husband": "Thungjamo",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/447",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Rikhyolo*",
    "father_husband": "Lt.Motsuo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/448",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Renbeni",
    "father_husband": "Lt.Kiao",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/449",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungdemo*",
    "father_husband": "Jenbimomo",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/450",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Kiasali*",
    "father_husband": "Motsuo",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/451",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Lisumo*",
    "father_husband": "Rilumi",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/452",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Lijanbeni*",
    "father_husband": "zuthungo",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/453",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhonchumi",
    "father_husband": "Lt.Khonben",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/454",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yanbani*",
    "father_husband": "Yanmolo",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/455",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Kumchilo*",
    "father_husband": "Phyosao",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/456",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "yansali*",
    "father_husband": "Nchumo",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/457",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Khumlamo*",
    "father_husband": "Renbi",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/458",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Yirhoni*",
    "father_husband": "Lt.Khudemo",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/459",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Rahungo",
    "father_husband": "Yitso",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/460",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Daniel*",
    "father_husband": "Jenikhon",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/461",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhonyani",
    "father_husband": "Nremo",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/462",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Yibeni*",
    "father_husband": "Nlongtsu",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/463",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Elizabeth",
    "father_husband": "nwo",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/464",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Tsakhono*",
    "father_husband": "Jenikhon",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/465",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nlumo*",
    "father_husband": "Yibemo",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/466",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Anyimi*",
    "father_husband": "Lt.T.Lotha",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/467",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumbeni*",
    "father_husband": "Lt.Shanbamo",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/468",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Lucy*",
    "father_husband": "Lt.Nyamo",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/469",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhonsali",
    "father_husband": "Lt.Chumsio",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/470",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Torio",
    "father_husband": "Lt.Wozamo",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/471",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Etssiv*",
    "father_husband": "Lt.Thungben",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/472",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Khonyimi*",
    "father_husband": "Khonthungo",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/473",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumlo*",
    "father_husband": "Khonimo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/474",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Pankhumlo*",
    "father_husband": "Jonsumo",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/475",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nzehungi",
    "father_husband": "Nsemo",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/476",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khoncho*",
    "father_husband": "Lt.Tsamomo",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/477",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Samuel",
    "father_husband": "Langlamo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/478",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Salumi",
    "father_husband": "Yankhumo",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/479",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Augustin*",
    "father_husband": "Lt.Sanrhumo",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/480",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Easter",
    "father_husband": "Lt.Ekyimo",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/481",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Elhibani*",
    "father_husband": "Lt.Jonzamo",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/482",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Choinbeni",
    "father_husband": "Woben",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/483",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Lorobeni",
    "father_husband": "Chongio",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/484",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Myinthungo*",
    "father_husband": "Liben",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/485",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Benchilo",
    "father_husband": "Lt.Chumsio",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/486",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Khocho",
    "father_husband": "Chumthungo",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/487",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Loyibeni*",
    "father_husband": "Renao",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/488",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Subeno*",
    "father_husband": "Nmhao",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/489",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Chumdemo*",
    "father_husband": "Tsatheo",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/490",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nriothung*",
    "father_husband": "wobamo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/491",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Wobemo*",
    "father_husband": "Athongo",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/492",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Chongiv*",
    "father_husband": "Lt.Kiasao",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/493",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Ajano*",
    "father_husband": "Kilosao",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/493-A",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Aroni",
    "father_husband": "Thungchumo",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/494",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Merilo",
    "father_husband": "Yontomo",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/495",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Abemo*",
    "father_husband": "Kholumo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/495-A",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumthung*",
    "father_husband": "Nrithung",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/496",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "yanmhon*",
    "father_husband": "Lt.Tsenchio",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/497",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Thungdemo*",
    "father_husband": "Npio",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/498",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nzehungo*",
    "father_husband": "Langklamo",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/499",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Zanbemo*",
    "father_husband": "Lty.Yimao",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/500",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nzio*",
    "father_husband": "Lt.Tsumongo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/501",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumo*",
    "father_husband": "Lt.Ayako",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/502",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Peter*",
    "father_husband": "Lt.Elansao",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/503",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "John*",
    "father_husband": "Lishao",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/504",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Tsenyimo*",
    "father_husband": "Chithungo",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/505",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Ahao*",
    "father_husband": "Wojamo",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/506",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Aremo",
    "father_husband": "Lt.Yanlo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/507",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Nchumthung*",
    "father_husband": "Pithungo",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/508",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nchumo*",
    "father_husband": "Tsamomo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/509",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Khomo*",
    "father_husband": "Akho",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/510",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumbemo*",
    "father_husband": "Hathungo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/511",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Womongo*",
    "father_husband": "Lt.Alow",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/512",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nrao*",
    "father_husband": "Azamo",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/513",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Rumphio*",
    "father_husband": "Lt.Nkhanimo",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/514",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nralo*",
    "father_husband": "Phyophio",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/514-A",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "yihamo*",
    "father_husband": "Yanakhon",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/515",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Pyingtsemo*",
    "father_husband": "Yanao",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/516",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nyimtsemo*",
    "father_husband": "Ralamo",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/517",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Thenhyao*",
    "father_husband": "Woasmo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/518",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Elihio*",
    "father_husband": "Lt.Ekon",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/518-A",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "David*",
    "father_husband": "nyimtsemo",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/519",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Rebenthung*",
    "father_husband": "Yanarhomo",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/520",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Sorenthung*",
    "father_husband": "Yankhonsao",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/521",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Mhonbeni",
    "father_husband": "Yanbensio",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/522",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Merithung*",
    "father_husband": "Nghamomo",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/523",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Benthung*",
    "father_husband": "Evothung",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/524",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhonthung*",
    "father_husband": "yanarao",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/524-A",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Renjamo",
    "father_husband": "Narhao",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/526",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "James",
    "father_husband": "Nrao",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/527",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thuungjano*",
    "father_husband": "rakomo",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/528",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: unwilling to work"
  },
  {
    "name": "Thungchanbeni patton",
    "father_husband": "",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/528",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Renbeni",
    "father_husband": "Wosemo",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/529",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Thungjabemo",
    "father_husband": "Pithung",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/530",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Mhathung*",
    "father_husband": "Lt.nchumbemo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/531",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "David*",
    "father_husband": "Nyimtsemo",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/532",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanbemo*",
    "father_husband": "Nchumbemo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/533",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchuemo*",
    "father_husband": "tsamomo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/534",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Jandemo*",
    "father_husband": "Atsemo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/535",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchemo*",
    "father_husband": "pyingjamo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/536",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Echabemo*",
    "father_husband": "Zubemo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/537",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nkhyingo*",
    "father_husband": "yankhumo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/538",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Khyothung*",
    "father_husband": "Zanyimo",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/539",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Esenthung",
    "father_husband": "Hawa",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/540",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Rensamo*",
    "father_husband": "Remomo",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/541",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Kithungbemo*",
    "father_husband": "Samomo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/542",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Rhanben*",
    "father_husband": "Yanarhumo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/543",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Sanjamo*",
    "father_husband": "",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/544",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Rebemo*",
    "father_husband": "Khonyimo",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/545",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumbemo*",
    "father_husband": "Fuchumo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/546",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Chumbemo",
    "father_husband": "",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/547",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Libamo*",
    "father_husband": "Yitsongo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/548",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Orenthung*",
    "father_husband": "Wonbemo",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/549",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Zubenthung",
    "father_husband": "Sanrumo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/550",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Meribeni*",
    "father_husband": "Yanbomo",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/551",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Nzanthung",
    "father_husband": "Nyimthungo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/552",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Wokhemo*",
    "father_husband": "Yiramo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/553",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Renthungo*",
    "father_husband": "Nyamo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/554",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Chanbemo",
    "father_husband": "R.Lotha",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/555",
    "issue_date": "11/8/2007",
    "remarks": ""
  },
  {
    "name": "Orenthung*",
    "father_husband": "Abenthung",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/556",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 23/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanphio*",
    "father_husband": "B.Ben",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/557",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Abemomo*",
    "father_husband": "B.Lotha",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/558",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nrio*",
    "father_husband": "Benjamo",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/559",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Renbenthung*",
    "father_husband": "Z.lotha",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/560",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Zulhani*",
    "father_husband": "Zamomo",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/561",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nchumbemo*",
    "father_husband": "",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/563",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Hathungo*",
    "father_husband": "Lt. Thungbenshan",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/564",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Sanchithung*",
    "father_husband": "Hathungo",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/565",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Nchumthung*",
    "father_husband": "",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/566",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Elothung",
    "father_husband": "Yibemo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/567",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Mhajan*",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/568",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Nyanbemo*",
    "father_husband": "Rilumo",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/569",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Rentsamo*",
    "father_husband": "Nthungo",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/570",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Ntsen*",
    "father_husband": "Yanbenshio",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/571",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanchibemo*",
    "father_husband": "Mhonbemo",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/572",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Wothungo*",
    "father_husband": "Rabomo",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/573",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Jantemo*",
    "father_husband": "Atsemo",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/574",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanbo*",
    "father_husband": "Lt. Nyimsao",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/575",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Mhonbemo*",
    "father_husband": "Nghao",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/576",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Mhonchumo*",
    "father_husband": "Longase",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/577",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Janbemo*",
    "father_husband": "Lt. Ntsemo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/578",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Rentsamo",
    "father_husband": "Tsikuvo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/579",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Nchumbemo*",
    "father_husband": "Lt. Tsamomo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/580",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Allond*",
    "father_husband": "Tsamomo odyuo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/581",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 10/4/2024; Reason: unwilling to work"
  },
  {
    "name": "Elon Odyuo",
    "father_husband": "",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/581",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Nzan*",
    "father_husband": "Nyimthungo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/582",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Tsenthungo",
    "father_husband": "Wothungo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/583",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Shoben",
    "father_husband": "Kirhyuo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/584",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Tsanthungo*",
    "father_husband": "Lt. Zuthungo",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/585",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yanbemo*",
    "father_husband": "Nchumomo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/586",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Mhathung",
    "father_husband": "Lt.Yiramo",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/587",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "yanphamo",
    "father_husband": "Sulumo",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/588",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Tsulumo*",
    "father_husband": "Lt. kiasao",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/589",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Tsulumo*",
    "father_husband": "Lt.Kiasao",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/590",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Tsumomo*",
    "father_husband": "sulumo",
    "gender": "M",
    "age": "58",
    "job_card": "NL-04-003-003-003/591",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Nchemo*",
    "father_husband": "Tsamomo",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/592",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Suben",
    "father_husband": "Lt. Nchumbomo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/593",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Nchumo*",
    "father_husband": "Lt.thungnyimo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/594",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Nyimshio*",
    "father_husband": "",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/595",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 29/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Tsenbemo*",
    "father_husband": "Thungjamo",
    "gender": "M",
    "age": "46",
    "job_card": "NL-04-003-003-003/596",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Shatio*",
    "father_husband": "",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/597",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Nribemo*",
    "father_husband": "Phyojamo",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/598",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "yanthi*",
    "father_husband": "",
    "gender": "M",
    "age": "48",
    "job_card": "NL-04-003-003-003/599",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Womongo*",
    "father_husband": "Lt.Shanbamo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/600",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Jenio*",
    "father_husband": "Lt. Nrao",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/601",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Chiben*",
    "father_husband": "Mhonyimo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/602",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Mhonkao*",
    "father_husband": "Lt. nthungo",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/603",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Mhonchbi",
    "father_husband": "",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/604",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Mhabemo",
    "father_husband": "Lt. Azamo",
    "gender": "M",
    "age": "68",
    "job_card": "NL-04-003-003-003/605",
    "issue_date": "20/10/2008",
    "remarks": ""
  },
  {
    "name": "Yanban*",
    "father_husband": "Phachio",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/606",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Nribemo*",
    "father_husband": "",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/607",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nrithung*",
    "father_husband": "Akhango",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/608",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Khomen*",
    "father_husband": "Lt. Tsumongo",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/609",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Nrinyimo*",
    "father_husband": "Lt. Phyochio",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/610",
    "issue_date": "20/10/2008",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Mary*",
    "father_husband": "Chilo",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/611",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "R.Thungdemo*",
    "father_husband": "Ratsemo",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/612",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Lobomo*",
    "father_husband": "Lt.Elansao",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/613",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Kilow*",
    "father_husband": "Kingo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/614",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Thungjan",
    "father_husband": "Pankao",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/615",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "Mhonthung*",
    "father_husband": "Lt.Yanlow",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/616",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Nyamo.K*",
    "father_husband": "Khonyimo",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/617",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Chibemo*",
    "father_husband": "Lt.Fuchumo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/618",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Tumbemo*",
    "father_husband": "Salamo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/619",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Abei*",
    "father_husband": "Lt.Francis",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/620",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Renbi*",
    "father_husband": "Nkhayimo",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/621",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Nsamongo*",
    "father_husband": "Vanrhyuo",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/622",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Mhao*",
    "father_husband": "Lt.Chichamo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/623",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 1/4/2020; Reason: Incorrect Job Card"
  },
  {
    "name": "Chumbenthung",
    "father_husband": "Lt.Nchomo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/624",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "Rasamo",
    "father_husband": "Lt.Yamomgo",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/625",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "Mhonyamo*",
    "father_husband": "Ponthungo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/626",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Libemo",
    "father_husband": "Chibemo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/627",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "M.John",
    "father_husband": "Mhao",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/628",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "Thungchibemo",
    "father_husband": "Sangmomo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/629",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "William*",
    "father_husband": "Yankhumo",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/630",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Loyibeni*",
    "father_husband": "Jacob",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/631",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Easther*",
    "father_husband": "Lacob",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/632",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Nyanbemo*",
    "father_husband": "Yibemo",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/633",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "Thungjanbemo",
    "father_husband": "Chumlamo",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/634",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "Wobanthung",
    "father_husband": "Y.Nsemo",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/635",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "Shoben*",
    "father_husband": "Lt.Kirhyuo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/636",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Yantsuthung",
    "father_husband": "Rabomo",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/637",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "Nchumthung*",
    "father_husband": "Akhochia",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/638",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "Rhanjanvu*",
    "father_husband": "Lt.Shankao",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/639",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Sovung*",
    "father_husband": "Yilo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/640",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Jonny",
    "father_husband": "Orensao",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/641",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "Nlumsanga*",
    "father_husband": "Wosanlo",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/642",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Sorenthung*",
    "father_husband": "Sulanthung",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/643",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Yanasao*",
    "father_husband": "Womongo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/644",
    "issue_date": "4/4/2013",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "Meribeni",
    "father_husband": "Nchumbemo",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/645",
    "issue_date": "4/4/2013",
    "remarks": ""
  },
  {
    "name": "MHONDAMO*",
    "father_husband": "AKHENO",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/647",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "RHANBEMO*",
    "father_husband": "AREMO",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/648",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "OPONTHUNG*",
    "father_husband": "Wobansao",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/649",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 24/4/2025; Reason: unwilling to work"
  },
  {
    "name": "Obonthung Lotha",
    "father_husband": "",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/649",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "ABEMO*",
    "father_husband": "RONDEMO",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/650",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "SACHUMO",
    "father_husband": "RHONDEMO",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/651",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "PITHUNGO",
    "father_husband": "SABEMO",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/652",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "ONEMO*",
    "father_husband": "Mhao kithan",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/653",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 10/4/2024; Reason: unwilling to work"
  },
  {
    "name": "Orenbomo M Kithan",
    "father_husband": "",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/653",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "SHANCHOBENI*",
    "father_husband": "KIMONG",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/654",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "LIMATHUNG",
    "father_husband": "AROHOMO",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/655",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "LICHAMO*",
    "father_husband": "VANCHAMO",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/656",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "LIREMO*",
    "father_husband": "NSAMO",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/657",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "SHAMOMO*",
    "father_husband": "OPONTHUNG",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/658",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "NCHUMO*",
    "father_husband": "NSEMO",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/659",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "CHEMIO*",
    "father_husband": "YIHAMO",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/660",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "THUNGJAMO*",
    "father_husband": "",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/661",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "ABENTHUNG*",
    "father_husband": "MHONCHUMO",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/662",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "AIWA*",
    "father_husband": "",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/663",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Non-existent in Panchayat"
  },
  {
    "name": "NCHUMBEMO*",
    "father_husband": "RATSEMO",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/664",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "MHONYAMO*",
    "father_husband": "",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/665",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "KHADAO*",
    "father_husband": "THUNGI",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/666",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "LONGSHITHUNG*",
    "father_husband": "KHODAO",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/667",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "MONGTHUNGO*",
    "father_husband": "OPON",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/668",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "YAMPOTHUNG",
    "father_husband": "RENJAMO",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/669",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "NCHUMBEMO",
    "father_husband": "SHAN",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/670",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "NTSEMO*",
    "father_husband": "RABEN",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/671",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 30/7/2025; Reason: Not willing to work"
  },
  {
    "name": "PITHUNGO*",
    "father_husband": "OVUNG",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/672",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "RABENI*",
    "father_husband": "SHANJO",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/673",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "THUNGBENI*",
    "father_husband": "MHAO",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/674",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "MHATHUNG",
    "father_husband": "KHOCHAMO",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/675",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "CHOBATHUNG*",
    "father_husband": "OCHINIO",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/676",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "NCHUMTHUNG*",
    "father_husband": "R.LOTHA",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/677",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "MOTSUTHUNG*",
    "father_husband": "YIHAMO",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/678",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "RONI*",
    "father_husband": "YANSATHUNG",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/679",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "RAJAMO*",
    "father_husband": "OPONTHUNG",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/680",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "KHYOTHUNGO*",
    "father_husband": "YANTSAO",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/681",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "OPONSALE*",
    "father_husband": "YANBEN",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/682",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "ARHONI",
    "father_husband": "THUNGCHIO",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/683",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "RHONSUTHUNG*",
    "father_husband": "YANPVU",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/684",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "YIBEN",
    "father_husband": "OREMO",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/685",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "YAMAO*",
    "father_husband": "SHANJO",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/686",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "EKON",
    "father_husband": "PISAO",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/687",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "EKYEMO*",
    "father_husband": "JOHN",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/688",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "RHONTHUNGO*",
    "father_husband": "ABEMO",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/689",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "LIBEMO*",
    "father_husband": "ORENSAO",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/690",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "PETHUNGO*",
    "father_husband": "SABEMO",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/691",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "RASALI*",
    "father_husband": "OPONO",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/692",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "SABENI*",
    "father_husband": "RIKIO",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/693",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "MYINGTHUNGLO*",
    "father_husband": "MHAMO",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/694",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "VANCHAMO*",
    "father_husband": "AROHOMO",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/695",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "LIBENTHUNG",
    "father_husband": "RHANJAMO",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/696",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "KIMONGO*",
    "father_husband": "NCHAMO",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/697",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "JAMES*",
    "father_husband": "SULAMO",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/698",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "AKHYALO*",
    "father_husband": "SUMLAMO",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/699",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "MHONBEMO*",
    "father_husband": "KHOSHAKO",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/700",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Not willing to work"
  },
  {
    "name": "LIBEMO*",
    "father_husband": "RABEMO",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/701",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "MANCHIO",
    "father_husband": "WZEO",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/702",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "WILLIAM*",
    "father_husband": "TONTIO",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/703",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "NCHUMTHUNG",
    "father_husband": "RAKOMO",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/704",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "PISAMO*",
    "father_husband": "OREN",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/705",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "RENJAMO*",
    "father_husband": "KHOSHAKO",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/706",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "RAMONGI*",
    "father_husband": "AMONGO",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/707",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "MAILA*",
    "father_husband": "RANCHIO",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/708",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "NONGOTHUNG",
    "father_husband": "RENJAMO",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/709",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "YAMPOTHUNG*",
    "father_husband": "SENTSU",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/710",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "SHENJAMO",
    "father_husband": "EKYEMO",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/711",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "PISAMOO*",
    "father_husband": "RAKHO",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/712",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 20/10/2024; Reason: Incorrect Job Card"
  },
  {
    "name": "RENCHITHUNG*",
    "father_husband": "ASHEMO",
    "gender": "M",
    "age": "19",
    "job_card": "NL-04-003-003-003/713",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "ORENTHUNG*",
    "father_husband": "KHOCHAMO",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/714",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "NZAMO*",
    "father_husband": "YANPU",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/715",
    "issue_date": "5/5/2014",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "NCHUMBENI",
    "father_husband": "SACHIO",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/716",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "AJANO",
    "father_husband": "ECHIO",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/717",
    "issue_date": "5/5/2014",
    "remarks": ""
  },
  {
    "name": "CHUMCHANO TSOPOE",
    "father_husband": "LIPOMO TSOPOE",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/719",
    "issue_date": "25/6/2018",
    "remarks": ""
  },
  {
    "name": "WOSUMI TSOPOE",
    "father_husband": "NCHAMO KITHAN",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/720",
    "issue_date": "25/6/2018",
    "remarks": ""
  },
  {
    "name": "Lawrence Kithan",
    "father_husband": "Wothungo kithan",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/721",
    "issue_date": "25/5/2023",
    "remarks": ""
  },
  {
    "name": "Nchamo Odyuo*",
    "father_husband": "Kingo Humtsoe",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/722",
    "issue_date": "25/5/2023",
    "remarks": "Deleted w.e.f. 20/5/2023; Reason: unwilling to work"
  },
  {
    "name": "Chenithung Humtsoe",
    "father_husband": "",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/722",
    "issue_date": "25/5/2023",
    "remarks": ""
  },
  {
    "name": "Abenthung Tsopoe",
    "father_husband": "Yankhumo Tsopoe",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/723",
    "issue_date": "25/5/2023",
    "remarks": ""
  },
  {
    "name": "Benthungo Odyuo",
    "father_husband": "Nrithung",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/724",
    "issue_date": "25/5/2023",
    "remarks": ""
  },
  {
    "name": "P Thungchanbemo Odyuo",
    "father_husband": "Pithungo",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/725",
    "issue_date": "25/5/2023",
    "remarks": ""
  },
  {
    "name": "Mhonchumo P",
    "father_husband": "Phyophio Humtsoe",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/726",
    "issue_date": "25/5/2023",
    "remarks": ""
  },
  {
    "name": "Mhonchumi Shitiri",
    "father_husband": "Renao",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/727",
    "issue_date": "25/5/2023",
    "remarks": ""
  },
  {
    "name": "Lumdemu Enny",
    "father_husband": "Nkhao",
    "gender": "F",
    "age": "77",
    "job_card": "NL-04-003-003-003/728",
    "issue_date": "25/5/2023",
    "remarks": ""
  },
  {
    "name": "Khyingro Odyuo*",
    "father_husband": "Nymsao Odyuo",
    "gender": "M",
    "age": "57",
    "job_card": "NL-04-003-003-003/729",
    "issue_date": "",
    "remarks": ""
  },
  {
    "name": "Chumyani",
    "father_husband": "Zubenthung",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/730",
    "issue_date": "20/5/2023",
    "remarks": ""
  },
  {
    "name": "Libeni Tsopoe",
    "father_husband": "Chipemo Kithan",
    "gender": "F",
    "age": "57",
    "job_card": "NL-04-003-003-003/731",
    "issue_date": "20/5/2023",
    "remarks": ""
  },
  {
    "name": "Tsanyimi Kithan",
    "father_husband": "Yamtsuo",
    "gender": "F",
    "age": "70",
    "job_card": "NL-04-003-003-003/732",
    "issue_date": "20/5/2023",
    "remarks": ""
  },
  {
    "name": "Yikhyau Odyuo",
    "father_husband": "Avungo",
    "gender": "F",
    "age": "59",
    "job_card": "NL-04-003-003-003/733",
    "issue_date": "20/5/2023",
    "remarks": ""
  },
  {
    "name": "Y Zana Tsopoe",
    "father_husband": "Yantsomo Tsopoe",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/734",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chibeni Kithan",
    "father_husband": "Ngheo Kithan",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/735",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Echamo Odyuo",
    "father_husband": "Renchamo odyuo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/736",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yankhorao Shitiri",
    "father_husband": "Remomo Shitiri",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/737",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ezomo Odyuo",
    "father_husband": "Nchamo Odyuo",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/738",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Abeni",
    "father_husband": "Mhonyimo",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/739",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Wobenthung Odyuo",
    "father_husband": "Longshithung",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/740",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Abilo Ovung",
    "father_husband": "Mhonchumo Ovung",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/741",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzano Enny",
    "father_husband": "Pinimo",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/742",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhayani Enny",
    "father_husband": "L Aben Enny",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/743",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Echungbeni Odyuo",
    "father_husband": "Titus Odyuo",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/744",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "R Longshi Odyuo",
    "father_husband": "Remomo Odyuo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/745",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Alono Odyuo",
    "father_husband": "Yihamo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/746",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumbeno Enni",
    "father_husband": "Mhathung",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/747",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "P Nichethung",
    "father_husband": "Peter Tungoe",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/748",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Womoni Shitiri",
    "father_husband": "Phyokhamo",
    "gender": "F",
    "age": "67",
    "job_card": "NL-04-003-003-003/749",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Renchumi T Odyuo",
    "father_husband": "Tsenchie Odyuo",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/750",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "C Aaron",
    "father_husband": "Chibemo",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/751",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhao Tungoe",
    "father_husband": "Yapenshio Tungoe",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/752",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yisali tungoe",
    "father_husband": "Pfubemo",
    "gender": "F",
    "age": "65",
    "job_card": "NL-04-003-003-003/753",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Limathung Odyuo",
    "father_husband": "Nkhanimo",
    "gender": "M",
    "age": "60",
    "job_card": "NL-04-003-003-003/754",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Rosalane odyuo",
    "father_husband": "Mhonsao",
    "gender": "F",
    "age": "64",
    "job_card": "NL-04-003-003-003/755",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lotus Odyuo",
    "father_husband": "Benathung Odyuo",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/756",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zubeni odyuo",
    "father_husband": "Nthungo",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/757",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yinyimi",
    "father_husband": "Pankao Odyuo",
    "gender": "F",
    "age": "65",
    "job_card": "NL-04-003-003-003/758",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Benathung odyuo",
    "father_husband": "N nchamo Odyuo",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/759",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chanchilo Odyuo",
    "father_husband": "Phanthungo",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/760",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lumjano Tungoe",
    "father_husband": "Peter tungoe",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/761",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Dekia Odyuo",
    "father_husband": "Khothungo Odyuo",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/762",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Daniel Odyuo",
    "father_husband": "",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/763",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Benthunglo Kinghen",
    "father_husband": "Yihamo",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/764",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhalo Kikon",
    "father_husband": "Pinimo",
    "gender": "F",
    "age": "59",
    "job_card": "NL-04-003-003-003/765",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "K Jonah",
    "father_husband": "Nrao",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/766",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lotsuv Kinghen",
    "father_husband": "Yanphani",
    "gender": "F",
    "age": "72",
    "job_card": "NL-04-003-003-003/767",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Y Lilamo Ennio",
    "father_husband": "Yenchamo Ennio",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/768",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Bario Kithan",
    "father_husband": "Tsenchio",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/769",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zuchamo Kithan",
    "father_husband": "Yampothung Kithan",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/770",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Emamo Enny",
    "father_husband": "Yanpvu Enny",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/771",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nyimbeni Patton",
    "father_husband": "Fuchumo",
    "gender": "F",
    "age": "57",
    "job_card": "NL-04-003-003-003/772",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yibemo Kithan",
    "father_husband": "Yibemo Kithan",
    "gender": "M",
    "age": "78",
    "job_card": "NL-04-003-003-003/773",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chonben Kithan",
    "father_husband": "Mrithung Kithan",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/774",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Njano Ennio",
    "father_husband": "Kiasao",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/775",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Phyosao Patton",
    "father_husband": "Rhanchumo Patton",
    "gender": "M",
    "age": "75",
    "job_card": "NL-04-003-003-003/776",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yihano patton",
    "father_husband": "Tsanthungo",
    "gender": "F",
    "age": "74",
    "job_card": "NL-04-003-003-003/777",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tumbeno Odyuo",
    "father_husband": "Wonbemo odyuo",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/778",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lozano",
    "father_husband": "Nyimtsemo",
    "gender": "F",
    "age": "46",
    "job_card": "NL-04-003-003-003/779",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungmoni Kithan",
    "father_husband": "Sangmomo",
    "gender": "F",
    "age": "65",
    "job_card": "NL-04-003-003-003/780",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zumchilo",
    "father_husband": "Nzamo lotha",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/781",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Barishumi Kithan",
    "father_husband": "Thungbemo",
    "gender": "F",
    "age": "72",
    "job_card": "NL-04-003-003-003/782",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Senjumbeni kikon",
    "father_husband": "Orenthung kikon",
    "gender": "F",
    "age": "24",
    "job_card": "NL-04-003-003-003/783",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungsali Kithan",
    "father_husband": "Nthio Odyuo",
    "gender": "F",
    "age": "66",
    "job_card": "NL-04-003-003-003/784",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhademo Kithan",
    "father_husband": "Yanpothung Kithan",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/785",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhayani Jami",
    "father_husband": "Yanbomo Jami",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/786",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chimomo Kithan",
    "father_husband": "Opvuo Kithan",
    "gender": "M",
    "age": "88",
    "job_card": "NL-04-003-003-003/787",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nrhono Patton",
    "father_husband": "Nyamo",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/788",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Augstine Patton",
    "father_husband": "John Lotha",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/789",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzamongi Humtsoe",
    "father_husband": "Phyosao",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/790",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonbeni Humstoe",
    "father_husband": "Zubenthung Humtsoe",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/791",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zubenthung Humstoe",
    "father_husband": "Longshi Humtsoe",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/792",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mongthungo Humstoe",
    "father_husband": "Bonshamo humtsoe",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/793",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonyimi Patton",
    "father_husband": "Fuchumo",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/794",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Areno Patton",
    "father_husband": "Lisemo",
    "gender": "F",
    "age": "80",
    "job_card": "NL-04-003-003-003/795",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nchumbeni Patton",
    "father_husband": "Njamo",
    "gender": "F",
    "age": "57",
    "job_card": "NL-04-003-003-003/796",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lucy Patton",
    "father_husband": "Rakomo",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/797",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yilumo Patton",
    "father_husband": "Francis",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/798",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzano Ezung",
    "father_husband": "Thepemo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/799",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "zaben Patton",
    "father_husband": "Francis",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/800",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Pvuchithung Patton",
    "father_husband": "Amos patton",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/801",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Elizabeth Kithan",
    "father_husband": "Yichungo kithan",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/802",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lumbeni Patton",
    "father_husband": "Nkhanyimo Patton",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/803",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Abemo Kithan",
    "father_husband": "Ntsemo kithan",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/804",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Bonthungo Kithan",
    "father_husband": "Thungben Kithan",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/805",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Khonimo Tsopoe",
    "father_husband": "Wobansao Tsopoe",
    "gender": "M",
    "age": "63",
    "job_card": "NL-04-003-003-003/806",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lipenthung Kikon",
    "father_husband": "Pyingkiti kikon",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/807",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Rhanchamu Patton",
    "father_husband": "Ramvuo",
    "gender": "F",
    "age": "85",
    "job_card": "NL-04-003-003-003/808",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonthung Kithan",
    "father_husband": "Rilow Kithan",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/809",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "N Abel kinghen",
    "father_husband": "Nrao Kinghen",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/810",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Bilano Odyuo",
    "father_husband": "Yanrhon Odyuo",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/811",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonbeni tsopoe",
    "father_husband": "Athongo tsopoe",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/812",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzanrhoni E Kithan",
    "father_husband": "Etongbemo Kithan",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/813",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nchenthung E Kithan",
    "father_husband": "",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/814",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Sandemo E Kithan",
    "father_husband": "",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/815",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lothungu Tsopoe",
    "father_husband": "Rentsamo Tsopoe",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/816",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungjanbeni M Tsopoe",
    "father_husband": "Mhathung Tsopoe",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/817",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Loyibeni Tsopoe",
    "father_husband": "Khothungo Tsopoe",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/818",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Y chumbeni",
    "father_husband": "Yantsomo Tsopoe",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/819",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lumjano Kithan",
    "father_husband": "Etsamo Kithan",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/820",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yithungo S Tsopoe",
    "father_husband": "Shanrhumo Tsopoe",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/821",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mary Kithan",
    "father_husband": "Chobhathung Kithan",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/822",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhabeni Tsopoe",
    "father_husband": "Phyokhamo Odyuo",
    "gender": "F",
    "age": "63",
    "job_card": "NL-04-003-003-003/823",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Jomoni Jami",
    "father_husband": "Nyansao Kithan",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/824",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Wobeni Enny",
    "father_husband": "Yibemo Enny",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/825",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Atheo Kithan",
    "father_husband": "Nyimthungo Kithan",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/826",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Aben N kithan",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/827",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zanabeni odyuo",
    "father_husband": "Wonbemo Odyuo",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/828",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Prescilla Tsopoe",
    "father_husband": "Kilow Tsopoe",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/829",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Martha Tsopoe",
    "father_husband": "Tongti Tsopoe",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/830",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Jenibemo S Tsopoe",
    "father_husband": "Shanrhumo",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/831",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Rosaline N Khenchung",
    "father_husband": "Nrhomo Khenchung",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/832",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Longrhoni w Patton",
    "father_husband": "Wobemo Patton",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/833",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Longshibemo Tsopoe",
    "father_husband": "Nribemo Tsopoe",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/834",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Rose Tsopoe",
    "father_husband": "Kilow Tsopoe",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/835",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zanthungo Kithan",
    "father_husband": "Ralio Kithan",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/836",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zajano y",
    "father_husband": "Yanbomo Jami",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/837",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tsenrano Jami",
    "father_husband": "Shamomo Jami",
    "gender": "F",
    "age": "46",
    "job_card": "NL-04-003-003-003/838",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lotsani",
    "father_husband": "Lumchio Tungoe",
    "gender": "F",
    "age": "78",
    "job_card": "NL-04-003-003-003/839",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nrhono Tsopoe",
    "father_husband": "Chimomo",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/840",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "K Wochothung Tsopoe",
    "father_husband": "Kilow Tsopoe",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/841",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumbeno L Tsopoe",
    "father_husband": "Likhamo Tsopoe",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/842",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ezanthung K kithan",
    "father_husband": "Khangshio Kithan",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/843",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thamoni Patton",
    "father_husband": "Lomongo Humtsoe",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/844",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ayiingla Humtsoe",
    "father_husband": "Nkhanyimo",
    "gender": "F",
    "age": "77",
    "job_card": "NL-04-003-003-003/845",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ajanbeni Tsopoe",
    "father_husband": "Thungchibemo Tsopoe",
    "gender": "F",
    "age": "19",
    "job_card": "NL-04-003-003-003/846",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lideno Tsopoe",
    "father_husband": "Tongti tsopoe",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/847",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Angela Shitiri",
    "father_husband": "Hawo shitiri",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/848",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungdeno Shitiri",
    "father_husband": "Hawo",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/849",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Punnolo Okhyopuvi",
    "father_husband": "Lamben",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/850",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ashenthung Shiteri",
    "father_husband": "Phawo Shitiri",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/851",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chandemo",
    "father_husband": "Rachi",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/852",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungjanbeni Kithan",
    "father_husband": "Phyochumo Kithan",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/853",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonchumi Kithan",
    "father_husband": "Mongchio Kithan",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/854",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Phyochumi Tsopoe",
    "father_husband": "Tsamomo",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/855",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yantsani Tsopoe",
    "father_husband": "Yibomo",
    "gender": "F",
    "age": "75",
    "job_card": "NL-04-003-003-003/856",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nyamongo Z Tsopoe",
    "father_husband": "Zubemo Tsopoe",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/857",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumbani Kithan",
    "father_husband": "Khonao patton",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/858",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "M Lavano Yanthan",
    "father_husband": "Mhonchan yanthan",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/859",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Roben Humtsoe",
    "father_husband": "Zizao Humtsoe",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/860",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Benchumo Kithan",
    "father_husband": "Khonshio Kithan",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/861",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhabeni Enney",
    "father_husband": "Chonthungo Enney",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/862",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Oreno Tsopoe",
    "father_husband": "Wonthung Tsopoe",
    "gender": "F",
    "age": "82",
    "job_card": "NL-04-003-003-003/863",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ritseno Tsopoe",
    "father_husband": "Wosumlo",
    "gender": "F",
    "age": "70",
    "job_card": "NL-04-003-003-003/864",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "R Rose",
    "father_husband": "Robin",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/865",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Echungbemo S Tsopoe",
    "father_husband": "Shanrhumo Tsopoe",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/866",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lothungu Jami",
    "father_husband": "Phyokhamo",
    "gender": "F",
    "age": "56",
    "job_card": "NL-04-003-003-003/867",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ethel Ennio",
    "father_husband": "Ahao Ennio",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/868",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tumchobemo Shitiri",
    "father_husband": "P Hawo Shitiri",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/869",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Kilumo Enny",
    "father_husband": "Womomo Enny",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/870",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "R Yenkilo Odyuo",
    "father_husband": "Chimomo",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/871",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Renchumi Kinghen",
    "father_husband": "Chenirao Kinghen",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/872",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhomo Tsopoe",
    "father_husband": "Kirhyio Tsopoe",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/873",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Elisha T Ennie",
    "father_husband": "Thungbemo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/874",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chonchithung Tungoe",
    "father_husband": "Peter Tungoe",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/875",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "M Yilobemo",
    "father_husband": "Mhonyamo Shitiri",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/876",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumchano Tungoi",
    "father_husband": "Nyanchumo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/877",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhalo Odyuo",
    "father_husband": "Nrao",
    "gender": "F",
    "age": "59",
    "job_card": "NL-04-003-003-003/878",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Benchumi Odyuo",
    "father_husband": "Renchamo odyuo",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/879",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "R Suremo Odyuo",
    "father_husband": "",
    "gender": "M",
    "age": "56",
    "job_card": "NL-04-003-003-003/880",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "R Lichumlo",
    "father_husband": "P renchamo Odyuo",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/881",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "N Rhonbeni Yanthan",
    "father_husband": "Nzanthung Yanthan",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/882",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Bremey Kinghen",
    "father_husband": "Chichamo Kinghan",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/883",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Rhonbeni M lotha",
    "father_husband": "Mhontsen",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/884",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhao Kinghen",
    "father_husband": "Chichamo Kinghen",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/885",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yanpani",
    "father_husband": "Atsemo",
    "gender": "F",
    "age": "76",
    "job_card": "NL-04-003-003-003/886",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Khochev Enny",
    "father_husband": "Yanpvu",
    "gender": "F",
    "age": "76",
    "job_card": "NL-04-003-003-003/887",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Khonchiv Odyuo",
    "father_husband": "Wonbemo odyuo",
    "gender": "F",
    "age": "56",
    "job_card": "NL-04-003-003-003/888",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Sulanthung Shitiri",
    "father_husband": "Anthony Shitiri",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/889",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chobhalo kinghen",
    "father_husband": "Npyingo",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/890",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "R Zanbenthung Kinghen",
    "father_husband": "Renbenthung kinghen",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/891",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ethel Shitiri",
    "father_husband": "Nghao",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/892",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lichumlo Shitiri",
    "father_husband": "Amango",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/893",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Wochobeni lotha",
    "father_husband": "Yanpvu",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/894",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Liyingbeni Odyuo",
    "father_husband": "Renchamo Odyuo",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/895",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Meriyani",
    "father_husband": "K N John",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/896",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Loyibeni W patton",
    "father_husband": "Nzeo",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/897",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zubeni patton",
    "father_husband": "Raphamo",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/898",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ali Jungio",
    "father_husband": "Khochirao",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/899",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungbeni Patton",
    "father_husband": "Elhio Patton",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/900",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ruthy Patton",
    "father_husband": "",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/901",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Soyingbeni Humtsoe",
    "father_husband": "Nramo",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/902",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Renbeni Z Murry",
    "father_husband": "Zantsemo Murry",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/903",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lumdemu Kithan",
    "father_husband": "Yanlow",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/904",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Oded Humtsoe",
    "father_husband": "Rakomo Humtsoe",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/905",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzilo Patton",
    "father_husband": "Zuthungo",
    "gender": "F",
    "age": "70",
    "job_card": "NL-04-003-003-003/906",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Epibeni Kithan",
    "father_husband": "sangmomo",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/907",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Janbeni Shitiri",
    "father_husband": "Kerhyuo",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/908",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungchano Humtsoe",
    "father_husband": "sangmomo",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/909",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Vamoni Patton",
    "father_husband": "Khumdemo",
    "gender": "F",
    "age": "72",
    "job_card": "NL-04-003-003-003/910",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thomoni Patton",
    "father_husband": "Chumchamo",
    "gender": "F",
    "age": "71",
    "job_card": "NL-04-003-003-003/911",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumoni Patton",
    "father_husband": "Phyophio",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/912",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Phanrhoni Humstoe",
    "father_husband": "Sankao",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/913",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Wolumi Patton",
    "father_husband": "Yanakhomo kithan",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/914",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumben kithan",
    "father_husband": "Yikhyao kithan",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/915",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nnungshumi Kithan",
    "father_husband": "Mhonchumo",
    "gender": "F",
    "age": "57",
    "job_card": "NL-04-003-003-003/916",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Grace Kithan",
    "father_husband": "Francis",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/917",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Jonas Kithan",
    "father_husband": "Phanchio Kithan",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/918",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "T Lichani Humtsoe",
    "father_husband": "Sungrithung humstoe",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/919",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Achumlo humstoe",
    "father_husband": "Yizao",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/920",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Anyimro Patton",
    "father_husband": "Wosemo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/921",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Renben Humtsoe",
    "father_husband": "John Nthungyamo",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/922",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Wolumi Humstoe",
    "father_husband": "Nthungo",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/923",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nthungyamo humstoe",
    "father_husband": "Lt Humstoe",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/924",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nyimtseno Kithan",
    "father_husband": "Lisao",
    "gender": "F",
    "age": "69",
    "job_card": "NL-04-003-003-003/925",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zanbeni patton",
    "father_husband": "thungbemo patton",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/926",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhabamo Patton",
    "father_husband": "Sacheo Patton",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/927",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "S Vamoni patton",
    "father_husband": "sacheo Patton",
    "gender": "F",
    "age": "80",
    "job_card": "NL-04-003-003-003/928",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonlumi Patton",
    "father_husband": "B Janbemo",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/929",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Akyono Kithan",
    "father_husband": "Lisao",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/930",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Loyibeni Humtsoe",
    "father_husband": "Wopansao",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/931",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Pichamo patton",
    "father_husband": "Elansao patton",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/932",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tsalamo patton",
    "father_husband": "N John Patton",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/933",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nchumlo Humstoe",
    "father_husband": "Tsanchumo",
    "gender": "F",
    "age": "80",
    "job_card": "NL-04-003-003-003/934",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Kumchilo Patton",
    "father_husband": "Yonbenshio",
    "gender": "F",
    "age": "65",
    "job_card": "NL-04-003-003-003/935",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mercy Yanthan",
    "father_husband": "Chenio yanthan",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/936",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yiponi",
    "father_husband": "Nyimtsemo",
    "gender": "F",
    "age": "77",
    "job_card": "NL-04-003-003-003/937",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Veronica Humtsoe",
    "father_husband": "Elamo Humstoe",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/938",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "M Mhonbemo Humtsoe",
    "father_husband": "Mathew Humtsoe",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/939",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Gloria Humtsoe",
    "father_husband": "Mathew",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/940",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lolano patton",
    "father_husband": "Chumlamo Patton",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/941",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzanbeni Patton",
    "father_husband": "Jenikhon",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/942",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungyani Shitiri",
    "father_husband": "Woben Shtiri",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/943",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Meribeni Humtsoe",
    "father_husband": "Mathew Humtsoe",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/944",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zachamo vincent Humtsoe",
    "father_husband": "",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/945",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Renbonthung Erui",
    "father_husband": "Lt Pimomo Erui",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/946",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Terance Patton",
    "father_husband": "KN John Patton",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/947",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Myingthunglo Patton",
    "father_husband": "",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/948",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nchokalo Humtsoe",
    "father_husband": "Benjan",
    "gender": "F",
    "age": "71",
    "job_card": "NL-04-003-003-003/949",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tsenzamo patton",
    "father_husband": "Nramo Patton",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/950",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Meriyani P kithan",
    "father_husband": "Phyochumo Kithan",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/951",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yanbolumi Patton",
    "father_husband": "Phankao",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/952",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lizamo Patton",
    "father_husband": "Khyolamo Nyamo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/953",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Athungbeni Patton",
    "father_husband": "Thungchumo Patton",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/954",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Stephen E Patton",
    "father_husband": "Elhio Patton",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/955",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "T Zubemo Kithan",
    "father_husband": "Thenhyao kithan",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/956",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Martha kithan",
    "father_husband": "Sacheo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/957",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Pilano R Kithan",
    "father_husband": "Renbonthung Kithan",
    "gender": "F",
    "age": "20",
    "job_card": "NL-04-003-003-003/958",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lawrance Patton",
    "father_husband": "Nyimthungo Patton",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/959",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lokyonglo",
    "father_husband": "Yanvhamo",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/960",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonlumi Kithan",
    "father_husband": "Yantsemo",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/961",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yinimi Kithan",
    "father_husband": "Chonchio",
    "gender": "F",
    "age": "95",
    "job_card": "NL-04-003-003-003/962",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Kumchio Humtsoe",
    "father_husband": "Kilozao Humtsoe",
    "gender": "M",
    "age": "74",
    "job_card": "NL-04-003-003-003/963",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzanbeni Kithan",
    "father_husband": "Khyolamo",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/964",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungbeni odyuo",
    "father_husband": "Njahungo",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/965",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Oponium Kinghen",
    "father_husband": "Ntsomo Kinghen",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/966",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Amos Odyuo",
    "father_husband": "Yama odyuo",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/967",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Elanthung Tungoi",
    "father_husband": "Lumti Tungoi",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/968",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Jamithung S Jami",
    "father_husband": "Sabemo Jami",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/969",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zaben Odyuo",
    "father_husband": "Lidemo odyuo",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/970",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Toribeni Kikon",
    "father_husband": "Ntsemo Kikon",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/971",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Orentsani Kikon",
    "father_husband": "Sangmomo",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/972",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yichongi Kikon",
    "father_husband": "Phyokhamo",
    "gender": "F",
    "age": "72",
    "job_card": "NL-04-003-003-003/973",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Achumlo L kikon",
    "father_husband": "Liyamo Kikon",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/974",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ntseno Tungoe",
    "father_husband": "Tsekemo Tungoe",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/975",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Abenthung Tungoe",
    "father_husband": "",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/976",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yanboni Tungoi",
    "father_husband": "Nlongtsu",
    "gender": "F",
    "age": "68",
    "job_card": "NL-04-003-003-003/977",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ajamo",
    "father_husband": "Chenithung",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/978",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yanben Tungoe",
    "father_husband": "Chumben",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/979",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thechano",
    "father_husband": "Thungbemo",
    "gender": "F",
    "age": "56",
    "job_card": "NL-04-003-003-003/980",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mungyanthung Mozhui",
    "father_husband": "Tsanchumo Muzhui",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/981",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yanshumthung odyuo",
    "father_husband": "Nghao Odyuo",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/982",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Rahamo Shitiri",
    "father_husband": "Pinimo Shitiri",
    "gender": "M",
    "age": "49",
    "job_card": "NL-04-003-003-003/983",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nyorhoni Odyuo",
    "father_husband": "Mhashio",
    "gender": "F",
    "age": "76",
    "job_card": "NL-04-003-003-003/984",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Soyingbeni",
    "father_husband": "Longshithung",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/985",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nchumbeni Odyuo",
    "father_husband": "Rahomo",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/986",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Orenboni Odyuo",
    "father_husband": "Limomo",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/987",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Khyobamo Enny",
    "father_husband": "Tsenthungo Enny",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/988",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zareni Yanthan",
    "father_husband": "Chumben yanthan",
    "gender": "F",
    "age": "20",
    "job_card": "NL-04-003-003-003/989",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Wobeni Kinghen",
    "father_husband": "Nrao Kinghen",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/990",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "James Kithan",
    "father_husband": "Myinthungo",
    "gender": "M",
    "age": "68",
    "job_card": "NL-04-003-003-003/991",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "A Emilo Kinghen",
    "father_husband": "N Abel Kinghen",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/992",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zaben C",
    "father_husband": "Chibemo",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/993",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mangio",
    "father_husband": "Wonimo",
    "gender": "M",
    "age": "72",
    "job_card": "NL-04-003-003-003/994",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Shanjamo Patton*",
    "father_husband": "",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/994",
    "issue_date": "26/4/2024",
    "remarks": "Deleted w.e.f. 24/9/2024; Reason: unwilling to work"
  },
  {
    "name": "Khudemo Humtsoe",
    "father_husband": "",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/994",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lijanthung Kinghen",
    "father_husband": "Tsenimo Kinghen",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/995",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "K Yanben",
    "father_husband": "Khonyimo Tsopoe",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/996",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Sarah",
    "father_husband": "Kirhyio Tsopoe",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/997",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tumchobeni Tsopoe",
    "father_husband": "Thungbemo Tsopoe",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/998",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Renjani Humtsoe",
    "father_husband": "Mhonyimo Patton",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/999",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonrao Tsopoe",
    "father_husband": "Nribemo Tsopoe",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/1000",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Renbi Tsopoe",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1001",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Suthunglo patton",
    "father_husband": "Salumo Patton",
    "gender": "F",
    "age": "74",
    "job_card": "NL-04-003-003-003/1002",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nremu Patton",
    "father_husband": "Nrio",
    "gender": "F",
    "age": "66",
    "job_card": "NL-04-003-003-003/1003",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yanben Patton",
    "father_husband": "Nkhanyimo Patton",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1004",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lochumi Kithan",
    "father_husband": "Nchumbemo Kithan",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1005",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Suyio Kithan",
    "father_husband": "Longshithung Kithan",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1006",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ezanbemo Kithan",
    "father_husband": "Jonshumo kithan",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1007",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nchuponi Kithan",
    "father_husband": "Nzhehungo",
    "gender": "F",
    "age": "73",
    "job_card": "NL-04-003-003-003/1008",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lobeni Kithan",
    "father_husband": "Athungo",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/1009",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Oreno Kithan",
    "father_husband": "Thungben Kithan",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1010",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chulorhomo Lotha",
    "father_husband": "Sabemo Lotha",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/1011",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tsenyani",
    "father_husband": "Yikhamo",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1012",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lochoni Kithan",
    "father_husband": "Shanrhumo",
    "gender": "F",
    "age": "72",
    "job_card": "NL-04-003-003-003/1013",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zubeni Kithan",
    "father_husband": "Nsemo",
    "gender": "F",
    "age": "46",
    "job_card": "NL-04-003-003-003/1014",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzano N Kithan",
    "father_husband": "Nzinimo Kithan",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/1015",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tsenyani",
    "father_husband": "Aremo Humtsoe",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1016",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lily Enny",
    "father_husband": "Yibemo Enny",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1017",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Hathunglo Enny",
    "father_husband": "Mhonyimo",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/1018",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yitsabemo Enny",
    "father_husband": "Mhonthung Enny",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/1019",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Richard Enny",
    "father_husband": "Yibemo Enny",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1020",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tsenrolo Patton",
    "father_husband": "Zizao",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/1021",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nribeni Patton",
    "father_husband": "Nlumo",
    "gender": "F",
    "age": "69",
    "job_card": "NL-04-003-003-003/1022",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "R Mhonrali Tsopoe",
    "father_husband": "Lumchamo",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/1023",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Loyivani Tsopoe",
    "father_husband": "Ratsi Tsopoe",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1024",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungdeno Humtsoe",
    "father_husband": "Fuchmo",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/1025",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zuthungbeni Kithan",
    "father_husband": "Myingthungo kithan",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/1026",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yanbeni Kithan",
    "father_husband": "Ntsemo Kithan",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/1027",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonchumo Patton",
    "father_husband": "Chilow Patton",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/1028",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Elias",
    "father_husband": "Wothungo patton",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1029",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Shanjamo Patton",
    "father_husband": "",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1030",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Khonthungu",
    "father_husband": "Yanthungo odyuo",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/1031",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Z Yitsabemo Tsopoe",
    "father_husband": "Zubemo tsopoe",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/1032",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Pijano tsopoe",
    "father_husband": "Zubemo Tsopoe",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1033",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Renbeni",
    "father_husband": "Rhonjamo",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1034",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumthungo R Tsopoe",
    "father_husband": "Roben Tsopoe",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/1035",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Myinthunglo kithan",
    "father_husband": "Thungben Kithan",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/1036",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zuchanbemo Jami",
    "father_husband": "Khonchio Jami",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/1037",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Libeni Patton",
    "father_husband": "Phalamo Patton",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/1038",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Marithung R Patton",
    "father_husband": "Renchamo Patton",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/1039",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Jandeno Patton",
    "father_husband": "",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1040",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Kilio Patton",
    "father_husband": "Wojamo Patton",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/1041",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Albert Patton",
    "father_husband": "Kilio Patton",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1042",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yanlumo",
    "father_husband": "Rilumo Kithan",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1043",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumdeno Kithan",
    "father_husband": "",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/1044",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzanbeni Tsopoe",
    "father_husband": "Shamchamo",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/1045",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Longshithung Kithan",
    "father_husband": "Kithan",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/1046",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yizamu Kithan",
    "father_husband": "Renthungo",
    "gender": "F",
    "age": "63",
    "job_card": "NL-04-003-003-003/1047",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Kemerelo Tsopoe",
    "father_husband": "Nribemo Tsopoe",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/1048",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Benchilo Humtsoe",
    "father_husband": "Khudemo Humtsoe",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/1049",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Marina Humtsoe",
    "father_husband": "Achumo",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/1050",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zubemo Humtsoe",
    "father_husband": "Yanbemo Humtsoe",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/1051",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonbemo Humtsoe",
    "father_husband": "Yanbemo",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/1052",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonchumi Humtsoe",
    "father_husband": "Elamo Humtsoe",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/1053",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Woben M humtsoe",
    "father_husband": "Mhonyamo Humtsoe",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1054",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Khotseno humtsoe",
    "father_husband": "Yikhamo",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/1055",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Shanjamo A Humtsoe",
    "father_husband": "aremo Humtsoe",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1056",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "H grace Phom",
    "father_husband": "Hangba",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1057",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lithunglo Humtsoe",
    "father_husband": "Khudemo Humtsoe",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1058",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhabeni Humtsoe",
    "father_husband": "Wothungo Humtsoe",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/1059",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhonchumo humtsoe",
    "father_husband": "Bonshamo humtsoe",
    "gender": "M",
    "age": "55",
    "job_card": "NL-04-003-003-003/1060",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Wosuv Lotha",
    "father_husband": "Yantsuo",
    "gender": "F",
    "age": "63",
    "job_card": "NL-04-003-003-003/1061",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lochumlo Humtsoe",
    "father_husband": "Tsikvuo Jami",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/1062",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nchano Humtsoe",
    "father_husband": "Zizao humtsoe",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/1063",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zanbeni Humtsoe",
    "father_husband": "Salamo",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/1064",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Aben Humtsoe",
    "father_husband": "Chungrithung",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1065",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Kialo humtsoe",
    "father_husband": "Tsumongo",
    "gender": "F",
    "age": "68",
    "job_card": "NL-04-003-003-003/1066",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Tsenrhoni Humtsoe",
    "father_husband": "Nyanchumo Humtsoe",
    "gender": "F",
    "age": "46",
    "job_card": "NL-04-003-003-003/1067",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Motsuo Humtsoe",
    "father_husband": "Khochamo Humtsoe",
    "gender": "M",
    "age": "77",
    "job_card": "NL-04-003-003-003/1068",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zuchobeni Tungoe",
    "father_husband": "Tsikhemo Tungoe",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/1069",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Longaroni Odyuo",
    "father_husband": "Khonben",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/1070",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Liyanthung Kithan",
    "father_husband": "Merithung kithan",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1071",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungyani Kithan",
    "father_husband": "Wothung Kithan",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1072",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "John Lotha",
    "father_husband": "Akhongo Lotha",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/1073",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "R Nzanthung",
    "father_husband": "Ralio Kithan",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1074",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ntseno",
    "father_husband": "Tsumongo Patton",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/1075",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Ethel Kithan",
    "father_husband": "Myingthungo",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1076",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Chumdemo",
    "father_husband": "Mhachan",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/1077",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lobeni Kithan",
    "father_husband": "Jonzamo Patton",
    "gender": "F",
    "age": "75",
    "job_card": "NL-04-003-003-003/1078",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Liban Z Tsapoe",
    "father_husband": "Zubemo",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/1079",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungdemo Shitiri",
    "father_husband": "Mhonyamo Shitiri",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/1080",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Martha Odyuo",
    "father_husband": "Rakhemo Odyuo",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/1081",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Sulan Odyuo",
    "father_husband": "Z Longshi Odyuo",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/1082",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Alyuro A Odyuo",
    "father_husband": "Amos Odyuo",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/1083",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Likao Kithan",
    "father_husband": "Mhao Kithan",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1084",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Zubeni Lotha",
    "father_husband": "Yenchamo Lotha",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1085",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "C Zuchobeni Ezung",
    "father_husband": "Y Lilamo Ennio",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/1086",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Loreni Ennie",
    "father_husband": "Yenchamo Ennie",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/1087",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Bonathung Y Lotha",
    "father_husband": "Yenchamo Lotha",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1088",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzanthung A Patton",
    "father_husband": "Albert Patton",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1089",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nongothung A Patton",
    "father_husband": "Albert",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/1090",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Rentsamo A Patton",
    "father_husband": "",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1091",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Mhayamo Kithan",
    "father_husband": "Longshithung Lotha",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/1092",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Therali L Kithan",
    "father_husband": "Longshithung Kithan",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/1093",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Lishan Tsopoe",
    "father_husband": "Edward Tsopoe",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/1094",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Pilano Lotha",
    "father_husband": "Yanpvu Enny",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/1095",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Yansathung R tsopoe",
    "father_husband": "Renao Lotha",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/1096",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Oponlumi",
    "father_husband": "Renao Tsopoe",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1097",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Limachan Tsopoe",
    "father_husband": "",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/1098",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Thungyani ngullie",
    "father_husband": "Mhonchan",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1099",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Spacy E Tsopoe",
    "father_husband": "Edward Tsopoe",
    "gender": "F",
    "age": "19",
    "job_card": "NL-04-003-003-003/1100",
    "issue_date": "26/4/2024",
    "remarks": ""
  },
  {
    "name": "Nzanthung shitere",
    "father_husband": "Chibemo Shitere",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/1101",
    "issue_date": "24/5/2024",
    "remarks": ""
  },
  {
    "name": "Tsumongo kithan",
    "father_husband": "Phankao Kithan",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/1102",
    "issue_date": "5/8/2024",
    "remarks": ""
  },
  {
    "name": "Yanban Enny",
    "father_husband": "L Aben enny",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/1103",
    "issue_date": "5/8/2024",
    "remarks": ""
  },
  {
    "name": "Titus odyuo",
    "father_husband": "Nchumbemo odyuo",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/1104",
    "issue_date": "5/8/2024",
    "remarks": ""
  },
  {
    "name": "Louis Enni",
    "father_husband": "L Aben Enny",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/1105",
    "issue_date": "5/8/2024",
    "remarks": ""
  },
  {
    "name": "N Rumphio Odyuo",
    "father_husband": "Nkhanyimo Odyuo",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/1106",
    "issue_date": "5/8/2024",
    "remarks": ""
  },
  {
    "name": "Yantsuthung Patton",
    "father_husband": "Rabemo Patton",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/1107",
    "issue_date": "14/9/2024",
    "remarks": ""
  },
  {
    "name": "Shipen Kinghen",
    "father_husband": "Yihamo",
    "gender": "M",
    "age": "42",
    "job_card": "NL-04-003-003-003/1108",
    "issue_date": "3/3/2025",
    "remarks": ""
  },
  {
    "name": "Arenthung Patton*",
    "father_husband": "",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1108",
    "issue_date": "3/3/2025",
    "remarks": "Deleted w.e.f. 18/3/2025; Reason: unwilling to work"
  },
  {
    "name": "William Tsopoe*",
    "father_husband": "",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1108",
    "issue_date": "3/3/2025",
    "remarks": "Deleted w.e.f. 18/3/2025; Reason: unwilling to work"
  },
  {
    "name": "Nsemo Patton",
    "father_husband": "Late Khyolamo patton",
    "gender": "M",
    "age": "66",
    "job_card": "NL-04-003-003-003/1109",
    "issue_date": "26/9/2024",
    "remarks": ""
  },
  {
    "name": "T Yanrenthung Patton",
    "father_husband": "Tsenyimo patton",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/1110",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "W Lokyonglo Tungoe",
    "father_husband": "Woransao Tungoe",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1111",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Nchumbeni enny",
    "father_husband": "Zizao humtsoe",
    "gender": "F",
    "age": "71",
    "job_card": "NL-04-003-003-003/1112",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Likyabeni Kithan",
    "father_husband": "Wodemo kithan",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/1113",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Zubemo T Humtsoe",
    "father_husband": "Tumbemo Humtsoe",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1114",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Janbeni ngullie",
    "father_husband": "Rabemo",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1115",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Wodemo Kithan",
    "father_husband": "Nkhao",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1116",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "R Augustine lotha",
    "father_husband": "N Rumphio lotha",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/1117",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Rhondemo Y Odyuo",
    "father_husband": "Yanthungo odyuo",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1118",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Mhonyamo P Odyuo",
    "father_husband": "Ponthungo Odyuo",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/1119",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Lovungi odyuo",
    "father_husband": "Mhonyamo Odyuo",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1120",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Pilano Patton",
    "father_husband": "Puchumo",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/1121",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Marcus",
    "father_husband": "Kumchio humtsoe",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/1122",
    "issue_date": "16/10/2024",
    "remarks": ""
  },
  {
    "name": "Yironthung Humtsoe",
    "father_husband": "Augustine Humtsoe",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1123",
    "issue_date": "24/2/2025",
    "remarks": ""
  },
  {
    "name": "Tumchobemo Patton",
    "father_husband": "Nzehungo Patton",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/1124",
    "issue_date": "24/2/2025",
    "remarks": ""
  },
  {
    "name": "Yilobemo Patton",
    "father_husband": "Nchumo Patton",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/1125",
    "issue_date": "24/2/2025",
    "remarks": ""
  },
  {
    "name": "Abeni R Tsopoe",
    "father_husband": "Roben Tsopoe",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1126",
    "issue_date": "3/3/2025",
    "remarks": ""
  },
  {
    "name": "K zubenthung",
    "father_husband": "Khyobenthung shitio",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1127",
    "issue_date": "3/3/2025",
    "remarks": ""
  },
  {
    "name": "Tsenchithung Shitio",
    "father_husband": "W Khyobenthung Shitio",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/1128",
    "issue_date": "3/3/2025",
    "remarks": ""
  },
  {
    "name": "Abeni K",
    "father_husband": "",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1129",
    "issue_date": "3/3/2025",
    "remarks": ""
  },
  {
    "name": "Chonben Shitio",
    "father_husband": "Khyobenthung",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/1130",
    "issue_date": "3/3/2025",
    "remarks": ""
  },
  {
    "name": "Lobani shitiri",
    "father_husband": "",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/1131",
    "issue_date": "3/3/2025",
    "remarks": ""
  },
  {
    "name": "Khyobenthung shitio",
    "father_husband": "Late Wosuo lotha",
    "gender": "M",
    "age": "62",
    "job_card": "NL-04-003-003-003/1132",
    "issue_date": "3/3/2025",
    "remarks": ""
  },
  {
    "name": "Mhalo Kithan",
    "father_husband": "Lobeni kithan",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1133",
    "issue_date": "4/3/2025",
    "remarks": ""
  },
  {
    "name": "W Libemo lotha",
    "father_husband": "Wothungo lotha",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/1134",
    "issue_date": "4/3/2025",
    "remarks": ""
  },
  {
    "name": "Emilo Kikon",
    "father_husband": "Renbenthung",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1135",
    "issue_date": "4/3/2025",
    "remarks": ""
  },
  {
    "name": "W Ekonthung Tungoe",
    "father_husband": "Wothungo lotha",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/1136",
    "issue_date": "4/3/2025",
    "remarks": ""
  },
  {
    "name": "Mhabeni lotha",
    "father_husband": "",
    "gender": "F",
    "age": "68",
    "job_card": "NL-04-003-003-003/1137",
    "issue_date": "4/3/2025",
    "remarks": ""
  },
  {
    "name": "Abeno kithan",
    "father_husband": "Longshithung kithan",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1138",
    "issue_date": "4/3/2025",
    "remarks": ""
  },
  {
    "name": "Renthungo Y Humtsoe",
    "father_husband": "Yihamo Humtsoe",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1139",
    "issue_date": "10/3/2025",
    "remarks": ""
  },
  {
    "name": "Achumo Jami",
    "father_husband": "Shamomo Jami",
    "gender": "M",
    "age": "51",
    "job_card": "NL-04-003-003-003/1140",
    "issue_date": "10/3/2025",
    "remarks": ""
  },
  {
    "name": "Mhonbemo Kinghen",
    "father_husband": "Thungjamo",
    "gender": "M",
    "age": "61",
    "job_card": "NL-04-003-003-003/1141",
    "issue_date": "17/3/2025",
    "remarks": ""
  },
  {
    "name": "Orenthung W Odyuo*",
    "father_husband": "Tsumomo Humtsoe",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/1142",
    "issue_date": "18/3/2025",
    "remarks": "Deleted w.e.f. 18/3/2025; Reason: unwilling to work"
  },
  {
    "name": "Merithung Humtsoe",
    "father_husband": "",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/1142",
    "issue_date": "18/3/2025",
    "remarks": ""
  },
  {
    "name": "Meribemo Obed Humtsoe",
    "father_husband": "Jacob Humtsoe",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1143",
    "issue_date": "18/3/2025",
    "remarks": ""
  },
  {
    "name": "Sharon Jami",
    "father_husband": "Khonchio jami",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1144",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Pilano",
    "father_husband": "Nchumthung",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/1145",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "T Lichanbeni Patton",
    "father_husband": "Thungbemo patton",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1146",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Oreno E Ngullie",
    "father_husband": "Ekyimo Ngullie",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1147",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Tsenthungo Kithan",
    "father_husband": "Khonyimo Kithan",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1148",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Bendangchila",
    "father_husband": "Khuplen Kuki",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/1149",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumlanbeni Tsopoe",
    "father_husband": "Yimong Lotha",
    "gender": "F",
    "age": "46",
    "job_card": "NL-04-003-003-003/1150",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumthungo R Tsopoe",
    "father_husband": "Ramushan Tsopoe",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1151",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "S Mhono odyuo",
    "father_husband": "Sachumo odyuo",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1152",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungbemo Tsopoe",
    "father_husband": "Pfubemo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/1153",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "R Benrilo Tsopoe",
    "father_husband": "P Ramvushan tsopoe",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1154",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Azano Tsopoe",
    "father_husband": "Ramo Lotha",
    "gender": "F",
    "age": "67",
    "job_card": "NL-04-003-003-003/1155",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zabemvu R Tsopoe",
    "father_husband": "Ramvushan tsopoe",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1156",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "R Tsungonchan tsopoe",
    "father_husband": "Ramvushan lotha",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/1157",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Abenthung R Tsopoe",
    "father_husband": "Renchamo tsopoe",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/1158",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Renchamo Tsopoe",
    "father_husband": "Chumlanbeni",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/1159",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "L Hoinali Tsopoe",
    "father_husband": "Lithungbemo tsopoe",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/1160",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Glory N odyuo",
    "father_husband": "Nongothung",
    "gender": "F",
    "age": "23",
    "job_card": "NL-04-003-003-003/1161",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lochumi",
    "father_husband": "Elao ngullie",
    "gender": "F",
    "age": "44",
    "job_card": "NL-04-003-003-003/1162",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nongothung N Lotha",
    "father_husband": "Nrao L Lotha",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/1163",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Ademo Jami",
    "father_husband": "Konchio jami",
    "gender": "M",
    "age": "19",
    "job_card": "NL-04-003-003-003/1164",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "J Khonchamo Shitiri",
    "father_husband": "John shitiri",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/1165",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Orenbomo J shiriti",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1166",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chenithung J shitiri",
    "father_husband": "P John Shitiri",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/1167",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Renbenthung J shitiri",
    "father_husband": "P John shitiri",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1168",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lotus J shitiri",
    "father_husband": "Remomo",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/1169",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Rilanthung Odyuo",
    "father_husband": "Sachumo odyuo",
    "gender": "M",
    "age": "48",
    "job_card": "NL-04-003-003-003/1170",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zuthungbeni Patton",
    "father_husband": "Jonthungo patton",
    "gender": "F",
    "age": "57",
    "job_card": "NL-04-003-003-003/1171",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "S Nzanthung Kithan",
    "father_husband": "Shanbemo kithan",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/1172",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "I Anti",
    "father_husband": "N imlong chaba",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1173",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Jonthungo lotha",
    "father_husband": "Z Nrao",
    "gender": "M",
    "age": "63",
    "job_card": "NL-04-003-003-003/1174",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nchumpeni Lucy C Patton",
    "father_husband": "Chonthungo patton",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1175",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "William J Patton",
    "father_husband": "Jonthungo Patton",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1176",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lichanbemo A patton",
    "father_husband": "Akho Y Patton",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1177",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nzanbeni Lotha",
    "father_husband": "Lt Reshamo lotha",
    "gender": "F",
    "age": "71",
    "job_card": "NL-04-003-003-003/1178",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Merilo Y Kithan",
    "father_husband": "Yanbemo",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1179",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nchumthung A Patton",
    "father_husband": "Akho",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1180",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Brisecella Tungoe",
    "father_husband": "Khengro odyuo",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1181",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhabemo Tungoe",
    "father_husband": "Yanarao Tungoe",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1182",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhonchumi tsopoe",
    "father_husband": "Lt Mhonchumo tsopoe",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1183",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhademo N odyuo",
    "father_husband": "Nongothung odyuo",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1184",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nchumbemo patton",
    "father_husband": "Wolamo patton",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/1185",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumbeni Patton",
    "father_husband": "Ngheo",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/1186",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "M Chumbeni Tsopoe",
    "father_husband": "Y Mhathung Tsopoe",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/1187",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "M Mhonchumi Tsopoe*",
    "father_husband": "M Lotha",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1188",
    "issue_date": "2/4/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Mhonchumi*",
    "father_husband": "",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1188",
    "issue_date": "2/4/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Loyibeni Patton",
    "father_husband": "Tsantheo Ngullie",
    "gender": "F",
    "age": "54",
    "job_card": "NL-04-003-003-003/1189",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nyimjano",
    "father_husband": "Chiboro",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/1190",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Orenboni Odyuo",
    "father_husband": "Jacob",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1191",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Rosalen T Tsopoe",
    "father_husband": "Tsopothung Tsopoe",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/1192",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Libeni Tsopoe",
    "father_husband": "Tsopothung Lotha",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1193",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "S Albina",
    "father_husband": "E Zuchamo lotha",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1194",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yambemo Odyuo",
    "father_husband": "Jacob",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/1195",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Janbeni patton",
    "father_husband": "Motsuo",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/1196",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "E Zuchamo Lotha",
    "father_husband": "Etsomungo lotha",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/1197",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Myanbeni Lotha",
    "father_husband": "Tumbemo Lotha",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/1198",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zujano T humtsoe",
    "father_husband": "Tumbemo humtsoe",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/1199",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhabemo Odyuo",
    "father_husband": "Jacob",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/1200",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Loyilo",
    "father_husband": "Ezansao",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/1201",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Y Noyingbeni odyuo",
    "father_husband": "Yidemo odyuo",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/1202",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Y Mhao odyuo",
    "father_husband": "",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1203",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "S Yidemo odyuo",
    "father_husband": "sachumo odyuo",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/1204",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yanbeni odyuo",
    "father_husband": "Ngheo kithan",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/1205",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhao Tsopoe*",
    "father_husband": "Y tsopoe",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/1206",
    "issue_date": "2/4/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "M Tsopoe*",
    "father_husband": "",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/1206",
    "issue_date": "2/4/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Mhabemo Humtsoe",
    "father_husband": "Tumbemo humtsoe",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1207",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Longshibemo Y Patton",
    "father_husband": "Yanbemo",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1208",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zubonthung Y Patton",
    "father_husband": "Yanbemo Patton",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1209",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Regina Y odyuo",
    "father_husband": "S Yidemo odyuo",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/1210",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Ezobeni Humtsoe",
    "father_husband": "Motsuo",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/1211",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Vincent Patton",
    "father_husband": "thungchumo patton",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/1212",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Jenio odyuo",
    "father_husband": "Pithungo odyuo",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1213",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Benthungo Lotha",
    "father_husband": "lt lansao lotha",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/1214",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Stephen N patton",
    "father_husband": "Nchumbomo patton",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1215",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lochumi odyuo",
    "father_husband": "Aninmo odyuo",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/1216",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Meribeni odyuo",
    "father_husband": "",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1217",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lucy",
    "father_husband": "Zuchumo",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/1218",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "R Chanpeni Patton",
    "father_husband": "Lt Renthungo Kithan",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/1219",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yilobeni Patton",
    "father_husband": "Nchumbemo",
    "gender": "F",
    "age": "24",
    "job_card": "NL-04-003-003-003/1220",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zuben Tsopoe",
    "father_husband": "Y mhathung lotha",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1221",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lucy Tsopoe",
    "father_husband": "M Tsopoe",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1222",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yiben T Tsopoe",
    "father_husband": "Tsopothung Tsopoe",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1223",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zanben Jami",
    "father_husband": "Soren",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/1224",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zabeno",
    "father_husband": "Nzanbemo",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1225",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhademo S jami",
    "father_husband": "Sorenthung Jami",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1226",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lichibeni S Jami",
    "father_husband": "Sorenthung jami",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/1227",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Carol Kithan",
    "father_husband": "Yanbemo Kithan",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/1228",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nithulo odyuo",
    "father_husband": "Wosumlo",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/1229",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Elizabeth",
    "father_husband": "Myingthungo",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/1230",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zanbono",
    "father_husband": "Ngheo kithan",
    "gender": "F",
    "age": "52",
    "job_card": "NL-04-003-003-003/1231",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "William Tsopoe",
    "father_husband": "Yankhumo tsopoe",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1232",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhao tungoe*",
    "father_husband": "Chumben",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/1233",
    "issue_date": "2/4/2025",
    "remarks": "Deleted w.e.f. 31/3/2025; Reason: unwilling to work"
  },
  {
    "name": "Khobeno Tungoe",
    "father_husband": "",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/1233",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungchanbeni R Patton",
    "father_husband": "Lemguat Vaiphei",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/1234",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Renpenthung Tsopoe",
    "father_husband": "Tsumomo tsopoe",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1235",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "John Jami",
    "father_husband": "Yanbomo Jami",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1236",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zuchano Odyuo*",
    "father_husband": "Lumbemo",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1237",
    "issue_date": "2/4/2025",
    "remarks": "Deleted w.e.f. 31/3/2025; Reason: unwilling to work"
  },
  {
    "name": "Meribeni L lotha",
    "father_husband": "",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/1237",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "W Ponathung Kinghen",
    "father_husband": "Wochumo kinghen",
    "gender": "M",
    "age": "48",
    "job_card": "NL-04-003-003-003/1238",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Liyingbeni R patton",
    "father_husband": "Renbomo Patton",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/1239",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumbemo kithan",
    "father_husband": "Nyimthungo kithan",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1240",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Tsenthungo Kithan*",
    "father_husband": "Kithan",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/1241",
    "issue_date": "2/4/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Tsenthungo*",
    "father_husband": "",
    "gender": "M",
    "age": "40",
    "job_card": "NL-04-003-003-003/1241",
    "issue_date": "2/4/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Chanchibeni Kithan",
    "father_husband": "Mhonchan kithan",
    "gender": "F",
    "age": "20",
    "job_card": "NL-04-003-003-003/1242",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Loyibeni Tungoe",
    "father_husband": "Yanbenshio tungoe",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/1243",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Ezobeni odyuo",
    "father_husband": "Yanpothung Odyuo",
    "gender": "F",
    "age": "45",
    "job_card": "NL-04-003-003-003/1244",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lumchano",
    "father_husband": "Tsenthungo",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/1245",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungabemo Shitiri",
    "father_husband": "Yankhorao",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/1246",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zurenthung enny",
    "father_husband": "Jonthungo enny",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/1247",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nzanbemo Tungoe",
    "father_husband": "Yanbenshio tungoe",
    "gender": "M",
    "age": "65",
    "job_card": "NL-04-003-003-003/1248",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zujamo Kinghen",
    "father_husband": "Mhonbemo Kinghen",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/1250",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Emilo lotha",
    "father_husband": "Sangmomo lotha",
    "gender": "F",
    "age": "68",
    "job_card": "NL-04-003-003-003/1251",
    "issue_date": "27/3/2025",
    "remarks": ""
  },
  {
    "name": "Liyingbeni Humtsoe",
    "father_husband": "Lt Hunshumo humtsoe",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/1252",
    "issue_date": "27/3/2025",
    "remarks": ""
  },
  {
    "name": "Yibeni Tungoe",
    "father_husband": "Yanben tungoe",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1253",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Phanjamo C Tungoe",
    "father_husband": "Chumbenthung Tungoe",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1254",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nzan tungoe",
    "father_husband": "",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/1255",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "T Bhanchamo Odyuo",
    "father_husband": "Lt thumchobemo odyuo",
    "gender": "M",
    "age": "45",
    "job_card": "NL-04-003-003-003/1256",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "C Lideno tungoe",
    "father_husband": "W Chenlanshio lotha",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1257",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Y Wochobeni odyuo",
    "father_husband": "Yibomo odyuo",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/1258",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "W Sundayla kinghen",
    "father_husband": "L Wochumo kinghen",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/1259",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungbemo kikon",
    "father_husband": "Ntsemo kikon",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/1260",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumyani kikon",
    "father_husband": "",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/1261",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhademo kikon",
    "father_husband": "Sovung kikon",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/1262",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Pilano lotha",
    "father_husband": "Nzinimo lotha",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1263",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Jenithung Jami",
    "father_husband": "Yanpomo jami",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1264",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Renchumi",
    "father_husband": "Khyothungo tungo",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1265",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Janbemo tungo",
    "father_husband": "",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1266",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Moiom phom",
    "father_husband": "M Palong phom",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1267",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Rossel ennio",
    "father_husband": "Khyothungo tungo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/1268",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Liyani shitiri",
    "father_husband": "Sulumo shitiri",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/1269",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Dina Ao",
    "father_husband": "Bendang",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1270",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yisanbeni P Kithan",
    "father_husband": "Phyobemo kithan",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/1271",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thunjamo",
    "father_husband": "Khyingro",
    "gender": "M",
    "age": "26",
    "job_card": "NL-04-003-003-003/1272",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nsanthung odyuo",
    "father_husband": "Nyimsao odyuo",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/1273",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Precilla kithan",
    "father_husband": "Nzinimo kithan",
    "gender": "F",
    "age": "25",
    "job_card": "NL-04-003-003-003/1274",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Likyabeni lotha",
    "father_husband": "L Renbenthung lotha",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1275",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Ajano odyuo",
    "father_husband": "Abemo odyuo",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/1276",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nyanbemo odyuo",
    "father_husband": "Longshithung odyuo",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/1277",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Benathung odyuo",
    "father_husband": "Z Longshi odyuo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1278",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Jangki kinghen",
    "father_husband": "L Renbenthung kinghen",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1279",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Wonchithung kinghen",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1280",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "B Zubeno lotha",
    "father_husband": "Benthungo",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1281",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Tumpeno patton",
    "father_husband": "Y John Patton",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1282",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zubenthung odyuo",
    "father_husband": "Remomo odyuo",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1283",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Fuchumbeni lotha",
    "father_husband": "Yenren lotha",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/1284",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Liyan odyuo",
    "father_husband": "R Longshi odyuo",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/1285",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhonpeni odyuo",
    "father_husband": "Lanthungo",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/1286",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Therali kithan",
    "father_husband": "Renthungo kithan",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/1287",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Edward kithan",
    "father_husband": "",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/1288",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Renthungo kithan",
    "father_husband": "Elhipamo",
    "gender": "M",
    "age": "52",
    "job_card": "NL-04-003-003-003/1289",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "P Areni mozhui",
    "father_husband": "Pithungo mozhui",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1290",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lochumbeni kithan",
    "father_husband": "Pithungo",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/1291",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumbenthung jami",
    "father_husband": "Sabemo jami",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/1292",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungdeno kithan",
    "father_husband": "Rentsamo jami",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/1293",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Rhonbeni Yanthan*",
    "father_husband": "Nchupomo Yanthan",
    "gender": "F",
    "age": "42",
    "job_card": "NL-04-003-003-003/1294",
    "issue_date": "13/5/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Nyanbemo patton",
    "father_husband": "Elhio patton",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/1295",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lanthungo Tungoe",
    "father_husband": "Chenithung tungoe",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1296",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "E Pipeni Kinghen",
    "father_husband": "Evothung kinghen",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1297",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "E Benchumi kinghen",
    "father_husband": "",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/1298",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Erenbeni E Kinghen",
    "father_husband": "",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1299",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Orentsamo Kinghen",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1300",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Noyingbeni T humtsoe",
    "father_husband": "Tumbemo humtsoe",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1301",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yantsolumi humtsoe",
    "father_husband": "Zanbomo",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/1302",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Jandeno lotha",
    "father_husband": "Yanpothung lotha",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/1303",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhonbeni L Patton",
    "father_husband": "Liyan patton",
    "gender": "F",
    "age": "24",
    "job_card": "NL-04-003-003-003/1304",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Renbeni Humtsoe",
    "father_husband": "Pyingjamo Humtsoe",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1305",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Naro",
    "father_husband": "Imnanukshi",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1306",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zuchobemo patton",
    "father_husband": "Liyan Patton",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/1307",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yivungi patton",
    "father_husband": "Khangshio kithan",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/1308",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhathung L patton",
    "father_husband": "Liyan Patton",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/1309",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nyanbeni Patton",
    "father_husband": "Tsamomo",
    "gender": "F",
    "age": "43",
    "job_card": "NL-04-003-003-003/1310",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Jomoni Patton",
    "father_husband": "Wolamo Patton",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/1311",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Emilo Humtsoe",
    "father_husband": "Nchumbemo humtsoe",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/1312",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zubemo Humtsoe",
    "father_husband": "",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1313",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Susan humtsoe",
    "father_husband": "",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/1314",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Zulochan Humtsoe",
    "father_husband": "",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1315",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Jonitanga Humtsoe",
    "father_husband": "",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/1316",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yilobemo kithan",
    "father_husband": "Monchio kithan",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/1317",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungyani humtsoe",
    "father_husband": "Yanbemo Patton",
    "gender": "F",
    "age": "24",
    "job_card": "NL-04-003-003-003/1318",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Sharon Ngullie",
    "father_husband": "Woyamo lotha",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1319",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Renchithung",
    "father_husband": "Khyothungo",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1320",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lobeno Tungoe",
    "father_husband": "Khyothungo lotha",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/1321",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yithunglo Patton",
    "father_husband": "Yanbemo Patton",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1322",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chonbenthung T Humtsoe",
    "father_husband": "Tumbemo humtsoe",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1323",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Martha kithan",
    "father_husband": "Khyothungo lotha",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1324",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungdeno Lotha",
    "father_husband": "H lotha",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/1325",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nzanbeni T Humtsoe",
    "father_husband": "Tumbemo Humtsoe",
    "gender": "F",
    "age": "35",
    "job_card": "NL-04-003-003-003/1326",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chonbenthung Kithan",
    "father_husband": "Nzinyimo kithan",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/1327",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "L Khobenthung Kinghen",
    "father_husband": "Lilanthung",
    "gender": "M",
    "age": "54",
    "job_card": "NL-04-003-003-003/1328",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Liyingbeni kithan",
    "father_husband": "Sankao",
    "gender": "F",
    "age": "48",
    "job_card": "NL-04-003-003-003/1329",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumchamo N Kithan",
    "father_husband": "Nrinyimo Kithan",
    "gender": "M",
    "age": "22",
    "job_card": "NL-04-003-003-003/1330",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lawrence Kinghen",
    "father_husband": "Evothung kinghen",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/1331",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Shanreno o kikon",
    "father_husband": "Orenthung kikon",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/1332",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Easter Jami",
    "father_husband": "Achumo Jami",
    "gender": "F",
    "age": "21",
    "job_card": "NL-04-003-003-003/1333",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Rahel Tungoi",
    "father_husband": "Chenithung tungoe",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/1334",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Chubonthung L kithan",
    "father_husband": "Lumbemo kithan",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/1335",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lochumi L kithan",
    "father_husband": "",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/1336",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Tsenbemo lotha",
    "father_husband": "Lumbemo lotha",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1337",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nzanmongi lotha",
    "father_husband": "Lumbemo Lotha",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1338",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nchumlo lotha",
    "father_husband": "",
    "gender": "F",
    "age": "57",
    "job_card": "NL-04-003-003-003/1339",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Liyani Kikon",
    "father_husband": "Francis Kikon",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/1340",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungro Tungoe",
    "father_husband": "Chumben tungoe",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/1341",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Nsan Jami",
    "father_husband": "Achumo Jami",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/1342",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Noyingbeni Y Murry",
    "father_husband": "Yanao Murry",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1343",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yanbeni lotha",
    "father_husband": "Pinyimo",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/1344",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Lichanbemo Felix K Patton",
    "father_husband": "Khomen Patton",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/1345",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Achano Patton",
    "father_husband": "Late Khomen patton",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/1346",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Hachopeni Angela K Patton",
    "father_husband": "Khomen Patton",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1347",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thungbeni K Patton",
    "father_husband": "Khomen Patton",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/1348",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "E Chenio Tsopoe",
    "father_husband": "Elishao Tsopoe",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/1349",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Yilance Tsopoe",
    "father_husband": "Nyimtsemo",
    "gender": "M",
    "age": "43",
    "job_card": "NL-04-003-003-003/1350",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Ekyimo lotha",
    "father_husband": "Ntsomo",
    "gender": "M",
    "age": "50",
    "job_card": "NL-04-003-003-003/1351",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Meribemo Shitiri",
    "father_husband": "Mhabemo shitiri",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1352",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "Thechano Patton",
    "father_husband": "Lt Atsamo Kithan",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/1353",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Pilamo Y Patton",
    "father_husband": "Yithungo Patton",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/1354",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Rita R Patton",
    "father_husband": "Rabomo Patton",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/1355",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "M Mhonchumi Tsopoe",
    "father_husband": "Mhathung",
    "gender": "F",
    "age": "38",
    "job_card": "NL-04-003-003-003/1356",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhao Tsopoe",
    "father_husband": "Yantsomo",
    "gender": "M",
    "age": "21",
    "job_card": "NL-04-003-003-003/1357",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Tsenthungo Kithan",
    "father_husband": "wothungo",
    "gender": "M",
    "age": "37",
    "job_card": "NL-04-003-003-003/1358",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Renben Patton",
    "father_husband": "Wopamo Patton",
    "gender": "M",
    "age": "31",
    "job_card": "NL-04-003-003-003/1359",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhao Patton",
    "father_husband": "",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/1360",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumpeni Patton",
    "father_husband": "Wopamo",
    "gender": "F",
    "age": "61",
    "job_card": "NL-04-003-003-003/1361",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Yithunglo",
    "father_husband": "Mhabemo shitiri",
    "gender": "F",
    "age": "55",
    "job_card": "NL-04-003-003-003/1362",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Therali M shitiri",
    "father_husband": "",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/1363",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Sancho Shitiry",
    "father_husband": "Rhonbemo",
    "gender": "M",
    "age": "53",
    "job_card": "NL-04-003-003-003/1364",
    "issue_date": "7/4/2025",
    "remarks": ""
  },
  {
    "name": "Shanjo*",
    "father_husband": "",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/1364",
    "issue_date": "7/4/2025",
    "remarks": "Deleted w.e.f. 24/9/2025; Reason: unwilling to work"
  },
  {
    "name": "Merithung humtsoe",
    "father_husband": "Ethanshumo Humtsoe",
    "gender": "M",
    "age": "25",
    "job_card": "NL-04-003-003-003/1365",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Yanbeni Shitry",
    "father_husband": "Akhemo shitiri",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/1366",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumdeno Patton",
    "father_husband": "Cheninyimo Patton",
    "gender": "F",
    "age": "30",
    "job_card": "NL-04-003-003-003/1367",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Y Shanjo Kithan",
    "father_husband": "Yibemo Kithan",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1368",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhontsen Patton",
    "father_husband": "Wothungo Patton",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1369",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Limhathung R Patton",
    "father_husband": "Ratsemo Patton",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1370",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Vincent R Patton",
    "father_husband": "",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/1371",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Yibenthung Tsopoe",
    "father_husband": "Tsenyimo Tsopoe",
    "gender": "M",
    "age": "28",
    "job_card": "NL-04-003-003-003/1372",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "E Jenio Humtsoe",
    "father_husband": "Elamo Humtsoe",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/1373",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Yerali Kinghen",
    "father_husband": "Ntsemo",
    "gender": "F",
    "age": "58",
    "job_card": "NL-04-003-003-003/1374",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Phyokhano Kinghen",
    "father_husband": "Sulumo",
    "gender": "F",
    "age": "69",
    "job_card": "NL-04-003-003-003/1375",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Lochumbeni Kinghen",
    "father_husband": "Mhonbemo",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/1376",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Rembemo Samuel Humtsoe",
    "father_husband": "Yanphamo Humtsoe",
    "gender": "M",
    "age": "34",
    "job_card": "NL-04-003-003-003/1377",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Tsanthungo Y Humtsoe",
    "father_husband": "",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1378",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Yantsothung R Patton",
    "father_husband": "Rabomo Patton",
    "gender": "M",
    "age": "24",
    "job_card": "NL-04-003-003-003/1379",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Tumchobeni M Shitiri",
    "father_husband": "Mhabemo shitiri",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1380",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Tori M Shtiri",
    "father_husband": "",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1381",
    "issue_date": "21/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhonbeni",
    "father_husband": "Vanthungshan Ezung",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1382",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Longshibeni",
    "father_husband": "Bisao ngullie",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/1383",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Reniyimi Kithan",
    "father_husband": "Lichomomo",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/1384",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Martina Kithan",
    "father_husband": "Mhonchan Kithan",
    "gender": "F",
    "age": "33",
    "job_card": "NL-04-003-003-003/1385",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumbeni Kithan",
    "father_husband": "",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1386",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Jenikhon Kithan",
    "father_husband": "Tsenro kithan",
    "gender": "M",
    "age": "65",
    "job_card": "NL-04-003-003-003/1387",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Y Abemo Lotha",
    "father_husband": "Yebemo lotha",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/1388",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Oreno Odyuo",
    "father_husband": "Zama",
    "gender": "F",
    "age": "62",
    "job_card": "NL-04-003-003-003/1389",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Martha Humtsoe",
    "father_husband": "Rakhomo Humtsoe",
    "gender": "F",
    "age": "37",
    "job_card": "NL-04-003-003-003/1390",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumbeni Enny",
    "father_husband": "Limhathung enny",
    "gender": "F",
    "age": "19",
    "job_card": "NL-04-003-003-003/1391",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Roland",
    "father_husband": "Limathung enny",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1392",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Atseno enny",
    "father_husband": "Remomo",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/1393",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Nzano Enny",
    "father_husband": "Wolumo",
    "gender": "F",
    "age": "26",
    "job_card": "NL-04-003-003-003/1394",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Wothunglo Enny",
    "father_husband": "Eishamo",
    "gender": "F",
    "age": "60",
    "job_card": "NL-04-003-003-003/1395",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Tracy Humtsoe",
    "father_husband": "Augustine Humtsoe",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1396",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Loreno Yanthan",
    "father_husband": "Yanpo Yanthan",
    "gender": "F",
    "age": "34",
    "job_card": "NL-04-003-003-003/1397",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhashan Tungoe",
    "father_husband": "Chenithung tungoe",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1398",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "C Sorenthung",
    "father_husband": "chenithung",
    "gender": "M",
    "age": "39",
    "job_card": "NL-04-003-003-003/1399",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Nzanbemo Lotha",
    "father_husband": "Ponshamo lotha",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/1400",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Benrithung Dominic Humtsoe",
    "father_husband": "Mathew Humtsoe",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1401",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Yanrenthung Humtsoe",
    "father_husband": "Ponshamo Humtsoe",
    "gender": "M",
    "age": "38",
    "job_card": "NL-04-003-003-003/1402",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhonlumi Patton",
    "father_husband": "Elansao Patton",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1403",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Renthungo Patton",
    "father_husband": "Chilow Patton",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1404",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Rhanbeni Patton",
    "father_husband": "Phankao",
    "gender": "F",
    "age": "46",
    "job_card": "NL-04-003-003-003/1405",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Wonimo Lotha",
    "father_husband": "Lt Elansao Lotha",
    "gender": "M",
    "age": "32",
    "job_card": "NL-04-003-003-003/1406",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Rhontsuthung Tsopoe",
    "father_husband": "Rachi Tsopoe",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/1407",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Aghali",
    "father_husband": "Lt Piwoto",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1408",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Mhonyani Odyuo",
    "father_husband": "Yama",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1409",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Chumbeni Kinghen",
    "father_husband": "",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1410",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Nchemo T Kinghen",
    "father_husband": "Tsenyimo Kinghen",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/1411",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Nzanti",
    "father_husband": "Tsanchumo",
    "gender": "F",
    "age": "20",
    "job_card": "NL-04-003-003-003/1412",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Yandeno Kikon",
    "father_husband": "Robin Kikon",
    "gender": "F",
    "age": "28",
    "job_card": "NL-04-003-003-003/1413",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Lanpvuo Kinghen",
    "father_husband": "Tsenimo kinghen",
    "gender": "M",
    "age": "41",
    "job_card": "NL-04-003-003-003/1414",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Renchumi odyuo",
    "father_husband": "Yama Odyuo",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/1415",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Chenithung Patton",
    "father_husband": "Elansao Patton",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1416",
    "issue_date": "30/4/2025",
    "remarks": ""
  },
  {
    "name": "Bilano Patton",
    "father_husband": "Yanpothung Patton",
    "gender": "F",
    "age": "47",
    "job_card": "NL-04-003-003-003/1417",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Meriyani Y Patton",
    "father_husband": "",
    "gender": "F",
    "age": "24",
    "job_card": "NL-04-003-003-003/1418",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Thungdemo Y patton",
    "father_husband": "",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1419",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Nchumthung Y Patton",
    "father_husband": "",
    "gender": "M",
    "age": "23",
    "job_card": "NL-04-003-003-003/1420",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Ruth Lotha",
    "father_husband": "Furemo lotha",
    "gender": "F",
    "age": "24",
    "job_card": "NL-04-003-003-003/1421",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Rosemary Patton",
    "father_husband": "Hawo shitiri",
    "gender": "F",
    "age": "36",
    "job_card": "NL-04-003-003-003/1422",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "C Renjamo",
    "father_husband": "Chenio",
    "gender": "M",
    "age": "44",
    "job_card": "NL-04-003-003-003/1423",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Myingthungo Enny",
    "father_husband": "Late wobansao enny",
    "gender": "M",
    "age": "59",
    "job_card": "NL-04-003-003-003/1424",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Zanbeni Enny",
    "father_husband": "Abelu Rurhie",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1425",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Khonzani",
    "father_husband": "Vanchamo",
    "gender": "F",
    "age": "27",
    "job_card": "NL-04-003-003-003/1426",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Lochumi Enny",
    "father_husband": "Myingthungo enny",
    "gender": "F",
    "age": "22",
    "job_card": "NL-04-003-003-003/1427",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Lobilo",
    "father_husband": "",
    "gender": "F",
    "age": "53",
    "job_card": "NL-04-003-003-003/1428",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Mhonbemo L Kithan*",
    "father_husband": "Lichamo Kithan",
    "gender": "M",
    "age": "29",
    "job_card": "NL-04-003-003-003/1429",
    "issue_date": "13/5/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Nchumthung L Kithan",
    "father_husband": "",
    "gender": "M",
    "age": "33",
    "job_card": "NL-04-003-003-003/1430",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Pikhono",
    "father_husband": "Nthungmomo lotha",
    "gender": "F",
    "age": "51",
    "job_card": "NL-04-003-003-003/1431",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Adven Tsopoe",
    "father_husband": "Tsopothung Tsopoe",
    "gender": "M",
    "age": "27",
    "job_card": "NL-04-003-003-003/1432",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "P Yanbeni Kithan",
    "father_husband": "Phyokhamo kithan",
    "gender": "F",
    "age": "29",
    "job_card": "NL-04-003-003-003/1433",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Renchumi",
    "father_husband": "Mhathung Patton",
    "gender": "F",
    "age": "32",
    "job_card": "NL-04-003-003-003/1434",
    "issue_date": "13/5/2025",
    "remarks": ""
  },
  {
    "name": "Renlamo N Kithan",
    "father_husband": "Nramo kithan",
    "gender": "M",
    "age": "36",
    "job_card": "NL-04-003-003-003/1435",
    "issue_date": "21/6/2025",
    "remarks": ""
  },
  {
    "name": "Zarench N Kithan",
    "father_husband": "Lt Nramo Kithan",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/1436",
    "issue_date": "21/6/2025",
    "remarks": ""
  },
  {
    "name": "Noyingbeni N Kithan",
    "father_husband": "Nramo kithan",
    "gender": "F",
    "age": "39",
    "job_card": "NL-04-003-003-003/1437",
    "issue_date": "21/6/2025",
    "remarks": ""
  },
  {
    "name": "Mhono",
    "father_husband": "Phyopheo",
    "gender": "F",
    "age": "41",
    "job_card": "NL-04-003-003-003/1438",
    "issue_date": "26/8/2025",
    "remarks": ""
  },
  {
    "name": "James Humtsoe",
    "father_husband": "Mensemo",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/1439",
    "issue_date": "26/8/2025",
    "remarks": ""
  },
  {
    "name": "Zubeni Rosemy Humtsoe",
    "father_husband": "",
    "gender": "F",
    "age": "24",
    "job_card": "NL-04-003-003-003/1440",
    "issue_date": "26/8/2025",
    "remarks": ""
  },
  {
    "name": "Arhoni Yanthan*",
    "father_husband": "Chipo lotha",
    "gender": "F",
    "age": "40",
    "job_card": "NL-04-003-003-003/1441",
    "issue_date": "",
    "remarks": ""
  },
  {
    "name": "Kikon*",
    "father_husband": "shitiri",
    "gender": "M",
    "age": "30",
    "job_card": "NL-04-003-003-003/1632",
    "issue_date": "13/5/2025",
    "remarks": "Deleted w.e.f. 26/6/2026; Reason: Non-existent in Panchayat"
  },
  {
    "name": "Renbemo*",
    "father_husband": "Khothungo",
    "gender": "M",
    "age": "35",
    "job_card": "NL-04-003-003-003/4428",
    "issue_date": "11/8/2007",
    "remarks": "Deleted w.e.f. 17/8/2018; Reason: Incorrect Job Card"
  },
  {
    "name": "NTSENO TUNGOE*",
    "father_husband": "TSEKEMO TUNGOE",
    "gender": "F",
    "age": "49",
    "job_card": "NL-04-003-003-003/4429",
    "issue_date": "",
    "remarks": ""
  },
  {
    "name": "ZUBENI ODYUO*",
    "father_husband": "NTHUNGO",
    "gender": "F",
    "age": "50",
    "job_card": "NL-04-003-003-003/4430",
    "issue_date": "",
    "remarks": ""
  },
  {
    "name": "TUMCHOBEMO SHITIRI*",
    "father_husband": "P. HAWO SHITIRI",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/4431",
    "issue_date": "",
    "remarks": ""
  },
  {
    "name": "LANSHAMO KINGHEN",
    "father_husband": "NKOMO KINGHEN",
    "gender": "M",
    "age": "47",
    "job_card": "NL-04-003-003-003/4432",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "CHONBENI KINGHEN",
    "father_husband": "LANSHAMO KINGHEN",
    "gender": "F",
    "age": "31",
    "job_card": "NL-04-003-003-003/4433",
    "issue_date": "2/4/2025",
    "remarks": ""
  },
  {
    "name": "ETHUNG L KINGHEN",
    "father_husband": "",
    "gender": "M",
    "age": "20",
    "job_card": "NL-04-003-003-003/4434",
    "issue_date": "21/4/2025",
    "remarks": ""
  }
];

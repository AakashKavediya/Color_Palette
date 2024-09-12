import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Pressable } from 'react-native'
import React,{useState} from 'react'

// const Page1 = ({setColor}) => {
export default function Page1({ setColor }){
    //Const for setting the color
    const [localColor, setLocalColor] = useState("");

    //Updating state :- sending useState content to main page
      


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#e21414")}
              style={[styles.colorBox, { backgroundColor: "#e21414" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ff0000")}
              style={[styles.colorBox, { backgroundColor: "#ff0000" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ff1515")}
              style={[styles.colorBox, { backgroundColor: "#ff1515" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ff2f2f")}
              style={[styles.colorBox, { backgroundColor: "#ff2f2f" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ff4545")}
              style={[styles.colorBox, { backgroundColor: "#ff4545" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ff5a5a")}
              style={[styles.colorBox, { backgroundColor: "#ff5a5a" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fa7070")}
              style={[styles.colorBox, { backgroundColor: "#fa7070" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fc8585")}
              style={[styles.colorBox, { backgroundColor: "#fc8585" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fc9898")}
              style={[styles.colorBox, { backgroundColor: "#fc9898" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#feafaf")}
              style={[styles.colorBox, { backgroundColor: "#feafaf" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffc5c5")}
              style={[styles.colorBox, { backgroundColor: "#ffc5c5" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffd9d9")}
              style={[styles.colorBox, { backgroundColor: "#ffd9d9" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>

        {/* ------------------------------------------------------------------------------------- */}

        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#ffdb00")}
              style={[styles.colorBox, { backgroundColor: "#ffdb00" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffde16")}
              style={[styles.colorBox, { backgroundColor: "#ffde16" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffe028")}
              style={[styles.colorBox, { backgroundColor: "#ffe028" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fde13b")}
              style={[styles.colorBox, { backgroundColor: "#fde13b" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fee44b")}
              style={[styles.colorBox, { backgroundColor: "#fee44b" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffe75b")}
              style={[styles.colorBox, { backgroundColor: "#ffe75b" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffe96b")}
              style={[styles.colorBox, { backgroundColor: "#ffe96b" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fde979")}
              style={[styles.colorBox, { backgroundColor: "#fde979" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffee8c")}
              style={[styles.colorBox, { backgroundColor: "#ffee8c" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fff1a0")}
              style={[styles.colorBox, { backgroundColor: "#fff1a0" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fff3af")}
              style={[styles.colorBox, { backgroundColor: "#fff3af" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fff6c1")}
              style={[styles.colorBox, { backgroundColor: "#fff6c1" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>

        {/* ------------------------------------------------------------------------------------- */}

        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#11eb00")}
              style={[styles.colorBox, { backgroundColor: "#11eb00" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#12ff00")}
              style={[styles.colorBox, { backgroundColor: "#12ff00" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#1fff0e")}
              style={[styles.colorBox, { backgroundColor: "#1fff0e" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#2bff1b")}
              style={[styles.colorBox, { backgroundColor: "#2bff1b" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#3cfd2e")}
              style={[styles.colorBox, { backgroundColor: "#3cfd2e" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#3cfd2e")}
              style={[styles.colorBox, { backgroundColor: "#3cfd2e" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#5cff50")}
              style={[styles.colorBox, { backgroundColor: "#5cff50" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#68f95d")}
              style={[styles.colorBox, { backgroundColor: "#68f95d" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#79fc6f")}
              style={[styles.colorBox, { backgroundColor: "#79fc6f" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#87fa7e")}
              style={[styles.colorBox, { backgroundColor: "#87fa7e" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#9afe92")}
              style={[styles.colorBox, { backgroundColor: "#9afe92" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#adffa7")}
              style={[styles.colorBox, { backgroundColor: "#adffa7" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#c2ffbe")}
              style={[styles.colorBox, { backgroundColor: "#c2ffbe" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>

        {/* ------------------------------------------------------------------------------------- */}

        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#05ffb5")}
              style={[styles.colorBox, { backgroundColor: "#05ffb5" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#14fcb7")}
              style={[styles.colorBox, { backgroundColor: "#14fcb7" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#24ffbe")}
              style={[styles.colorBox, { backgroundColor: "#24ffbe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#35ffc3")}
              style={[styles.colorBox, { backgroundColor: "#35ffc3" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#44fec7")}
              style={[styles.colorBox, { backgroundColor: "#44fec7" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#53fecb")}
              style={[styles.colorBox, { backgroundColor: "#53fecb" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#64fdcf")}
              style={[styles.colorBox, { backgroundColor: "#64fdcf" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#75fdd4")}
              style={[styles.colorBox, { backgroundColor: "#75fdd4" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#87fdd9")}
              style={[styles.colorBox, { backgroundColor: "#87fdd9" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#96f9db")}
              style={[styles.colorBox, { backgroundColor: "#96f9db" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#a7fce2")}
              style={[styles.colorBox, { backgroundColor: "#a7fce2" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#b8ffe9")}
              style={[styles.colorBox, { backgroundColor: "#b8ffe9" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#c6ffed")}
              style={[styles.colorBox, { backgroundColor: "#c6ffed" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>

        {/* ------------------------------------------------------------------------------------- */}

        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#00ffef")}
              style={[styles.colorBox, { backgroundColor: "#00ffef" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#16fff0")}
              style={[styles.colorBox, { backgroundColor: "#16fff0" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#28fff1")}
              style={[styles.colorBox, { backgroundColor: "#28fff1" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#3cfef2")}
              style={[styles.colorBox, { backgroundColor: "#3cfef2" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#4ffef3")}
              style={[styles.colorBox, { backgroundColor: "#4ffef3" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#62fcf2")}
              style={[styles.colorBox, { backgroundColor: "#62fcf2" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#7afff6")}
              style={[styles.colorBox, { backgroundColor: "#7afff6" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#8cfff7")}
              style={[styles.colorBox, { backgroundColor: "#8cfff7" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#a1fff8")}
              style={[styles.colorBox, { backgroundColor: "#a1fff8" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#b8fffa")}
              style={[styles.colorBox, { backgroundColor: "#b8fffa" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#c6fcf8")}
              style={[styles.colorBox, { backgroundColor: "#c6fcf8" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>

        {/* ------------------------------------------------------------------------------------- */}

        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#00a8ff")}
              style={[styles.colorBox, { backgroundColor: "#00a8ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#16afff")}
              style={[styles.colorBox, { backgroundColor: "#16afff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#29b6ff")}
              style={[styles.colorBox, { backgroundColor: "#29b6ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#3bbbfd")}
              style={[styles.colorBox, { backgroundColor: "#3bbbfd" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#56c6ff")}
              style={[styles.colorBox, { backgroundColor: "#56c6ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#68ccff")}
              style={[styles.colorBox, { backgroundColor: "#68ccff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#76d1ff")}
              style={[styles.colorBox, { backgroundColor: "#76d1ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#89d7ff")}
              style={[styles.colorBox, { backgroundColor: "#89d7ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#96d9fc")}
              style={[styles.colorBox, { backgroundColor: "#96d9fc" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#a6defc")}
              style={[styles.colorBox, { backgroundColor: "#a6defc" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#b7e6ff")}
              style={[styles.colorBox, { backgroundColor: "#b7e6ff" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>

        {/* ------------------------------------------------------------------------------------- */}

        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#8800ff")}
              style={[styles.colorBox, { backgroundColor: "#8800ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#9114ff")}
              style={[styles.colorBox, { backgroundColor: "#9114ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#9825fe")}
              style={[styles.colorBox, { backgroundColor: "#9825fe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#a034ff")}
              style={[styles.colorBox, { backgroundColor: "#a034ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#a846ff")}
              style={[styles.colorBox, { backgroundColor: "#a846ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ae55fd")}
              style={[styles.colorBox, { backgroundColor: "#ae55fd" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#b868ff")}
              style={[styles.colorBox, { backgroundColor: "#b868ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#be76fe")}
              style={[styles.colorBox, { backgroundColor: "#be76fe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#c787ff")}
              style={[styles.colorBox, { backgroundColor: "#c787ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#cc94fd")}
              style={[styles.colorBox, { backgroundColor: "#cc94fd" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#d4a4ff")}
              style={[styles.colorBox, { backgroundColor: "#d4a4ff" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#dbb4fe")}
              style={[styles.colorBox, { backgroundColor: "#dbb4fe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#e3c4ff")}
              style={[styles.colorBox, { backgroundColor: "#e3c4ff" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>

        {/* ------------------------------------------------------------------------------------- */}

        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#ff00fe")}
              style={[styles.colorBox, { backgroundColor: "#ff00fe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ff12fe")}
              style={[styles.colorBox, { backgroundColor: "#ff12fe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fe23fd")}
              style={[styles.colorBox, { backgroundColor: "#fe23fd" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fe33fd")}
              style={[styles.colorBox, { backgroundColor: "#fe33fd" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ff46fe")}
              style={[styles.colorBox, { backgroundColor: "#ff46fe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fe56fd")}
              style={[styles.colorBox, { backgroundColor: "#fe56fd" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ff68fe")}
              style={[styles.colorBox, { backgroundColor: "#ff68fe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#f973f8")}
              style={[styles.colorBox, { backgroundColor: "#f973f8" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fc85fb")}
              style={[styles.colorBox, { backgroundColor: "#fc85fb" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fe95fd")}
              style={[styles.colorBox, { backgroundColor: "#fe95fd" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#faa1f9")}
              style={[styles.colorBox, { backgroundColor: "#faa1f9" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffb2fe")}
              style={[styles.colorBox, { backgroundColor: "#ffb2fe" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#fec0fd")}
              style={[styles.colorBox, { backgroundColor: "#fec0fd" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>

        {/* ------------------------------------------------------------------------------------- */}

        <View style={styles.columnView1}>
          {/* <Text>{color}</Text> */}
          <ScrollView style={styles.horizontalScroll} horizontal={true}>
            <TouchableOpacity
              onPress={() => setColor("#000000")}
              style={[styles.colorBox, { backgroundColor: "#000000" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#191919")}
              style={[styles.colorBox, { backgroundColor: "#191919" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#2e2e2e")}
              style={[styles.colorBox, { backgroundColor: "#2e2e2e" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#494949")}
              style={[styles.colorBox, { backgroundColor: "#494949" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#585858")}
              style={[styles.colorBox, { backgroundColor: "#585858" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#6b6b6b")}
              style={[styles.colorBox, { backgroundColor: "#6b6b6b" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#818181")}
              style={[styles.colorBox, { backgroundColor: "#818181" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#9c9c9c")}
              style={[styles.colorBox, { backgroundColor: "#9c9c9c" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#b5b4b4")}
              style={[styles.colorBox, { backgroundColor: "#b5b4b4" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#b5b4b4")}
              style={[styles.colorBox, { backgroundColor: "#b5b4b4" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#e0e0e0")}
              style={[styles.colorBox, { backgroundColor: "#e0e0e0" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#f2f2f2")}
              style={[styles.colorBox, { backgroundColor: "#f2f2f2" }]}
            ></TouchableOpacity>
            <TouchableOpacity
              onPress={() => setColor("#ffffff")}
              style={[styles.colorBox, { backgroundColor: "#ffffff" }]}
            ></TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

// export default Page1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  columnView1: {
  },
  colorBox: {
    height: 60,
    width: 60,
    borderRadius: 15,
    margin:5,
    elevation:10,
  },
  horizontalScroll:{
    padding:10,
  },
});
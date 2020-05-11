import styled from 'styled-components'

export const MainView = styled.SafeAreaView`
  display:flex;
  justify-content:center;
  align-items:center;
  flex:1;
  background-color:#6b35a0;
`

export const Wallpaper = styled.Image`
  flex:1;
  position:absolute;
  z-index:1;
`

export const GameContainer = styled.View`
  background:#74c7a6;
  display:flex;
  transform:rotate(90deg);
  overflow:hidden;
  border-radius:15px;
  border:2px solid #111;
  z-index:1;
`

export const BackgroundImage = styled.Image`
  width:100%;
  height:100%;
`

export const PlayerImage = styled.Image`
  position:absolute;
`

export const ControllerContainer = styled.View`
  z-index:2;
  position:absolute;
  width:180px;
  height:180px;
  top:0;
  left:0;
  margin:25px;
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0.5;
`

export const ControllerButton = styled.TouchableOpacity`
  background-color:#f3f4f5;
  height:60px;
  width:60px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
`

export const ControllerButtonCenter = styled.View`
  height:30px;
  width:30px;
  border-radius:15px;
  background-color:rgba(0,0,0,0.5);
`

export const ControllerButtonUp = styled(ControllerButton)`
  right:0;
`

export const ControllerButtonDown = styled(ControllerButton)`
  left:0;
`

export const ControllerButtonLeft = styled(ControllerButton)`
  top:0;
`

export const ControllerButtonRight = styled(ControllerButton)`
  bottom:0;
`

export const BattleContainer = styled.View`
  z-index:2;
  position:absolute;
  width:160px;
  height:160px;
  bottom:0;
  left:0;
  margin:25px;
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0.8;
  transform:rotate(90deg);
`

export const BattleButton = styled.TouchableOpacity`
  height:80px;
  width:80px;
  border-radius:40px;
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const RunButton = styled(BattleButton)`
  bottom:0;
  left:0;
  background-color:#0e4b99;
`

export const CaptureButton = styled(BattleButton)`
  top:0;
  right:0;
  background-color:#ce1b1c;
`

export const InBattleContainer = styled.View`
  flex:1;
`

export const InBattleImageBackground = styled(BackgroundImage)`
  position:absolute;
  z-index:1;
`

export const InBattleView = styled.View`
  z-index:2;
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export const InBattlePokemon = styled.View`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:-50px;
`

export const InBattlePokemonName = styled.Text`
  color:black;
  font-size:30px;
  text-transform:capitalize;
  font-weight:400;
  text-decoration:underline;
`

export const InBattlePokemonImage = styled.Image`
  height:160px;
  width:160px;
`

export const InBattleCaptureRate = styled.Text`
  color:black;
  font-size:20px;
  position:absolute;
  top:10px;
  left:10px;
  font-weight:600;
`

export const InBattleChances = styled.View`
  width:100%;
  height:100px;
  position:absolute;
  bottom:0;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`

export const InBattleChancesImage = styled.Image`
  width: 70px;
  height:70px;
  margin: 0 10px;
`
export const BagContainer = styled.TouchableOpacity`
  z-index:2;
  position:absolute;
  width:60px;
  height:60px;
  top:0;
  right:0;
  margin:84px 30px;
  display:flex;
  justify-content:center;
  align-items:center;
  transform:rotate(90deg);
`

export const BagImage = styled.Image`
  height:60px;
  width:60px;
`

export const BagNotification = styled.View`
  height:30px;
  width:30px;
  border-radius:30px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  background:red;
  top:-5px;
  right:-5px;
`

export const PartyContainer = styled.View`
  transform:rotate(90deg);
  background:#ffdb80;
  border:5px solid #d58650;
  border-radius:20px;
  z-index:100;
  position:absolute;
`

export const PartyHeader = styled.View`
  width:100%;
  height:70px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  background:#d58650;
  box-shadow:0 10px 12px rgba(0,0,0,0.2);
`

export const PartyClose = styled.TouchableOpacity`
  height:50px;
  width:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  left:10px;
`

export const PartyTitle = styled.Text`
  color:#ffdb80;
  font-size:35px;
  font-weight:700;
`

export const PartyList = styled.FlatList`
  display:flex;
  flex:1;
`

export const PartyPokemonContainer = styled.View`
  height:200px;
  width:150px;
  background:white;
  margin:15px;
  align-self:center;
  border-radius:15px;
  border:1px solid #000;
  box-shadow:0 10px 12px rgba(0,0,0,0.3);
`

export const PartyPokemonImage = styled.Image`
  width:150px;
  height:150px;
`

export const PartyPokemonName = styled.Text`
  color:black;
  font-size:25px;
  flex:1;
  text-align:center;
  text-transform:capitalize;
`
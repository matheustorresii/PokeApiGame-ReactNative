import React,{ useState, useEffect } from 'react'
import { AntDesign,FontAwesome5,FontAwesome,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'

import api from './src/services/api'

import routeA from './src/images/RouteA.png'
import grass from './src/images/grass.png'
import bag from './src/images/bag.png'

import up from './src/images/sprites/up.png'
import down from './src/images/sprites/down.png'
import left from './src/images/sprites/left.png'
import right from './src/images/sprites/right.png'

import pokeball from './src/images/pokeball.png'
import pokeballBlack from './src/images/pokeballBlack.png'

import wallpaper from './src/images/wallpaper.png'

import {
  View,
  Text,
  Dimensions
} from 'react-native'

import {
  MainView,
  GameContainer,
  BackgroundImage,
  PlayerImage,
  ControllerContainer,
  ControllerButton,
  ControllerButtonUp,
  ControllerButtonDown,
  ControllerButtonLeft,
  ControllerButtonRight,
  ControllerButtonCenter,
  BattleContainer,
  RunButton,
  CaptureButton,
  InBattleContainer,
  InBattleImageBackground,
  InBattleView,
  InBattlePokemonName,
  InBattlePokemonImage,
  InBattlePokemon,
  InBattleCaptureRate,
  InBattleChances,
  InBattleChancesImage,
  BagContainer,
  BagImage,
  BagNotification,
  PartyContainer,
  PartyHeader,
  PartyTitle,
  PartyClose,
  PartyList,
  PartyPokemonContainer,
  PartyPokemonImage,
  PartyPokemonName,
  Wallpaper,
} from './styles'

export default function App() {
  const screenHeight = Math.round(Dimensions.get('window').height)
  const screenWidth = Math.round(Dimensions.get('window').width)

  const [marginLeft,setMarginLeft] = useState((screenWidth-60)/10*4)
  const [marginTop,setMarginTop] = useState((screenWidth-40)/10*8)

  const [inBattle,setInBattle] = useState(false)

  const [pokemon,setPokemon] = useState()
  const [routePokemon,setRoutePokemon] = useState([1,2,3,4,5,6,7,8,9])
  const [newPokemon,setNewPokemon] = useState(routePokemon[Math.floor(Math.random() * routePokemon.length)])
  
  const [captureRateMax,setCaptureRateMax] = useState(0)
  const [captureRate,setCaptureRate] = useState(0)

  const [chances,setChances] = useState(3)

  const [playerImg,setPlayerImg] = useState(down)

  const [notification,setNotification] = useState(false)
  const [party,setParty] = useState(false)
  const [pokemonParty,setPokemonParty] = useState([])

  function goUp(){
    if(marginTop > (screenWidth/10)*2){
      setMarginTop(marginTop-(screenWidth+40)/10)
    }
    setPlayerImg(up)
  }
  function goDown(){
    if(marginTop <= (screenWidth/10)*7){
      setMarginTop(marginTop+(screenWidth+40)/10)
    }
    setPlayerImg(down)
  }
  function goLeft(){
    if(marginLeft > screenWidth/10){
      setMarginLeft(marginLeft-(screenWidth+40)/10)
    }
    setPlayerImg(left)
  }
  function goRight(){
    if(marginLeft <= (screenWidth/10)*6){
      setMarginLeft(marginLeft+(screenWidth+40)/10)
    }
    setPlayerImg(right)
  }

  function generatePokemon(){
    setNewPokemon(routePokemon[Math.floor(Math.random() * routePokemon.length)])
    async function loadPokemon(){
      const response = await api.get(`/pokemon/${newPokemon}`)

      setPokemon(response.data)
    }
    loadPokemon()

    if(pokemon !== undefined){
      setCaptureRateMax(374 - pokemon.base_experience)
      setCaptureRate(Math.floor(captureRateMax/374*100))
    }

    setInBattle(true)
  }

  function run(){
    setPokemon()
    setChances(3)
    setInBattle(false)
  }

  function capture(){
    if(inBattle){

      let randomCapture = Math.floor(Math.random()*374)
      if(randomCapture<captureRateMax){
        setNotification(true)
        setPokemonParty([...pokemonParty,{name:pokemon.name,id:pokemon.id}])
        run()
        console.log('pokemon capturado')
      }else{
        if(chances === 1){
          run()
          console.log('pokemon fugiu')
        }else{
          setChances(chances-1)
        }
      }

    }
  }

  console.log(pokemonParty)

  useEffect(()=>{
    run();
    // screenWidth/10*N 5-> primeira linha, 6-> segunda linha, 7-> terceira linha
    // screenWidth/10*N 1-> primeira coluna...
    if(
      (marginTop >= screenWidth/10*7 && marginLeft <= screenWidth/10*5) ||
      (marginTop >= screenWidth/10*6 && marginLeft <= screenWidth/10*2) ||
      (marginTop >= screenWidth/10*4 && marginLeft <= screenWidth/10) 
      )
    {
      //vai estar na grama

      //só achar pokemon na grama com X% de chance
      let encounterChance = Math.floor(Math.random()*3)
      encounterChance === 0 && generatePokemon();
    }else{
      //fora da grama
      setPokemon()
    }
  },[marginLeft,marginTop])

  function openBag(){
    setNotification(false)
    setParty(true)
  }

  function closeBag(){
    setParty(false)
  }

  return (
    <MainView>

      <Wallpaper source={wallpaper} />

      {party &&
        <PartyContainer
          style={{height:screenWidth-50,width:screenHeight-50}}
        >
          <PartyHeader>
            <PartyClose onPress={closeBag}>
              <FontAwesome
                name='close'
                color='#ffdb80'
                size={50}
              />
            </PartyClose>
            <PartyTitle>Captured Pokemon</PartyTitle>
          </PartyHeader>

          <PartyList
            data={pokemonParty}
            keyExtractor={(item,index)=>index.toString()}
            horizontal={true}
            renderItem={({item})=>(
              <PartyPokemonContainer>
                <PartyPokemonImage source={{uri:`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('000'+item.id).slice(-3)}.png`}} />
                <PartyPokemonName>{item.name}</PartyPokemonName>
              </PartyPokemonContainer>
            )}
          />

        </PartyContainer>
      }

      <BagContainer onPress={openBag}>
        <BagImage source={bag}/>
        {notification &&
          <BagNotification>
            <Ionicons color='white' size={25} name='ios-notifications'/>
          </BagNotification>
        }
      </BagContainer>

      <ControllerContainer>

        <ControllerButtonUp onPress={goUp}>
          <AntDesign name='caretright' size={20} color='#000'/>
        </ControllerButtonUp>

        <ControllerButtonRight onPress={goRight}>
          <AntDesign name='caretdown' size={20} color='#000'/>
        </ControllerButtonRight>

        <ControllerButtonDown onPress={goDown}>
          <AntDesign name='caretleft' size={20} color='#000'/>
        </ControllerButtonDown>

        <ControllerButtonLeft onPress={goLeft}>
          <AntDesign name='caretup' size={20} color='#000'/>
        </ControllerButtonLeft>

        <ControllerButton><ControllerButtonCenter/></ControllerButton>

      </ControllerContainer>
      
      <GameContainer style={{height:screenWidth-50,width:screenWidth-50}}>
        {
          pokemon !== undefined
          ?
            <InBattleContainer>

              <InBattleImageBackground source={grass}/>

              <InBattleView>

                <InBattleCaptureRate> {captureRate}% </InBattleCaptureRate>

                <InBattlePokemon>
                  <InBattlePokemonName>{pokemon.name}</InBattlePokemonName>
                  <InBattlePokemonImage source={{uri:pokemon.sprites.front_default}}/>
                </InBattlePokemon>

                <InBattleChances>
                  {chances > 2 ?
                  <InBattleChancesImage source={pokeball}/>:
                  <InBattleChancesImage source={pokeballBlack}/>                 
                  }
                  {chances > 1 ?
                  <InBattleChancesImage source={pokeball}/>:
                  <InBattleChancesImage source={pokeballBlack}/>                 
                  }
                  {chances > 0 ?
                  <InBattleChancesImage source={pokeball}/>:
                  <InBattleChancesImage source={pokeballBlack}/>                 
                  }
                </InBattleChances>
                
              </InBattleView>

            </InBattleContainer>
          :
          <View>
            <BackgroundImage source={routeA}/>
            <PlayerImage
              style={{width:screenWidth/10,height:(screenWidth/10)+12,marginLeft,marginTop}}
              source={playerImg}
            />
          </View>
        }
        
      </GameContainer>

      <BattleContainer>
        <RunButton onPress={run}>
          <FontAwesome5 name='running' size={40} color='#fff'/>
        </RunButton>
        <CaptureButton onPress={capture}>
          <MaterialCommunityIcons name='pokeball' size={40} color='#fff'/>
        </CaptureButton>
      </BattleContainer>

    </MainView>
  );
}

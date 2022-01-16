(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Audio.js
  var Audio;
  var init_Audio = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Audio.js"() {
      Audio = class {
        static playSoundAt(position, sound, set, generateSoundId = true) {
          const SOUND_ID = generateSoundId ? GetSoundId() : -1;
          PlaySoundFromCoord(SOUND_ID, sound, position.x, position.y, position.z, set !== null && set !== void 0 ? set : "", false, 0, false);
          return SOUND_ID;
        }
        static playSoundFromEntity(entity, sound, set, generateSoundId = true) {
          const SOUND_ID = generateSoundId ? GetSoundId() : -1;
          PlaySoundFromEntity(SOUND_ID, sound, entity.Handle, set !== null && set !== void 0 ? set : "", false, 0);
          return SOUND_ID;
        }
        static playSoundFrontEnd(sound, set, generateSoundId = true) {
          const SOUND_ID = generateSoundId ? GetSoundId() : -1;
          PlaySoundFrontend(SOUND_ID, sound, set !== null && set !== void 0 ? set : "", false);
          return SOUND_ID;
        }
        static stopSound(soundId) {
          StopSound(soundId);
        }
        static releaseSound(soundId) {
          ReleaseSoundId(soundId);
        }
        static hasSoundFinished(soundId) {
          return HasSoundFinished(soundId);
        }
        static setAudioFlag(flag, toggle) {
          if (typeof flag === "string") {
            SetAudioFlag(flag, toggle);
          } else {
            SetAudioFlag(this.audioFlags[Number(flag)], toggle);
          }
        }
        static playSound(soundFile, soundSet) {
          this.releaseSound(this.playSoundFrontEnd(soundFile, soundSet));
        }
        static playMusic(musicFile) {
          if (!this.cachedMusicFile) {
            CancelMusicEvent(musicFile);
          }
          this.cachedMusicFile = musicFile;
          TriggerMusicEvent(musicFile);
        }
        static stopMusic(musicFile) {
          if (!musicFile) {
            if (!this.cachedMusicFile) {
              CancelMusicEvent(this.cachedMusicFile);
              this.cachedMusicFile = "";
            }
          } else {
            CancelMusicEvent(musicFile !== null && musicFile !== void 0 ? musicFile : "");
          }
        }
      };
      Audio.audioFlags = [
        "ActivateSwitchWheelAudio",
        "AllowCutsceneOverScreenFade",
        "AllowForceRadioAfterRetune",
        "AllowPainAndAmbientSpeechToPlayDuringCutscene",
        "AllowPlayerAIOnMission",
        "AllowPoliceScannerWhenPlayerHasNoControl",
        "AllowRadioDuringSwitch",
        "AllowRadioOverScreenFade",
        "AllowScoreAndRadio",
        "AllowScriptedSpeechInSlowMo",
        "AvoidMissionCompleteDelay",
        "DisableAbortConversationForDeathAndInjury",
        "DisableAbortConversationForRagdoll",
        "DisableBarks",
        "DisableFlightMusic",
        "DisableReplayScriptStreamRecording",
        "EnableHeadsetBeep",
        "ForceConversationInterrupt",
        "ForceSeamlessRadioSwitch",
        "ForceSniperAudio",
        "FrontendRadioDisabled",
        "HoldMissionCompleteWhenPrepared",
        "IsDirectorModeActive",
        "IsPlayerOnMissionForSpeech",
        "ListenerReverbDisabled",
        "LoadMPData",
        "MobileRadioInGame",
        "OnlyAllowScriptTriggerPoliceScanner",
        "PlayMenuMusic",
        "PoliceScannerDisabled",
        "ScriptedConvListenerMaySpeak",
        "SpeechDucksScore",
        "SuppressPlayerScubaBreathing",
        "WantedMusicDisabled",
        "WantedMusicOnMission"
      ];
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Alignment.js
  var Alignment;
  var init_Alignment = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Alignment.js"() {
      (function(Alignment2) {
        Alignment2[Alignment2["Left"] = 0] = "Left";
        Alignment2[Alignment2["Centered"] = 1] = "Centered";
        Alignment2[Alignment2["Right"] = 2] = "Right";
      })(Alignment || (Alignment = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/AnimationFlags.js
  var AnimationFlags;
  var init_AnimationFlags = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/AnimationFlags.js"() {
      (function(AnimationFlags2) {
        AnimationFlags2[AnimationFlags2["None"] = 0] = "None";
        AnimationFlags2[AnimationFlags2["Loop"] = 1] = "Loop";
        AnimationFlags2[AnimationFlags2["StayInEndFrame"] = 2] = "StayInEndFrame";
        AnimationFlags2[AnimationFlags2["UpperBodyOnly"] = 16] = "UpperBodyOnly";
        AnimationFlags2[AnimationFlags2["AllowRotation"] = 32] = "AllowRotation";
        AnimationFlags2[AnimationFlags2["CancelableWithMovement"] = 128] = "CancelableWithMovement";
        AnimationFlags2[AnimationFlags2["RagdollOnCollision"] = 4194304] = "RagdollOnCollision";
      })(AnimationFlags || (AnimationFlags = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/AudioFlag.js
  var AudioFlag;
  var init_AudioFlag = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/AudioFlag.js"() {
      (function(AudioFlag2) {
        AudioFlag2[AudioFlag2["ActivateSwitchWheelAudio"] = 0] = "ActivateSwitchWheelAudio";
        AudioFlag2[AudioFlag2["AllowCutsceneOverScreenFade"] = 1] = "AllowCutsceneOverScreenFade";
        AudioFlag2[AudioFlag2["AllowForceRadioAfterRetune"] = 2] = "AllowForceRadioAfterRetune";
        AudioFlag2[AudioFlag2["AllowPainAndAmbientSpeechToPlayDuringCutscene"] = 3] = "AllowPainAndAmbientSpeechToPlayDuringCutscene";
        AudioFlag2[AudioFlag2["AllowPlayerAIOnMission"] = 4] = "AllowPlayerAIOnMission";
        AudioFlag2[AudioFlag2["AllowPoliceScannerWhenPlayerHasNoControl"] = 5] = "AllowPoliceScannerWhenPlayerHasNoControl";
        AudioFlag2[AudioFlag2["AllowRadioDuringSwitch"] = 6] = "AllowRadioDuringSwitch";
        AudioFlag2[AudioFlag2["AllowRadioOverScreenFade"] = 7] = "AllowRadioOverScreenFade";
        AudioFlag2[AudioFlag2["AllowScoreAndRadio"] = 8] = "AllowScoreAndRadio";
        AudioFlag2[AudioFlag2["AllowScriptedSpeechInSlowMo"] = 9] = "AllowScriptedSpeechInSlowMo";
        AudioFlag2[AudioFlag2["AvoidMissionCompleteDelay"] = 10] = "AvoidMissionCompleteDelay";
        AudioFlag2[AudioFlag2["DisableAbortConversationForDeathAndInjury"] = 11] = "DisableAbortConversationForDeathAndInjury";
        AudioFlag2[AudioFlag2["DisableAbortConversationForRagdoll"] = 12] = "DisableAbortConversationForRagdoll";
        AudioFlag2[AudioFlag2["DisableBarks"] = 13] = "DisableBarks";
        AudioFlag2[AudioFlag2["DisableFlightMusic"] = 14] = "DisableFlightMusic";
        AudioFlag2[AudioFlag2["DisableReplayScriptStreamRecording"] = 15] = "DisableReplayScriptStreamRecording";
        AudioFlag2[AudioFlag2["EnableHeadsetBeep"] = 16] = "EnableHeadsetBeep";
        AudioFlag2[AudioFlag2["ForceConversationInterrupt"] = 17] = "ForceConversationInterrupt";
        AudioFlag2[AudioFlag2["ForceSeamlessRadioSwitch"] = 18] = "ForceSeamlessRadioSwitch";
        AudioFlag2[AudioFlag2["ForceSniperAudio"] = 19] = "ForceSniperAudio";
        AudioFlag2[AudioFlag2["FrontendRadioDisabled"] = 20] = "FrontendRadioDisabled";
        AudioFlag2[AudioFlag2["HoldMissionCompleteWhenPrepared"] = 21] = "HoldMissionCompleteWhenPrepared";
        AudioFlag2[AudioFlag2["IsDirectorModeActive"] = 22] = "IsDirectorModeActive";
        AudioFlag2[AudioFlag2["IsPlayerOnMissionForSpeech"] = 23] = "IsPlayerOnMissionForSpeech";
        AudioFlag2[AudioFlag2["ListenerReverbDisabled"] = 24] = "ListenerReverbDisabled";
        AudioFlag2[AudioFlag2["LoadMPData"] = 25] = "LoadMPData";
        AudioFlag2[AudioFlag2["MobileRadioInGame"] = 26] = "MobileRadioInGame";
        AudioFlag2[AudioFlag2["OnlyAllowScriptTriggerPoliceScanner"] = 27] = "OnlyAllowScriptTriggerPoliceScanner";
        AudioFlag2[AudioFlag2["PlayMenuMusic"] = 28] = "PlayMenuMusic";
        AudioFlag2[AudioFlag2["PoliceScannerDisabled"] = 29] = "PoliceScannerDisabled";
        AudioFlag2[AudioFlag2["ScriptedConvListenerMaySpeak"] = 30] = "ScriptedConvListenerMaySpeak";
        AudioFlag2[AudioFlag2["SpeechDucksScore"] = 31] = "SpeechDucksScore";
        AudioFlag2[AudioFlag2["SuppressPlayerScubaBreathing"] = 32] = "SuppressPlayerScubaBreathing";
        AudioFlag2[AudioFlag2["WantedMusicDisabled"] = 33] = "WantedMusicDisabled";
        AudioFlag2[AudioFlag2["WantedMusicOnMission"] = 34] = "WantedMusicOnMission";
      })(AudioFlag || (AudioFlag = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/BadgeStyle.js
  var BadgeStyle;
  var init_BadgeStyle = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/BadgeStyle.js"() {
      (function(BadgeStyle2) {
        BadgeStyle2[BadgeStyle2["None"] = 0] = "None";
        BadgeStyle2[BadgeStyle2["Lock"] = 1] = "Lock";
        BadgeStyle2[BadgeStyle2["Star"] = 2] = "Star";
        BadgeStyle2[BadgeStyle2["Warning"] = 3] = "Warning";
        BadgeStyle2[BadgeStyle2["Crown"] = 4] = "Crown";
        BadgeStyle2[BadgeStyle2["MedalBronze"] = 5] = "MedalBronze";
        BadgeStyle2[BadgeStyle2["MedalGold"] = 6] = "MedalGold";
        BadgeStyle2[BadgeStyle2["MedalSilver"] = 7] = "MedalSilver";
        BadgeStyle2[BadgeStyle2["Cash"] = 8] = "Cash";
        BadgeStyle2[BadgeStyle2["Coke"] = 9] = "Coke";
        BadgeStyle2[BadgeStyle2["Heroin"] = 10] = "Heroin";
        BadgeStyle2[BadgeStyle2["Meth"] = 11] = "Meth";
        BadgeStyle2[BadgeStyle2["Weed"] = 12] = "Weed";
        BadgeStyle2[BadgeStyle2["Ammo"] = 13] = "Ammo";
        BadgeStyle2[BadgeStyle2["Armor"] = 14] = "Armor";
        BadgeStyle2[BadgeStyle2["Barber"] = 15] = "Barber";
        BadgeStyle2[BadgeStyle2["Clothing"] = 16] = "Clothing";
        BadgeStyle2[BadgeStyle2["Franklin"] = 17] = "Franklin";
        BadgeStyle2[BadgeStyle2["Bike"] = 18] = "Bike";
        BadgeStyle2[BadgeStyle2["Car"] = 19] = "Car";
        BadgeStyle2[BadgeStyle2["Gun"] = 20] = "Gun";
        BadgeStyle2[BadgeStyle2["HealthHeart"] = 21] = "HealthHeart";
        BadgeStyle2[BadgeStyle2["MakeupBrush"] = 22] = "MakeupBrush";
        BadgeStyle2[BadgeStyle2["Mask"] = 23] = "Mask";
        BadgeStyle2[BadgeStyle2["Michael"] = 24] = "Michael";
        BadgeStyle2[BadgeStyle2["Tattoo"] = 25] = "Tattoo";
        BadgeStyle2[BadgeStyle2["Tick"] = 26] = "Tick";
        BadgeStyle2[BadgeStyle2["Trevor"] = 27] = "Trevor";
        BadgeStyle2[BadgeStyle2["Female"] = 28] = "Female";
        BadgeStyle2[BadgeStyle2["Male"] = 29] = "Male";
        BadgeStyle2[BadgeStyle2["LockArena"] = 30] = "LockArena";
        BadgeStyle2[BadgeStyle2["Adversary"] = 31] = "Adversary";
        BadgeStyle2[BadgeStyle2["BaseJumping"] = 32] = "BaseJumping";
        BadgeStyle2[BadgeStyle2["Briefcase"] = 33] = "Briefcase";
        BadgeStyle2[BadgeStyle2["MissionStar"] = 34] = "MissionStar";
        BadgeStyle2[BadgeStyle2["Deathmatch"] = 35] = "Deathmatch";
        BadgeStyle2[BadgeStyle2["Castle"] = 36] = "Castle";
        BadgeStyle2[BadgeStyle2["Trophy"] = 37] = "Trophy";
        BadgeStyle2[BadgeStyle2["RaceFlag"] = 38] = "RaceFlag";
        BadgeStyle2[BadgeStyle2["RaceFlagPlane"] = 39] = "RaceFlagPlane";
        BadgeStyle2[BadgeStyle2["RaceFlagBicycle"] = 40] = "RaceFlagBicycle";
        BadgeStyle2[BadgeStyle2["RaceFlagPerson"] = 41] = "RaceFlagPerson";
        BadgeStyle2[BadgeStyle2["RaceFlagCar"] = 42] = "RaceFlagCar";
        BadgeStyle2[BadgeStyle2["RaceFlagBoatAnchor"] = 43] = "RaceFlagBoatAnchor";
        BadgeStyle2[BadgeStyle2["Rockstar"] = 44] = "Rockstar";
        BadgeStyle2[BadgeStyle2["Stunt"] = 45] = "Stunt";
        BadgeStyle2[BadgeStyle2["StuntPremium"] = 46] = "StuntPremium";
        BadgeStyle2[BadgeStyle2["RaceFlagStuntJump"] = 47] = "RaceFlagStuntJump";
        BadgeStyle2[BadgeStyle2["Shield"] = 48] = "Shield";
        BadgeStyle2[BadgeStyle2["TeamDeathmatch"] = 49] = "TeamDeathmatch";
        BadgeStyle2[BadgeStyle2["VehicleDeathmatch"] = 50] = "VehicleDeathmatch";
        BadgeStyle2[BadgeStyle2["MpAmmoPickup"] = 51] = "MpAmmoPickup";
        BadgeStyle2[BadgeStyle2["MpAmmo"] = 52] = "MpAmmo";
        BadgeStyle2[BadgeStyle2["MpCash"] = 53] = "MpCash";
        BadgeStyle2[BadgeStyle2["MpRp"] = 54] = "MpRp";
        BadgeStyle2[BadgeStyle2["MpSpectating"] = 55] = "MpSpectating";
        BadgeStyle2[BadgeStyle2["Sale"] = 56] = "Sale";
        BadgeStyle2[BadgeStyle2["GlobeWhite"] = 57] = "GlobeWhite";
        BadgeStyle2[BadgeStyle2["GlobeRed"] = 58] = "GlobeRed";
        BadgeStyle2[BadgeStyle2["GlobeBlue"] = 59] = "GlobeBlue";
        BadgeStyle2[BadgeStyle2["GlobeYellow"] = 60] = "GlobeYellow";
        BadgeStyle2[BadgeStyle2["GlobeGreen"] = 61] = "GlobeGreen";
        BadgeStyle2[BadgeStyle2["GlobeOrange"] = 62] = "GlobeOrange";
        BadgeStyle2[BadgeStyle2["InvArmWrestling"] = 63] = "InvArmWrestling";
        BadgeStyle2[BadgeStyle2["InvBasejump"] = 64] = "InvBasejump";
        BadgeStyle2[BadgeStyle2["InvMission"] = 65] = "InvMission";
        BadgeStyle2[BadgeStyle2["InvDarts"] = 66] = "InvDarts";
        BadgeStyle2[BadgeStyle2["InvDeathmatch"] = 67] = "InvDeathmatch";
        BadgeStyle2[BadgeStyle2["InvDrug"] = 68] = "InvDrug";
        BadgeStyle2[BadgeStyle2["InvCastle"] = 69] = "InvCastle";
        BadgeStyle2[BadgeStyle2["InvGolf"] = 70] = "InvGolf";
        BadgeStyle2[BadgeStyle2["InvBike"] = 71] = "InvBike";
        BadgeStyle2[BadgeStyle2["InvBoat"] = 72] = "InvBoat";
        BadgeStyle2[BadgeStyle2["InvAnchor"] = 73] = "InvAnchor";
        BadgeStyle2[BadgeStyle2["InvCar"] = 74] = "InvCar";
        BadgeStyle2[BadgeStyle2["InvDollar"] = 75] = "InvDollar";
        BadgeStyle2[BadgeStyle2["InvCoke"] = 76] = "InvCoke";
        BadgeStyle2[BadgeStyle2["InvKey"] = 77] = "InvKey";
        BadgeStyle2[BadgeStyle2["InvData"] = 78] = "InvData";
        BadgeStyle2[BadgeStyle2["InvHeli"] = 79] = "InvHeli";
        BadgeStyle2[BadgeStyle2["InvHeorin"] = 80] = "InvHeorin";
        BadgeStyle2[BadgeStyle2["InvKeycard"] = 81] = "InvKeycard";
        BadgeStyle2[BadgeStyle2["InvMeth"] = 82] = "InvMeth";
        BadgeStyle2[BadgeStyle2["InvBriefcase"] = 83] = "InvBriefcase";
        BadgeStyle2[BadgeStyle2["InvLink"] = 84] = "InvLink";
        BadgeStyle2[BadgeStyle2["InvPerson"] = 85] = "InvPerson";
        BadgeStyle2[BadgeStyle2["InvPlane"] = 86] = "InvPlane";
        BadgeStyle2[BadgeStyle2["InvPlane2"] = 87] = "InvPlane2";
        BadgeStyle2[BadgeStyle2["InvQuestionmark"] = 88] = "InvQuestionmark";
        BadgeStyle2[BadgeStyle2["InvRemote"] = 89] = "InvRemote";
        BadgeStyle2[BadgeStyle2["InvSafe"] = 90] = "InvSafe";
        BadgeStyle2[BadgeStyle2["InvSteerWheel"] = 91] = "InvSteerWheel";
        BadgeStyle2[BadgeStyle2["InvWeapon"] = 92] = "InvWeapon";
        BadgeStyle2[BadgeStyle2["InvWeed"] = 93] = "InvWeed";
        BadgeStyle2[BadgeStyle2["InvRaceFlagPlane"] = 94] = "InvRaceFlagPlane";
        BadgeStyle2[BadgeStyle2["InvRaceFlagBicycle"] = 95] = "InvRaceFlagBicycle";
        BadgeStyle2[BadgeStyle2["InvRaceFlagBoatAnchor"] = 96] = "InvRaceFlagBoatAnchor";
        BadgeStyle2[BadgeStyle2["InvRaceFlagPerson"] = 97] = "InvRaceFlagPerson";
        BadgeStyle2[BadgeStyle2["InvRaceFlagCar"] = 98] = "InvRaceFlagCar";
        BadgeStyle2[BadgeStyle2["InvRaceFlagHelmet"] = 99] = "InvRaceFlagHelmet";
        BadgeStyle2[BadgeStyle2["InvShootingRange"] = 100] = "InvShootingRange";
        BadgeStyle2[BadgeStyle2["InvSurvival"] = 101] = "InvSurvival";
        BadgeStyle2[BadgeStyle2["InvTeamDeathmatch"] = 102] = "InvTeamDeathmatch";
        BadgeStyle2[BadgeStyle2["InvTennis"] = 103] = "InvTennis";
        BadgeStyle2[BadgeStyle2["InvVehicleDeathmatch"] = 104] = "InvVehicleDeathmatch";
        BadgeStyle2[BadgeStyle2["AudioMute"] = 105] = "AudioMute";
        BadgeStyle2[BadgeStyle2["AudioInactive"] = 106] = "AudioInactive";
        BadgeStyle2[BadgeStyle2["AudioVol1"] = 107] = "AudioVol1";
        BadgeStyle2[BadgeStyle2["AudioVol2"] = 108] = "AudioVol2";
        BadgeStyle2[BadgeStyle2["AudioVol3"] = 109] = "AudioVol3";
        BadgeStyle2[BadgeStyle2["CountryUsa"] = 110] = "CountryUsa";
        BadgeStyle2[BadgeStyle2["CountryUk"] = 111] = "CountryUk";
        BadgeStyle2[BadgeStyle2["CountrySweden"] = 112] = "CountrySweden";
        BadgeStyle2[BadgeStyle2["CountryKorea"] = 113] = "CountryKorea";
        BadgeStyle2[BadgeStyle2["CountryJapan"] = 114] = "CountryJapan";
        BadgeStyle2[BadgeStyle2["CountryItaly"] = 115] = "CountryItaly";
        BadgeStyle2[BadgeStyle2["CountryGermany"] = 116] = "CountryGermany";
        BadgeStyle2[BadgeStyle2["CountryFrance"] = 117] = "CountryFrance";
        BadgeStyle2[BadgeStyle2["BrandAlbany"] = 118] = "BrandAlbany";
        BadgeStyle2[BadgeStyle2["BrandAnnis"] = 119] = "BrandAnnis";
        BadgeStyle2[BadgeStyle2["BrandBanshee"] = 120] = "BrandBanshee";
        BadgeStyle2[BadgeStyle2["BrandBenefactor"] = 121] = "BrandBenefactor";
        BadgeStyle2[BadgeStyle2["BrandBf"] = 122] = "BrandBf";
        BadgeStyle2[BadgeStyle2["BrandBollokan"] = 123] = "BrandBollokan";
        BadgeStyle2[BadgeStyle2["BrandBravado"] = 124] = "BrandBravado";
        BadgeStyle2[BadgeStyle2["BrandBrute"] = 125] = "BrandBrute";
        BadgeStyle2[BadgeStyle2["BrandBuckingham"] = 126] = "BrandBuckingham";
        BadgeStyle2[BadgeStyle2["BrandCanis"] = 127] = "BrandCanis";
        BadgeStyle2[BadgeStyle2["BrandChariot"] = 128] = "BrandChariot";
        BadgeStyle2[BadgeStyle2["BrandCheval"] = 129] = "BrandCheval";
        BadgeStyle2[BadgeStyle2["BrandClassique"] = 130] = "BrandClassique";
        BadgeStyle2[BadgeStyle2["BrandCoil"] = 131] = "BrandCoil";
        BadgeStyle2[BadgeStyle2["BrandDeclasse"] = 132] = "BrandDeclasse";
        BadgeStyle2[BadgeStyle2["BrandDewbauchee"] = 133] = "BrandDewbauchee";
        BadgeStyle2[BadgeStyle2["BrandDilettante"] = 134] = "BrandDilettante";
        BadgeStyle2[BadgeStyle2["BrandDinka"] = 135] = "BrandDinka";
        BadgeStyle2[BadgeStyle2["BrandDundreary"] = 136] = "BrandDundreary";
        BadgeStyle2[BadgeStyle2["BrandEmporer"] = 137] = "BrandEmporer";
        BadgeStyle2[BadgeStyle2["BrandEnus"] = 138] = "BrandEnus";
        BadgeStyle2[BadgeStyle2["BrandFathom"] = 139] = "BrandFathom";
        BadgeStyle2[BadgeStyle2["BrandGalivanter"] = 140] = "BrandGalivanter";
        BadgeStyle2[BadgeStyle2["BrandGrotti"] = 141] = "BrandGrotti";
        BadgeStyle2[BadgeStyle2["BrandGrotti2"] = 142] = "BrandGrotti2";
        BadgeStyle2[BadgeStyle2["BrandHijak"] = 143] = "BrandHijak";
        BadgeStyle2[BadgeStyle2["BrandHvy"] = 144] = "BrandHvy";
        BadgeStyle2[BadgeStyle2["BrandImponte"] = 145] = "BrandImponte";
        BadgeStyle2[BadgeStyle2["BrandInvetero"] = 146] = "BrandInvetero";
        BadgeStyle2[BadgeStyle2["BrandJacksheepe"] = 147] = "BrandJacksheepe";
        BadgeStyle2[BadgeStyle2["BrandLcc"] = 148] = "BrandLcc";
        BadgeStyle2[BadgeStyle2["BrandJobuilt"] = 149] = "BrandJobuilt";
        BadgeStyle2[BadgeStyle2["BrandKarin"] = 150] = "BrandKarin";
        BadgeStyle2[BadgeStyle2["BrandLampadati"] = 151] = "BrandLampadati";
        BadgeStyle2[BadgeStyle2["BrandMaibatsu"] = 152] = "BrandMaibatsu";
        BadgeStyle2[BadgeStyle2["BrandMammoth"] = 153] = "BrandMammoth";
        BadgeStyle2[BadgeStyle2["BrandMtl"] = 154] = "BrandMtl";
        BadgeStyle2[BadgeStyle2["BrandNagasaki"] = 155] = "BrandNagasaki";
        BadgeStyle2[BadgeStyle2["BrandObey"] = 156] = "BrandObey";
        BadgeStyle2[BadgeStyle2["BrandOcelot"] = 157] = "BrandOcelot";
        BadgeStyle2[BadgeStyle2["BrandOverflod"] = 158] = "BrandOverflod";
        BadgeStyle2[BadgeStyle2["BrandPed"] = 159] = "BrandPed";
        BadgeStyle2[BadgeStyle2["BrandPegassi"] = 160] = "BrandPegassi";
        BadgeStyle2[BadgeStyle2["BrandPfister"] = 161] = "BrandPfister";
        BadgeStyle2[BadgeStyle2["BrandPrincipe"] = 162] = "BrandPrincipe";
        BadgeStyle2[BadgeStyle2["BrandProgen"] = 163] = "BrandProgen";
        BadgeStyle2[BadgeStyle2["BrandProgen2"] = 164] = "BrandProgen2";
        BadgeStyle2[BadgeStyle2["BrandRune"] = 165] = "BrandRune";
        BadgeStyle2[BadgeStyle2["BrandSchyster"] = 166] = "BrandSchyster";
        BadgeStyle2[BadgeStyle2["BrandShitzu"] = 167] = "BrandShitzu";
        BadgeStyle2[BadgeStyle2["BrandSpeedophile"] = 168] = "BrandSpeedophile";
        BadgeStyle2[BadgeStyle2["BrandStanley"] = 169] = "BrandStanley";
        BadgeStyle2[BadgeStyle2["BrandTruffade"] = 170] = "BrandTruffade";
        BadgeStyle2[BadgeStyle2["BrandUbermacht"] = 171] = "BrandUbermacht";
        BadgeStyle2[BadgeStyle2["BrandVapid"] = 172] = "BrandVapid";
        BadgeStyle2[BadgeStyle2["BrandVulcar"] = 173] = "BrandVulcar";
        BadgeStyle2[BadgeStyle2["BrandWeeny"] = 174] = "BrandWeeny";
        BadgeStyle2[BadgeStyle2["BrandWestern"] = 175] = "BrandWestern";
        BadgeStyle2[BadgeStyle2["BrandWesternmotorcycle"] = 176] = "BrandWesternmotorcycle";
        BadgeStyle2[BadgeStyle2["BrandWillard"] = 177] = "BrandWillard";
        BadgeStyle2[BadgeStyle2["BrandZirconium"] = 178] = "BrandZirconium";
        BadgeStyle2[BadgeStyle2["Info"] = 179] = "Info";
      })(BadgeStyle || (BadgeStyle = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Blip.js
  var BlipColor, BlipSprite;
  var init_Blip = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Blip.js"() {
      (function(BlipColor2) {
        BlipColor2[BlipColor2["White"] = 0] = "White";
        BlipColor2[BlipColor2["Red"] = 1] = "Red";
        BlipColor2[BlipColor2["Green"] = 2] = "Green";
        BlipColor2[BlipColor2["Blue"] = 3] = "Blue";
        BlipColor2[BlipColor2["MichaelBlue"] = 42] = "MichaelBlue";
        BlipColor2[BlipColor2["FranklinGreen"] = 43] = "FranklinGreen";
        BlipColor2[BlipColor2["TrevorOrange"] = 44] = "TrevorOrange";
        BlipColor2[BlipColor2["Yellow"] = 66] = "Yellow";
      })(BlipColor || (BlipColor = {}));
      (function(BlipSprite2) {
        BlipSprite2[BlipSprite2["Standard"] = 1] = "Standard";
        BlipSprite2[BlipSprite2["BigBlip"] = 2] = "BigBlip";
        BlipSprite2[BlipSprite2["PoliceOfficer"] = 3] = "PoliceOfficer";
        BlipSprite2[BlipSprite2["PoliceArea"] = 4] = "PoliceArea";
        BlipSprite2[BlipSprite2["Square"] = 5] = "Square";
        BlipSprite2[BlipSprite2["Player"] = 6] = "Player";
        BlipSprite2[BlipSprite2["North"] = 7] = "North";
        BlipSprite2[BlipSprite2["Waypoint"] = 8] = "Waypoint";
        BlipSprite2[BlipSprite2["BigCircle"] = 9] = "BigCircle";
        BlipSprite2[BlipSprite2["BigCircleOutline"] = 10] = "BigCircleOutline";
        BlipSprite2[BlipSprite2["ArrowUpOutlined"] = 11] = "ArrowUpOutlined";
        BlipSprite2[BlipSprite2["ArrowDownOutlined"] = 12] = "ArrowDownOutlined";
        BlipSprite2[BlipSprite2["ArrowUp"] = 13] = "ArrowUp";
        BlipSprite2[BlipSprite2["ArrowDown"] = 14] = "ArrowDown";
        BlipSprite2[BlipSprite2["PoliceHelicopterAnimated"] = 15] = "PoliceHelicopterAnimated";
        BlipSprite2[BlipSprite2["Jet"] = 16] = "Jet";
        BlipSprite2[BlipSprite2["Number1"] = 17] = "Number1";
        BlipSprite2[BlipSprite2["Number2"] = 18] = "Number2";
        BlipSprite2[BlipSprite2["Number3"] = 19] = "Number3";
        BlipSprite2[BlipSprite2["Number4"] = 20] = "Number4";
        BlipSprite2[BlipSprite2["Number5"] = 21] = "Number5";
        BlipSprite2[BlipSprite2["Number6"] = 22] = "Number6";
        BlipSprite2[BlipSprite2["Number7"] = 23] = "Number7";
        BlipSprite2[BlipSprite2["Number8"] = 24] = "Number8";
        BlipSprite2[BlipSprite2["Number9"] = 25] = "Number9";
        BlipSprite2[BlipSprite2["Number10"] = 26] = "Number10";
        BlipSprite2[BlipSprite2["GTAOCrew"] = 27] = "GTAOCrew";
        BlipSprite2[BlipSprite2["GTAOFriendly"] = 28] = "GTAOFriendly";
        BlipSprite2[BlipSprite2["Lift"] = 36] = "Lift";
        BlipSprite2[BlipSprite2["RaceFinish"] = 38] = "RaceFinish";
        BlipSprite2[BlipSprite2["Safehouse"] = 40] = "Safehouse";
        BlipSprite2[BlipSprite2["PoliceOfficer2"] = 41] = "PoliceOfficer2";
        BlipSprite2[BlipSprite2["PoliceCarDot"] = 42] = "PoliceCarDot";
        BlipSprite2[BlipSprite2["PoliceHelicopter"] = 43] = "PoliceHelicopter";
        BlipSprite2[BlipSprite2["ChatBubble"] = 47] = "ChatBubble";
        BlipSprite2[BlipSprite2["Garage2"] = 50] = "Garage2";
        BlipSprite2[BlipSprite2["Drugs"] = 51] = "Drugs";
        BlipSprite2[BlipSprite2["Store"] = 52] = "Store";
        BlipSprite2[BlipSprite2["PoliceCar"] = 56] = "PoliceCar";
        BlipSprite2[BlipSprite2["PolicePlayer"] = 58] = "PolicePlayer";
        BlipSprite2[BlipSprite2["PoliceStation"] = 60] = "PoliceStation";
        BlipSprite2[BlipSprite2["Hospital"] = 61] = "Hospital";
        BlipSprite2[BlipSprite2["Helicopter"] = 64] = "Helicopter";
        BlipSprite2[BlipSprite2["StrangersAndFreaks"] = 65] = "StrangersAndFreaks";
        BlipSprite2[BlipSprite2["ArmoredTruck"] = 66] = "ArmoredTruck";
        BlipSprite2[BlipSprite2["TowTruck"] = 68] = "TowTruck";
        BlipSprite2[BlipSprite2["Barber"] = 71] = "Barber";
        BlipSprite2[BlipSprite2["LosSantosCustoms"] = 72] = "LosSantosCustoms";
        BlipSprite2[BlipSprite2["Clothes"] = 73] = "Clothes";
        BlipSprite2[BlipSprite2["TattooParlor"] = 75] = "TattooParlor";
        BlipSprite2[BlipSprite2["Simeon"] = 76] = "Simeon";
        BlipSprite2[BlipSprite2["Lester"] = 77] = "Lester";
        BlipSprite2[BlipSprite2["Michael"] = 78] = "Michael";
        BlipSprite2[BlipSprite2["Trevor"] = 79] = "Trevor";
        BlipSprite2[BlipSprite2["Rampage"] = 84] = "Rampage";
        BlipSprite2[BlipSprite2["VinewoodTours"] = 85] = "VinewoodTours";
        BlipSprite2[BlipSprite2["Lamar"] = 86] = "Lamar";
        BlipSprite2[BlipSprite2["Franklin"] = 88] = "Franklin";
        BlipSprite2[BlipSprite2["Chinese"] = 89] = "Chinese";
        BlipSprite2[BlipSprite2["Airport"] = 90] = "Airport";
        BlipSprite2[BlipSprite2["Bar"] = 93] = "Bar";
        BlipSprite2[BlipSprite2["BaseJump"] = 94] = "BaseJump";
        BlipSprite2[BlipSprite2["CarWash"] = 100] = "CarWash";
        BlipSprite2[BlipSprite2["ComedyClub"] = 102] = "ComedyClub";
        BlipSprite2[BlipSprite2["Dart"] = 103] = "Dart";
        BlipSprite2[BlipSprite2["FIB"] = 106] = "FIB";
        BlipSprite2[BlipSprite2["DollarSign"] = 108] = "DollarSign";
        BlipSprite2[BlipSprite2["Golf"] = 109] = "Golf";
        BlipSprite2[BlipSprite2["AmmuNation"] = 110] = "AmmuNation";
        BlipSprite2[BlipSprite2["Exile"] = 112] = "Exile";
        BlipSprite2[BlipSprite2["ShootingRange"] = 119] = "ShootingRange";
        BlipSprite2[BlipSprite2["Solomon"] = 120] = "Solomon";
        BlipSprite2[BlipSprite2["StripClub"] = 121] = "StripClub";
        BlipSprite2[BlipSprite2["Tennis"] = 122] = "Tennis";
        BlipSprite2[BlipSprite2["Triathlon"] = 126] = "Triathlon";
        BlipSprite2[BlipSprite2["OffRoadRaceFinish"] = 127] = "OffRoadRaceFinish";
        BlipSprite2[BlipSprite2["Key"] = 134] = "Key";
        BlipSprite2[BlipSprite2["MovieTheater"] = 135] = "MovieTheater";
        BlipSprite2[BlipSprite2["Music"] = 136] = "Music";
        BlipSprite2[BlipSprite2["Marijuana"] = 140] = "Marijuana";
        BlipSprite2[BlipSprite2["Hunting"] = 141] = "Hunting";
        BlipSprite2[BlipSprite2["ArmsTraffickingGround"] = 147] = "ArmsTraffickingGround";
        BlipSprite2[BlipSprite2["Nigel"] = 149] = "Nigel";
        BlipSprite2[BlipSprite2["AssaultRifle"] = 150] = "AssaultRifle";
        BlipSprite2[BlipSprite2["Bat"] = 151] = "Bat";
        BlipSprite2[BlipSprite2["Grenade"] = 152] = "Grenade";
        BlipSprite2[BlipSprite2["Health"] = 153] = "Health";
        BlipSprite2[BlipSprite2["Knife"] = 154] = "Knife";
        BlipSprite2[BlipSprite2["Molotov"] = 155] = "Molotov";
        BlipSprite2[BlipSprite2["Pistol"] = 156] = "Pistol";
        BlipSprite2[BlipSprite2["RPG"] = 157] = "RPG";
        BlipSprite2[BlipSprite2["Shotgun"] = 158] = "Shotgun";
        BlipSprite2[BlipSprite2["SMG"] = 159] = "SMG";
        BlipSprite2[BlipSprite2["Sniper"] = 160] = "Sniper";
        BlipSprite2[BlipSprite2["SonicWave"] = 161] = "SonicWave";
        BlipSprite2[BlipSprite2["PointOfInterest"] = 162] = "PointOfInterest";
        BlipSprite2[BlipSprite2["GTAOPassive"] = 163] = "GTAOPassive";
        BlipSprite2[BlipSprite2["GTAOUsingMenu"] = 164] = "GTAOUsingMenu";
        BlipSprite2[BlipSprite2["Link"] = 171] = "Link";
        BlipSprite2[BlipSprite2["Minigun"] = 173] = "Minigun";
        BlipSprite2[BlipSprite2["GrenadeLauncher"] = 174] = "GrenadeLauncher";
        BlipSprite2[BlipSprite2["Armor"] = 175] = "Armor";
        BlipSprite2[BlipSprite2["Castle"] = 176] = "Castle";
        BlipSprite2[BlipSprite2["Camera"] = 184] = "Camera";
        BlipSprite2[BlipSprite2["Handcuffs"] = 188] = "Handcuffs";
        BlipSprite2[BlipSprite2["Yoga"] = 197] = "Yoga";
        BlipSprite2[BlipSprite2["Cab"] = 198] = "Cab";
        BlipSprite2[BlipSprite2["Number11"] = 199] = "Number11";
        BlipSprite2[BlipSprite2["Number12"] = 200] = "Number12";
        BlipSprite2[BlipSprite2["Number13"] = 201] = "Number13";
        BlipSprite2[BlipSprite2["Number14"] = 202] = "Number14";
        BlipSprite2[BlipSprite2["Number15"] = 203] = "Number15";
        BlipSprite2[BlipSprite2["Number16"] = 204] = "Number16";
        BlipSprite2[BlipSprite2["Shrink"] = 205] = "Shrink";
        BlipSprite2[BlipSprite2["Epsilon"] = 206] = "Epsilon";
        BlipSprite2[BlipSprite2["PersonalVehicleCar"] = 225] = "PersonalVehicleCar";
        BlipSprite2[BlipSprite2["PersonalVehicleBike"] = 226] = "PersonalVehicleBike";
        BlipSprite2[BlipSprite2["Custody"] = 237] = "Custody";
        BlipSprite2[BlipSprite2["ArmsTraffickingAir"] = 251] = "ArmsTraffickingAir";
        BlipSprite2[BlipSprite2["Fairground"] = 266] = "Fairground";
        BlipSprite2[BlipSprite2["PropertyManagement"] = 267] = "PropertyManagement";
        BlipSprite2[BlipSprite2["Altruist"] = 269] = "Altruist";
        BlipSprite2[BlipSprite2["Enemy"] = 270] = "Enemy";
        BlipSprite2[BlipSprite2["Chop"] = 273] = "Chop";
        BlipSprite2[BlipSprite2["Dead"] = 274] = "Dead";
        BlipSprite2[BlipSprite2["Hooker"] = 279] = "Hooker";
        BlipSprite2[BlipSprite2["Friend"] = 280] = "Friend";
        BlipSprite2[BlipSprite2["BountyHit"] = 303] = "BountyHit";
        BlipSprite2[BlipSprite2["GTAOMission"] = 304] = "GTAOMission";
        BlipSprite2[BlipSprite2["GTAOSurvival"] = 305] = "GTAOSurvival";
        BlipSprite2[BlipSprite2["CrateDrop"] = 306] = "CrateDrop";
        BlipSprite2[BlipSprite2["PlaneDrop"] = 307] = "PlaneDrop";
        BlipSprite2[BlipSprite2["Sub"] = 308] = "Sub";
        BlipSprite2[BlipSprite2["Race"] = 309] = "Race";
        BlipSprite2[BlipSprite2["Deathmatch"] = 310] = "Deathmatch";
        BlipSprite2[BlipSprite2["ArmWrestling"] = 311] = "ArmWrestling";
        BlipSprite2[BlipSprite2["AmmuNationShootingRange"] = 313] = "AmmuNationShootingRange";
        BlipSprite2[BlipSprite2["RaceAir"] = 314] = "RaceAir";
        BlipSprite2[BlipSprite2["RaceCar"] = 315] = "RaceCar";
        BlipSprite2[BlipSprite2["RaceSea"] = 316] = "RaceSea";
        BlipSprite2[BlipSprite2["GarbageTruck"] = 318] = "GarbageTruck";
        BlipSprite2[BlipSprite2["SafehouseForSale"] = 350] = "SafehouseForSale";
        BlipSprite2[BlipSprite2["Package"] = 351] = "Package";
        BlipSprite2[BlipSprite2["MartinMadrazo"] = 352] = "MartinMadrazo";
        BlipSprite2[BlipSprite2["EnemyHelicopter"] = 353] = "EnemyHelicopter";
        BlipSprite2[BlipSprite2["Boost"] = 354] = "Boost";
        BlipSprite2[BlipSprite2["Devin"] = 355] = "Devin";
        BlipSprite2[BlipSprite2["Marina"] = 356] = "Marina";
        BlipSprite2[BlipSprite2["Garage"] = 357] = "Garage";
        BlipSprite2[BlipSprite2["GolfFlag"] = 358] = "GolfFlag";
        BlipSprite2[BlipSprite2["Hangar"] = 359] = "Hangar";
        BlipSprite2[BlipSprite2["Helipad"] = 360] = "Helipad";
        BlipSprite2[BlipSprite2["JerryCan"] = 361] = "JerryCan";
        BlipSprite2[BlipSprite2["Masks"] = 362] = "Masks";
        BlipSprite2[BlipSprite2["HeistSetup"] = 363] = "HeistSetup";
        BlipSprite2[BlipSprite2["Incapacitated"] = 364] = "Incapacitated";
        BlipSprite2[BlipSprite2["PickupSpawn"] = 365] = "PickupSpawn";
        BlipSprite2[BlipSprite2["BoilerSuit"] = 366] = "BoilerSuit";
        BlipSprite2[BlipSprite2["Completed"] = 367] = "Completed";
        BlipSprite2[BlipSprite2["Rockets"] = 368] = "Rockets";
        BlipSprite2[BlipSprite2["GarageForSale"] = 369] = "GarageForSale";
        BlipSprite2[BlipSprite2["HelipadForSale"] = 370] = "HelipadForSale";
        BlipSprite2[BlipSprite2["MarinaForSale"] = 371] = "MarinaForSale";
        BlipSprite2[BlipSprite2["HangarForSale"] = 372] = "HangarForSale";
        BlipSprite2[BlipSprite2["Business"] = 374] = "Business";
        BlipSprite2[BlipSprite2["BusinessForSale"] = 375] = "BusinessForSale";
        BlipSprite2[BlipSprite2["RaceBike"] = 376] = "RaceBike";
        BlipSprite2[BlipSprite2["Parachute"] = 377] = "Parachute";
        BlipSprite2[BlipSprite2["TeamDeathmatch"] = 378] = "TeamDeathmatch";
        BlipSprite2[BlipSprite2["RaceFoot"] = 379] = "RaceFoot";
        BlipSprite2[BlipSprite2["VehicleDeathmatch"] = 380] = "VehicleDeathmatch";
        BlipSprite2[BlipSprite2["Barry"] = 381] = "Barry";
        BlipSprite2[BlipSprite2["Dom"] = 382] = "Dom";
        BlipSprite2[BlipSprite2["MaryAnn"] = 383] = "MaryAnn";
        BlipSprite2[BlipSprite2["Cletus"] = 384] = "Cletus";
        BlipSprite2[BlipSprite2["Josh"] = 385] = "Josh";
        BlipSprite2[BlipSprite2["Minute"] = 386] = "Minute";
        BlipSprite2[BlipSprite2["Omega"] = 387] = "Omega";
        BlipSprite2[BlipSprite2["Tonya"] = 388] = "Tonya";
        BlipSprite2[BlipSprite2["Paparazzo"] = 389] = "Paparazzo";
        BlipSprite2[BlipSprite2["Crosshair"] = 390] = "Crosshair";
        BlipSprite2[BlipSprite2["Creator"] = 398] = "Creator";
        BlipSprite2[BlipSprite2["CreatorDirection"] = 399] = "CreatorDirection";
        BlipSprite2[BlipSprite2["Abigail"] = 400] = "Abigail";
        BlipSprite2[BlipSprite2["Blimp"] = 401] = "Blimp";
        BlipSprite2[BlipSprite2["Repair"] = 402] = "Repair";
        BlipSprite2[BlipSprite2["Testosterone"] = 403] = "Testosterone";
        BlipSprite2[BlipSprite2["Dinghy"] = 404] = "Dinghy";
        BlipSprite2[BlipSprite2["Fanatic"] = 405] = "Fanatic";
        BlipSprite2[BlipSprite2["Information"] = 407] = "Information";
        BlipSprite2[BlipSprite2["CaptureBriefcase"] = 408] = "CaptureBriefcase";
        BlipSprite2[BlipSprite2["LastTeamStanding"] = 409] = "LastTeamStanding";
        BlipSprite2[BlipSprite2["Boat"] = 410] = "Boat";
        BlipSprite2[BlipSprite2["CaptureHouse"] = 411] = "CaptureHouse";
        BlipSprite2[BlipSprite2["JerryCan2"] = 415] = "JerryCan2";
        BlipSprite2[BlipSprite2["RP"] = 416] = "RP";
        BlipSprite2[BlipSprite2["GTAOPlayerSafehouse"] = 417] = "GTAOPlayerSafehouse";
        BlipSprite2[BlipSprite2["GTAOPlayerSafehouseDead"] = 418] = "GTAOPlayerSafehouseDead";
        BlipSprite2[BlipSprite2["CaptureAmericanFlag"] = 419] = "CaptureAmericanFlag";
        BlipSprite2[BlipSprite2["CaptureFlag"] = 420] = "CaptureFlag";
        BlipSprite2[BlipSprite2["Tank"] = 421] = "Tank";
        BlipSprite2[BlipSprite2["HelicopterAnimated"] = 422] = "HelicopterAnimated";
        BlipSprite2[BlipSprite2["Plane"] = 423] = "Plane";
        BlipSprite2[BlipSprite2["PlayerNoColor"] = 425] = "PlayerNoColor";
        BlipSprite2[BlipSprite2["GunCar"] = 426] = "GunCar";
        BlipSprite2[BlipSprite2["Speedboat"] = 427] = "Speedboat";
        BlipSprite2[BlipSprite2["Heist"] = 428] = "Heist";
        BlipSprite2[BlipSprite2["Stopwatch"] = 430] = "Stopwatch";
        BlipSprite2[BlipSprite2["DollarSignCircled"] = 431] = "DollarSignCircled";
        BlipSprite2[BlipSprite2["Crosshair2"] = 432] = "Crosshair2";
        BlipSprite2[BlipSprite2["DollarSignSquared"] = 434] = "DollarSignSquared";
      })(BlipSprite || (BlipSprite = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Bone.js
  var Bone;
  var init_Bone = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Bone.js"() {
      (function(Bone2) {
        Bone2[Bone2["SKEL_ROOT"] = 0] = "SKEL_ROOT";
        Bone2[Bone2["SKEL_Pelvis"] = 11816] = "SKEL_Pelvis";
        Bone2[Bone2["SKEL_L_Thigh"] = 58271] = "SKEL_L_Thigh";
        Bone2[Bone2["SKEL_L_Calf"] = 63931] = "SKEL_L_Calf";
        Bone2[Bone2["SKEL_L_Foot"] = 14201] = "SKEL_L_Foot";
        Bone2[Bone2["SKEL_L_Toe0"] = 2108] = "SKEL_L_Toe0";
        Bone2[Bone2["IK_L_Foot"] = 65245] = "IK_L_Foot";
        Bone2[Bone2["PH_L_Foot"] = 57717] = "PH_L_Foot";
        Bone2[Bone2["MH_L_Knee"] = 46078] = "MH_L_Knee";
        Bone2[Bone2["SKEL_R_Thigh"] = 51826] = "SKEL_R_Thigh";
        Bone2[Bone2["SKEL_R_Calf"] = 36864] = "SKEL_R_Calf";
        Bone2[Bone2["SKEL_R_Foot"] = 52301] = "SKEL_R_Foot";
        Bone2[Bone2["SKEL_R_Toe0"] = 20781] = "SKEL_R_Toe0";
        Bone2[Bone2["IK_R_Foot"] = 35502] = "IK_R_Foot";
        Bone2[Bone2["PH_R_Foot"] = 24806] = "PH_R_Foot";
        Bone2[Bone2["MH_R_Knee"] = 16335] = "MH_R_Knee";
        Bone2[Bone2["RB_L_ThighRoll"] = 23639] = "RB_L_ThighRoll";
        Bone2[Bone2["RB_R_ThighRoll"] = 6442] = "RB_R_ThighRoll";
        Bone2[Bone2["SKEL_Spine_Root"] = 57597] = "SKEL_Spine_Root";
        Bone2[Bone2["SKEL_Spine0"] = 23553] = "SKEL_Spine0";
        Bone2[Bone2["SKEL_Spine1"] = 24816] = "SKEL_Spine1";
        Bone2[Bone2["SKEL_Spine2"] = 24817] = "SKEL_Spine2";
        Bone2[Bone2["SKEL_Spine3"] = 24818] = "SKEL_Spine3";
        Bone2[Bone2["SKEL_L_Clavicle"] = 64729] = "SKEL_L_Clavicle";
        Bone2[Bone2["SKEL_L_UpperArm"] = 45509] = "SKEL_L_UpperArm";
        Bone2[Bone2["SKEL_L_Forearm"] = 61163] = "SKEL_L_Forearm";
        Bone2[Bone2["SKEL_L_Hand"] = 18905] = "SKEL_L_Hand";
        Bone2[Bone2["SKEL_L_Finger00"] = 26610] = "SKEL_L_Finger00";
        Bone2[Bone2["SKEL_L_Finger01"] = 4089] = "SKEL_L_Finger01";
        Bone2[Bone2["SKEL_L_Finger02"] = 4090] = "SKEL_L_Finger02";
        Bone2[Bone2["SKEL_L_Finger10"] = 26611] = "SKEL_L_Finger10";
        Bone2[Bone2["SKEL_L_Finger11"] = 4169] = "SKEL_L_Finger11";
        Bone2[Bone2["SKEL_L_Finger12"] = 4170] = "SKEL_L_Finger12";
        Bone2[Bone2["SKEL_L_Finger20"] = 26612] = "SKEL_L_Finger20";
        Bone2[Bone2["SKEL_L_Finger21"] = 4185] = "SKEL_L_Finger21";
        Bone2[Bone2["SKEL_L_Finger22"] = 4186] = "SKEL_L_Finger22";
        Bone2[Bone2["SKEL_L_Finger30"] = 26613] = "SKEL_L_Finger30";
        Bone2[Bone2["SKEL_L_Finger31"] = 4137] = "SKEL_L_Finger31";
        Bone2[Bone2["SKEL_L_Finger32"] = 4138] = "SKEL_L_Finger32";
        Bone2[Bone2["SKEL_L_Finger40"] = 26614] = "SKEL_L_Finger40";
        Bone2[Bone2["SKEL_L_Finger41"] = 4153] = "SKEL_L_Finger41";
        Bone2[Bone2["SKEL_L_Finger42"] = 4154] = "SKEL_L_Finger42";
        Bone2[Bone2["PH_L_Hand"] = 60309] = "PH_L_Hand";
        Bone2[Bone2["IK_L_Hand"] = 36029] = "IK_L_Hand";
        Bone2[Bone2["RB_L_ForeArmRoll"] = 61007] = "RB_L_ForeArmRoll";
        Bone2[Bone2["RB_L_ArmRoll"] = 5232] = "RB_L_ArmRoll";
        Bone2[Bone2["MH_L_Elbow"] = 22711] = "MH_L_Elbow";
        Bone2[Bone2["SKEL_R_Clavicle"] = 10706] = "SKEL_R_Clavicle";
        Bone2[Bone2["SKEL_R_UpperArm"] = 40269] = "SKEL_R_UpperArm";
        Bone2[Bone2["SKEL_R_Forearm"] = 28252] = "SKEL_R_Forearm";
        Bone2[Bone2["SKEL_R_Hand"] = 57005] = "SKEL_R_Hand";
        Bone2[Bone2["SKEL_R_Finger00"] = 58866] = "SKEL_R_Finger00";
        Bone2[Bone2["SKEL_R_Finger01"] = 64016] = "SKEL_R_Finger01";
        Bone2[Bone2["SKEL_R_Finger02"] = 64017] = "SKEL_R_Finger02";
        Bone2[Bone2["SKEL_R_Finger10"] = 58867] = "SKEL_R_Finger10";
        Bone2[Bone2["SKEL_R_Finger11"] = 64096] = "SKEL_R_Finger11";
        Bone2[Bone2["SKEL_R_Finger12"] = 64097] = "SKEL_R_Finger12";
        Bone2[Bone2["SKEL_R_Finger20"] = 58868] = "SKEL_R_Finger20";
        Bone2[Bone2["SKEL_R_Finger21"] = 64112] = "SKEL_R_Finger21";
        Bone2[Bone2["SKEL_R_Finger22"] = 64113] = "SKEL_R_Finger22";
        Bone2[Bone2["SKEL_R_Finger30"] = 58869] = "SKEL_R_Finger30";
        Bone2[Bone2["SKEL_R_Finger31"] = 64064] = "SKEL_R_Finger31";
        Bone2[Bone2["SKEL_R_Finger32"] = 64065] = "SKEL_R_Finger32";
        Bone2[Bone2["SKEL_R_Finger40"] = 58870] = "SKEL_R_Finger40";
        Bone2[Bone2["SKEL_R_Finger41"] = 64080] = "SKEL_R_Finger41";
        Bone2[Bone2["SKEL_R_Finger42"] = 64081] = "SKEL_R_Finger42";
        Bone2[Bone2["PH_R_Hand"] = 28422] = "PH_R_Hand";
        Bone2[Bone2["IK_R_Hand"] = 6286] = "IK_R_Hand";
        Bone2[Bone2["RB_R_ForeArmRoll"] = 43810] = "RB_R_ForeArmRoll";
        Bone2[Bone2["RB_R_ArmRoll"] = 37119] = "RB_R_ArmRoll";
        Bone2[Bone2["MH_R_Elbow"] = 2992] = "MH_R_Elbow";
        Bone2[Bone2["SKEL_Neck_1"] = 39317] = "SKEL_Neck_1";
        Bone2[Bone2["SKEL_Head"] = 31086] = "SKEL_Head";
        Bone2[Bone2["IK_Head"] = 12844] = "IK_Head";
        Bone2[Bone2["FACIAL_facialRoot"] = 65068] = "FACIAL_facialRoot";
        Bone2[Bone2["FB_L_Brow_Out_000"] = 58331] = "FB_L_Brow_Out_000";
        Bone2[Bone2["FB_L_Lid_Upper_000"] = 45750] = "FB_L_Lid_Upper_000";
        Bone2[Bone2["FB_L_Eye_000"] = 25260] = "FB_L_Eye_000";
        Bone2[Bone2["FB_L_CheekBone_000"] = 21550] = "FB_L_CheekBone_000";
        Bone2[Bone2["FB_L_Lip_Corner_000"] = 29868] = "FB_L_Lip_Corner_000";
        Bone2[Bone2["FB_R_Lid_Upper_000"] = 43536] = "FB_R_Lid_Upper_000";
        Bone2[Bone2["FB_R_Eye_000"] = 27474] = "FB_R_Eye_000";
        Bone2[Bone2["FB_R_CheekBone_000"] = 19336] = "FB_R_CheekBone_000";
        Bone2[Bone2["FB_R_Brow_Out_000"] = 1356] = "FB_R_Brow_Out_000";
        Bone2[Bone2["FB_R_Lip_Corner_000"] = 11174] = "FB_R_Lip_Corner_000";
        Bone2[Bone2["FB_Brow_Centre_000"] = 37193] = "FB_Brow_Centre_000";
        Bone2[Bone2["FB_UpperLipRoot_000"] = 20178] = "FB_UpperLipRoot_000";
        Bone2[Bone2["FB_UpperLip_000"] = 61839] = "FB_UpperLip_000";
        Bone2[Bone2["FB_L_Lip_Top_000"] = 20279] = "FB_L_Lip_Top_000";
        Bone2[Bone2["FB_R_Lip_Top_000"] = 17719] = "FB_R_Lip_Top_000";
        Bone2[Bone2["FB_Jaw_000"] = 46240] = "FB_Jaw_000";
        Bone2[Bone2["FB_LowerLipRoot_000"] = 17188] = "FB_LowerLipRoot_000";
        Bone2[Bone2["FB_LowerLip_000"] = 20623] = "FB_LowerLip_000";
        Bone2[Bone2["FB_L_Lip_Bot_000"] = 47419] = "FB_L_Lip_Bot_000";
        Bone2[Bone2["FB_R_Lip_Bot_000"] = 49979] = "FB_R_Lip_Bot_000";
        Bone2[Bone2["FB_Tongue_000"] = 47495] = "FB_Tongue_000";
        Bone2[Bone2["RB_Neck_1"] = 35731] = "RB_Neck_1";
        Bone2[Bone2["IK_Root"] = 56604] = "IK_Root";
      })(Bone || (Bone = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/CameraShake.js
  var CameraShake;
  var init_CameraShake = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/CameraShake.js"() {
      (function(CameraShake2) {
        CameraShake2[CameraShake2["Hand"] = 0] = "Hand";
        CameraShake2[CameraShake2["SmallExplosion"] = 1] = "SmallExplosion";
        CameraShake2[CameraShake2["MediumExplosion"] = 2] = "MediumExplosion";
        CameraShake2[CameraShake2["LargeExplosion"] = 3] = "LargeExplosion";
        CameraShake2[CameraShake2["Jolt"] = 4] = "Jolt";
        CameraShake2[CameraShake2["Vibrate"] = 5] = "Vibrate";
        CameraShake2[CameraShake2["RoadVibration"] = 6] = "RoadVibration";
        CameraShake2[CameraShake2["Drunk"] = 7] = "Drunk";
        CameraShake2[CameraShake2["SkyDiving"] = 8] = "SkyDiving";
        CameraShake2[CameraShake2["FamilyDrugTrip"] = 9] = "FamilyDrugTrip";
        CameraShake2[CameraShake2["DeathFail"] = 10] = "DeathFail";
      })(CameraShake || (CameraShake = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/CheckboxStyle.js
  var CheckboxStyle;
  var init_CheckboxStyle = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/CheckboxStyle.js"() {
      (function(CheckboxStyle2) {
        CheckboxStyle2[CheckboxStyle2["Tick"] = 0] = "Tick";
        CheckboxStyle2[CheckboxStyle2["Cross"] = 1] = "Cross";
      })(CheckboxStyle || (CheckboxStyle = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Checkpoint.js
  var CheckpointIcon, CheckpointCustomIconStyle;
  var init_Checkpoint = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Checkpoint.js"() {
      (function(CheckpointIcon2) {
        CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow"] = 0] = "CylinderSingleArrow";
        CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow"] = 1] = "CylinderDoubleArrow";
        CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow"] = 2] = "CylinderTripleArrow";
        CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow"] = 3] = "CylinderCycleArrow";
        CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard"] = 4] = "CylinderCheckerboard";
        CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow2"] = 5] = "CylinderSingleArrow2";
        CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow2"] = 6] = "CylinderDoubleArrow2";
        CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow2"] = 7] = "CylinderTripleArrow2";
        CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow2"] = 8] = "CylinderCycleArrow2";
        CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard2"] = 9] = "CylinderCheckerboard2";
        CheckpointIcon2[CheckpointIcon2["RingSingleArrow"] = 10] = "RingSingleArrow";
        CheckpointIcon2[CheckpointIcon2["RingDoubleArrow"] = 11] = "RingDoubleArrow";
        CheckpointIcon2[CheckpointIcon2["RingTripleArrow"] = 12] = "RingTripleArrow";
        CheckpointIcon2[CheckpointIcon2["RingCycleArrow"] = 13] = "RingCycleArrow";
        CheckpointIcon2[CheckpointIcon2["RingCheckerboard"] = 14] = "RingCheckerboard";
        CheckpointIcon2[CheckpointIcon2["SingleArrow"] = 15] = "SingleArrow";
        CheckpointIcon2[CheckpointIcon2["DoubleArrow"] = 16] = "DoubleArrow";
        CheckpointIcon2[CheckpointIcon2["TripleArrow"] = 17] = "TripleArrow";
        CheckpointIcon2[CheckpointIcon2["CycleArrow"] = 18] = "CycleArrow";
        CheckpointIcon2[CheckpointIcon2["Checkerboard"] = 19] = "Checkerboard";
        CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow3"] = 20] = "CylinderSingleArrow3";
        CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow3"] = 21] = "CylinderDoubleArrow3";
        CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow3"] = 22] = "CylinderTripleArrow3";
        CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow3"] = 23] = "CylinderCycleArrow3";
        CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard3"] = 24] = "CylinderCheckerboard3";
        CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow4"] = 25] = "CylinderSingleArrow4";
        CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow4"] = 26] = "CylinderDoubleArrow4";
        CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow4"] = 27] = "CylinderTripleArrow4";
        CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow4"] = 28] = "CylinderCycleArrow4";
        CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard4"] = 29] = "CylinderCheckerboard4";
        CheckpointIcon2[CheckpointIcon2["CylinderSingleArrow5"] = 30] = "CylinderSingleArrow5";
        CheckpointIcon2[CheckpointIcon2["CylinderDoubleArrow5"] = 31] = "CylinderDoubleArrow5";
        CheckpointIcon2[CheckpointIcon2["CylinderTripleArrow5"] = 32] = "CylinderTripleArrow5";
        CheckpointIcon2[CheckpointIcon2["CylinderCycleArrow5"] = 33] = "CylinderCycleArrow5";
        CheckpointIcon2[CheckpointIcon2["CylinderCheckerboard5"] = 34] = "CylinderCheckerboard5";
        CheckpointIcon2[CheckpointIcon2["RingPlaneUp"] = 35] = "RingPlaneUp";
        CheckpointIcon2[CheckpointIcon2["RingPlaneLeft"] = 36] = "RingPlaneLeft";
        CheckpointIcon2[CheckpointIcon2["RingPlaneRight"] = 37] = "RingPlaneRight";
        CheckpointIcon2[CheckpointIcon2["RingPlaneDown"] = 38] = "RingPlaneDown";
        CheckpointIcon2[CheckpointIcon2["Empty"] = 39] = "Empty";
        CheckpointIcon2[CheckpointIcon2["Ring"] = 40] = "Ring";
        CheckpointIcon2[CheckpointIcon2["Empty2"] = 41] = "Empty2";
        CheckpointIcon2[CheckpointIcon2["Cyclinder"] = 45] = "Cyclinder";
        CheckpointIcon2[CheckpointIcon2["Cyclinder2"] = 46] = "Cyclinder2";
        CheckpointIcon2[CheckpointIcon2["Cyclinder3"] = 47] = "Cyclinder3";
      })(CheckpointIcon || (CheckpointIcon = {}));
      (function(CheckpointCustomIconStyle2) {
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Number"] = 0] = "Number";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["SingleArrow"] = 1] = "SingleArrow";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["DoubleArrow"] = 2] = "DoubleArrow";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["TripleArrow"] = 3] = "TripleArrow";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Ring"] = 4] = "Ring";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["CycleArrow"] = 5] = "CycleArrow";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Ring2"] = 6] = "Ring2";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["RingPointer"] = 7] = "RingPointer";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["SegmentedRing"] = 8] = "SegmentedRing";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Sphere"] = 9] = "Sphere";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["Dollar"] = 10] = "Dollar";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["QuintupleLines"] = 11] = "QuintupleLines";
        CheckpointCustomIconStyle2[CheckpointCustomIconStyle2["BeastIcon"] = 12] = "BeastIcon";
      })(CheckpointCustomIconStyle || (CheckpointCustomIconStyle = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/CloudHat.js
  var CloudHat;
  var init_CloudHat = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/CloudHat.js"() {
      (function(CloudHat2) {
        CloudHat2[CloudHat2["Unknown"] = 1] = "Unknown";
        CloudHat2[CloudHat2["Altostratus"] = 2] = "Altostratus";
        CloudHat2[CloudHat2["Cirrus"] = 3] = "Cirrus";
        CloudHat2[CloudHat2["Cirrocumulus"] = 4] = "Cirrocumulus";
        CloudHat2[CloudHat2["Clear"] = 5] = "Clear";
        CloudHat2[CloudHat2["Cloudy"] = 6] = "Cloudy";
        CloudHat2[CloudHat2["Contrails"] = 7] = "Contrails";
        CloudHat2[CloudHat2["Horizon"] = 8] = "Horizon";
        CloudHat2[CloudHat2["HorizonBand1"] = 9] = "HorizonBand1";
        CloudHat2[CloudHat2["HorizonBand2"] = 10] = "HorizonBand2";
        CloudHat2[CloudHat2["HorizonBand3"] = 11] = "HorizonBand3";
        CloudHat2[CloudHat2["Horsey"] = 12] = "Horsey";
        CloudHat2[CloudHat2["Nimbus"] = 13] = "Nimbus";
        CloudHat2[CloudHat2["Puffs"] = 14] = "Puffs";
        CloudHat2[CloudHat2["Rain"] = 15] = "Rain";
        CloudHat2[CloudHat2["Snowy"] = 16] = "Snowy";
        CloudHat2[CloudHat2["Stormy"] = 17] = "Stormy";
        CloudHat2[CloudHat2["Stratoscumulus"] = 18] = "Stratoscumulus";
        CloudHat2[CloudHat2["Stripey"] = 19] = "Stripey";
        CloudHat2[CloudHat2["Shower"] = 20] = "Shower";
        CloudHat2[CloudHat2["Wispy"] = 21] = "Wispy";
      })(CloudHat || (CloudHat = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Control.js
  var Control;
  var init_Control = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Control.js"() {
      (function(Control2) {
        Control2[Control2["NextCamera"] = 0] = "NextCamera";
        Control2[Control2["LookLeftRight"] = 1] = "LookLeftRight";
        Control2[Control2["LookUpDown"] = 2] = "LookUpDown";
        Control2[Control2["LookUpOnly"] = 3] = "LookUpOnly";
        Control2[Control2["LookDownOnly"] = 4] = "LookDownOnly";
        Control2[Control2["LookLeftOnly"] = 5] = "LookLeftOnly";
        Control2[Control2["LookRightOnly"] = 6] = "LookRightOnly";
        Control2[Control2["CinematicSlowMo"] = 7] = "CinematicSlowMo";
        Control2[Control2["FlyUpDown"] = 8] = "FlyUpDown";
        Control2[Control2["FlyLeftRight"] = 9] = "FlyLeftRight";
        Control2[Control2["ScriptedFlyZUp"] = 10] = "ScriptedFlyZUp";
        Control2[Control2["ScriptedFlyZDown"] = 11] = "ScriptedFlyZDown";
        Control2[Control2["WeaponWheelUpDown"] = 12] = "WeaponWheelUpDown";
        Control2[Control2["WeaponWheelLeftRight"] = 13] = "WeaponWheelLeftRight";
        Control2[Control2["WeaponWheelNext"] = 14] = "WeaponWheelNext";
        Control2[Control2["WeaponWheelPrev"] = 15] = "WeaponWheelPrev";
        Control2[Control2["SelectNextWeapon"] = 16] = "SelectNextWeapon";
        Control2[Control2["SelectPrevWeapon"] = 17] = "SelectPrevWeapon";
        Control2[Control2["SkipCutscene"] = 18] = "SkipCutscene";
        Control2[Control2["CharacterWheel"] = 19] = "CharacterWheel";
        Control2[Control2["MultiplayerInfo"] = 20] = "MultiplayerInfo";
        Control2[Control2["Sprint"] = 21] = "Sprint";
        Control2[Control2["Jump"] = 22] = "Jump";
        Control2[Control2["Enter"] = 23] = "Enter";
        Control2[Control2["Attack"] = 24] = "Attack";
        Control2[Control2["Aim"] = 25] = "Aim";
        Control2[Control2["LookBehind"] = 26] = "LookBehind";
        Control2[Control2["Phone"] = 27] = "Phone";
        Control2[Control2["SpecialAbility"] = 28] = "SpecialAbility";
        Control2[Control2["SpecialAbilitySecondary"] = 29] = "SpecialAbilitySecondary";
        Control2[Control2["MoveLeftRight"] = 30] = "MoveLeftRight";
        Control2[Control2["MoveUpDown"] = 31] = "MoveUpDown";
        Control2[Control2["MoveUpOnly"] = 32] = "MoveUpOnly";
        Control2[Control2["MoveDownOnly"] = 33] = "MoveDownOnly";
        Control2[Control2["MoveLeftOnly"] = 34] = "MoveLeftOnly";
        Control2[Control2["MoveRightOnly"] = 35] = "MoveRightOnly";
        Control2[Control2["Duck"] = 36] = "Duck";
        Control2[Control2["SelectWeapon"] = 37] = "SelectWeapon";
        Control2[Control2["Pickup"] = 38] = "Pickup";
        Control2[Control2["SniperZoom"] = 39] = "SniperZoom";
        Control2[Control2["SniperZoomInOnly"] = 40] = "SniperZoomInOnly";
        Control2[Control2["SniperZoomOutOnly"] = 41] = "SniperZoomOutOnly";
        Control2[Control2["SniperZoomInSecondary"] = 42] = "SniperZoomInSecondary";
        Control2[Control2["SniperZoomOutSecondary"] = 43] = "SniperZoomOutSecondary";
        Control2[Control2["Cover"] = 44] = "Cover";
        Control2[Control2["Reload"] = 45] = "Reload";
        Control2[Control2["Talk"] = 46] = "Talk";
        Control2[Control2["Detonate"] = 47] = "Detonate";
        Control2[Control2["HUDSpecial"] = 48] = "HUDSpecial";
        Control2[Control2["Arrest"] = 49] = "Arrest";
        Control2[Control2["AccurateAim"] = 50] = "AccurateAim";
        Control2[Control2["Context"] = 51] = "Context";
        Control2[Control2["ContextSecondary"] = 52] = "ContextSecondary";
        Control2[Control2["WeaponSpecial"] = 53] = "WeaponSpecial";
        Control2[Control2["WeaponSpecial2"] = 54] = "WeaponSpecial2";
        Control2[Control2["Dive"] = 55] = "Dive";
        Control2[Control2["DropWeapon"] = 56] = "DropWeapon";
        Control2[Control2["DropAmmo"] = 57] = "DropAmmo";
        Control2[Control2["ThrowGrenade"] = 58] = "ThrowGrenade";
        Control2[Control2["VehicleMoveLeftRight"] = 59] = "VehicleMoveLeftRight";
        Control2[Control2["VehicleMoveUpDown"] = 60] = "VehicleMoveUpDown";
        Control2[Control2["VehicleMoveUpOnly"] = 61] = "VehicleMoveUpOnly";
        Control2[Control2["VehicleMoveDownOnly"] = 62] = "VehicleMoveDownOnly";
        Control2[Control2["VehicleMoveLeftOnly"] = 63] = "VehicleMoveLeftOnly";
        Control2[Control2["VehicleMoveRightOnly"] = 64] = "VehicleMoveRightOnly";
        Control2[Control2["VehicleSpecial"] = 65] = "VehicleSpecial";
        Control2[Control2["VehicleGunLeftRight"] = 66] = "VehicleGunLeftRight";
        Control2[Control2["VehicleGunUpDown"] = 67] = "VehicleGunUpDown";
        Control2[Control2["VehicleAim"] = 68] = "VehicleAim";
        Control2[Control2["VehicleAttack"] = 69] = "VehicleAttack";
        Control2[Control2["VehicleAttack2"] = 70] = "VehicleAttack2";
        Control2[Control2["VehicleAccelerate"] = 71] = "VehicleAccelerate";
        Control2[Control2["VehicleBrake"] = 72] = "VehicleBrake";
        Control2[Control2["VehicleDuck"] = 73] = "VehicleDuck";
        Control2[Control2["VehicleHeadlight"] = 74] = "VehicleHeadlight";
        Control2[Control2["VehicleExit"] = 75] = "VehicleExit";
        Control2[Control2["VehicleHandbrake"] = 76] = "VehicleHandbrake";
        Control2[Control2["VehicleHotwireLeft"] = 77] = "VehicleHotwireLeft";
        Control2[Control2["VehicleHotwireRight"] = 78] = "VehicleHotwireRight";
        Control2[Control2["VehicleLookBehind"] = 79] = "VehicleLookBehind";
        Control2[Control2["VehicleCinCam"] = 80] = "VehicleCinCam";
        Control2[Control2["VehicleNextRadio"] = 81] = "VehicleNextRadio";
        Control2[Control2["VehiclePrevRadio"] = 82] = "VehiclePrevRadio";
        Control2[Control2["VehicleNextRadioTrack"] = 83] = "VehicleNextRadioTrack";
        Control2[Control2["VehiclePrevRadioTrack"] = 84] = "VehiclePrevRadioTrack";
        Control2[Control2["VehicleRadioWheel"] = 85] = "VehicleRadioWheel";
        Control2[Control2["VehicleHorn"] = 86] = "VehicleHorn";
        Control2[Control2["VehicleFlyThrottleUp"] = 87] = "VehicleFlyThrottleUp";
        Control2[Control2["VehicleFlyThrottleDown"] = 88] = "VehicleFlyThrottleDown";
        Control2[Control2["VehicleFlyYawLeft"] = 89] = "VehicleFlyYawLeft";
        Control2[Control2["VehicleFlyYawRight"] = 90] = "VehicleFlyYawRight";
        Control2[Control2["VehiclePassengerAim"] = 91] = "VehiclePassengerAim";
        Control2[Control2["VehiclePassengerAttack"] = 92] = "VehiclePassengerAttack";
        Control2[Control2["VehicleSpecialAbilityFranklin"] = 93] = "VehicleSpecialAbilityFranklin";
        Control2[Control2["VehicleStuntUpDown"] = 94] = "VehicleStuntUpDown";
        Control2[Control2["VehicleCinematicUpDown"] = 95] = "VehicleCinematicUpDown";
        Control2[Control2["VehicleCinematicUpOnly"] = 96] = "VehicleCinematicUpOnly";
        Control2[Control2["VehicleCinematicDownOnly"] = 97] = "VehicleCinematicDownOnly";
        Control2[Control2["VehicleCinematicLeftRight"] = 98] = "VehicleCinematicLeftRight";
        Control2[Control2["VehicleSelectNextWeapon"] = 99] = "VehicleSelectNextWeapon";
        Control2[Control2["VehicleSelectPrevWeapon"] = 100] = "VehicleSelectPrevWeapon";
        Control2[Control2["VehicleRoof"] = 101] = "VehicleRoof";
        Control2[Control2["VehicleJump"] = 102] = "VehicleJump";
        Control2[Control2["VehicleGrapplingHook"] = 103] = "VehicleGrapplingHook";
        Control2[Control2["VehicleShuffle"] = 104] = "VehicleShuffle";
        Control2[Control2["VehicleDropProjectile"] = 105] = "VehicleDropProjectile";
        Control2[Control2["VehicleMouseControlOverride"] = 106] = "VehicleMouseControlOverride";
        Control2[Control2["VehicleFlyRollLeftRight"] = 107] = "VehicleFlyRollLeftRight";
        Control2[Control2["VehicleFlyRollLeftOnly"] = 108] = "VehicleFlyRollLeftOnly";
        Control2[Control2["VehicleFlyRollRightOnly"] = 109] = "VehicleFlyRollRightOnly";
        Control2[Control2["VehicleFlyPitchUpDown"] = 110] = "VehicleFlyPitchUpDown";
        Control2[Control2["VehicleFlyPitchUpOnly"] = 111] = "VehicleFlyPitchUpOnly";
        Control2[Control2["VehicleFlyPitchDownOnly"] = 112] = "VehicleFlyPitchDownOnly";
        Control2[Control2["VehicleFlyUnderCarriage"] = 113] = "VehicleFlyUnderCarriage";
        Control2[Control2["VehicleFlyAttack"] = 114] = "VehicleFlyAttack";
        Control2[Control2["VehicleFlySelectNextWeapon"] = 115] = "VehicleFlySelectNextWeapon";
        Control2[Control2["VehicleFlySelectPrevWeapon"] = 116] = "VehicleFlySelectPrevWeapon";
        Control2[Control2["VehicleFlySelectTargetLeft"] = 117] = "VehicleFlySelectTargetLeft";
        Control2[Control2["VehicleFlySelectTargetRight"] = 118] = "VehicleFlySelectTargetRight";
        Control2[Control2["VehicleFlyVerticalFlightMode"] = 119] = "VehicleFlyVerticalFlightMode";
        Control2[Control2["VehicleFlyDuck"] = 120] = "VehicleFlyDuck";
        Control2[Control2["VehicleFlyAttackCamera"] = 121] = "VehicleFlyAttackCamera";
        Control2[Control2["VehicleFlyMouseControlOverride"] = 122] = "VehicleFlyMouseControlOverride";
        Control2[Control2["VehicleSubTurnLeftRight"] = 123] = "VehicleSubTurnLeftRight";
        Control2[Control2["VehicleSubTurnLeftOnly"] = 124] = "VehicleSubTurnLeftOnly";
        Control2[Control2["VehicleSubTurnRightOnly"] = 125] = "VehicleSubTurnRightOnly";
        Control2[Control2["VehicleSubPitchUpDown"] = 126] = "VehicleSubPitchUpDown";
        Control2[Control2["VehicleSubPitchUpOnly"] = 127] = "VehicleSubPitchUpOnly";
        Control2[Control2["VehicleSubPitchDownOnly"] = 128] = "VehicleSubPitchDownOnly";
        Control2[Control2["VehicleSubThrottleUp"] = 129] = "VehicleSubThrottleUp";
        Control2[Control2["VehicleSubThrottleDown"] = 130] = "VehicleSubThrottleDown";
        Control2[Control2["VehicleSubAscend"] = 131] = "VehicleSubAscend";
        Control2[Control2["VehicleSubDescend"] = 132] = "VehicleSubDescend";
        Control2[Control2["VehicleSubTurnHardLeft"] = 133] = "VehicleSubTurnHardLeft";
        Control2[Control2["VehicleSubTurnHardRight"] = 134] = "VehicleSubTurnHardRight";
        Control2[Control2["VehicleSubMouseControlOverride"] = 135] = "VehicleSubMouseControlOverride";
        Control2[Control2["VehiclePushbikePedal"] = 136] = "VehiclePushbikePedal";
        Control2[Control2["VehiclePushbikeSprint"] = 137] = "VehiclePushbikeSprint";
        Control2[Control2["VehiclePushbikeFrontBrake"] = 138] = "VehiclePushbikeFrontBrake";
        Control2[Control2["VehiclePushbikeRearBrake"] = 139] = "VehiclePushbikeRearBrake";
        Control2[Control2["MeleeAttackLight"] = 140] = "MeleeAttackLight";
        Control2[Control2["MeleeAttackHeavy"] = 141] = "MeleeAttackHeavy";
        Control2[Control2["MeleeAttackAlternate"] = 142] = "MeleeAttackAlternate";
        Control2[Control2["MeleeBlock"] = 143] = "MeleeBlock";
        Control2[Control2["ParachuteDeploy"] = 144] = "ParachuteDeploy";
        Control2[Control2["ParachuteDetach"] = 145] = "ParachuteDetach";
        Control2[Control2["ParachuteTurnLeftRight"] = 146] = "ParachuteTurnLeftRight";
        Control2[Control2["ParachuteTurnLeftOnly"] = 147] = "ParachuteTurnLeftOnly";
        Control2[Control2["ParachuteTurnRightOnly"] = 148] = "ParachuteTurnRightOnly";
        Control2[Control2["ParachutePitchUpDown"] = 149] = "ParachutePitchUpDown";
        Control2[Control2["ParachutePitchUpOnly"] = 150] = "ParachutePitchUpOnly";
        Control2[Control2["ParachutePitchDownOnly"] = 151] = "ParachutePitchDownOnly";
        Control2[Control2["ParachuteBrakeLeft"] = 152] = "ParachuteBrakeLeft";
        Control2[Control2["ParachuteBrakeRight"] = 153] = "ParachuteBrakeRight";
        Control2[Control2["ParachuteSmoke"] = 154] = "ParachuteSmoke";
        Control2[Control2["ParachutePrecisionLanding"] = 155] = "ParachutePrecisionLanding";
        Control2[Control2["Map"] = 156] = "Map";
        Control2[Control2["SelectWeaponUnarmed"] = 157] = "SelectWeaponUnarmed";
        Control2[Control2["SelectWeaponMelee"] = 158] = "SelectWeaponMelee";
        Control2[Control2["SelectWeaponHandgun"] = 159] = "SelectWeaponHandgun";
        Control2[Control2["SelectWeaponShotgun"] = 160] = "SelectWeaponShotgun";
        Control2[Control2["SelectWeaponSmg"] = 161] = "SelectWeaponSmg";
        Control2[Control2["SelectWeaponAutoRifle"] = 162] = "SelectWeaponAutoRifle";
        Control2[Control2["SelectWeaponSniper"] = 163] = "SelectWeaponSniper";
        Control2[Control2["SelectWeaponHeavy"] = 164] = "SelectWeaponHeavy";
        Control2[Control2["SelectWeaponSpecial"] = 165] = "SelectWeaponSpecial";
        Control2[Control2["SelectCharacterMichael"] = 166] = "SelectCharacterMichael";
        Control2[Control2["SelectCharacterFranklin"] = 167] = "SelectCharacterFranklin";
        Control2[Control2["SelectCharacterTrevor"] = 168] = "SelectCharacterTrevor";
        Control2[Control2["SelectCharacterMultiplayer"] = 169] = "SelectCharacterMultiplayer";
        Control2[Control2["SaveReplayClip"] = 170] = "SaveReplayClip";
        Control2[Control2["SpecialAbilityPC"] = 171] = "SpecialAbilityPC";
        Control2[Control2["PhoneUp"] = 172] = "PhoneUp";
        Control2[Control2["PhoneDown"] = 173] = "PhoneDown";
        Control2[Control2["PhoneLeft"] = 174] = "PhoneLeft";
        Control2[Control2["PhoneRight"] = 175] = "PhoneRight";
        Control2[Control2["PhoneSelect"] = 176] = "PhoneSelect";
        Control2[Control2["PhoneCancel"] = 177] = "PhoneCancel";
        Control2[Control2["PhoneOption"] = 178] = "PhoneOption";
        Control2[Control2["PhoneExtraOption"] = 179] = "PhoneExtraOption";
        Control2[Control2["PhoneScrollForward"] = 180] = "PhoneScrollForward";
        Control2[Control2["PhoneScrollBackward"] = 181] = "PhoneScrollBackward";
        Control2[Control2["PhoneCameraFocusLock"] = 182] = "PhoneCameraFocusLock";
        Control2[Control2["PhoneCameraGrid"] = 183] = "PhoneCameraGrid";
        Control2[Control2["PhoneCameraSelfie"] = 184] = "PhoneCameraSelfie";
        Control2[Control2["PhoneCameraDOF"] = 185] = "PhoneCameraDOF";
        Control2[Control2["PhoneCameraExpression"] = 186] = "PhoneCameraExpression";
        Control2[Control2["FrontendDown"] = 187] = "FrontendDown";
        Control2[Control2["FrontendUp"] = 188] = "FrontendUp";
        Control2[Control2["FrontendLeft"] = 189] = "FrontendLeft";
        Control2[Control2["FrontendRight"] = 190] = "FrontendRight";
        Control2[Control2["FrontendRdown"] = 191] = "FrontendRdown";
        Control2[Control2["FrontendRup"] = 192] = "FrontendRup";
        Control2[Control2["FrontendRleft"] = 193] = "FrontendRleft";
        Control2[Control2["FrontendRright"] = 194] = "FrontendRright";
        Control2[Control2["FrontendAxisX"] = 195] = "FrontendAxisX";
        Control2[Control2["FrontendAxisY"] = 196] = "FrontendAxisY";
        Control2[Control2["FrontendRightAxisX"] = 197] = "FrontendRightAxisX";
        Control2[Control2["FrontendRightAxisY"] = 198] = "FrontendRightAxisY";
        Control2[Control2["FrontendPause"] = 199] = "FrontendPause";
        Control2[Control2["FrontendPauseAlternate"] = 200] = "FrontendPauseAlternate";
        Control2[Control2["FrontendAccept"] = 201] = "FrontendAccept";
        Control2[Control2["FrontendCancel"] = 202] = "FrontendCancel";
        Control2[Control2["FrontendX"] = 203] = "FrontendX";
        Control2[Control2["FrontendY"] = 204] = "FrontendY";
        Control2[Control2["FrontendLb"] = 205] = "FrontendLb";
        Control2[Control2["FrontendRb"] = 206] = "FrontendRb";
        Control2[Control2["FrontendLt"] = 207] = "FrontendLt";
        Control2[Control2["FrontendRt"] = 208] = "FrontendRt";
        Control2[Control2["FrontendLs"] = 209] = "FrontendLs";
        Control2[Control2["FrontendRs"] = 210] = "FrontendRs";
        Control2[Control2["FrontendLeaderboard"] = 211] = "FrontendLeaderboard";
        Control2[Control2["FrontendSocialClub"] = 212] = "FrontendSocialClub";
        Control2[Control2["FrontendSocialClubSecondary"] = 213] = "FrontendSocialClubSecondary";
        Control2[Control2["FrontendDelete"] = 214] = "FrontendDelete";
        Control2[Control2["FrontendEndscreenAccept"] = 215] = "FrontendEndscreenAccept";
        Control2[Control2["FrontendEndscreenExpand"] = 216] = "FrontendEndscreenExpand";
        Control2[Control2["FrontendSelect"] = 217] = "FrontendSelect";
        Control2[Control2["ScriptLeftAxisX"] = 218] = "ScriptLeftAxisX";
        Control2[Control2["ScriptLeftAxisY"] = 219] = "ScriptLeftAxisY";
        Control2[Control2["ScriptRightAxisX"] = 220] = "ScriptRightAxisX";
        Control2[Control2["ScriptRightAxisY"] = 221] = "ScriptRightAxisY";
        Control2[Control2["ScriptRUp"] = 222] = "ScriptRUp";
        Control2[Control2["ScriptRDown"] = 223] = "ScriptRDown";
        Control2[Control2["ScriptRLeft"] = 224] = "ScriptRLeft";
        Control2[Control2["ScriptRRight"] = 225] = "ScriptRRight";
        Control2[Control2["ScriptLB"] = 226] = "ScriptLB";
        Control2[Control2["ScriptRB"] = 227] = "ScriptRB";
        Control2[Control2["ScriptLT"] = 228] = "ScriptLT";
        Control2[Control2["ScriptRT"] = 229] = "ScriptRT";
        Control2[Control2["ScriptLS"] = 230] = "ScriptLS";
        Control2[Control2["ScriptRS"] = 231] = "ScriptRS";
        Control2[Control2["ScriptPadUp"] = 232] = "ScriptPadUp";
        Control2[Control2["ScriptPadDown"] = 233] = "ScriptPadDown";
        Control2[Control2["ScriptPadLeft"] = 234] = "ScriptPadLeft";
        Control2[Control2["ScriptPadRight"] = 235] = "ScriptPadRight";
        Control2[Control2["ScriptSelect"] = 236] = "ScriptSelect";
        Control2[Control2["CursorAccept"] = 237] = "CursorAccept";
        Control2[Control2["CursorCancel"] = 238] = "CursorCancel";
        Control2[Control2["CursorX"] = 239] = "CursorX";
        Control2[Control2["CursorY"] = 240] = "CursorY";
        Control2[Control2["CursorScrollUp"] = 241] = "CursorScrollUp";
        Control2[Control2["CursorScrollDown"] = 242] = "CursorScrollDown";
        Control2[Control2["EnterCheatCode"] = 243] = "EnterCheatCode";
        Control2[Control2["InteractionMenu"] = 244] = "InteractionMenu";
        Control2[Control2["MpTextChatAll"] = 245] = "MpTextChatAll";
        Control2[Control2["MpTextChatTeam"] = 246] = "MpTextChatTeam";
        Control2[Control2["MpTextChatFriends"] = 247] = "MpTextChatFriends";
        Control2[Control2["MpTextChatCrew"] = 248] = "MpTextChatCrew";
        Control2[Control2["PushToTalk"] = 249] = "PushToTalk";
        Control2[Control2["CreatorLS"] = 250] = "CreatorLS";
        Control2[Control2["CreatorRS"] = 251] = "CreatorRS";
        Control2[Control2["CreatorLT"] = 252] = "CreatorLT";
        Control2[Control2["CreatorRT"] = 253] = "CreatorRT";
        Control2[Control2["CreatorMenuToggle"] = 254] = "CreatorMenuToggle";
        Control2[Control2["CreatorAccept"] = 255] = "CreatorAccept";
        Control2[Control2["CreatorDelete"] = 256] = "CreatorDelete";
        Control2[Control2["Attack2"] = 257] = "Attack2";
        Control2[Control2["RappelJump"] = 258] = "RappelJump";
        Control2[Control2["RappelLongJump"] = 259] = "RappelLongJump";
        Control2[Control2["RappelSmashWindow"] = 260] = "RappelSmashWindow";
        Control2[Control2["PrevWeapon"] = 261] = "PrevWeapon";
        Control2[Control2["NextWeapon"] = 262] = "NextWeapon";
        Control2[Control2["MeleeAttack1"] = 263] = "MeleeAttack1";
        Control2[Control2["MeleeAttack2"] = 264] = "MeleeAttack2";
        Control2[Control2["Whistle"] = 265] = "Whistle";
        Control2[Control2["MoveLeft"] = 266] = "MoveLeft";
        Control2[Control2["MoveRight"] = 267] = "MoveRight";
        Control2[Control2["MoveUp"] = 268] = "MoveUp";
        Control2[Control2["MoveDown"] = 269] = "MoveDown";
        Control2[Control2["LookLeft"] = 270] = "LookLeft";
        Control2[Control2["LookRight"] = 271] = "LookRight";
        Control2[Control2["LookUp"] = 272] = "LookUp";
        Control2[Control2["LookDown"] = 273] = "LookDown";
        Control2[Control2["SniperZoomIn"] = 274] = "SniperZoomIn";
        Control2[Control2["SniperZoomOut"] = 275] = "SniperZoomOut";
        Control2[Control2["SniperZoomInAlternate"] = 276] = "SniperZoomInAlternate";
        Control2[Control2["SniperZoomOutAlternate"] = 277] = "SniperZoomOutAlternate";
        Control2[Control2["VehicleMoveLeft"] = 278] = "VehicleMoveLeft";
        Control2[Control2["VehicleMoveRight"] = 279] = "VehicleMoveRight";
        Control2[Control2["VehicleMoveUp"] = 280] = "VehicleMoveUp";
        Control2[Control2["VehicleMoveDown"] = 281] = "VehicleMoveDown";
        Control2[Control2["VehicleGunLeft"] = 282] = "VehicleGunLeft";
        Control2[Control2["VehicleGunRight"] = 283] = "VehicleGunRight";
        Control2[Control2["VehicleGunUp"] = 284] = "VehicleGunUp";
        Control2[Control2["VehicleGunDown"] = 285] = "VehicleGunDown";
        Control2[Control2["VehicleLookLeft"] = 286] = "VehicleLookLeft";
        Control2[Control2["VehicleLookRight"] = 287] = "VehicleLookRight";
        Control2[Control2["ReplayStartStopRecording"] = 288] = "ReplayStartStopRecording";
        Control2[Control2["ReplayStartStopRecordingSecondary"] = 289] = "ReplayStartStopRecordingSecondary";
        Control2[Control2["ScaledLookLeftRight"] = 290] = "ScaledLookLeftRight";
        Control2[Control2["ScaledLookUpDown"] = 291] = "ScaledLookUpDown";
        Control2[Control2["ScaledLookUpOnly"] = 292] = "ScaledLookUpOnly";
        Control2[Control2["ScaledLookDownOnly"] = 293] = "ScaledLookDownOnly";
        Control2[Control2["ScaledLookLeftOnly"] = 294] = "ScaledLookLeftOnly";
        Control2[Control2["ScaledLookRightOnly"] = 295] = "ScaledLookRightOnly";
        Control2[Control2["ReplayMarkerDelete"] = 296] = "ReplayMarkerDelete";
        Control2[Control2["ReplayClipDelete"] = 297] = "ReplayClipDelete";
        Control2[Control2["ReplayPause"] = 298] = "ReplayPause";
        Control2[Control2["ReplayRewind"] = 299] = "ReplayRewind";
        Control2[Control2["ReplayFfwd"] = 300] = "ReplayFfwd";
        Control2[Control2["ReplayNewmarker"] = 301] = "ReplayNewmarker";
        Control2[Control2["ReplayRecord"] = 302] = "ReplayRecord";
        Control2[Control2["ReplayScreenshot"] = 303] = "ReplayScreenshot";
        Control2[Control2["ReplayHidehud"] = 304] = "ReplayHidehud";
        Control2[Control2["ReplayStartpoint"] = 305] = "ReplayStartpoint";
        Control2[Control2["ReplayEndpoint"] = 306] = "ReplayEndpoint";
        Control2[Control2["ReplayAdvance"] = 307] = "ReplayAdvance";
        Control2[Control2["ReplayBack"] = 308] = "ReplayBack";
        Control2[Control2["ReplayTools"] = 309] = "ReplayTools";
        Control2[Control2["ReplayRestart"] = 310] = "ReplayRestart";
        Control2[Control2["ReplayShowhotkey"] = 311] = "ReplayShowhotkey";
        Control2[Control2["ReplayCycleMarkerLeft"] = 312] = "ReplayCycleMarkerLeft";
        Control2[Control2["ReplayCycleMarkerRight"] = 313] = "ReplayCycleMarkerRight";
        Control2[Control2["ReplayFOVIncrease"] = 314] = "ReplayFOVIncrease";
        Control2[Control2["ReplayFOVDecrease"] = 315] = "ReplayFOVDecrease";
        Control2[Control2["ReplayCameraUp"] = 316] = "ReplayCameraUp";
        Control2[Control2["ReplayCameraDown"] = 317] = "ReplayCameraDown";
        Control2[Control2["ReplaySave"] = 318] = "ReplaySave";
        Control2[Control2["ReplayToggletime"] = 319] = "ReplayToggletime";
        Control2[Control2["ReplayToggletips"] = 320] = "ReplayToggletips";
        Control2[Control2["ReplayPreview"] = 321] = "ReplayPreview";
        Control2[Control2["ReplayToggleTimeline"] = 322] = "ReplayToggleTimeline";
        Control2[Control2["ReplayTimelinePickupClip"] = 323] = "ReplayTimelinePickupClip";
        Control2[Control2["ReplayTimelineDuplicateClip"] = 324] = "ReplayTimelineDuplicateClip";
        Control2[Control2["ReplayTimelinePlaceClip"] = 325] = "ReplayTimelinePlaceClip";
        Control2[Control2["ReplayCtrl"] = 326] = "ReplayCtrl";
        Control2[Control2["ReplayTimelineSave"] = 327] = "ReplayTimelineSave";
        Control2[Control2["ReplayPreviewAudio"] = 328] = "ReplayPreviewAudio";
        Control2[Control2["VehicleDriveLook"] = 329] = "VehicleDriveLook";
        Control2[Control2["VehicleDriveLook2"] = 330] = "VehicleDriveLook2";
        Control2[Control2["VehicleFlyAttack2"] = 331] = "VehicleFlyAttack2";
        Control2[Control2["RadioWheelUpDown"] = 332] = "RadioWheelUpDown";
        Control2[Control2["RadioWheelLeftRight"] = 333] = "RadioWheelLeftRight";
        Control2[Control2["VehicleSlowMoUpDown"] = 334] = "VehicleSlowMoUpDown";
        Control2[Control2["VehicleSlowMoUpOnly"] = 335] = "VehicleSlowMoUpOnly";
        Control2[Control2["VehicleSlowMoDownOnly"] = 336] = "VehicleSlowMoDownOnly";
        Control2[Control2["VehicleHydraulicsControlToggle"] = 337] = "VehicleHydraulicsControlToggle";
        Control2[Control2["VehicleHydraulicsControlLeft"] = 338] = "VehicleHydraulicsControlLeft";
        Control2[Control2["VehicleHydraulicsControlRight"] = 339] = "VehicleHydraulicsControlRight";
        Control2[Control2["VehicleHydraulicsControlUp"] = 340] = "VehicleHydraulicsControlUp";
        Control2[Control2["VehicleHydraulicsControlDown"] = 341] = "VehicleHydraulicsControlDown";
        Control2[Control2["VehicleHydraulicsControlUpDown"] = 342] = "VehicleHydraulicsControlUpDown";
        Control2[Control2["VehicleHydraulicsControlLeftRight"] = 343] = "VehicleHydraulicsControlLeftRight";
        Control2[Control2["SwitchVisor"] = 344] = "SwitchVisor";
        Control2[Control2["VehicleMeleeHold"] = 345] = "VehicleMeleeHold";
        Control2[Control2["VehicleMeleeLeft"] = 346] = "VehicleMeleeLeft";
        Control2[Control2["VehicleMeleeRight"] = 347] = "VehicleMeleeRight";
        Control2[Control2["MapPointOfInterest"] = 348] = "MapPointOfInterest";
        Control2[Control2["ReplaySnapmaticPhoto"] = 349] = "ReplaySnapmaticPhoto";
        Control2[Control2["VehicleCarJump"] = 350] = "VehicleCarJump";
        Control2[Control2["VehicleRocketBoost"] = 351] = "VehicleRocketBoost";
        Control2[Control2["VehicleFlyBoost"] = 352] = "VehicleFlyBoost";
        Control2[Control2["VehicleParachute"] = 353] = "VehicleParachute";
        Control2[Control2["VehicleBikeWings"] = 354] = "VehicleBikeWings";
        Control2[Control2["VehicleFlyBombBay"] = 355] = "VehicleFlyBombBay";
        Control2[Control2["VehicleFlyCounter"] = 356] = "VehicleFlyCounter";
        Control2[Control2["VehicleFlyTransform"] = 357] = "VehicleFlyTransform";
      })(Control || (Control = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/CursorSprite.js
  var CursorSprite;
  var init_CursorSprite = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/CursorSprite.js"() {
      (function(CursorSprite2) {
        CursorSprite2[CursorSprite2["Normal"] = 1] = "Normal";
        CursorSprite2[CursorSprite2["LightArrow"] = 2] = "LightArrow";
        CursorSprite2[CursorSprite2["OpenHand"] = 3] = "OpenHand";
        CursorSprite2[CursorSprite2["GrabHand"] = 4] = "GrabHand";
        CursorSprite2[CursorSprite2["MiddleFinger"] = 5] = "MiddleFinger";
        CursorSprite2[CursorSprite2["LeftArrow"] = 6] = "LeftArrow";
        CursorSprite2[CursorSprite2["RightArrow"] = 7] = "RightArrow";
        CursorSprite2[CursorSprite2["UpArrow"] = 8] = "UpArrow";
        CursorSprite2[CursorSprite2["DownArrow"] = 9] = "DownArrow";
        CursorSprite2[CursorSprite2["HorizontalDoubleArrow"] = 10] = "HorizontalDoubleArrow";
        CursorSprite2[CursorSprite2["NormalWithPlus"] = 11] = "NormalWithPlus";
        CursorSprite2[CursorSprite2["NormalWithMinus"] = 12] = "NormalWithMinus";
      })(CursorSprite || (CursorSprite = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Driving.js
  var DrivingStyle, VehicleDrivingFlags;
  var init_Driving = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Driving.js"() {
      (function(DrivingStyle2) {
        DrivingStyle2[DrivingStyle2["None"] = 0] = "None";
        DrivingStyle2[DrivingStyle2["Normal"] = 786603] = "Normal";
        DrivingStyle2[DrivingStyle2["IgnoreLights"] = 2883621] = "IgnoreLights";
        DrivingStyle2[DrivingStyle2["SometimesOvertakeTraffic"] = 5] = "SometimesOvertakeTraffic";
        DrivingStyle2[DrivingStyle2["Rushed"] = 1074528293] = "Rushed";
        DrivingStyle2[DrivingStyle2["AvoidTraffic"] = 786468] = "AvoidTraffic";
        DrivingStyle2[DrivingStyle2["AvoidTrafficExtremely"] = 6] = "AvoidTrafficExtremely";
        DrivingStyle2[DrivingStyle2["AvoidHighwaysWhenPossible"] = 536870912] = "AvoidHighwaysWhenPossible";
        DrivingStyle2[DrivingStyle2["IgnorePathing"] = 16777216] = "IgnorePathing";
        DrivingStyle2[DrivingStyle2["IgnoreRoads"] = 4194304] = "IgnoreRoads";
        DrivingStyle2[DrivingStyle2["ShortestPath"] = 262144] = "ShortestPath";
        DrivingStyle2[DrivingStyle2["Backwards"] = 1024] = "Backwards";
      })(DrivingStyle || (DrivingStyle = {}));
      (function(VehicleDrivingFlags2) {
        VehicleDrivingFlags2[VehicleDrivingFlags2["None"] = 0] = "None";
        VehicleDrivingFlags2[VehicleDrivingFlags2["FollowTraffic"] = 1] = "FollowTraffic";
        VehicleDrivingFlags2[VehicleDrivingFlags2["YieldToPeds"] = 2] = "YieldToPeds";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidVehicles"] = 4] = "AvoidVehicles";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidEmptyVehicles"] = 8] = "AvoidEmptyVehicles";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidPeds"] = 16] = "AvoidPeds";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidObjects"] = 32] = "AvoidObjects";
        VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtTrafficLights"] = 128] = "StopAtTrafficLights";
        VehicleDrivingFlags2[VehicleDrivingFlags2["UseBlinkers"] = 256] = "UseBlinkers";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AllowGoingWrongWay"] = 512] = "AllowGoingWrongWay";
        VehicleDrivingFlags2[VehicleDrivingFlags2["Reverse"] = 1024] = "Reverse";
        VehicleDrivingFlags2[VehicleDrivingFlags2["AllowMedianCrossing"] = 262144] = "AllowMedianCrossing";
        VehicleDrivingFlags2[VehicleDrivingFlags2["DriveBySight"] = 4194304] = "DriveBySight";
        VehicleDrivingFlags2[VehicleDrivingFlags2["IgnorePathFinding"] = 16777216] = "IgnorePathFinding";
        VehicleDrivingFlags2[VehicleDrivingFlags2["TryToAvoidHighways"] = 536870912] = "TryToAvoidHighways";
        VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtDestination"] = 2147483648] = "StopAtDestination";
      })(VehicleDrivingFlags || (VehicleDrivingFlags = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/ExplosionType.js
  var ExplosionType;
  var init_ExplosionType = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/ExplosionType.js"() {
      (function(ExplosionType2) {
        ExplosionType2[ExplosionType2["Grenade"] = 0] = "Grenade";
        ExplosionType2[ExplosionType2["GrenadeL"] = 1] = "GrenadeL";
        ExplosionType2[ExplosionType2["StickyBomb"] = 2] = "StickyBomb";
        ExplosionType2[ExplosionType2["Molotov1"] = 3] = "Molotov1";
        ExplosionType2[ExplosionType2["Rocket"] = 4] = "Rocket";
        ExplosionType2[ExplosionType2["TankShell"] = 5] = "TankShell";
        ExplosionType2[ExplosionType2["HiOctane"] = 6] = "HiOctane";
        ExplosionType2[ExplosionType2["Car"] = 7] = "Car";
        ExplosionType2[ExplosionType2["Plane"] = 8] = "Plane";
        ExplosionType2[ExplosionType2["PetrolPump"] = 9] = "PetrolPump";
        ExplosionType2[ExplosionType2["Bike"] = 10] = "Bike";
        ExplosionType2[ExplosionType2["Steam"] = 11] = "Steam";
        ExplosionType2[ExplosionType2["Flame"] = 12] = "Flame";
        ExplosionType2[ExplosionType2["WaterHydrant"] = 13] = "WaterHydrant";
        ExplosionType2[ExplosionType2["GasCanister"] = 14] = "GasCanister";
        ExplosionType2[ExplosionType2["Boat"] = 15] = "Boat";
        ExplosionType2[ExplosionType2["ShipDestroy"] = 16] = "ShipDestroy";
        ExplosionType2[ExplosionType2["Truck"] = 17] = "Truck";
        ExplosionType2[ExplosionType2["Bullet"] = 18] = "Bullet";
        ExplosionType2[ExplosionType2["SmokeGL"] = 19] = "SmokeGL";
        ExplosionType2[ExplosionType2["SmokeG"] = 20] = "SmokeG";
        ExplosionType2[ExplosionType2["BZGas"] = 21] = "BZGas";
        ExplosionType2[ExplosionType2["Flare"] = 22] = "Flare";
        ExplosionType2[ExplosionType2["GasCanister2"] = 23] = "GasCanister2";
        ExplosionType2[ExplosionType2["Extinguisher"] = 24] = "Extinguisher";
        ExplosionType2[ExplosionType2["ProgramAR"] = 25] = "ProgramAR";
        ExplosionType2[ExplosionType2["Train"] = 26] = "Train";
        ExplosionType2[ExplosionType2["Barrel"] = 27] = "Barrel";
        ExplosionType2[ExplosionType2["Propane"] = 28] = "Propane";
        ExplosionType2[ExplosionType2["Blimp"] = 29] = "Blimp";
        ExplosionType2[ExplosionType2["FlameExplode"] = 30] = "FlameExplode";
        ExplosionType2[ExplosionType2["Tanker"] = 31] = "Tanker";
        ExplosionType2[ExplosionType2["PlaneRocket"] = 32] = "PlaneRocket";
        ExplosionType2[ExplosionType2["VehicleBullet"] = 33] = "VehicleBullet";
        ExplosionType2[ExplosionType2["GasTank"] = 34] = "GasTank";
        ExplosionType2[ExplosionType2["FireWork"] = 35] = "FireWork";
        ExplosionType2[ExplosionType2["SnowBall"] = 36] = "SnowBall";
        ExplosionType2[ExplosionType2["ProxMine"] = 37] = "ProxMine";
        ExplosionType2[ExplosionType2["Valkyrie"] = 38] = "Valkyrie";
      })(ExplosionType || (ExplosionType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/FiringPattern.js
  var FiringPattern;
  var init_FiringPattern = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/FiringPattern.js"() {
      (function(FiringPattern2) {
        FiringPattern2[FiringPattern2["Default"] = 0] = "Default";
        FiringPattern2[FiringPattern2["FullAuto"] = 3337513804] = "FullAuto";
        FiringPattern2[FiringPattern2["BurstFire"] = 3607063905] = "BurstFire";
        FiringPattern2[FiringPattern2["BurstInCover"] = 40051185] = "BurstInCover";
        FiringPattern2[FiringPattern2["BurstFireDriveby"] = 3541198322] = "BurstFireDriveby";
        FiringPattern2[FiringPattern2["FromGround"] = 577037782] = "FromGround";
        FiringPattern2[FiringPattern2["DelayFireByOneSec"] = 2055493265] = "DelayFireByOneSec";
        FiringPattern2[FiringPattern2["SingleShot"] = 1566631136] = "SingleShot";
        FiringPattern2[FiringPattern2["BurstFirePistol"] = 2685983626] = "BurstFirePistol";
        FiringPattern2[FiringPattern2["BurstFireSMG"] = 3507334638] = "BurstFireSMG";
        FiringPattern2[FiringPattern2["BurstFireRifle"] = 2624893958] = "BurstFireRifle";
        FiringPattern2[FiringPattern2["BurstFireMG"] = 3044263348] = "BurstFireMG";
        FiringPattern2[FiringPattern2["BurstFirePumpShotGun"] = 12239771] = "BurstFirePumpShotGun";
        FiringPattern2[FiringPattern2["BurstFireHeli"] = 2437838959] = "BurstFireHeli";
        FiringPattern2[FiringPattern2["BurstFireMicro"] = 1122960381] = "BurstFireMicro";
        FiringPattern2[FiringPattern2["BurstFireBursts"] = 1122960381] = "BurstFireBursts";
        FiringPattern2[FiringPattern2["BurstFireTank"] = 3804904049] = "BurstFireTank";
      })(FiringPattern || (FiringPattern = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Font.js
  var Font;
  var init_Font = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Font.js"() {
      (function(Font2) {
        Font2[Font2["ChaletLondon"] = 0] = "ChaletLondon";
        Font2[Font2["HouseScript"] = 1] = "HouseScript";
        Font2[Font2["Monospace"] = 2] = "Monospace";
        Font2[Font2["ChaletComprimeCologne"] = 4] = "ChaletComprimeCologne";
        Font2[Font2["Pricedown"] = 7] = "Pricedown";
      })(Font || (Font = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/ForceType.js
  var ForceType;
  var init_ForceType = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/ForceType.js"() {
      (function(ForceType2) {
        ForceType2[ForceType2["MinForce"] = 0] = "MinForce";
        ForceType2[ForceType2["MaxForceRot"] = 1] = "MaxForceRot";
        ForceType2[ForceType2["MinForce2"] = 2] = "MinForce2";
        ForceType2[ForceType2["MaxForceRot2"] = 3] = "MaxForceRot2";
        ForceType2[ForceType2["ForceNoRot"] = 4] = "ForceNoRot";
        ForceType2[ForceType2["ForceRotPlusForce"] = 5] = "ForceRotPlusForce";
      })(ForceType || (ForceType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Gender.js
  var Gender;
  var init_Gender = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Gender.js"() {
      (function(Gender2) {
        Gender2[Gender2["Male"] = 0] = "Male";
        Gender2[Gender2["Female"] = 1] = "Female";
      })(Gender || (Gender = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/HelmetType.js
  var HelmetType;
  var init_HelmetType = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/HelmetType.js"() {
      (function(HelmetType2) {
        HelmetType2[HelmetType2["RegularMotorcycleHelmet"] = 4096] = "RegularMotorcycleHelmet";
        HelmetType2[HelmetType2["FiremanHelmet"] = 16384] = "FiremanHelmet";
        HelmetType2[HelmetType2["PilotHeadset"] = 32768] = "PilotHeadset";
      })(HelmetType || (HelmetType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/HudColor.js
  var HudColor;
  var init_HudColor = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/HudColor.js"() {
      (function(HudColor2) {
        HudColor2[HudColor2["NONE"] = -1] = "NONE";
        HudColor2[HudColor2["HUD_COLOUR_PURE_WHITE"] = 0] = "HUD_COLOUR_PURE_WHITE";
        HudColor2[HudColor2["HUD_COLOUR_WHITE"] = 1] = "HUD_COLOUR_WHITE";
        HudColor2[HudColor2["HUD_COLOUR_BLACK"] = 2] = "HUD_COLOUR_BLACK";
        HudColor2[HudColor2["HUD_COLOUR_GREY"] = 3] = "HUD_COLOUR_GREY";
        HudColor2[HudColor2["HUD_COLOUR_GREYLIGHT"] = 4] = "HUD_COLOUR_GREYLIGHT";
        HudColor2[HudColor2["HUD_COLOUR_GREYDARK"] = 5] = "HUD_COLOUR_GREYDARK";
        HudColor2[HudColor2["HUD_COLOUR_RED"] = 6] = "HUD_COLOUR_RED";
        HudColor2[HudColor2["HUD_COLOUR_REDLIGHT"] = 7] = "HUD_COLOUR_REDLIGHT";
        HudColor2[HudColor2["HUD_COLOUR_REDDARK"] = 8] = "HUD_COLOUR_REDDARK";
        HudColor2[HudColor2["HUD_COLOUR_BLUE"] = 9] = "HUD_COLOUR_BLUE";
        HudColor2[HudColor2["HUD_COLOUR_BLUELIGHT"] = 10] = "HUD_COLOUR_BLUELIGHT";
        HudColor2[HudColor2["HUD_COLOUR_BLUEDARK"] = 11] = "HUD_COLOUR_BLUEDARK";
        HudColor2[HudColor2["HUD_COLOUR_YELLOW"] = 12] = "HUD_COLOUR_YELLOW";
        HudColor2[HudColor2["HUD_COLOUR_YELLOWLIGHT"] = 13] = "HUD_COLOUR_YELLOWLIGHT";
        HudColor2[HudColor2["HUD_COLOUR_YELLOWDARK"] = 14] = "HUD_COLOUR_YELLOWDARK";
        HudColor2[HudColor2["HUD_COLOUR_ORANGE"] = 15] = "HUD_COLOUR_ORANGE";
        HudColor2[HudColor2["HUD_COLOUR_ORANGELIGHT"] = 16] = "HUD_COLOUR_ORANGELIGHT";
        HudColor2[HudColor2["HUD_COLOUR_ORANGEDARK"] = 17] = "HUD_COLOUR_ORANGEDARK";
        HudColor2[HudColor2["HUD_COLOUR_GREEN"] = 18] = "HUD_COLOUR_GREEN";
        HudColor2[HudColor2["HUD_COLOUR_GREENLIGHT"] = 19] = "HUD_COLOUR_GREENLIGHT";
        HudColor2[HudColor2["HUD_COLOUR_GREENDARK"] = 20] = "HUD_COLOUR_GREENDARK";
        HudColor2[HudColor2["HUD_COLOUR_PURPLE"] = 21] = "HUD_COLOUR_PURPLE";
        HudColor2[HudColor2["HUD_COLOUR_PURPLELIGHT"] = 22] = "HUD_COLOUR_PURPLELIGHT";
        HudColor2[HudColor2["HUD_COLOUR_PURPLEDARK"] = 23] = "HUD_COLOUR_PURPLEDARK";
        HudColor2[HudColor2["HUD_COLOUR_PINK"] = 24] = "HUD_COLOUR_PINK";
        HudColor2[HudColor2["HUD_COLOUR_RADAR_HEALTH"] = 25] = "HUD_COLOUR_RADAR_HEALTH";
        HudColor2[HudColor2["HUD_COLOUR_RADAR_ARMOUR"] = 26] = "HUD_COLOUR_RADAR_ARMOUR";
        HudColor2[HudColor2["HUD_COLOUR_RADAR_DAMAGE"] = 27] = "HUD_COLOUR_RADAR_DAMAGE";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER1"] = 28] = "HUD_COLOUR_NET_PLAYER1";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER2"] = 29] = "HUD_COLOUR_NET_PLAYER2";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER3"] = 30] = "HUD_COLOUR_NET_PLAYER3";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER4"] = 31] = "HUD_COLOUR_NET_PLAYER4";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER5"] = 32] = "HUD_COLOUR_NET_PLAYER5";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER6"] = 33] = "HUD_COLOUR_NET_PLAYER6";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER7"] = 34] = "HUD_COLOUR_NET_PLAYER7";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER8"] = 35] = "HUD_COLOUR_NET_PLAYER8";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER9"] = 36] = "HUD_COLOUR_NET_PLAYER9";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER10"] = 37] = "HUD_COLOUR_NET_PLAYER10";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER11"] = 38] = "HUD_COLOUR_NET_PLAYER11";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER12"] = 39] = "HUD_COLOUR_NET_PLAYER12";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER13"] = 40] = "HUD_COLOUR_NET_PLAYER13";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER14"] = 41] = "HUD_COLOUR_NET_PLAYER14";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER15"] = 42] = "HUD_COLOUR_NET_PLAYER15";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER16"] = 43] = "HUD_COLOUR_NET_PLAYER16";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER17"] = 44] = "HUD_COLOUR_NET_PLAYER17";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER18"] = 45] = "HUD_COLOUR_NET_PLAYER18";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER19"] = 46] = "HUD_COLOUR_NET_PLAYER19";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER20"] = 47] = "HUD_COLOUR_NET_PLAYER20";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER21"] = 48] = "HUD_COLOUR_NET_PLAYER21";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER22"] = 49] = "HUD_COLOUR_NET_PLAYER22";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER23"] = 50] = "HUD_COLOUR_NET_PLAYER23";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER24"] = 51] = "HUD_COLOUR_NET_PLAYER24";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER25"] = 52] = "HUD_COLOUR_NET_PLAYER25";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER26"] = 53] = "HUD_COLOUR_NET_PLAYER26";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER27"] = 54] = "HUD_COLOUR_NET_PLAYER27";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER28"] = 55] = "HUD_COLOUR_NET_PLAYER28";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER29"] = 56] = "HUD_COLOUR_NET_PLAYER29";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER30"] = 57] = "HUD_COLOUR_NET_PLAYER30";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER31"] = 58] = "HUD_COLOUR_NET_PLAYER31";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER32"] = 59] = "HUD_COLOUR_NET_PLAYER32";
        HudColor2[HudColor2["HUD_COLOUR_SIMPLEBLIP_DEFAULT"] = 60] = "HUD_COLOUR_SIMPLEBLIP_DEFAULT";
        HudColor2[HudColor2["HUD_COLOUR_MENU_BLUE"] = 61] = "HUD_COLOUR_MENU_BLUE";
        HudColor2[HudColor2["HUD_COLOUR_MENU_GREY_LIGHT"] = 62] = "HUD_COLOUR_MENU_GREY_LIGHT";
        HudColor2[HudColor2["HUD_COLOUR_MENU_BLUE_EXTRA_DARK"] = 63] = "HUD_COLOUR_MENU_BLUE_EXTRA_DARK";
        HudColor2[HudColor2["HUD_COLOUR_MENU_YELLOW"] = 64] = "HUD_COLOUR_MENU_YELLOW";
        HudColor2[HudColor2["HUD_COLOUR_MENU_YELLOW_DARK"] = 65] = "HUD_COLOUR_MENU_YELLOW_DARK";
        HudColor2[HudColor2["HUD_COLOUR_MENU_GREEN"] = 66] = "HUD_COLOUR_MENU_GREEN";
        HudColor2[HudColor2["HUD_COLOUR_MENU_GREY"] = 67] = "HUD_COLOUR_MENU_GREY";
        HudColor2[HudColor2["HUD_COLOUR_MENU_GREY_DARK"] = 68] = "HUD_COLOUR_MENU_GREY_DARK";
        HudColor2[HudColor2["HUD_COLOUR_MENU_HIGHLIGHT"] = 69] = "HUD_COLOUR_MENU_HIGHLIGHT";
        HudColor2[HudColor2["HUD_COLOUR_MENU_STANDARD"] = 70] = "HUD_COLOUR_MENU_STANDARD";
        HudColor2[HudColor2["HUD_COLOUR_MENU_DIMMED"] = 71] = "HUD_COLOUR_MENU_DIMMED";
        HudColor2[HudColor2["HUD_COLOUR_MENU_EXTRA_DIMMED"] = 72] = "HUD_COLOUR_MENU_EXTRA_DIMMED";
        HudColor2[HudColor2["HUD_COLOUR_BRIEF_TITLE"] = 73] = "HUD_COLOUR_BRIEF_TITLE";
        HudColor2[HudColor2["HUD_COLOUR_MID_GREY_MP"] = 74] = "HUD_COLOUR_MID_GREY_MP";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER1_DARK"] = 75] = "HUD_COLOUR_NET_PLAYER1_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER2_DARK"] = 76] = "HUD_COLOUR_NET_PLAYER2_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER3_DARK"] = 77] = "HUD_COLOUR_NET_PLAYER3_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER4_DARK"] = 78] = "HUD_COLOUR_NET_PLAYER4_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER5_DARK"] = 79] = "HUD_COLOUR_NET_PLAYER5_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER6_DARK"] = 80] = "HUD_COLOUR_NET_PLAYER6_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER7_DARK"] = 81] = "HUD_COLOUR_NET_PLAYER7_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER8_DARK"] = 82] = "HUD_COLOUR_NET_PLAYER8_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER9_DARK"] = 83] = "HUD_COLOUR_NET_PLAYER9_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER10_DARK"] = 84] = "HUD_COLOUR_NET_PLAYER10_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER11_DARK"] = 85] = "HUD_COLOUR_NET_PLAYER11_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER12_DARK"] = 86] = "HUD_COLOUR_NET_PLAYER12_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER13_DARK"] = 87] = "HUD_COLOUR_NET_PLAYER13_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER14_DARK"] = 88] = "HUD_COLOUR_NET_PLAYER14_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER15_DARK"] = 89] = "HUD_COLOUR_NET_PLAYER15_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER16_DARK"] = 90] = "HUD_COLOUR_NET_PLAYER16_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER17_DARK"] = 91] = "HUD_COLOUR_NET_PLAYER17_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER18_DARK"] = 92] = "HUD_COLOUR_NET_PLAYER18_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER19_DARK"] = 93] = "HUD_COLOUR_NET_PLAYER19_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER20_DARK"] = 94] = "HUD_COLOUR_NET_PLAYER20_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER21_DARK"] = 95] = "HUD_COLOUR_NET_PLAYER21_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER22_DARK"] = 96] = "HUD_COLOUR_NET_PLAYER22_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER23_DARK"] = 97] = "HUD_COLOUR_NET_PLAYER23_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER24_DARK"] = 98] = "HUD_COLOUR_NET_PLAYER24_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER25_DARK"] = 99] = "HUD_COLOUR_NET_PLAYER25_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER26_DARK"] = 100] = "HUD_COLOUR_NET_PLAYER26_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER27_DARK"] = 101] = "HUD_COLOUR_NET_PLAYER27_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER28_DARK"] = 102] = "HUD_COLOUR_NET_PLAYER28_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER29_DARK"] = 103] = "HUD_COLOUR_NET_PLAYER29_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER30_DARK"] = 104] = "HUD_COLOUR_NET_PLAYER30_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER31_DARK"] = 105] = "HUD_COLOUR_NET_PLAYER31_DARK";
        HudColor2[HudColor2["HUD_COLOUR_NET_PLAYER32_DARK"] = 106] = "HUD_COLOUR_NET_PLAYER32_DARK";
        HudColor2[HudColor2["HUD_COLOUR_BRONZE"] = 107] = "HUD_COLOUR_BRONZE";
        HudColor2[HudColor2["HUD_COLOUR_SILVER"] = 108] = "HUD_COLOUR_SILVER";
        HudColor2[HudColor2["HUD_COLOUR_GOLD"] = 109] = "HUD_COLOUR_GOLD";
        HudColor2[HudColor2["HUD_COLOUR_PLATINUM"] = 110] = "HUD_COLOUR_PLATINUM";
        HudColor2[HudColor2["HUD_COLOUR_GANG1"] = 111] = "HUD_COLOUR_GANG1";
        HudColor2[HudColor2["HUD_COLOUR_GANG2"] = 112] = "HUD_COLOUR_GANG2";
        HudColor2[HudColor2["HUD_COLOUR_GANG3"] = 113] = "HUD_COLOUR_GANG3";
        HudColor2[HudColor2["HUD_COLOUR_GANG4"] = 114] = "HUD_COLOUR_GANG4";
        HudColor2[HudColor2["HUD_COLOUR_SAME_CREW"] = 115] = "HUD_COLOUR_SAME_CREW";
        HudColor2[HudColor2["HUD_COLOUR_FREEMODE"] = 116] = "HUD_COLOUR_FREEMODE";
        HudColor2[HudColor2["HUD_COLOUR_PAUSE_BG"] = 117] = "HUD_COLOUR_PAUSE_BG";
        HudColor2[HudColor2["HUD_COLOUR_FRIENDLY"] = 118] = "HUD_COLOUR_FRIENDLY";
        HudColor2[HudColor2["HUD_COLOUR_ENEMY"] = 119] = "HUD_COLOUR_ENEMY";
        HudColor2[HudColor2["HUD_COLOUR_LOCATION"] = 120] = "HUD_COLOUR_LOCATION";
        HudColor2[HudColor2["HUD_COLOUR_PICKUP"] = 121] = "HUD_COLOUR_PICKUP";
        HudColor2[HudColor2["HUD_COLOUR_PAUSE_SINGLEPLAYER"] = 122] = "HUD_COLOUR_PAUSE_SINGLEPLAYER";
        HudColor2[HudColor2["HUD_COLOUR_FREEMODE_DARK"] = 123] = "HUD_COLOUR_FREEMODE_DARK";
        HudColor2[HudColor2["HUD_COLOUR_INACTIVE_MISSION"] = 124] = "HUD_COLOUR_INACTIVE_MISSION";
        HudColor2[HudColor2["HUD_COLOUR_DAMAGE"] = 125] = "HUD_COLOUR_DAMAGE";
        HudColor2[HudColor2["HUD_COLOUR_PINKLIGHT"] = 126] = "HUD_COLOUR_PINKLIGHT";
        HudColor2[HudColor2["HUD_COLOUR_PM_MITEM_HIGHLIGHT"] = 127] = "HUD_COLOUR_PM_MITEM_HIGHLIGHT";
        HudColor2[HudColor2["HUD_COLOUR_SCRIPT_VARIABLE"] = 128] = "HUD_COLOUR_SCRIPT_VARIABLE";
        HudColor2[HudColor2["HUD_COLOUR_YOGA"] = 129] = "HUD_COLOUR_YOGA";
        HudColor2[HudColor2["HUD_COLOUR_TENNIS"] = 130] = "HUD_COLOUR_TENNIS";
        HudColor2[HudColor2["HUD_COLOUR_GOLF"] = 131] = "HUD_COLOUR_GOLF";
        HudColor2[HudColor2["HUD_COLOUR_SHOOTING_RANGE"] = 132] = "HUD_COLOUR_SHOOTING_RANGE";
        HudColor2[HudColor2["HUD_COLOUR_FLIGHT_SCHOOL"] = 133] = "HUD_COLOUR_FLIGHT_SCHOOL";
        HudColor2[HudColor2["HUD_COLOUR_NORTH_BLUE"] = 134] = "HUD_COLOUR_NORTH_BLUE";
        HudColor2[HudColor2["HUD_COLOUR_SOCIAL_CLUB"] = 135] = "HUD_COLOUR_SOCIAL_CLUB";
        HudColor2[HudColor2["HUD_COLOUR_PLATFORM_BLUE"] = 136] = "HUD_COLOUR_PLATFORM_BLUE";
        HudColor2[HudColor2["HUD_COLOUR_PLATFORM_GREEN"] = 137] = "HUD_COLOUR_PLATFORM_GREEN";
        HudColor2[HudColor2["HUD_COLOUR_PLATFORM_GREY"] = 138] = "HUD_COLOUR_PLATFORM_GREY";
        HudColor2[HudColor2["HUD_COLOUR_FACEBOOK_BLUE"] = 139] = "HUD_COLOUR_FACEBOOK_BLUE";
        HudColor2[HudColor2["HUD_COLOUR_INGAME_BG"] = 140] = "HUD_COLOUR_INGAME_BG";
        HudColor2[HudColor2["HUD_COLOUR_DARTS"] = 141] = "HUD_COLOUR_DARTS";
        HudColor2[HudColor2["HUD_COLOUR_WAYPOINT"] = 142] = "HUD_COLOUR_WAYPOINT";
        HudColor2[HudColor2["HUD_COLOUR_MICHAEL"] = 143] = "HUD_COLOUR_MICHAEL";
        HudColor2[HudColor2["HUD_COLOUR_FRANKLIN"] = 144] = "HUD_COLOUR_FRANKLIN";
        HudColor2[HudColor2["HUD_COLOUR_TREVOR"] = 145] = "HUD_COLOUR_TREVOR";
        HudColor2[HudColor2["HUD_COLOUR_GOLF_P1"] = 146] = "HUD_COLOUR_GOLF_P1";
        HudColor2[HudColor2["HUD_COLOUR_GOLF_P2"] = 147] = "HUD_COLOUR_GOLF_P2";
        HudColor2[HudColor2["HUD_COLOUR_GOLF_P3"] = 148] = "HUD_COLOUR_GOLF_P3";
        HudColor2[HudColor2["HUD_COLOUR_GOLF_P4"] = 149] = "HUD_COLOUR_GOLF_P4";
        HudColor2[HudColor2["HUD_COLOUR_WAYPOINTLIGHT"] = 150] = "HUD_COLOUR_WAYPOINTLIGHT";
        HudColor2[HudColor2["HUD_COLOUR_WAYPOINTDARK"] = 151] = "HUD_COLOUR_WAYPOINTDARK";
        HudColor2[HudColor2["HUD_COLOUR_PANEL_LIGHT"] = 152] = "HUD_COLOUR_PANEL_LIGHT";
        HudColor2[HudColor2["HUD_COLOUR_MICHAEL_DARK"] = 153] = "HUD_COLOUR_MICHAEL_DARK";
        HudColor2[HudColor2["HUD_COLOUR_FRANKLIN_DARK"] = 154] = "HUD_COLOUR_FRANKLIN_DARK";
        HudColor2[HudColor2["HUD_COLOUR_TREVOR_DARK"] = 155] = "HUD_COLOUR_TREVOR_DARK";
        HudColor2[HudColor2["HUD_COLOUR_OBJECTIVE_ROUTE"] = 156] = "HUD_COLOUR_OBJECTIVE_ROUTE";
        HudColor2[HudColor2["HUD_COLOUR_PAUSEMAP_TINT"] = 157] = "HUD_COLOUR_PAUSEMAP_TINT";
        HudColor2[HudColor2["HUD_COLOUR_PAUSE_DESELECT"] = 158] = "HUD_COLOUR_PAUSE_DESELECT";
        HudColor2[HudColor2["HUD_COLOUR_PM_WEAPONS_PURCHASABLE"] = 159] = "HUD_COLOUR_PM_WEAPONS_PURCHASABLE";
        HudColor2[HudColor2["HUD_COLOUR_PM_WEAPONS_LOCKED"] = 160] = "HUD_COLOUR_PM_WEAPONS_LOCKED";
        HudColor2[HudColor2["HUD_COLOUR_END_SCREEN_BG"] = 161] = "HUD_COLOUR_END_SCREEN_BG";
        HudColor2[HudColor2["HUD_COLOUR_CHOP"] = 162] = "HUD_COLOUR_CHOP";
        HudColor2[HudColor2["HUD_COLOUR_PAUSEMAP_TINT_HALF"] = 163] = "HUD_COLOUR_PAUSEMAP_TINT_HALF";
        HudColor2[HudColor2["HUD_COLOUR_NORTH_BLUE_OFFICIAL"] = 164] = "HUD_COLOUR_NORTH_BLUE_OFFICIAL";
        HudColor2[HudColor2["HUD_COLOUR_SCRIPT_VARIABLE_2"] = 165] = "HUD_COLOUR_SCRIPT_VARIABLE_2";
        HudColor2[HudColor2["HUD_COLOUR_H"] = 166] = "HUD_COLOUR_H";
        HudColor2[HudColor2["HUD_COLOUR_HDARK"] = 167] = "HUD_COLOUR_HDARK";
        HudColor2[HudColor2["HUD_COLOUR_T"] = 168] = "HUD_COLOUR_T";
        HudColor2[HudColor2["HUD_COLOUR_TDARK"] = 169] = "HUD_COLOUR_TDARK";
        HudColor2[HudColor2["HUD_COLOUR_HSHARD"] = 170] = "HUD_COLOUR_HSHARD";
        HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_MICHAEL"] = 171] = "HUD_COLOUR_CONTROLLER_MICHAEL";
        HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_FRANKLIN"] = 172] = "HUD_COLOUR_CONTROLLER_FRANKLIN";
        HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_TREVOR"] = 173] = "HUD_COLOUR_CONTROLLER_TREVOR";
        HudColor2[HudColor2["HUD_COLOUR_CONTROLLER_CHOP"] = 174] = "HUD_COLOUR_CONTROLLER_CHOP";
        HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_VIDEO"] = 175] = "HUD_COLOUR_VIDEO_EDITOR_VIDEO";
        HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_AUDIO"] = 176] = "HUD_COLOUR_VIDEO_EDITOR_AUDIO";
        HudColor2[HudColor2["HUD_COLOUR_VIDEO_EDITOR_TEXT"] = 177] = "HUD_COLOUR_VIDEO_EDITOR_TEXT";
        HudColor2[HudColor2["HUD_COLOUR_HB_BLUE"] = 178] = "HUD_COLOUR_HB_BLUE";
        HudColor2[HudColor2["HUD_COLOUR_HB_YELLOW"] = 179] = "HUD_COLOUR_HB_YELLOW";
      })(HudColor || (HudColor = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/HudComponent.js
  var HudComponent;
  var init_HudComponent = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/HudComponent.js"() {
      (function(HudComponent2) {
        HudComponent2[HudComponent2["WantedStars"] = 1] = "WantedStars";
        HudComponent2[HudComponent2["WeaponIcon"] = 2] = "WeaponIcon";
        HudComponent2[HudComponent2["Cash"] = 3] = "Cash";
        HudComponent2[HudComponent2["MpCash"] = 4] = "MpCash";
        HudComponent2[HudComponent2["MpMessage"] = 5] = "MpMessage";
        HudComponent2[HudComponent2["VehicleName"] = 6] = "VehicleName";
        HudComponent2[HudComponent2["AreaName"] = 7] = "AreaName";
        HudComponent2[HudComponent2["Unused"] = 8] = "Unused";
        HudComponent2[HudComponent2["StreetName"] = 9] = "StreetName";
        HudComponent2[HudComponent2["HelpText"] = 10] = "HelpText";
        HudComponent2[HudComponent2["FloatingHelpText1"] = 11] = "FloatingHelpText1";
        HudComponent2[HudComponent2["FloatingHelpText2"] = 12] = "FloatingHelpText2";
        HudComponent2[HudComponent2["CashChange"] = 13] = "CashChange";
        HudComponent2[HudComponent2["Reticle"] = 14] = "Reticle";
        HudComponent2[HudComponent2["SubtitleText"] = 15] = "SubtitleText";
        HudComponent2[HudComponent2["RadioStationsWheel"] = 16] = "RadioStationsWheel";
        HudComponent2[HudComponent2["Saving"] = 17] = "Saving";
        HudComponent2[HudComponent2["GamingStreamUnusde"] = 18] = "GamingStreamUnusde";
        HudComponent2[HudComponent2["WeaponWheel"] = 19] = "WeaponWheel";
        HudComponent2[HudComponent2["WeaponWheelStats"] = 20] = "WeaponWheelStats";
        HudComponent2[HudComponent2["DrugsPurse01"] = 21] = "DrugsPurse01";
        HudComponent2[HudComponent2["DrugsPurse02"] = 22] = "DrugsPurse02";
        HudComponent2[HudComponent2["DrugsPurse03"] = 23] = "DrugsPurse03";
        HudComponent2[HudComponent2["DrugsPurse04"] = 24] = "DrugsPurse04";
        HudComponent2[HudComponent2["MpTagCashFromBank"] = 25] = "MpTagCashFromBank";
        HudComponent2[HudComponent2["MpTagPackages"] = 26] = "MpTagPackages";
        HudComponent2[HudComponent2["MpTagCuffKeys"] = 27] = "MpTagCuffKeys";
        HudComponent2[HudComponent2["MpTagDownloadData"] = 28] = "MpTagDownloadData";
        HudComponent2[HudComponent2["MpTagIfPedFollowing"] = 29] = "MpTagIfPedFollowing";
        HudComponent2[HudComponent2["MpTagKeyCard"] = 30] = "MpTagKeyCard";
        HudComponent2[HudComponent2["MpTagRandomObject"] = 31] = "MpTagRandomObject";
        HudComponent2[HudComponent2["MpTagRemoteControl"] = 32] = "MpTagRemoteControl";
        HudComponent2[HudComponent2["MpTagCashFromSafe"] = 33] = "MpTagCashFromSafe";
        HudComponent2[HudComponent2["MpTagWeaponsPackage"] = 34] = "MpTagWeaponsPackage";
        HudComponent2[HudComponent2["MpTagKeys"] = 35] = "MpTagKeys";
        HudComponent2[HudComponent2["MpVehicle"] = 36] = "MpVehicle";
        HudComponent2[HudComponent2["MpVehicleHeli"] = 37] = "MpVehicleHeli";
        HudComponent2[HudComponent2["MpVehiclePlane"] = 38] = "MpVehiclePlane";
        HudComponent2[HudComponent2["PlayerSwitchAlert"] = 39] = "PlayerSwitchAlert";
        HudComponent2[HudComponent2["MpRankBar"] = 40] = "MpRankBar";
        HudComponent2[HudComponent2["DirectorMode"] = 41] = "DirectorMode";
        HudComponent2[HudComponent2["ReplayController"] = 42] = "ReplayController";
        HudComponent2[HudComponent2["ReplayMouse"] = 43] = "ReplayMouse";
        HudComponent2[HudComponent2["ReplayHeader"] = 44] = "ReplayHeader";
        HudComponent2[HudComponent2["ReplayOptions"] = 45] = "ReplayOptions";
        HudComponent2[HudComponent2["ReplayHelpText"] = 46] = "ReplayHelpText";
        HudComponent2[HudComponent2["ReplayMiscText"] = 47] = "ReplayMiscText";
        HudComponent2[HudComponent2["ReplayTopLine"] = 48] = "ReplayTopLine";
        HudComponent2[HudComponent2["ReplayBottomLine"] = 49] = "ReplayBottomLine";
        HudComponent2[HudComponent2["ReplayLeftBar"] = 50] = "ReplayLeftBar";
        HudComponent2[HudComponent2["ReplayTimer"] = 51] = "ReplayTimer";
      })(HudComponent || (HudComponent = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/InputMode.js
  var InputMode;
  var init_InputMode = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/InputMode.js"() {
      (function(InputMode2) {
        InputMode2[InputMode2["MouseAndKeyboard"] = 0] = "MouseAndKeyboard";
        InputMode2[InputMode2["GamePad"] = 2] = "GamePad";
      })(InputMode || (InputMode = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/IntersectOptions.js
  var IntersectOptions;
  var init_IntersectOptions = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/IntersectOptions.js"() {
      (function(IntersectOptions2) {
        IntersectOptions2[IntersectOptions2["Everything"] = -1] = "Everything";
        IntersectOptions2[IntersectOptions2["Map"] = 1] = "Map";
        IntersectOptions2[IntersectOptions2["MissionEntities"] = 2] = "MissionEntities";
        IntersectOptions2[IntersectOptions2["Peds1"] = 12] = "Peds1";
        IntersectOptions2[IntersectOptions2["Objects"] = 16] = "Objects";
        IntersectOptions2[IntersectOptions2["Unk1"] = 32] = "Unk1";
        IntersectOptions2[IntersectOptions2["Unk2"] = 64] = "Unk2";
        IntersectOptions2[IntersectOptions2["Unk3"] = 128] = "Unk3";
        IntersectOptions2[IntersectOptions2["Vegetation"] = 256] = "Vegetation";
        IntersectOptions2[IntersectOptions2["Unk4"] = 512] = "Unk4";
      })(IntersectOptions || (IntersectOptions = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/InvertAxis.js
  var InvertAxisFlags;
  var init_InvertAxis = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/InvertAxis.js"() {
      (function(InvertAxisFlags2) {
        InvertAxisFlags2[InvertAxisFlags2["None"] = 0] = "None";
        InvertAxisFlags2[InvertAxisFlags2["X"] = 1] = "X";
        InvertAxisFlags2[InvertAxisFlags2["Y"] = 2] = "Y";
        InvertAxisFlags2[InvertAxisFlags2["Z"] = 4] = "Z";
      })(InvertAxisFlags || (InvertAxisFlags = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Language.js
  var Language;
  var init_Language = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Language.js"() {
      (function(Language2) {
        Language2[Language2["American"] = 0] = "American";
        Language2[Language2["French"] = 1] = "French";
        Language2[Language2["German"] = 2] = "German";
        Language2[Language2["Italian"] = 3] = "Italian";
        Language2[Language2["Spanish"] = 4] = "Spanish";
        Language2[Language2["Portuguese"] = 5] = "Portuguese";
        Language2[Language2["Polish"] = 6] = "Polish";
        Language2[Language2["Russian"] = 7] = "Russian";
        Language2[Language2["Korean"] = 8] = "Korean";
        Language2[Language2["Chinese"] = 9] = "Chinese";
        Language2[Language2["Japanese"] = 10] = "Japanese";
        Language2[Language2["Mexican"] = 11] = "Mexican";
      })(Language || (Language = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/LeaveVehicleFlags.js
  var LeaveVehicleFlags;
  var init_LeaveVehicleFlags = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/LeaveVehicleFlags.js"() {
      (function(LeaveVehicleFlags2) {
        LeaveVehicleFlags2[LeaveVehicleFlags2["None"] = 0] = "None";
        LeaveVehicleFlags2[LeaveVehicleFlags2["Normal"] = 1] = "Normal";
        LeaveVehicleFlags2[LeaveVehicleFlags2["WarpOut"] = 16] = "WarpOut";
        LeaveVehicleFlags2[LeaveVehicleFlags2["SlowerNone"] = 64] = "SlowerNone";
        LeaveVehicleFlags2[LeaveVehicleFlags2["LeaveDoorOpen"] = 256] = "LeaveDoorOpen";
        LeaveVehicleFlags2[LeaveVehicleFlags2["BailOut"] = 4096] = "BailOut";
        LeaveVehicleFlags2[LeaveVehicleFlags2["BailOut2"] = 4160] = "BailOut2";
        LeaveVehicleFlags2[LeaveVehicleFlags2["PassengerSeatNormal"] = 262144] = "PassengerSeatNormal";
      })(LeaveVehicleFlags || (LeaveVehicleFlags = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/LoadingSpinnerType.js
  var LoadingSpinnerType;
  var init_LoadingSpinnerType = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/LoadingSpinnerType.js"() {
      (function(LoadingSpinnerType2) {
        LoadingSpinnerType2[LoadingSpinnerType2["Clockwise1"] = 1] = "Clockwise1";
        LoadingSpinnerType2[LoadingSpinnerType2["Clockwise2"] = 2] = "Clockwise2";
        LoadingSpinnerType2[LoadingSpinnerType2["Clockwise3"] = 3] = "Clockwise3";
        LoadingSpinnerType2[LoadingSpinnerType2["SocialClubSaving"] = 4] = "SocialClubSaving";
        LoadingSpinnerType2[LoadingSpinnerType2["RegularClockwise"] = 5] = "RegularClockwise";
      })(LoadingSpinnerType || (LoadingSpinnerType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/MarkerType.js
  var MarkerType;
  var init_MarkerType = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/MarkerType.js"() {
      (function(MarkerType2) {
        MarkerType2[MarkerType2["UpsideDownCone"] = 0] = "UpsideDownCone";
        MarkerType2[MarkerType2["VerticalCylinder"] = 1] = "VerticalCylinder";
        MarkerType2[MarkerType2["ThickChevronUp"] = 2] = "ThickChevronUp";
        MarkerType2[MarkerType2["ThinChevronUp"] = 3] = "ThinChevronUp";
        MarkerType2[MarkerType2["CheckeredFlagRect"] = 4] = "CheckeredFlagRect";
        MarkerType2[MarkerType2["CheckeredFlagCircle"] = 5] = "CheckeredFlagCircle";
        MarkerType2[MarkerType2["VerticleCircle"] = 6] = "VerticleCircle";
        MarkerType2[MarkerType2["PlaneModel"] = 7] = "PlaneModel";
        MarkerType2[MarkerType2["LostMCDark"] = 8] = "LostMCDark";
        MarkerType2[MarkerType2["LostMCLight"] = 9] = "LostMCLight";
        MarkerType2[MarkerType2["Number0"] = 10] = "Number0";
        MarkerType2[MarkerType2["Number1"] = 11] = "Number1";
        MarkerType2[MarkerType2["Number2"] = 12] = "Number2";
        MarkerType2[MarkerType2["Number3"] = 13] = "Number3";
        MarkerType2[MarkerType2["Number4"] = 14] = "Number4";
        MarkerType2[MarkerType2["Number5"] = 15] = "Number5";
        MarkerType2[MarkerType2["Number6"] = 16] = "Number6";
        MarkerType2[MarkerType2["Number7"] = 17] = "Number7";
        MarkerType2[MarkerType2["Number8"] = 18] = "Number8";
        MarkerType2[MarkerType2["Number9"] = 19] = "Number9";
        MarkerType2[MarkerType2["ChevronUpx1"] = 20] = "ChevronUpx1";
        MarkerType2[MarkerType2["ChevronUpx2"] = 21] = "ChevronUpx2";
        MarkerType2[MarkerType2["ChevronUpx3"] = 22] = "ChevronUpx3";
        MarkerType2[MarkerType2["HorizontalCircleFat"] = 23] = "HorizontalCircleFat";
        MarkerType2[MarkerType2["ReplayIcon"] = 24] = "ReplayIcon";
        MarkerType2[MarkerType2["HorizontalCircleSkinny"] = 25] = "HorizontalCircleSkinny";
        MarkerType2[MarkerType2["HorizontalCircleSkinnyArrow"] = 26] = "HorizontalCircleSkinnyArrow";
        MarkerType2[MarkerType2["HorizontalSplitArrowCircle"] = 27] = "HorizontalSplitArrowCircle";
        MarkerType2[MarkerType2["DebugSphere"] = 28] = "DebugSphere";
        MarkerType2[MarkerType2["DollarSign"] = 29] = "DollarSign";
        MarkerType2[MarkerType2["HorizontalBars"] = 30] = "HorizontalBars";
        MarkerType2[MarkerType2["WolfHead"] = 31] = "WolfHead";
        MarkerType2[MarkerType2["QuestionMark"] = 32] = "QuestionMark";
        MarkerType2[MarkerType2["PlaneSymbol"] = 33] = "PlaneSymbol";
        MarkerType2[MarkerType2["HelicopterSymbol"] = 34] = "HelicopterSymbol";
        MarkerType2[MarkerType2["BoatSymbol"] = 35] = "BoatSymbol";
        MarkerType2[MarkerType2["CarSymbol"] = 36] = "CarSymbol";
        MarkerType2[MarkerType2["MotorcycleSymbol"] = 37] = "MotorcycleSymbol";
        MarkerType2[MarkerType2["BikeSymbol"] = 38] = "BikeSymbol";
        MarkerType2[MarkerType2["TruckSymbol"] = 39] = "TruckSymbol";
        MarkerType2[MarkerType2["ParachuteSymbol"] = 40] = "ParachuteSymbol";
        MarkerType2[MarkerType2["SawbladeSymbol"] = 41] = "SawbladeSymbol";
      })(MarkerType || (MarkerType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/MenuAlignment.js
  var MenuAlignment;
  var init_MenuAlignment = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/MenuAlignment.js"() {
      (function(MenuAlignment2) {
        MenuAlignment2[MenuAlignment2["Left"] = 76] = "Left";
        MenuAlignment2[MenuAlignment2["Right"] = 82] = "Right";
      })(MenuAlignment || (MenuAlignment = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/NotificationType.js
  var NotificationType;
  var init_NotificationType = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/NotificationType.js"() {
      (function(NotificationType2) {
        NotificationType2[NotificationType2["Default"] = 0] = "Default";
        NotificationType2[NotificationType2["Bubble"] = 1] = "Bubble";
        NotificationType2[NotificationType2["Mail"] = 2] = "Mail";
        NotificationType2[NotificationType2["FriendRequest"] = 3] = "FriendRequest";
        NotificationType2[NotificationType2["Default2"] = 4] = "Default2";
        NotificationType2[NotificationType2["Reply"] = 7] = "Reply";
        NotificationType2[NotificationType2["ReputationPoints"] = 8] = "ReputationPoints";
        NotificationType2[NotificationType2["Money"] = 9] = "Money";
      })(NotificationType || (NotificationType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Parachute.js
  var ParachuteLandingType, ParachuteState;
  var init_Parachute = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Parachute.js"() {
      (function(ParachuteLandingType2) {
        ParachuteLandingType2[ParachuteLandingType2["None"] = -1] = "None";
        ParachuteLandingType2[ParachuteLandingType2["Stumbling"] = 1] = "Stumbling";
        ParachuteLandingType2[ParachuteLandingType2["Rolling"] = 2] = "Rolling";
        ParachuteLandingType2[ParachuteLandingType2["Ragdoll"] = 3] = "Ragdoll";
      })(ParachuteLandingType || (ParachuteLandingType = {}));
      (function(ParachuteState2) {
        ParachuteState2[ParachuteState2["None"] = -1] = "None";
        ParachuteState2[ParachuteState2["FreeFalling"] = 0] = "FreeFalling";
        ParachuteState2[ParachuteState2["Deploying"] = 1] = "Deploying";
        ParachuteState2[ParachuteState2["Gliding"] = 2] = "Gliding";
        ParachuteState2[ParachuteState2["LandingOrFallingToDoom"] = 3] = "LandingOrFallingToDoom";
      })(ParachuteState || (ParachuteState = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/RadioStation.js
  var RadioStation;
  var init_RadioStation = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/RadioStation.js"() {
      (function(RadioStation2) {
        RadioStation2["LosSantosRockRadio"] = "RADIO_01_CLASS_ROCK";
        RadioStation2["NonStopPopFM"] = "RADIO_02_POP";
        RadioStation2["RadioLosSantos"] = "RADIO_03_HIPHOP_NEW";
        RadioStation2["ChannelX"] = "RADIO_04_PUNK";
        RadioStation2["WestCoastTalkRadio"] = "RADIO_05_TALK_01";
        RadioStation2["RebelRadio"] = "RADIO_06_COUNTRY";
        RadioStation2["SoulwaxFM"] = "RADIO_07_DANCE_01";
        RadioStation2["EastLosFM"] = "RADIO_08_MEXICAN";
        RadioStation2["WestCoastClassics"] = "RADIO_09_HIPHOP_OLD";
        RadioStation2["BlaineCountyRadio"] = "RADIO_11_TALK_02";
        RadioStation2["TheBlueArk"] = "RADIO_12_REGGAE";
        RadioStation2["WorldWideFM"] = "RADIO_13_JAZZ";
        RadioStation2["FlyloFM"] = "RADIO_14_DANCE_02";
        RadioStation2["TheLowdown"] = "RADIO_15_MOTOWN";
        RadioStation2["RadioMirrorPark"] = "RADIO_16_SILVERLAKE";
        RadioStation2["Space"] = "RADIO_17_FUNK";
        RadioStation2["VinewoodBoulevardRadio"] = "RADIO_18_90S_ROCK";
        RadioStation2["SelfRadio"] = "RADIO_19_USER";
        RadioStation2["TheLab"] = "RADIO_20_THELAB";
        RadioStation2["BlondedLosSantos"] = "RADIO_21_DLC_XM17";
        RadioStation2["LosSantosUndergroundRadio"] = "RADIO_22_DLC_BATTLE_MIX1_RADIO";
        RadioStation2["RadioOff"] = "OFF";
      })(RadioStation || (RadioStation = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/RagdollType.js
  var RagdollType;
  var init_RagdollType = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/RagdollType.js"() {
      (function(RagdollType2) {
        RagdollType2[RagdollType2["Normal"] = 0] = "Normal";
        RagdollType2[RagdollType2["StiffLegs"] = 1] = "StiffLegs";
        RagdollType2[RagdollType2["NarrowLegs"] = 2] = "NarrowLegs";
        RagdollType2[RagdollType2["WideLegs"] = 3] = "WideLegs";
      })(RagdollType || (RagdollType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Relationship.js
  var Relationship;
  var init_Relationship = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Relationship.js"() {
      (function(Relationship2) {
        Relationship2[Relationship2["Hate"] = 5] = "Hate";
        Relationship2[Relationship2["Dislike"] = 4] = "Dislike";
        Relationship2[Relationship2["Neutral"] = 3] = "Neutral";
        Relationship2[Relationship2["Like"] = 2] = "Like";
        Relationship2[Relationship2["Respect"] = 1] = "Respect";
        Relationship2[Relationship2["Companion"] = 0] = "Companion";
        Relationship2[Relationship2["Pedestrians"] = 255] = "Pedestrians";
      })(Relationship || (Relationship = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/RopeType.js
  var RopeType;
  var init_RopeType = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/RopeType.js"() {
      (function(RopeType2) {
        RopeType2[RopeType2["ThickRope"] = 4] = "ThickRope";
        RopeType2[RopeType2["ThinMetalWire"] = 5] = "ThinMetalWire";
      })(RopeType || (RopeType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/ScreenEffect.js
  var ScreenEffect;
  var init_ScreenEffect = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/ScreenEffect.js"() {
      (function(ScreenEffect2) {
        ScreenEffect2[ScreenEffect2["SwitchHudIn"] = 0] = "SwitchHudIn";
        ScreenEffect2[ScreenEffect2["SwitchHudOut"] = 1] = "SwitchHudOut";
        ScreenEffect2[ScreenEffect2["FocusIn"] = 2] = "FocusIn";
        ScreenEffect2[ScreenEffect2["FocusOut"] = 3] = "FocusOut";
        ScreenEffect2[ScreenEffect2["MinigameEndNeutral"] = 4] = "MinigameEndNeutral";
        ScreenEffect2[ScreenEffect2["MinigameEndTrevor"] = 5] = "MinigameEndTrevor";
        ScreenEffect2[ScreenEffect2["MinigameEndFranklin"] = 6] = "MinigameEndFranklin";
        ScreenEffect2[ScreenEffect2["MinigameEndMichael"] = 7] = "MinigameEndMichael";
        ScreenEffect2[ScreenEffect2["MinigameTransitionOut"] = 8] = "MinigameTransitionOut";
        ScreenEffect2[ScreenEffect2["MinigameTransitionIn"] = 9] = "MinigameTransitionIn";
        ScreenEffect2[ScreenEffect2["SwitchShortNeutralIn"] = 10] = "SwitchShortNeutralIn";
        ScreenEffect2[ScreenEffect2["SwitchShortFranklinIn"] = 11] = "SwitchShortFranklinIn";
        ScreenEffect2[ScreenEffect2["SwitchShortTrevorIn"] = 12] = "SwitchShortTrevorIn";
        ScreenEffect2[ScreenEffect2["SwitchShortMichaelIn"] = 13] = "SwitchShortMichaelIn";
        ScreenEffect2[ScreenEffect2["SwitchOpenMichaelIn"] = 14] = "SwitchOpenMichaelIn";
        ScreenEffect2[ScreenEffect2["SwitchOpenFranklinIn"] = 15] = "SwitchOpenFranklinIn";
        ScreenEffect2[ScreenEffect2["SwitchOpenTrevorIn"] = 16] = "SwitchOpenTrevorIn";
        ScreenEffect2[ScreenEffect2["SwitchHudMichaelOut"] = 17] = "SwitchHudMichaelOut";
        ScreenEffect2[ScreenEffect2["SwitchHudFranklinOut"] = 18] = "SwitchHudFranklinOut";
        ScreenEffect2[ScreenEffect2["SwitchHudTrevorOut"] = 19] = "SwitchHudTrevorOut";
        ScreenEffect2[ScreenEffect2["SwitchShortFranklinMid"] = 20] = "SwitchShortFranklinMid";
        ScreenEffect2[ScreenEffect2["SwitchShortMichaelMid"] = 21] = "SwitchShortMichaelMid";
        ScreenEffect2[ScreenEffect2["SwitchShortTrevorMid"] = 22] = "SwitchShortTrevorMid";
        ScreenEffect2[ScreenEffect2["DeathFailOut"] = 23] = "DeathFailOut";
        ScreenEffect2[ScreenEffect2["CamPushInNeutral"] = 24] = "CamPushInNeutral";
        ScreenEffect2[ScreenEffect2["CamPushInFranklin"] = 25] = "CamPushInFranklin";
        ScreenEffect2[ScreenEffect2["CamPushInMichael"] = 26] = "CamPushInMichael";
        ScreenEffect2[ScreenEffect2["CamPushInTrevor"] = 27] = "CamPushInTrevor";
        ScreenEffect2[ScreenEffect2["SwitchSceneFranklin"] = 28] = "SwitchSceneFranklin";
        ScreenEffect2[ScreenEffect2["SwitchSceneTrevor"] = 29] = "SwitchSceneTrevor";
        ScreenEffect2[ScreenEffect2["SwitchSceneMichael"] = 30] = "SwitchSceneMichael";
        ScreenEffect2[ScreenEffect2["SwitchSceneNeutral"] = 31] = "SwitchSceneNeutral";
        ScreenEffect2[ScreenEffect2["MpCelebWin"] = 32] = "MpCelebWin";
        ScreenEffect2[ScreenEffect2["MpCelebWinOut"] = 33] = "MpCelebWinOut";
        ScreenEffect2[ScreenEffect2["MpCelebLose"] = 34] = "MpCelebLose";
        ScreenEffect2[ScreenEffect2["MpCelebLoseOut"] = 35] = "MpCelebLoseOut";
        ScreenEffect2[ScreenEffect2["DeathFailNeutralIn"] = 36] = "DeathFailNeutralIn";
        ScreenEffect2[ScreenEffect2["DeathFailMpDark"] = 37] = "DeathFailMpDark";
        ScreenEffect2[ScreenEffect2["DeathFailMpIn"] = 38] = "DeathFailMpIn";
        ScreenEffect2[ScreenEffect2["MpCelebPreloadFade"] = 39] = "MpCelebPreloadFade";
        ScreenEffect2[ScreenEffect2["PeyoteEndOut"] = 40] = "PeyoteEndOut";
        ScreenEffect2[ScreenEffect2["PeyoteEndIn"] = 41] = "PeyoteEndIn";
        ScreenEffect2[ScreenEffect2["PeyoteIn"] = 42] = "PeyoteIn";
        ScreenEffect2[ScreenEffect2["PeyoteOut"] = 43] = "PeyoteOut";
        ScreenEffect2[ScreenEffect2["MpRaceCrash"] = 44] = "MpRaceCrash";
        ScreenEffect2[ScreenEffect2["SuccessFranklin"] = 45] = "SuccessFranklin";
        ScreenEffect2[ScreenEffect2["SuccessTrevor"] = 46] = "SuccessTrevor";
        ScreenEffect2[ScreenEffect2["SuccessMichael"] = 47] = "SuccessMichael";
        ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFightIn"] = 48] = "DrugsMichaelAliensFightIn";
        ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFight"] = 49] = "DrugsMichaelAliensFight";
        ScreenEffect2[ScreenEffect2["DrugsMichaelAliensFightOut"] = 50] = "DrugsMichaelAliensFightOut";
        ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFightIn"] = 51] = "DrugsTrevorClownsFightIn";
        ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFight"] = 52] = "DrugsTrevorClownsFight";
        ScreenEffect2[ScreenEffect2["DrugsTrevorClownsFightOut"] = 53] = "DrugsTrevorClownsFightOut";
        ScreenEffect2[ScreenEffect2["HeistCelebPass"] = 54] = "HeistCelebPass";
        ScreenEffect2[ScreenEffect2["HeistCelebPassBw"] = 55] = "HeistCelebPassBw";
        ScreenEffect2[ScreenEffect2["HeistCelebEnd"] = 56] = "HeistCelebEnd";
        ScreenEffect2[ScreenEffect2["HeistCelebToast"] = 57] = "HeistCelebToast";
        ScreenEffect2[ScreenEffect2["MenuMgHeistIn"] = 58] = "MenuMgHeistIn";
        ScreenEffect2[ScreenEffect2["MenuMgTournamentIn"] = 59] = "MenuMgTournamentIn";
        ScreenEffect2[ScreenEffect2["MenuMgSelectionIn"] = 60] = "MenuMgSelectionIn";
        ScreenEffect2[ScreenEffect2["ChopVision"] = 61] = "ChopVision";
        ScreenEffect2[ScreenEffect2["DmtFlightIntro"] = 62] = "DmtFlightIntro";
        ScreenEffect2[ScreenEffect2["DmtFlight"] = 63] = "DmtFlight";
        ScreenEffect2[ScreenEffect2["DrugsDrivingIn"] = 64] = "DrugsDrivingIn";
        ScreenEffect2[ScreenEffect2["DrugsDrivingOut"] = 65] = "DrugsDrivingOut";
        ScreenEffect2[ScreenEffect2["SwitchOpenNeutralFib5"] = 66] = "SwitchOpenNeutralFib5";
        ScreenEffect2[ScreenEffect2["HeistLocate"] = 67] = "HeistLocate";
        ScreenEffect2[ScreenEffect2["MpJobLoad"] = 68] = "MpJobLoad";
        ScreenEffect2[ScreenEffect2["RaceTurbo"] = 69] = "RaceTurbo";
        ScreenEffect2[ScreenEffect2["MpIntroLogo"] = 70] = "MpIntroLogo";
        ScreenEffect2[ScreenEffect2["HeistTripSkipFade"] = 71] = "HeistTripSkipFade";
        ScreenEffect2[ScreenEffect2["MenuMgHeistOut"] = 72] = "MenuMgHeistOut";
        ScreenEffect2[ScreenEffect2["MpCoronaSwitch"] = 73] = "MpCoronaSwitch";
        ScreenEffect2[ScreenEffect2["MenuMgSelectionTint"] = 74] = "MenuMgSelectionTint";
        ScreenEffect2[ScreenEffect2["SuccessNeutral"] = 75] = "SuccessNeutral";
        ScreenEffect2[ScreenEffect2["ExplosionJosh3"] = 76] = "ExplosionJosh3";
        ScreenEffect2[ScreenEffect2["SniperOverlay"] = 77] = "SniperOverlay";
        ScreenEffect2[ScreenEffect2["RampageOut"] = 78] = "RampageOut";
        ScreenEffect2[ScreenEffect2["Rampage"] = 79] = "Rampage";
        ScreenEffect2[ScreenEffect2["DontTazemeBro"] = 80] = "DontTazemeBro";
      })(ScreenEffect || (ScreenEffect = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/SpeechModifier.js
  var SpeechModifier;
  var init_SpeechModifier = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/SpeechModifier.js"() {
      (function(SpeechModifier2) {
        SpeechModifier2[SpeechModifier2["Standard"] = 0] = "Standard";
        SpeechModifier2[SpeechModifier2["AllowRepeat"] = 1] = "AllowRepeat";
        SpeechModifier2[SpeechModifier2["Beat"] = 2] = "Beat";
        SpeechModifier2[SpeechModifier2["Force"] = 3] = "Force";
        SpeechModifier2[SpeechModifier2["ForceFrontend"] = 4] = "ForceFrontend";
        SpeechModifier2[SpeechModifier2["ForceNoRepeatFrontend"] = 5] = "ForceNoRepeatFrontend";
        SpeechModifier2[SpeechModifier2["ForceNormal"] = 6] = "ForceNormal";
        SpeechModifier2[SpeechModifier2["ForceNormalClear"] = 7] = "ForceNormalClear";
        SpeechModifier2[SpeechModifier2["ForceNormalCritical"] = 8] = "ForceNormalCritical";
        SpeechModifier2[SpeechModifier2["ForceShouted"] = 9] = "ForceShouted";
        SpeechModifier2[SpeechModifier2["ForceShoutedClear"] = 10] = "ForceShoutedClear";
        SpeechModifier2[SpeechModifier2["ForceShoutedCritical"] = 11] = "ForceShoutedCritical";
        SpeechModifier2[SpeechModifier2["ForcePreloadOnly"] = 12] = "ForcePreloadOnly";
        SpeechModifier2[SpeechModifier2["Megaphone"] = 13] = "Megaphone";
        SpeechModifier2[SpeechModifier2["Helicopter"] = 14] = "Helicopter";
        SpeechModifier2[SpeechModifier2["ForceMegaphone"] = 15] = "ForceMegaphone";
        SpeechModifier2[SpeechModifier2["ForceHelicopter"] = 16] = "ForceHelicopter";
        SpeechModifier2[SpeechModifier2["Interrupt"] = 17] = "Interrupt";
        SpeechModifier2[SpeechModifier2["InterruptShouted"] = 18] = "InterruptShouted";
        SpeechModifier2[SpeechModifier2["InterruptShoutedClear"] = 19] = "InterruptShoutedClear";
        SpeechModifier2[SpeechModifier2["InterruptShoutedCritical"] = 20] = "InterruptShoutedCritical";
        SpeechModifier2[SpeechModifier2["InterruptNoForce"] = 21] = "InterruptNoForce";
        SpeechModifier2[SpeechModifier2["InterruptFrontend"] = 22] = "InterruptFrontend";
        SpeechModifier2[SpeechModifier2["InterruptNoForceFrontend"] = 23] = "InterruptNoForceFrontend";
        SpeechModifier2[SpeechModifier2["AddBlip"] = 24] = "AddBlip";
        SpeechModifier2[SpeechModifier2["AddBlipAllowRepeat"] = 25] = "AddBlipAllowRepeat";
        SpeechModifier2[SpeechModifier2["AddBlipForce"] = 26] = "AddBlipForce";
        SpeechModifier2[SpeechModifier2["AddBlipShouted"] = 27] = "AddBlipShouted";
        SpeechModifier2[SpeechModifier2["AddBlipShoutedForce"] = 28] = "AddBlipShoutedForce";
        SpeechModifier2[SpeechModifier2["AddBlipInterrupt"] = 29] = "AddBlipInterrupt";
        SpeechModifier2[SpeechModifier2["AddBlipInterruptForce"] = 30] = "AddBlipInterruptForce";
        SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShouted"] = 31] = "ForcePreloadOnlyShouted";
        SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShoutedClear"] = 32] = "ForcePreloadOnlyShoutedClear";
        SpeechModifier2[SpeechModifier2["ForcePreloadOnlyShoutedCritical"] = 33] = "ForcePreloadOnlyShoutedCritical";
        SpeechModifier2[SpeechModifier2["Shouted"] = 34] = "Shouted";
        SpeechModifier2[SpeechModifier2["ShoutedClear"] = 35] = "ShoutedClear";
        SpeechModifier2[SpeechModifier2["ShoutedCritical"] = 36] = "ShoutedCritical";
      })(SpeechModifier || (SpeechModifier = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Vehicle.js
  var CargobobHook, LicensePlateStyle, LicensePlateType, VehicleClass, VehicleColor, VehicleLandingGearState, VehicleLockStatus, VehicleNeonLight, VehicleRoofState, VehicleSeat, VehicleWindowTint, VehicleWindowIndex, VehicleModType, VehicleToggleModType, VehiclePaintType, VehicleDoorIndex, VehicleWheelType, VehicleWheelIndex;
  var init_Vehicle = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Vehicle.js"() {
      (function(CargobobHook2) {
        CargobobHook2[CargobobHook2["Hook"] = 0] = "Hook";
        CargobobHook2[CargobobHook2["Magnet"] = 1] = "Magnet";
      })(CargobobHook || (CargobobHook = {}));
      (function(LicensePlateStyle2) {
        LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite1"] = 3] = "BlueOnWhite1";
        LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite2"] = 0] = "BlueOnWhite2";
        LicensePlateStyle2[LicensePlateStyle2["BlueOnWhite3"] = 4] = "BlueOnWhite3";
        LicensePlateStyle2[LicensePlateStyle2["YellowOnBlack"] = 1] = "YellowOnBlack";
        LicensePlateStyle2[LicensePlateStyle2["YellowOnBlue"] = 2] = "YellowOnBlue";
        LicensePlateStyle2[LicensePlateStyle2["NorthYankton"] = 5] = "NorthYankton";
      })(LicensePlateStyle || (LicensePlateStyle = {}));
      (function(LicensePlateType2) {
        LicensePlateType2[LicensePlateType2["FrontAndRearPlates"] = 0] = "FrontAndRearPlates";
        LicensePlateType2[LicensePlateType2["FrontPlate"] = 1] = "FrontPlate";
        LicensePlateType2[LicensePlateType2["RearPlate"] = 2] = "RearPlate";
        LicensePlateType2[LicensePlateType2["None"] = 3] = "None";
      })(LicensePlateType || (LicensePlateType = {}));
      (function(VehicleClass2) {
        VehicleClass2[VehicleClass2["Compacts"] = 0] = "Compacts";
        VehicleClass2[VehicleClass2["Sedans"] = 1] = "Sedans";
        VehicleClass2[VehicleClass2["SUVs"] = 2] = "SUVs";
        VehicleClass2[VehicleClass2["Coupes"] = 3] = "Coupes";
        VehicleClass2[VehicleClass2["Muscle"] = 4] = "Muscle";
        VehicleClass2[VehicleClass2["SportsClassics"] = 5] = "SportsClassics";
        VehicleClass2[VehicleClass2["Sports"] = 6] = "Sports";
        VehicleClass2[VehicleClass2["Super"] = 7] = "Super";
        VehicleClass2[VehicleClass2["Motorcycles"] = 8] = "Motorcycles";
        VehicleClass2[VehicleClass2["OffRoad"] = 9] = "OffRoad";
        VehicleClass2[VehicleClass2["Industrial"] = 10] = "Industrial";
        VehicleClass2[VehicleClass2["Utility"] = 11] = "Utility";
        VehicleClass2[VehicleClass2["Vans"] = 12] = "Vans";
        VehicleClass2[VehicleClass2["Cycles"] = 13] = "Cycles";
        VehicleClass2[VehicleClass2["Boats"] = 14] = "Boats";
        VehicleClass2[VehicleClass2["Helicopters"] = 15] = "Helicopters";
        VehicleClass2[VehicleClass2["Planes"] = 16] = "Planes";
        VehicleClass2[VehicleClass2["Service"] = 17] = "Service";
        VehicleClass2[VehicleClass2["Emergency"] = 18] = "Emergency";
        VehicleClass2[VehicleClass2["Military"] = 19] = "Military";
        VehicleClass2[VehicleClass2["Commercial"] = 20] = "Commercial";
        VehicleClass2[VehicleClass2["Trains"] = 21] = "Trains";
      })(VehicleClass || (VehicleClass = {}));
      (function(VehicleColor2) {
        VehicleColor2[VehicleColor2["MetallicBlack"] = 0] = "MetallicBlack";
        VehicleColor2[VehicleColor2["MetallicGraphiteBlack"] = 1] = "MetallicGraphiteBlack";
        VehicleColor2[VehicleColor2["MetallicBlackSteel"] = 2] = "MetallicBlackSteel";
        VehicleColor2[VehicleColor2["MetallicDarkSilver"] = 3] = "MetallicDarkSilver";
        VehicleColor2[VehicleColor2["MetallicSilver"] = 4] = "MetallicSilver";
        VehicleColor2[VehicleColor2["MetallicBlueSilver"] = 5] = "MetallicBlueSilver";
        VehicleColor2[VehicleColor2["MetallicSteelGray"] = 6] = "MetallicSteelGray";
        VehicleColor2[VehicleColor2["MetallicShadowSilver"] = 7] = "MetallicShadowSilver";
        VehicleColor2[VehicleColor2["MetallicStoneSilver"] = 8] = "MetallicStoneSilver";
        VehicleColor2[VehicleColor2["MetallicMidnightSilver"] = 9] = "MetallicMidnightSilver";
        VehicleColor2[VehicleColor2["MetallicGunMetal"] = 10] = "MetallicGunMetal";
        VehicleColor2[VehicleColor2["MetallicAnthraciteGray"] = 11] = "MetallicAnthraciteGray";
        VehicleColor2[VehicleColor2["MatteBlack"] = 12] = "MatteBlack";
        VehicleColor2[VehicleColor2["MatteGray"] = 13] = "MatteGray";
        VehicleColor2[VehicleColor2["MatteLightGray"] = 14] = "MatteLightGray";
        VehicleColor2[VehicleColor2["UtilBlack"] = 15] = "UtilBlack";
        VehicleColor2[VehicleColor2["UtilBlackPoly"] = 16] = "UtilBlackPoly";
        VehicleColor2[VehicleColor2["UtilDarksilver"] = 17] = "UtilDarksilver";
        VehicleColor2[VehicleColor2["UtilSilver"] = 18] = "UtilSilver";
        VehicleColor2[VehicleColor2["UtilGunMetal"] = 19] = "UtilGunMetal";
        VehicleColor2[VehicleColor2["UtilShadowSilver"] = 20] = "UtilShadowSilver";
        VehicleColor2[VehicleColor2["WornBlack"] = 21] = "WornBlack";
        VehicleColor2[VehicleColor2["WornGraphite"] = 22] = "WornGraphite";
        VehicleColor2[VehicleColor2["WornSilverGray"] = 23] = "WornSilverGray";
        VehicleColor2[VehicleColor2["WornSilver"] = 24] = "WornSilver";
        VehicleColor2[VehicleColor2["WornBlueSilver"] = 25] = "WornBlueSilver";
        VehicleColor2[VehicleColor2["WornShadowSilver"] = 26] = "WornShadowSilver";
        VehicleColor2[VehicleColor2["MetallicRed"] = 27] = "MetallicRed";
        VehicleColor2[VehicleColor2["MetallicTorinoRed"] = 28] = "MetallicTorinoRed";
        VehicleColor2[VehicleColor2["MetallicFormulaRed"] = 29] = "MetallicFormulaRed";
        VehicleColor2[VehicleColor2["MetallicBlazeRed"] = 30] = "MetallicBlazeRed";
        VehicleColor2[VehicleColor2["MetallicGracefulRed"] = 31] = "MetallicGracefulRed";
        VehicleColor2[VehicleColor2["MetallicGarnetRed"] = 32] = "MetallicGarnetRed";
        VehicleColor2[VehicleColor2["MetallicDesertRed"] = 33] = "MetallicDesertRed";
        VehicleColor2[VehicleColor2["MetallicCabernetRed"] = 34] = "MetallicCabernetRed";
        VehicleColor2[VehicleColor2["MetallicCandyRed"] = 35] = "MetallicCandyRed";
        VehicleColor2[VehicleColor2["MetallicSunriseOrange"] = 36] = "MetallicSunriseOrange";
        VehicleColor2[VehicleColor2["MetallicClassicGold"] = 37] = "MetallicClassicGold";
        VehicleColor2[VehicleColor2["MetallicOrange"] = 38] = "MetallicOrange";
        VehicleColor2[VehicleColor2["MatteRed"] = 39] = "MatteRed";
        VehicleColor2[VehicleColor2["MatteDarkRed"] = 40] = "MatteDarkRed";
        VehicleColor2[VehicleColor2["MatteOrange"] = 41] = "MatteOrange";
        VehicleColor2[VehicleColor2["MatteYellow"] = 42] = "MatteYellow";
        VehicleColor2[VehicleColor2["UtilRed"] = 43] = "UtilRed";
        VehicleColor2[VehicleColor2["UtilBrightRed"] = 44] = "UtilBrightRed";
        VehicleColor2[VehicleColor2["UtilGarnetRed"] = 45] = "UtilGarnetRed";
        VehicleColor2[VehicleColor2["WornRed"] = 46] = "WornRed";
        VehicleColor2[VehicleColor2["WornGoldenRed"] = 47] = "WornGoldenRed";
        VehicleColor2[VehicleColor2["WornDarkRed"] = 48] = "WornDarkRed";
        VehicleColor2[VehicleColor2["MetallicDarkGreen"] = 49] = "MetallicDarkGreen";
        VehicleColor2[VehicleColor2["MetallicRacingGreen"] = 50] = "MetallicRacingGreen";
        VehicleColor2[VehicleColor2["MetallicSeaGreen"] = 51] = "MetallicSeaGreen";
        VehicleColor2[VehicleColor2["MetallicOliveGreen"] = 52] = "MetallicOliveGreen";
        VehicleColor2[VehicleColor2["MetallicGreen"] = 53] = "MetallicGreen";
        VehicleColor2[VehicleColor2["MetallicGasolineBlueGreen"] = 54] = "MetallicGasolineBlueGreen";
        VehicleColor2[VehicleColor2["MatteLimeGreen"] = 55] = "MatteLimeGreen";
        VehicleColor2[VehicleColor2["UtilDarkGreen"] = 56] = "UtilDarkGreen";
        VehicleColor2[VehicleColor2["UtilGreen"] = 57] = "UtilGreen";
        VehicleColor2[VehicleColor2["WornDarkGreen"] = 58] = "WornDarkGreen";
        VehicleColor2[VehicleColor2["WornGreen"] = 59] = "WornGreen";
        VehicleColor2[VehicleColor2["WornSeaWash"] = 60] = "WornSeaWash";
        VehicleColor2[VehicleColor2["MetallicMidnightBlue"] = 61] = "MetallicMidnightBlue";
        VehicleColor2[VehicleColor2["MetallicDarkBlue"] = 62] = "MetallicDarkBlue";
        VehicleColor2[VehicleColor2["MetallicSaxonyBlue"] = 63] = "MetallicSaxonyBlue";
        VehicleColor2[VehicleColor2["MetallicBlue"] = 64] = "MetallicBlue";
        VehicleColor2[VehicleColor2["MetallicMarinerBlue"] = 65] = "MetallicMarinerBlue";
        VehicleColor2[VehicleColor2["MetallicHarborBlue"] = 66] = "MetallicHarborBlue";
        VehicleColor2[VehicleColor2["MetallicDiamondBlue"] = 67] = "MetallicDiamondBlue";
        VehicleColor2[VehicleColor2["MetallicSurfBlue"] = 68] = "MetallicSurfBlue";
        VehicleColor2[VehicleColor2["MetallicNauticalBlue"] = 69] = "MetallicNauticalBlue";
        VehicleColor2[VehicleColor2["MetallicBrightBlue"] = 70] = "MetallicBrightBlue";
        VehicleColor2[VehicleColor2["MetallicPurpleBlue"] = 71] = "MetallicPurpleBlue";
        VehicleColor2[VehicleColor2["MetallicSpinnakerBlue"] = 72] = "MetallicSpinnakerBlue";
        VehicleColor2[VehicleColor2["MetallicUltraBlue"] = 73] = "MetallicUltraBlue";
        VehicleColor2[VehicleColor2["UtilDarkBlue"] = 75] = "UtilDarkBlue";
        VehicleColor2[VehicleColor2["UtilMidnightBlue"] = 76] = "UtilMidnightBlue";
        VehicleColor2[VehicleColor2["UtilBlue"] = 77] = "UtilBlue";
        VehicleColor2[VehicleColor2["UtilSeaFoamBlue"] = 78] = "UtilSeaFoamBlue";
        VehicleColor2[VehicleColor2["UtilLightningBlue"] = 79] = "UtilLightningBlue";
        VehicleColor2[VehicleColor2["UtilMauiBluePoly"] = 80] = "UtilMauiBluePoly";
        VehicleColor2[VehicleColor2["UtilBrightBlue"] = 81] = "UtilBrightBlue";
        VehicleColor2[VehicleColor2["MatteDarkBlue"] = 82] = "MatteDarkBlue";
        VehicleColor2[VehicleColor2["MatteBlue"] = 83] = "MatteBlue";
        VehicleColor2[VehicleColor2["MatteMidnightBlue"] = 84] = "MatteMidnightBlue";
        VehicleColor2[VehicleColor2["WornDarkBlue"] = 85] = "WornDarkBlue";
        VehicleColor2[VehicleColor2["WornBlue"] = 86] = "WornBlue";
        VehicleColor2[VehicleColor2["WornLightBlue"] = 87] = "WornLightBlue";
        VehicleColor2[VehicleColor2["MetallicTaxiYellow"] = 88] = "MetallicTaxiYellow";
        VehicleColor2[VehicleColor2["MetallicRaceYellow"] = 89] = "MetallicRaceYellow";
        VehicleColor2[VehicleColor2["MetallicBronze"] = 90] = "MetallicBronze";
        VehicleColor2[VehicleColor2["MetallicYellowBird"] = 91] = "MetallicYellowBird";
        VehicleColor2[VehicleColor2["MetallicLime"] = 92] = "MetallicLime";
        VehicleColor2[VehicleColor2["MetallicChampagne"] = 93] = "MetallicChampagne";
        VehicleColor2[VehicleColor2["MetallicPuebloBeige"] = 94] = "MetallicPuebloBeige";
        VehicleColor2[VehicleColor2["MetallicDarkIvory"] = 95] = "MetallicDarkIvory";
        VehicleColor2[VehicleColor2["MetallicChocoBrown"] = 96] = "MetallicChocoBrown";
        VehicleColor2[VehicleColor2["MetallicGoldenBrown"] = 97] = "MetallicGoldenBrown";
        VehicleColor2[VehicleColor2["MetallicLightBrown"] = 98] = "MetallicLightBrown";
        VehicleColor2[VehicleColor2["MetallicStrawBeige"] = 99] = "MetallicStrawBeige";
        VehicleColor2[VehicleColor2["MetallicMossBrown"] = 100] = "MetallicMossBrown";
        VehicleColor2[VehicleColor2["MetallicBistonBrown"] = 101] = "MetallicBistonBrown";
        VehicleColor2[VehicleColor2["MetallicBeechwood"] = 102] = "MetallicBeechwood";
        VehicleColor2[VehicleColor2["MetallicDarkBeechwood"] = 103] = "MetallicDarkBeechwood";
        VehicleColor2[VehicleColor2["MetallicChocoOrange"] = 104] = "MetallicChocoOrange";
        VehicleColor2[VehicleColor2["MetallicBeachSand"] = 105] = "MetallicBeachSand";
        VehicleColor2[VehicleColor2["MetallicSunBleechedSand"] = 106] = "MetallicSunBleechedSand";
        VehicleColor2[VehicleColor2["MetallicCream"] = 107] = "MetallicCream";
        VehicleColor2[VehicleColor2["UtilBrown"] = 108] = "UtilBrown";
        VehicleColor2[VehicleColor2["UtilMediumBrown"] = 109] = "UtilMediumBrown";
        VehicleColor2[VehicleColor2["UtilLightBrown"] = 110] = "UtilLightBrown";
        VehicleColor2[VehicleColor2["MetallicWhite"] = 111] = "MetallicWhite";
        VehicleColor2[VehicleColor2["MetallicFrostWhite"] = 112] = "MetallicFrostWhite";
        VehicleColor2[VehicleColor2["WornHoneyBeige"] = 113] = "WornHoneyBeige";
        VehicleColor2[VehicleColor2["WornBrown"] = 114] = "WornBrown";
        VehicleColor2[VehicleColor2["WornDarkBrown"] = 115] = "WornDarkBrown";
        VehicleColor2[VehicleColor2["WornStrawBeige"] = 116] = "WornStrawBeige";
        VehicleColor2[VehicleColor2["BrushedSteel"] = 117] = "BrushedSteel";
        VehicleColor2[VehicleColor2["BrushedBlackSteel"] = 118] = "BrushedBlackSteel";
        VehicleColor2[VehicleColor2["BrushedAluminium"] = 119] = "BrushedAluminium";
        VehicleColor2[VehicleColor2["Chrome"] = 120] = "Chrome";
        VehicleColor2[VehicleColor2["WornOffWhite"] = 121] = "WornOffWhite";
        VehicleColor2[VehicleColor2["UtilOffWhite"] = 122] = "UtilOffWhite";
        VehicleColor2[VehicleColor2["WornOrange"] = 123] = "WornOrange";
        VehicleColor2[VehicleColor2["WornLightOrange"] = 124] = "WornLightOrange";
        VehicleColor2[VehicleColor2["MetallicSecuricorGreen"] = 125] = "MetallicSecuricorGreen";
        VehicleColor2[VehicleColor2["WornTaxiYellow"] = 126] = "WornTaxiYellow";
        VehicleColor2[VehicleColor2["PoliceCarBlue"] = 127] = "PoliceCarBlue";
        VehicleColor2[VehicleColor2["MatteGreen"] = 128] = "MatteGreen";
        VehicleColor2[VehicleColor2["MatteBrown"] = 129] = "MatteBrown";
        VehicleColor2[VehicleColor2["MatteWhite"] = 131] = "MatteWhite";
        VehicleColor2[VehicleColor2["WornWhite"] = 132] = "WornWhite";
        VehicleColor2[VehicleColor2["WornOliveArmyGreen"] = 133] = "WornOliveArmyGreen";
        VehicleColor2[VehicleColor2["PureWhite"] = 134] = "PureWhite";
        VehicleColor2[VehicleColor2["HotPink"] = 135] = "HotPink";
        VehicleColor2[VehicleColor2["Salmonpink"] = 136] = "Salmonpink";
        VehicleColor2[VehicleColor2["MetallicVermillionPink"] = 137] = "MetallicVermillionPink";
        VehicleColor2[VehicleColor2["Orange"] = 138] = "Orange";
        VehicleColor2[VehicleColor2["Green"] = 139] = "Green";
        VehicleColor2[VehicleColor2["Blue"] = 140] = "Blue";
        VehicleColor2[VehicleColor2["MettalicBlackBlue"] = 141] = "MettalicBlackBlue";
        VehicleColor2[VehicleColor2["MetallicBlackPurple"] = 142] = "MetallicBlackPurple";
        VehicleColor2[VehicleColor2["MetallicBlackRed"] = 143] = "MetallicBlackRed";
        VehicleColor2[VehicleColor2["HunterGreen"] = 144] = "HunterGreen";
        VehicleColor2[VehicleColor2["MetallicPurple"] = 145] = "MetallicPurple";
        VehicleColor2[VehicleColor2["MetaillicVDarkBlue"] = 146] = "MetaillicVDarkBlue";
        VehicleColor2[VehicleColor2["ModshopBlack1"] = 147] = "ModshopBlack1";
        VehicleColor2[VehicleColor2["MattePurple"] = 148] = "MattePurple";
        VehicleColor2[VehicleColor2["MatteDarkPurple"] = 149] = "MatteDarkPurple";
        VehicleColor2[VehicleColor2["MetallicLavaRed"] = 150] = "MetallicLavaRed";
        VehicleColor2[VehicleColor2["MatteForestGreen"] = 151] = "MatteForestGreen";
        VehicleColor2[VehicleColor2["MatteOliveDrab"] = 152] = "MatteOliveDrab";
        VehicleColor2[VehicleColor2["MatteDesertBrown"] = 153] = "MatteDesertBrown";
        VehicleColor2[VehicleColor2["MatteDesertTan"] = 154] = "MatteDesertTan";
        VehicleColor2[VehicleColor2["MatteFoliageGreen"] = 155] = "MatteFoliageGreen";
        VehicleColor2[VehicleColor2["DefaultAlloyColor"] = 156] = "DefaultAlloyColor";
        VehicleColor2[VehicleColor2["EpsilonBlue"] = 157] = "EpsilonBlue";
        VehicleColor2[VehicleColor2["PureGold"] = 158] = "PureGold";
        VehicleColor2[VehicleColor2["BrushedGold"] = 159] = "BrushedGold";
      })(VehicleColor || (VehicleColor = {}));
      (function(VehicleLandingGearState2) {
        VehicleLandingGearState2[VehicleLandingGearState2["Deployed"] = 0] = "Deployed";
        VehicleLandingGearState2[VehicleLandingGearState2["Closing"] = 1] = "Closing";
        VehicleLandingGearState2[VehicleLandingGearState2["Opening"] = 2] = "Opening";
        VehicleLandingGearState2[VehicleLandingGearState2["Retracted"] = 3] = "Retracted";
      })(VehicleLandingGearState || (VehicleLandingGearState = {}));
      (function(VehicleLockStatus2) {
        VehicleLockStatus2[VehicleLockStatus2["None"] = 0] = "None";
        VehicleLockStatus2[VehicleLockStatus2["Unlocked"] = 1] = "Unlocked";
        VehicleLockStatus2[VehicleLockStatus2["Locked"] = 2] = "Locked";
        VehicleLockStatus2[VehicleLockStatus2["LockedForPlayer"] = 3] = "LockedForPlayer";
        VehicleLockStatus2[VehicleLockStatus2["StickPlayerInside"] = 4] = "StickPlayerInside";
        VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
        VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
        VehicleLockStatus2[VehicleLockStatus2["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
      })(VehicleLockStatus || (VehicleLockStatus = {}));
      (function(VehicleNeonLight2) {
        VehicleNeonLight2[VehicleNeonLight2["Left"] = 0] = "Left";
        VehicleNeonLight2[VehicleNeonLight2["Right"] = 1] = "Right";
        VehicleNeonLight2[VehicleNeonLight2["Front"] = 2] = "Front";
        VehicleNeonLight2[VehicleNeonLight2["Back"] = 3] = "Back";
      })(VehicleNeonLight || (VehicleNeonLight = {}));
      (function(VehicleRoofState2) {
        VehicleRoofState2[VehicleRoofState2["Closed"] = 0] = "Closed";
        VehicleRoofState2[VehicleRoofState2["Opening"] = 1] = "Opening";
        VehicleRoofState2[VehicleRoofState2["Opened"] = 2] = "Opened";
        VehicleRoofState2[VehicleRoofState2["Closing"] = 3] = "Closing";
      })(VehicleRoofState || (VehicleRoofState = {}));
      (function(VehicleSeat2) {
        VehicleSeat2[VehicleSeat2["None"] = -3] = "None";
        VehicleSeat2[VehicleSeat2["Any"] = -2] = "Any";
        VehicleSeat2[VehicleSeat2["Driver"] = -1] = "Driver";
        VehicleSeat2[VehicleSeat2["Passenger"] = 0] = "Passenger";
        VehicleSeat2[VehicleSeat2["LeftFront"] = -1] = "LeftFront";
        VehicleSeat2[VehicleSeat2["RightFront"] = 0] = "RightFront";
        VehicleSeat2[VehicleSeat2["LeftRear"] = 1] = "LeftRear";
        VehicleSeat2[VehicleSeat2["RightRear"] = 2] = "RightRear";
        VehicleSeat2[VehicleSeat2["ExtraSeat1"] = 3] = "ExtraSeat1";
        VehicleSeat2[VehicleSeat2["ExtraSeat2"] = 4] = "ExtraSeat2";
        VehicleSeat2[VehicleSeat2["ExtraSeat3"] = 5] = "ExtraSeat3";
        VehicleSeat2[VehicleSeat2["ExtraSeat4"] = 6] = "ExtraSeat4";
        VehicleSeat2[VehicleSeat2["ExtraSeat5"] = 7] = "ExtraSeat5";
        VehicleSeat2[VehicleSeat2["ExtraSeat6"] = 8] = "ExtraSeat6";
        VehicleSeat2[VehicleSeat2["ExtraSeat7"] = 9] = "ExtraSeat7";
        VehicleSeat2[VehicleSeat2["ExtraSeat8"] = 10] = "ExtraSeat8";
        VehicleSeat2[VehicleSeat2["ExtraSeat9"] = 11] = "ExtraSeat9";
        VehicleSeat2[VehicleSeat2["ExtraSeat10"] = 12] = "ExtraSeat10";
        VehicleSeat2[VehicleSeat2["ExtraSeat11"] = 13] = "ExtraSeat11";
        VehicleSeat2[VehicleSeat2["ExtraSeat12"] = 14] = "ExtraSeat12";
      })(VehicleSeat || (VehicleSeat = {}));
      (function(VehicleWindowTint2) {
        VehicleWindowTint2[VehicleWindowTint2["None"] = 0] = "None";
        VehicleWindowTint2[VehicleWindowTint2["PureBlack"] = 1] = "PureBlack";
        VehicleWindowTint2[VehicleWindowTint2["DarkSmoke"] = 2] = "DarkSmoke";
        VehicleWindowTint2[VehicleWindowTint2["LightSmoke"] = 3] = "LightSmoke";
        VehicleWindowTint2[VehicleWindowTint2["Stock"] = 4] = "Stock";
        VehicleWindowTint2[VehicleWindowTint2["Limo"] = 5] = "Limo";
        VehicleWindowTint2[VehicleWindowTint2["Green"] = 6] = "Green";
      })(VehicleWindowTint || (VehicleWindowTint = {}));
      (function(VehicleWindowIndex2) {
        VehicleWindowIndex2[VehicleWindowIndex2["FrontRightWindow"] = 1] = "FrontRightWindow";
        VehicleWindowIndex2[VehicleWindowIndex2["FrontLeftWindow"] = 0] = "FrontLeftWindow";
        VehicleWindowIndex2[VehicleWindowIndex2["BackRightWindow"] = 3] = "BackRightWindow";
        VehicleWindowIndex2[VehicleWindowIndex2["BackLeftWindow"] = 2] = "BackLeftWindow";
        VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow1"] = 4] = "ExtraWindow1";
        VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow2"] = 5] = "ExtraWindow2";
        VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow3"] = 6] = "ExtraWindow3";
        VehicleWindowIndex2[VehicleWindowIndex2["ExtraWindow4"] = 7] = "ExtraWindow4";
      })(VehicleWindowIndex || (VehicleWindowIndex = {}));
      (function(VehicleModType2) {
        VehicleModType2[VehicleModType2["Spoilers"] = 0] = "Spoilers";
        VehicleModType2[VehicleModType2["FrontBumper"] = 1] = "FrontBumper";
        VehicleModType2[VehicleModType2["RearBumper"] = 2] = "RearBumper";
        VehicleModType2[VehicleModType2["SideSkirt"] = 3] = "SideSkirt";
        VehicleModType2[VehicleModType2["Exhaust"] = 4] = "Exhaust";
        VehicleModType2[VehicleModType2["Frame"] = 5] = "Frame";
        VehicleModType2[VehicleModType2["Grille"] = 6] = "Grille";
        VehicleModType2[VehicleModType2["Hood"] = 7] = "Hood";
        VehicleModType2[VehicleModType2["Fender"] = 8] = "Fender";
        VehicleModType2[VehicleModType2["RightFender"] = 9] = "RightFender";
        VehicleModType2[VehicleModType2["Roof"] = 10] = "Roof";
        VehicleModType2[VehicleModType2["Engine"] = 11] = "Engine";
        VehicleModType2[VehicleModType2["Brakes"] = 12] = "Brakes";
        VehicleModType2[VehicleModType2["Transmission"] = 13] = "Transmission";
        VehicleModType2[VehicleModType2["Horns"] = 14] = "Horns";
        VehicleModType2[VehicleModType2["Suspension"] = 15] = "Suspension";
        VehicleModType2[VehicleModType2["Armor"] = 16] = "Armor";
        VehicleModType2[VehicleModType2["FrontWheel"] = 23] = "FrontWheel";
        VehicleModType2[VehicleModType2["RearWheel"] = 24] = "RearWheel";
        VehicleModType2[VehicleModType2["PlateHolder"] = 25] = "PlateHolder";
        VehicleModType2[VehicleModType2["VanityPlates"] = 26] = "VanityPlates";
        VehicleModType2[VehicleModType2["TrimDesign"] = 27] = "TrimDesign";
        VehicleModType2[VehicleModType2["Ornaments"] = 28] = "Ornaments";
        VehicleModType2[VehicleModType2["Dashboard"] = 29] = "Dashboard";
        VehicleModType2[VehicleModType2["DialDesign"] = 30] = "DialDesign";
        VehicleModType2[VehicleModType2["DoorSpeakers"] = 31] = "DoorSpeakers";
        VehicleModType2[VehicleModType2["Seats"] = 32] = "Seats";
        VehicleModType2[VehicleModType2["SteeringWheels"] = 33] = "SteeringWheels";
        VehicleModType2[VehicleModType2["ColumnShifterLevers"] = 34] = "ColumnShifterLevers";
        VehicleModType2[VehicleModType2["Plaques"] = 35] = "Plaques";
        VehicleModType2[VehicleModType2["Speakers"] = 36] = "Speakers";
        VehicleModType2[VehicleModType2["Trunk"] = 37] = "Trunk";
        VehicleModType2[VehicleModType2["Hydraulics"] = 38] = "Hydraulics";
        VehicleModType2[VehicleModType2["EngineBlock"] = 39] = "EngineBlock";
        VehicleModType2[VehicleModType2["AirFilter"] = 40] = "AirFilter";
        VehicleModType2[VehicleModType2["Struts"] = 41] = "Struts";
        VehicleModType2[VehicleModType2["ArchCover"] = 42] = "ArchCover";
        VehicleModType2[VehicleModType2["Aerials"] = 43] = "Aerials";
        VehicleModType2[VehicleModType2["Trim"] = 44] = "Trim";
        VehicleModType2[VehicleModType2["Tank"] = 45] = "Tank";
        VehicleModType2[VehicleModType2["Windows"] = 46] = "Windows";
        VehicleModType2[VehicleModType2["Livery"] = 48] = "Livery";
      })(VehicleModType || (VehicleModType = {}));
      (function(VehicleToggleModType2) {
        VehicleToggleModType2[VehicleToggleModType2["Turbo"] = 18] = "Turbo";
        VehicleToggleModType2[VehicleToggleModType2["TireSmoke"] = 20] = "TireSmoke";
        VehicleToggleModType2[VehicleToggleModType2["XenonHeadlights"] = 22] = "XenonHeadlights";
      })(VehicleToggleModType || (VehicleToggleModType = {}));
      (function(VehiclePaintType2) {
        VehiclePaintType2[VehiclePaintType2["Normal"] = 0] = "Normal";
        VehiclePaintType2[VehiclePaintType2["Metallic"] = 1] = "Metallic";
        VehiclePaintType2[VehiclePaintType2["Pearl"] = 2] = "Pearl";
        VehiclePaintType2[VehiclePaintType2["Matte"] = 3] = "Matte";
        VehiclePaintType2[VehiclePaintType2["Metal"] = 4] = "Metal";
        VehiclePaintType2[VehiclePaintType2["Chrome"] = 5] = "Chrome";
      })(VehiclePaintType || (VehiclePaintType = {}));
      (function(VehicleDoorIndex2) {
        VehicleDoorIndex2[VehicleDoorIndex2["FrontRightDoor"] = 1] = "FrontRightDoor";
        VehicleDoorIndex2[VehicleDoorIndex2["FrontLeftDoor"] = 0] = "FrontLeftDoor";
        VehicleDoorIndex2[VehicleDoorIndex2["BackRightDoor"] = 3] = "BackRightDoor";
        VehicleDoorIndex2[VehicleDoorIndex2["BackLeftDoor"] = 2] = "BackLeftDoor";
        VehicleDoorIndex2[VehicleDoorIndex2["Hood"] = 4] = "Hood";
        VehicleDoorIndex2[VehicleDoorIndex2["Trunk"] = 5] = "Trunk";
      })(VehicleDoorIndex || (VehicleDoorIndex = {}));
      (function(VehicleWheelType2) {
        VehicleWheelType2[VehicleWheelType2["Sport"] = 0] = "Sport";
        VehicleWheelType2[VehicleWheelType2["Muscle"] = 1] = "Muscle";
        VehicleWheelType2[VehicleWheelType2["Lowrider"] = 2] = "Lowrider";
        VehicleWheelType2[VehicleWheelType2["SUV"] = 3] = "SUV";
        VehicleWheelType2[VehicleWheelType2["Offroad"] = 4] = "Offroad";
        VehicleWheelType2[VehicleWheelType2["Tuner"] = 5] = "Tuner";
        VehicleWheelType2[VehicleWheelType2["BikeWheels"] = 6] = "BikeWheels";
        VehicleWheelType2[VehicleWheelType2["HighEnd"] = 7] = "HighEnd";
        VehicleWheelType2[VehicleWheelType2["BennysOriginals"] = 8] = "BennysOriginals";
        VehicleWheelType2[VehicleWheelType2["BennysBespoke"] = 9] = "BennysBespoke";
      })(VehicleWheelType || (VehicleWheelType = {}));
      (function(VehicleWheelIndex2) {
        VehicleWheelIndex2[VehicleWheelIndex2["FrontLeftWheel"] = 0] = "FrontLeftWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["FrontRightWheel"] = 1] = "FrontRightWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["MidLeftWheel"] = 2] = "MidLeftWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["MidRightWheel"] = 3] = "MidRightWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["RearLeftWheel"] = 4] = "RearLeftWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["RearRightWheel"] = 5] = "RearRightWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["TrailerMidLeftWheel"] = 45] = "TrailerMidLeftWheel";
        VehicleWheelIndex2[VehicleWheelIndex2["TrailerMidRightWheel"] = 47] = "TrailerMidRightWheel";
      })(VehicleWheelIndex || (VehicleWheelIndex = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Weather.js
  var Weather;
  var init_Weather = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/Weather.js"() {
      (function(Weather2) {
        Weather2[Weather2["Unknown"] = -1] = "Unknown";
        Weather2[Weather2["ExtraSunny"] = 0] = "ExtraSunny";
        Weather2[Weather2["Clear"] = 1] = "Clear";
        Weather2[Weather2["Clouds"] = 2] = "Clouds";
        Weather2[Weather2["Smog"] = 3] = "Smog";
        Weather2[Weather2["Foggy"] = 4] = "Foggy";
        Weather2[Weather2["Overcast"] = 5] = "Overcast";
        Weather2[Weather2["Raining"] = 6] = "Raining";
        Weather2[Weather2["ThunderStorm"] = 7] = "ThunderStorm";
        Weather2[Weather2["Clearing"] = 8] = "Clearing";
        Weather2[Weather2["Neutral"] = 9] = "Neutral";
        Weather2[Weather2["Snowing"] = 10] = "Snowing";
        Weather2[Weather2["Blizzard"] = 11] = "Blizzard";
        Weather2[Weather2["Snowlight"] = 12] = "Snowlight";
        Weather2[Weather2["Christmas"] = 13] = "Christmas";
        Weather2[Weather2["Halloween"] = 14] = "Halloween";
      })(Weather || (Weather = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/ZoneID.js
  var ZoneID;
  var init_ZoneID = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/ZoneID.js"() {
      (function(ZoneID2) {
        ZoneID2[ZoneID2["AIRP"] = 0] = "AIRP";
        ZoneID2[ZoneID2["ALAMO"] = 1] = "ALAMO";
        ZoneID2[ZoneID2["ALTA"] = 2] = "ALTA";
        ZoneID2[ZoneID2["ARMYB"] = 3] = "ARMYB";
        ZoneID2[ZoneID2["BANHAMC"] = 4] = "BANHAMC";
        ZoneID2[ZoneID2["BANNING"] = 5] = "BANNING";
        ZoneID2[ZoneID2["BEACH"] = 6] = "BEACH";
        ZoneID2[ZoneID2["BHAMCA"] = 7] = "BHAMCA";
        ZoneID2[ZoneID2["BRADP"] = 8] = "BRADP";
        ZoneID2[ZoneID2["BRADT"] = 9] = "BRADT";
        ZoneID2[ZoneID2["BURTON"] = 10] = "BURTON";
        ZoneID2[ZoneID2["CALAFB"] = 11] = "CALAFB";
        ZoneID2[ZoneID2["CANNY"] = 12] = "CANNY";
        ZoneID2[ZoneID2["CCREAK"] = 13] = "CCREAK";
        ZoneID2[ZoneID2["CHAMH"] = 14] = "CHAMH";
        ZoneID2[ZoneID2["CHIL"] = 15] = "CHIL";
        ZoneID2[ZoneID2["CHU"] = 16] = "CHU";
        ZoneID2[ZoneID2["CMSW"] = 17] = "CMSW";
        ZoneID2[ZoneID2["CYPRE"] = 18] = "CYPRE";
        ZoneID2[ZoneID2["DAVIS"] = 19] = "DAVIS";
        ZoneID2[ZoneID2["DELBE"] = 20] = "DELBE";
        ZoneID2[ZoneID2["DELPE"] = 21] = "DELPE";
        ZoneID2[ZoneID2["DELSOL"] = 22] = "DELSOL";
        ZoneID2[ZoneID2["DESRT"] = 23] = "DESRT";
        ZoneID2[ZoneID2["DOWNT"] = 24] = "DOWNT";
        ZoneID2[ZoneID2["DTVINE"] = 25] = "DTVINE";
        ZoneID2[ZoneID2["EAST_V"] = 26] = "EAST_V";
        ZoneID2[ZoneID2["EBURO"] = 27] = "EBURO";
        ZoneID2[ZoneID2["ELGORL"] = 28] = "ELGORL";
        ZoneID2[ZoneID2["ELYSIAN"] = 29] = "ELYSIAN";
        ZoneID2[ZoneID2["GALFISH"] = 30] = "GALFISH";
        ZoneID2[ZoneID2["golf"] = 31] = "golf";
        ZoneID2[ZoneID2["GRAPES"] = 32] = "GRAPES";
        ZoneID2[ZoneID2["GREATC"] = 33] = "GREATC";
        ZoneID2[ZoneID2["HARMO"] = 34] = "HARMO";
        ZoneID2[ZoneID2["HAWICK"] = 35] = "HAWICK";
        ZoneID2[ZoneID2["HORS"] = 36] = "HORS";
        ZoneID2[ZoneID2["HUMLAB"] = 37] = "HUMLAB";
        ZoneID2[ZoneID2["JAIL"] = 38] = "JAIL";
        ZoneID2[ZoneID2["KOREAT"] = 39] = "KOREAT";
        ZoneID2[ZoneID2["LACT"] = 40] = "LACT";
        ZoneID2[ZoneID2["LAGO"] = 41] = "LAGO";
        ZoneID2[ZoneID2["LDAM"] = 42] = "LDAM";
        ZoneID2[ZoneID2["LEGSQU"] = 43] = "LEGSQU";
        ZoneID2[ZoneID2["LMESA"] = 44] = "LMESA";
        ZoneID2[ZoneID2["LOSPUER"] = 45] = "LOSPUER";
        ZoneID2[ZoneID2["MIRR"] = 46] = "MIRR";
        ZoneID2[ZoneID2["MORN"] = 47] = "MORN";
        ZoneID2[ZoneID2["MOVIE"] = 48] = "MOVIE";
        ZoneID2[ZoneID2["MTCHIL"] = 49] = "MTCHIL";
        ZoneID2[ZoneID2["MTGORDO"] = 50] = "MTGORDO";
        ZoneID2[ZoneID2["MTJOSE"] = 51] = "MTJOSE";
        ZoneID2[ZoneID2["MURRI"] = 52] = "MURRI";
        ZoneID2[ZoneID2["NCHU"] = 53] = "NCHU";
        ZoneID2[ZoneID2["NOOSE"] = 54] = "NOOSE";
        ZoneID2[ZoneID2["OCEANA"] = 55] = "OCEANA";
        ZoneID2[ZoneID2["PALCOV"] = 56] = "PALCOV";
        ZoneID2[ZoneID2["PALETO"] = 57] = "PALETO";
        ZoneID2[ZoneID2["PALFOR"] = 58] = "PALFOR";
        ZoneID2[ZoneID2["PALHIGH"] = 59] = "PALHIGH";
        ZoneID2[ZoneID2["PALMPOW"] = 60] = "PALMPOW";
        ZoneID2[ZoneID2["PBLUFF"] = 61] = "PBLUFF";
        ZoneID2[ZoneID2["PBOX"] = 62] = "PBOX";
        ZoneID2[ZoneID2["PROCOB"] = 63] = "PROCOB";
        ZoneID2[ZoneID2["RANCHO"] = 64] = "RANCHO";
        ZoneID2[ZoneID2["RGLEN"] = 65] = "RGLEN";
        ZoneID2[ZoneID2["RICHM"] = 66] = "RICHM";
        ZoneID2[ZoneID2["ROCKF"] = 67] = "ROCKF";
        ZoneID2[ZoneID2["RTRAK"] = 68] = "RTRAK";
        ZoneID2[ZoneID2["SanAnd"] = 69] = "SanAnd";
        ZoneID2[ZoneID2["SANCHIA"] = 70] = "SANCHIA";
        ZoneID2[ZoneID2["SANDY"] = 71] = "SANDY";
        ZoneID2[ZoneID2["SKID"] = 72] = "SKID";
        ZoneID2[ZoneID2["SLAB"] = 73] = "SLAB";
        ZoneID2[ZoneID2["STAD"] = 74] = "STAD";
        ZoneID2[ZoneID2["STRAW"] = 75] = "STRAW";
        ZoneID2[ZoneID2["TATAMO"] = 76] = "TATAMO";
        ZoneID2[ZoneID2["TERMINA"] = 77] = "TERMINA";
        ZoneID2[ZoneID2["TEXTI"] = 78] = "TEXTI";
        ZoneID2[ZoneID2["TONGVAH"] = 79] = "TONGVAH";
        ZoneID2[ZoneID2["TONGVAV"] = 80] = "TONGVAV";
        ZoneID2[ZoneID2["VCANA"] = 81] = "VCANA";
        ZoneID2[ZoneID2["VESP"] = 82] = "VESP";
        ZoneID2[ZoneID2["VINE"] = 83] = "VINE";
        ZoneID2[ZoneID2["WINDF"] = 84] = "WINDF";
        ZoneID2[ZoneID2["WVINE"] = 85] = "WVINE";
        ZoneID2[ZoneID2["ZANCUDO"] = 86] = "ZANCUDO";
        ZoneID2[ZoneID2["ZP_ORT"] = 87] = "ZP_ORT";
        ZoneID2[ZoneID2["ZQ_UAR"] = 88] = "ZQ_UAR";
      })(ZoneID || (ZoneID = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/index.js
  var init_enums = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/enums/index.js"() {
      init_Alignment();
      init_AnimationFlags();
      init_AudioFlag();
      init_BadgeStyle();
      init_Blip();
      init_Bone();
      init_CameraShake();
      init_CheckboxStyle();
      init_Checkpoint();
      init_CloudHat();
      init_Control();
      init_CursorSprite();
      init_Driving();
      init_ExplosionType();
      init_FiringPattern();
      init_Font();
      init_ForceType();
      init_Gender();
      init_HelmetType();
      init_HudColor();
      init_HudComponent();
      init_InputMode();
      init_IntersectOptions();
      init_InvertAxis();
      init_Language();
      init_LeaveVehicleFlags();
      init_LoadingSpinnerType();
      init_MarkerType();
      init_MenuAlignment();
      init_NotificationType();
      init_Parachute();
      init_RadioStation();
      init_RagdollType();
      init_Relationship();
      init_RopeType();
      init_ScreenEffect();
      init_SpeechModifier();
      init_Vehicle();
      init_Weather();
      init_ZoneID();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Vector3.js
  var Vector3;
  var init_Vector3 = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Vector3.js"() {
      Vector3 = class {
        constructor(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        static create(v1) {
          if (typeof v1 === "number") {
            return new Vector3(v1, v1, v1);
          }
          return new Vector3(v1.x, v1.y, v1.z);
        }
        static fromArray(primitive) {
          return new Vector3(primitive[0], primitive[1], primitive[2]);
        }
        static fromArrays(primitives) {
          return primitives.map((prim) => new Vector3(prim[0], prim[1], prim[2]));
        }
        static clone(v1) {
          return Vector3.create(v1);
        }
        static add(v1, v2) {
          if (typeof v2 === "number") {
            return new Vector3(v1.x + v2, v1.y + v2, v1.z + v2);
          }
          return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
        }
        static subtract(v1, v2) {
          return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
        }
        static multiply(v1, v2) {
          if (typeof v2 === "number") {
            return new Vector3(v1.x * v2, v1.y * v2, v1.z * v2);
          }
          return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
        }
        static divide(v1, v2) {
          if (typeof v2 === "number") {
            return new Vector3(v1.x / v2, v1.y / v2, v1.z / v2);
          }
          return new Vector3(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
        }
        static dotProduct(v1, v2) {
          return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
        }
        static crossProduct(v1, v2) {
          const x = v1.y * v2.z - v1.z * v2.y;
          const y = v1.z * v2.x - v1.z * v2.z;
          const z = v1.x * v2.y - v1.z * v2.x;
          return new Vector3(x, y, z);
        }
        static normalize(v) {
          return Vector3.divide(v, v.Length);
        }
        clone() {
          return new Vector3(this.x, this.y, this.z);
        }
        distanceSquared(v) {
          const w = this.subtract(v);
          return Vector3.dotProduct(w, w);
        }
        distance(v) {
          return Math.sqrt(this.distanceSquared(v));
        }
        get normalize() {
          return Vector3.normalize(this);
        }
        crossProduct(v) {
          return Vector3.crossProduct(this, v);
        }
        dotProduct(v) {
          return Vector3.dotProduct(this, v);
        }
        add(v) {
          return Vector3.add(this, v);
        }
        subtract(v) {
          return Vector3.subtract(this, v);
        }
        multiply(v) {
          return Vector3.multiply(this, v);
        }
        divide(v) {
          return Vector3.divide(this, v);
        }
        toArray() {
          return [this.x, this.y, this.z];
        }
        replace(v) {
          this.x = v.x;
          this.y = v.y;
          this.z = v.z;
        }
        get Length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Maths.js
  var Maths;
  var init_Maths = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Maths.js"() {
      Maths = class {
        static clamp(num, min, max) {
          return num <= min ? min : num >= max ? max : num;
        }
        static getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/String.js
  var String2;
  var init_String = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/String.js"() {
      init_lib();
      init_Maths();
      String2 = class {
        static stringToArray(input) {
          let stringsNeeded = 1;
          if (input.length > 99) {
            stringsNeeded = Math.ceil(input.length / 99);
          }
          const outputString = new Array(stringsNeeded);
          for (let i = 0; i < stringsNeeded; i++) {
            outputString[i] = input.substring(i * 99, i * 99 + Maths.clamp(input.substring(i * 99).length, 0, 99));
          }
          return outputString;
        }
        static measureStringWidthNoConvert(input, font = Font.ChaletLondon, scale = 0) {
          SetTextEntryForWidth("STRING");
          Text.addLongString(input);
          SetTextFont(font);
          SetTextScale(1, scale);
          return GetTextScreenWidth(false);
        }
        static measureString(str, font, scale, screenWidth = Screen.ScaledWidth) {
          return this.measureStringWidthNoConvert(str, font, scale) * screenWidth;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/LiteEvent.js
  var LiteEvent;
  var init_LiteEvent = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/LiteEvent.js"() {
      LiteEvent = class {
        constructor() {
          this.handlers = [];
        }
        on(handler) {
          this.handlers.push(handler);
        }
        off(handler) {
          this.handlers = this.handlers.filter((h) => h !== handler);
        }
        emit(...args) {
          this.handlers.slice(0).forEach((h) => {
            h(...args);
          });
        }
        expose() {
          return this;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/PointF.js
  var init_PointF = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/PointF.js"() {
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Crypto.js
  var Crypto;
  var init_Crypto = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Crypto.js"() {
      Crypto = class {
        static uuidv4() {
          let uuid = "";
          for (let ii = 0; ii < 32; ii += 1) {
            switch (ii) {
              case 8:
              case 20:
                uuid += "-";
                uuid += (Math.random() * 16 | 0).toString(16);
                break;
              case 12:
                uuid += "-";
                uuid += "4";
                break;
              case 16:
                uuid += "-";
                uuid += (Math.random() * 4 | 8).toString(16);
                break;
              default:
                uuid += (Math.random() * 16 | 0).toString(16);
            }
          }
          return uuid;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Point.js
  var Point;
  var init_Point = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Point.js"() {
      Point = class {
        constructor(x = 0, y = 0) {
          this.X = x;
          this.Y = y;
        }
        static parse(arg) {
          let point = new Point();
          if (arg) {
            if (typeof arg === "object") {
              if (Array.isArray(arg)) {
                if (arg.length === 2) {
                  point = new Point(arg[0], arg[1]);
                }
              } else if (arg.X && arg.Y) {
                point = new Point(arg.X, arg.Y);
              }
            } else {
              if (arg.indexOf(",") !== -1) {
                const arr = arg.split(",");
                point = new Point(parseFloat(arr[0]), parseFloat(arr[1]));
              }
            }
          }
          return point;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Color.js
  var Color;
  var init_Color = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Color.js"() {
      Color = class {
        constructor(a = 255, r, g, b) {
          this.a = a;
          this.r = r;
          this.g = g;
          this.b = b;
        }
        static fromArgb(a, r, g, b) {
          return new Color(a, r, g, b);
        }
        static fromRgb(r, g, b) {
          return new Color(255, r, g, b);
        }
        static fromArray(primitive) {
          return new Color(255, primitive[0], primitive[1], primitive[2]);
        }
      };
      Color.empty = new Color(0, 0, 0, 0);
      Color.transparent = new Color(0, 0, 0, 0);
      Color.black = new Color(255, 0, 0, 0);
      Color.white = new Color(255, 255, 255, 255);
      Color.whiteSmoke = new Color(255, 245, 245, 245);
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Size.js
  var Size;
  var init_Size = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Size.js"() {
      Size = class {
        constructor(w = 0, h = 0) {
          this.width = w;
          this.height = h;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Quaternion.js
  var Quaternion;
  var init_Quaternion = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/Quaternion.js"() {
      init_Vector3();
      Quaternion = class {
        constructor(valueXOrVector, yOrW, z, w) {
          if (valueXOrVector instanceof Vector3) {
            this.x = valueXOrVector.x;
            this.y = valueXOrVector.y;
            this.z = valueXOrVector.z;
            this.w = yOrW !== null && yOrW !== void 0 ? yOrW : 0;
          } else if (yOrW === void 0) {
            this.x = valueXOrVector;
            this.y = valueXOrVector;
            this.z = valueXOrVector;
            this.w = valueXOrVector;
          } else {
            this.x = valueXOrVector;
            this.y = yOrW;
            this.z = z !== null && z !== void 0 ? z : 0;
            this.w = w !== null && w !== void 0 ? w : 0;
          }
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/enumValues.js
  function* enumValues(enumObj) {
    let isStringEnum = true;
    for (const property in enumObj) {
      if (typeof enumObj[property] === "number") {
        isStringEnum = false;
        break;
      }
    }
    for (const property in enumObj) {
      if (isStringEnum || typeof enumObj[property] === "number") {
        yield enumObj[property];
      }
    }
  }
  var init_enumValues = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/enumValues.js"() {
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/getStringFromUInt8Array.js
  var getStringFromUInt8Array;
  var init_getStringFromUInt8Array = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/getStringFromUInt8Array.js"() {
      getStringFromUInt8Array = (buffer, start, end) => String.fromCharCode(...buffer.slice(start, end)).replace(/\u0000/g, "");
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/getUInt32FromUint8Array.js
  var getUInt32FromUint8Array;
  var init_getUInt32FromUint8Array = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/getUInt32FromUint8Array.js"() {
      getUInt32FromUint8Array = (buffer, start, end) => new Uint32Array(buffer.slice(start, end).buffer)[0];
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/index.js
  var Wait;
  var init_utils = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/utils/index.js"() {
      init_Vector3();
      init_String();
      init_LiteEvent();
      init_PointF();
      init_Crypto();
      init_Point();
      init_Color();
      init_Maths();
      init_Size();
      init_Quaternion();
      init_enumValues();
      init_getStringFromUInt8Array();
      init_getUInt32FromUint8Array();
      Wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Blip.js
  var Blip;
  var init_Blip2 = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Blip.js"() {
      init_utils();
      init_models();
      Blip = class {
        constructor(handle) {
          this.handle = handle;
        }
        get Handle() {
          return this.handle;
        }
        get Position() {
          const coords = GetBlipInfoIdCoord(this.handle);
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        set Position(location) {
          SetBlipCoords(this.handle, location.x, location.y, location.z);
        }
        set Rotation(rotation) {
          SetBlipRotation(this.handle, rotation);
        }
        set Scale(scale) {
          SetBlipScale(this.handle, scale);
        }
        get Type() {
          return GetBlipInfoIdType(this.handle);
        }
        get Alpha() {
          return GetBlipAlpha(this.handle);
        }
        set Alpha(alpha) {
          SetBlipAlpha(this.handle, alpha);
        }
        set Priority(priority) {
          SetBlipPriority(this.handle, priority);
        }
        set NumberLabel(number) {
          ShowNumberOnBlip(this.handle, number);
        }
        get Color() {
          return GetBlipColour(this.handle);
        }
        set Color(color) {
          SetBlipColour(this.handle, color);
        }
        get Sprite() {
          return GetBlipSprite(this.handle);
        }
        set Sprite(sprite) {
          SetBlipSprite(this.handle, sprite);
        }
        set Display(display) {
          SetBlipDisplay(this.handle, display);
        }
        set Name(name) {
          BeginTextCommandSetBlipName("STRING");
          AddTextComponentSubstringPlayerName(name);
          EndTextCommandSetBlipName(this.handle);
        }
        setNameToPlayerName(player) {
          SetBlipNameToPlayerName(this.handle, player.Handle);
        }
        get Entity() {
          return Entity.fromHandle(GetBlipInfoIdEntityIndex(this.handle));
        }
        set ShowHeadingIndicator(show) {
          ShowHeadingIndicatorOnBlip(this.handle, show);
        }
        set ShowRoute(show) {
          SetBlipRoute(this.handle, show);
        }
        set IsFriendly(friendly) {
          SetBlipAsFriendly(this.handle, friendly);
        }
        set IsFriend(friend) {
          SetBlipFriend(this.handle, friend);
        }
        set IsCrew(crew) {
          SetBlipCrew(this.handle, crew);
        }
        get IsFlashing() {
          return IsBlipFlashing(this.handle);
        }
        set IsFlashing(flashing) {
          SetBlipFlashes(this.handle, flashing);
        }
        get IsOnMinimap() {
          return IsBlipOnMinimap(this.handle);
        }
        get IsShortRange() {
          return IsBlipShortRange(this.handle);
        }
        set IsShortRange(shortRange) {
          SetBlipAsShortRange(this.handle, shortRange);
        }
        removeNumberLabel() {
          HideNumberOnBlip(this.handle);
        }
        delete() {
          if (this.exists()) {
            RemoveBlip(this.handle);
          }
        }
        exists() {
          return DoesBlipExist(this.handle);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/MaterialHash.js
  var MaterialHash;
  var init_MaterialHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/MaterialHash.js"() {
      (function(MaterialHash2) {
        MaterialHash2[MaterialHash2["None"] = 0] = "None";
        MaterialHash2[MaterialHash2["Unk"] = 2519482235] = "Unk";
        MaterialHash2[MaterialHash2["Concrete"] = 1187676648] = "Concrete";
        MaterialHash2[MaterialHash2["ConcretePothole"] = 359120722] = "ConcretePothole";
        MaterialHash2[MaterialHash2["ConcreteDusty"] = 3210327185] = "ConcreteDusty";
        MaterialHash2[MaterialHash2["Tarmac"] = 282940568] = "Tarmac";
        MaterialHash2[MaterialHash2["TarmacPainted"] = 2993614768] = "TarmacPainted";
        MaterialHash2[MaterialHash2["TarmacPothole"] = 1886546517] = "TarmacPothole";
        MaterialHash2[MaterialHash2["RumbleStrip"] = 4044799021] = "RumbleStrip";
        MaterialHash2[MaterialHash2["BreezeBlock"] = 3340854742] = "BreezeBlock";
        MaterialHash2[MaterialHash2["Rock"] = 3454750755] = "Rock";
        MaterialHash2[MaterialHash2["RockMossy"] = 4170197704] = "RockMossy";
        MaterialHash2[MaterialHash2["Stone"] = 765206029] = "Stone";
        MaterialHash2[MaterialHash2["Cobblestone"] = 576169331] = "Cobblestone";
        MaterialHash2[MaterialHash2["Brick"] = 1639053622] = "Brick";
        MaterialHash2[MaterialHash2["Marble"] = 1945073303] = "Marble";
        MaterialHash2[MaterialHash2["PavingSlab"] = 1907048430] = "PavingSlab";
        MaterialHash2[MaterialHash2["SandstoneSolid"] = 592446772] = "SandstoneSolid";
        MaterialHash2[MaterialHash2["SandstoneBrittle"] = 1913209870] = "SandstoneBrittle";
        MaterialHash2[MaterialHash2["SandLoose"] = 2699818980] = "SandLoose";
        MaterialHash2[MaterialHash2["SandCompact"] = 510490462] = "SandCompact";
        MaterialHash2[MaterialHash2["SandWet"] = 909950165] = "SandWet";
        MaterialHash2[MaterialHash2["SandTrack"] = 2387446527] = "SandTrack";
        MaterialHash2[MaterialHash2["SandUnderwater"] = 3158909604] = "SandUnderwater";
        MaterialHash2[MaterialHash2["SandDryDeep"] = 509508168] = "SandDryDeep";
        MaterialHash2[MaterialHash2["SandWetDeep"] = 1288448767] = "SandWetDeep";
        MaterialHash2[MaterialHash2["Ice"] = 3508906581] = "Ice";
        MaterialHash2[MaterialHash2["IceTarmac"] = 2363942873] = "IceTarmac";
        MaterialHash2[MaterialHash2["SnowLoose"] = 2357397706] = "SnowLoose";
        MaterialHash2[MaterialHash2["SnowCompact"] = 3416406407] = "SnowCompact";
        MaterialHash2[MaterialHash2["SnowDeep"] = 1619704960] = "SnowDeep";
        MaterialHash2[MaterialHash2["SnowTarmac"] = 1550304810] = "SnowTarmac";
        MaterialHash2[MaterialHash2["GravelSmall"] = 951832588] = "GravelSmall";
        MaterialHash2[MaterialHash2["GravelLarge"] = 2128369009] = "GravelLarge";
        MaterialHash2[MaterialHash2["GravelDeep"] = 3938260814] = "GravelDeep";
        MaterialHash2[MaterialHash2["GravelTrainTrack"] = 1925605558] = "GravelTrainTrack";
        MaterialHash2[MaterialHash2["DirtTrack"] = 2409420175] = "DirtTrack";
        MaterialHash2[MaterialHash2["MudHard"] = 2352068586] = "MudHard";
        MaterialHash2[MaterialHash2["MudPothole"] = 312396330] = "MudPothole";
        MaterialHash2[MaterialHash2["MudSoft"] = 1635937914] = "MudSoft";
        MaterialHash2[MaterialHash2["MudUnderwater"] = 4021477129] = "MudUnderwater";
        MaterialHash2[MaterialHash2["MudDeep"] = 1109728704] = "MudDeep";
        MaterialHash2[MaterialHash2["Marsh"] = 223086562] = "Marsh";
        MaterialHash2[MaterialHash2["MarshDeep"] = 1584636462] = "MarshDeep";
        MaterialHash2[MaterialHash2["Soil"] = 3594309083] = "Soil";
        MaterialHash2[MaterialHash2["ClayHard"] = 1144315879] = "ClayHard";
        MaterialHash2[MaterialHash2["ClaySoft"] = 560985072] = "ClaySoft";
        MaterialHash2[MaterialHash2["GrassLong"] = 3833216577] = "GrassLong";
        MaterialHash2[MaterialHash2["Grass"] = 1333033863] = "Grass";
        MaterialHash2[MaterialHash2["GrassShort"] = 3008270349] = "GrassShort";
        MaterialHash2[MaterialHash2["Hay"] = 2461440131] = "Hay";
        MaterialHash2[MaterialHash2["Bushes"] = 581794674] = "Bushes";
        MaterialHash2[MaterialHash2["Twigs"] = 3381615457] = "Twigs";
        MaterialHash2[MaterialHash2["Leaves"] = 2253637325] = "Leaves";
        MaterialHash2[MaterialHash2["Woodchips"] = 3985845843] = "Woodchips";
        MaterialHash2[MaterialHash2["TreeBark"] = 2379541433] = "TreeBark";
        MaterialHash2[MaterialHash2["MetalSolidSmall"] = 2847687191] = "MetalSolidSmall";
        MaterialHash2[MaterialHash2["MetalSolidMedium"] = 3929336056] = "MetalSolidMedium";
        MaterialHash2[MaterialHash2["MetalSolidLarge"] = 752131025] = "MetalSolidLarge";
        MaterialHash2[MaterialHash2["MetalHollowSmall"] = 15972667] = "MetalHollowSmall";
        MaterialHash2[MaterialHash2["MetalHollowMedium"] = 1849540536] = "MetalHollowMedium";
        MaterialHash2[MaterialHash2["MetalHollowLarge"] = 3711753465] = "MetalHollowLarge";
        MaterialHash2[MaterialHash2["MetalChainlinkSmall"] = 762193613] = "MetalChainlinkSmall";
        MaterialHash2[MaterialHash2["MetalChainlinkLarge"] = 125958708] = "MetalChainlinkLarge";
        MaterialHash2[MaterialHash2["MetalCorrugatedIron"] = 834144982] = "MetalCorrugatedIron";
        MaterialHash2[MaterialHash2["MetalGrille"] = 3868849285] = "MetalGrille";
        MaterialHash2[MaterialHash2["MetalRailing"] = 2100727187] = "MetalRailing";
        MaterialHash2[MaterialHash2["MetalDuct"] = 1761524221] = "MetalDuct";
        MaterialHash2[MaterialHash2["MetalGarageDoor"] = 4063706601] = "MetalGarageDoor";
        MaterialHash2[MaterialHash2["MetalManhole"] = 3539969597] = "MetalManhole";
        MaterialHash2[MaterialHash2["WoodSolidSmall"] = 3895095068] = "WoodSolidSmall";
        MaterialHash2[MaterialHash2["WoodSolidMedium"] = 555004797] = "WoodSolidMedium";
        MaterialHash2[MaterialHash2["WoodSolidLarge"] = 815762359] = "WoodSolidLarge";
        MaterialHash2[MaterialHash2["WoodSolidPolished"] = 126470059] = "WoodSolidPolished";
        MaterialHash2[MaterialHash2["WoodFloorDusty"] = 3545514974] = "WoodFloorDusty";
        MaterialHash2[MaterialHash2["WoodHollowSmall"] = 1993976879] = "WoodHollowSmall";
        MaterialHash2[MaterialHash2["WoodHollowMedium"] = 3929491133] = "WoodHollowMedium";
        MaterialHash2[MaterialHash2["WoodHollowLarge"] = 3369548007] = "WoodHollowLarge";
        MaterialHash2[MaterialHash2["WoodChipboard"] = 1176309403] = "WoodChipboard";
        MaterialHash2[MaterialHash2["WoodOldCreaky"] = 722686013] = "WoodOldCreaky";
        MaterialHash2[MaterialHash2["WoodHighDensity"] = 2552123904] = "WoodHighDensity";
        MaterialHash2[MaterialHash2["WoodLattice"] = 2011204130] = "WoodLattice";
        MaterialHash2[MaterialHash2["Ceramic"] = 3108646581] = "Ceramic";
        MaterialHash2[MaterialHash2["RoofTile"] = 1755188853] = "RoofTile";
        MaterialHash2[MaterialHash2["RoofFelt"] = 2877802565] = "RoofFelt";
        MaterialHash2[MaterialHash2["Fibreglass"] = 1354180827] = "Fibreglass";
        MaterialHash2[MaterialHash2["Tarpaulin"] = 3652308448] = "Tarpaulin";
        MaterialHash2[MaterialHash2["Plastic"] = 2221655295] = "Plastic";
        MaterialHash2[MaterialHash2["PlasticHollow"] = 627123e3] = "PlasticHollow";
        MaterialHash2[MaterialHash2["PlasticHighDensity"] = 2668971817] = "PlasticHighDensity";
        MaterialHash2[MaterialHash2["PlasticClear"] = 2435246283] = "PlasticClear";
        MaterialHash2[MaterialHash2["PlasticHollowClear"] = 772722531] = "PlasticHollowClear";
        MaterialHash2[MaterialHash2["PlasticHighDensityClear"] = 2956494126] = "PlasticHighDensityClear";
        MaterialHash2[MaterialHash2["FibreglassHollow"] = 3528912198] = "FibreglassHollow";
        MaterialHash2[MaterialHash2["Rubber"] = 4149231379] = "Rubber";
        MaterialHash2[MaterialHash2["RubberHollow"] = 3511032624] = "RubberHollow";
        MaterialHash2[MaterialHash2["Linoleum"] = 289630530] = "Linoleum";
        MaterialHash2[MaterialHash2["Laminate"] = 1845676458] = "Laminate";
        MaterialHash2[MaterialHash2["CarpetSolid"] = 669292054] = "CarpetSolid";
        MaterialHash2[MaterialHash2["CarpetSolidDusty"] = 158576196] = "CarpetSolidDusty";
        MaterialHash2[MaterialHash2["CarpetFloorboard"] = 2898482353] = "CarpetFloorboard";
        MaterialHash2[MaterialHash2["Cloth"] = 122789469] = "Cloth";
        MaterialHash2[MaterialHash2["PlasterSolid"] = 3720844863] = "PlasterSolid";
        MaterialHash2[MaterialHash2["PlasterBrittle"] = 4043078398] = "PlasterBrittle";
        MaterialHash2[MaterialHash2["CardboardSheet"] = 236511221] = "CardboardSheet";
        MaterialHash2[MaterialHash2["CardboardBox"] = 2885912856] = "CardboardBox";
        MaterialHash2[MaterialHash2["Paper"] = 474149820] = "Paper";
        MaterialHash2[MaterialHash2["Foam"] = 808719444] = "Foam";
        MaterialHash2[MaterialHash2["FeatherPillow"] = 1341866303] = "FeatherPillow";
        MaterialHash2[MaterialHash2["Polystyrene"] = 2538039965] = "Polystyrene";
        MaterialHash2[MaterialHash2["Leather"] = 3724496396] = "Leather";
        MaterialHash2[MaterialHash2["Tvscreen"] = 1429989756] = "Tvscreen";
        MaterialHash2[MaterialHash2["SlattedBlinds"] = 673696729] = "SlattedBlinds";
        MaterialHash2[MaterialHash2["GlassShootThrough"] = 937503243] = "GlassShootThrough";
        MaterialHash2[MaterialHash2["GlassBulletproof"] = 244521486] = "GlassBulletproof";
        MaterialHash2[MaterialHash2["GlassOpaque"] = 1500272081] = "GlassOpaque";
        MaterialHash2[MaterialHash2["Perspex"] = 2675173228] = "Perspex";
        MaterialHash2[MaterialHash2["CarMetal"] = 4201905313] = "CarMetal";
        MaterialHash2[MaterialHash2["CarPlastic"] = 2137197282] = "CarPlastic";
        MaterialHash2[MaterialHash2["CarSofttop"] = 3315319434] = "CarSofttop";
        MaterialHash2[MaterialHash2["CarSofttopClear"] = 2130571536] = "CarSofttopClear";
        MaterialHash2[MaterialHash2["CarGlassWeak"] = 1247281098] = "CarGlassWeak";
        MaterialHash2[MaterialHash2["CarGlassMedium"] = 602884284] = "CarGlassMedium";
        MaterialHash2[MaterialHash2["CarGlassStrong"] = 1070994698] = "CarGlassStrong";
        MaterialHash2[MaterialHash2["CarGlassBulletproof"] = 2573051366] = "CarGlassBulletproof";
        MaterialHash2[MaterialHash2["CarGlassOpaque"] = 513061559] = "CarGlassOpaque";
        MaterialHash2[MaterialHash2["Water"] = 435688960] = "Water";
        MaterialHash2[MaterialHash2["Blood"] = 5236042] = "Blood";
        MaterialHash2[MaterialHash2["Oil"] = 3660485991] = "Oil";
        MaterialHash2[MaterialHash2["Petrol"] = 2660782956] = "Petrol";
        MaterialHash2[MaterialHash2["FreshMeat"] = 868733839] = "FreshMeat";
        MaterialHash2[MaterialHash2["DriedMeat"] = 2849806867] = "DriedMeat";
        MaterialHash2[MaterialHash2["EmissiveGlass"] = 1501078253] = "EmissiveGlass";
        MaterialHash2[MaterialHash2["EmissivePlastic"] = 1059629996] = "EmissivePlastic";
        MaterialHash2[MaterialHash2["VfxMetalElectrified"] = 3985833031] = "VfxMetalElectrified";
        MaterialHash2[MaterialHash2["VfxMetalWaterTower"] = 611561919] = "VfxMetalWaterTower";
        MaterialHash2[MaterialHash2["VfxMetalSteam"] = 3603690002] = "VfxMetalSteam";
        MaterialHash2[MaterialHash2["VfxMetalFlame"] = 332778253] = "VfxMetalFlame";
        MaterialHash2[MaterialHash2["PhysNoFriction"] = 1666473731] = "PhysNoFriction";
        MaterialHash2[MaterialHash2["PhysGolfBall"] = 2601153738] = "PhysGolfBall";
        MaterialHash2[MaterialHash2["PhysTennisBall"] = 4038262533] = "PhysTennisBall";
        MaterialHash2[MaterialHash2["PhysCaster"] = 4059664613] = "PhysCaster";
        MaterialHash2[MaterialHash2["PhysCasterRusty"] = 2016463089] = "PhysCasterRusty";
        MaterialHash2[MaterialHash2["PhysCarVoid"] = 1345867677] = "PhysCarVoid";
        MaterialHash2[MaterialHash2["PhysPedCapsule"] = 4003336261] = "PhysPedCapsule";
        MaterialHash2[MaterialHash2["PhysElectricFence"] = 3124923563] = "PhysElectricFence";
        MaterialHash2[MaterialHash2["PhysElectricMetal"] = 2281206151] = "PhysElectricMetal";
        MaterialHash2[MaterialHash2["PhysBarbedWire"] = 2751643840] = "PhysBarbedWire";
        MaterialHash2[MaterialHash2["PhysPooltableSurface"] = 605776921] = "PhysPooltableSurface";
        MaterialHash2[MaterialHash2["PhysPooltableCushion"] = 972939963] = "PhysPooltableCushion";
        MaterialHash2[MaterialHash2["PhysPooltableBall"] = 3546625734] = "PhysPooltableBall";
        MaterialHash2[MaterialHash2["Buttocks"] = 483400232] = "Buttocks";
        MaterialHash2[MaterialHash2["ThighLeft"] = 3834431425] = "ThighLeft";
        MaterialHash2[MaterialHash2["ShinLeft"] = 652772852] = "ShinLeft";
        MaterialHash2[MaterialHash2["FootLeft"] = 1926285543] = "FootLeft";
        MaterialHash2[MaterialHash2["ThighRight"] = 4057986041] = "ThighRight";
        MaterialHash2[MaterialHash2["ShinRight"] = 3848931141] = "ShinRight";
        MaterialHash2[MaterialHash2["FootRight"] = 2925830612] = "FootRight";
        MaterialHash2[MaterialHash2["Spine0"] = 2372680412] = "Spine0";
        MaterialHash2[MaterialHash2["Spine1"] = 3154854427] = "Spine1";
        MaterialHash2[MaterialHash2["Spine2"] = 1457572381] = "Spine2";
        MaterialHash2[MaterialHash2["Spine3"] = 32752644] = "Spine3";
        MaterialHash2[MaterialHash2["ClavicleLeft"] = 2825350831] = "ClavicleLeft";
        MaterialHash2[MaterialHash2["UpperArmLeft"] = 3784624938] = "UpperArmLeft";
        MaterialHash2[MaterialHash2["LowerArmLeft"] = 1045062756] = "LowerArmLeft";
        MaterialHash2[MaterialHash2["HandLeft"] = 113101985] = "HandLeft";
        MaterialHash2[MaterialHash2["ClavicleRight"] = 2737678298] = "ClavicleRight";
        MaterialHash2[MaterialHash2["UpperArmRight"] = 1501153539] = "UpperArmRight";
        MaterialHash2[MaterialHash2["LowerArmRight"] = 1777921590] = "LowerArmRight";
        MaterialHash2[MaterialHash2["HandRight"] = 2000961972] = "HandRight";
        MaterialHash2[MaterialHash2["Neck"] = 1718294164] = "Neck";
        MaterialHash2[MaterialHash2["Head"] = 3559574543] = "Head";
        MaterialHash2[MaterialHash2["AnimalDefault"] = 286224918] = "AnimalDefault";
        MaterialHash2[MaterialHash2["CarEngine"] = 2378027672] = "CarEngine";
        MaterialHash2[MaterialHash2["Puddle"] = 999829011] = "Puddle";
        MaterialHash2[MaterialHash2["ConcretePavement"] = 2015599386] = "ConcretePavement";
        MaterialHash2[MaterialHash2["BrickPavement"] = 3147605720] = "BrickPavement";
        MaterialHash2[MaterialHash2["PhysDynamicCoverBound"] = 2247498441] = "PhysDynamicCoverBound";
        MaterialHash2[MaterialHash2["VfxWoodBeerBarrel"] = 998201806] = "VfxWoodBeerBarrel";
        MaterialHash2[MaterialHash2["WoodHighFriction"] = 2154880249] = "WoodHighFriction";
        MaterialHash2[MaterialHash2["RockNoinst"] = 127813971] = "RockNoinst";
        MaterialHash2[MaterialHash2["BushesNoinst"] = 1441114862] = "BushesNoinst";
        MaterialHash2[MaterialHash2["MetalSolidRoadSurface"] = 3565854962] = "MetalSolidRoadSurface";
        MaterialHash2[MaterialHash2["StuntRampSurface"] = 2206792300] = "StuntRampSurface";
        MaterialHash2[MaterialHash2["Temp01"] = 746881105] = "Temp01";
        MaterialHash2[MaterialHash2["Temp02"] = 2316997185] = "Temp02";
        MaterialHash2[MaterialHash2["Temp03"] = 1911121241] = "Temp03";
        MaterialHash2[MaterialHash2["Temp04"] = 1923995104] = "Temp04";
        MaterialHash2[MaterialHash2["Temp05"] = 2901304848] = "Temp05";
        MaterialHash2[MaterialHash2["Temp06"] = 1061250033] = "Temp06";
        MaterialHash2[MaterialHash2["Temp07"] = 2529443614] = "Temp07";
        MaterialHash2[MaterialHash2["Temp08"] = 1343679702] = "Temp08";
        MaterialHash2[MaterialHash2["Temp09"] = 1026054937] = "Temp09";
        MaterialHash2[MaterialHash2["Temp10"] = 63305994] = "Temp10";
        MaterialHash2[MaterialHash2["Temp11"] = 47470226] = "Temp11";
        MaterialHash2[MaterialHash2["Temp12"] = 702596674] = "Temp12";
        MaterialHash2[MaterialHash2["Temp13"] = 2657481383] = "Temp13";
        MaterialHash2[MaterialHash2["Temp14"] = 3649011722] = "Temp14";
        MaterialHash2[MaterialHash2["Temp15"] = 2710969365] = "Temp15";
        MaterialHash2[MaterialHash2["Temp16"] = 2782232023] = "Temp16";
        MaterialHash2[MaterialHash2["Temp17"] = 1011960114] = "Temp17";
        MaterialHash2[MaterialHash2["Temp18"] = 1354993138] = "Temp18";
        MaterialHash2[MaterialHash2["Temp19"] = 3493162850] = "Temp19";
        MaterialHash2[MaterialHash2["Temp20"] = 2242086891] = "Temp20";
        MaterialHash2[MaterialHash2["Temp21"] = 3257211236] = "Temp21";
        MaterialHash2[MaterialHash2["Temp22"] = 3674578943] = "Temp22";
        MaterialHash2[MaterialHash2["Temp23"] = 465002639] = "Temp23";
        MaterialHash2[MaterialHash2["Temp24"] = 1963820161] = "Temp24";
        MaterialHash2[MaterialHash2["Temp25"] = 1952288305] = "Temp25";
        MaterialHash2[MaterialHash2["Temp26"] = 3178714198] = "Temp26";
        MaterialHash2[MaterialHash2["Temp27"] = 889255498] = "Temp27";
        MaterialHash2[MaterialHash2["Temp28"] = 3115293198] = "Temp28";
        MaterialHash2[MaterialHash2["Temp29"] = 1078418101] = "Temp29";
        MaterialHash2[MaterialHash2["Temp30"] = 13626292] = "Temp30";
      })(MaterialHash || (MaterialHash = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/PedHash.js
  var PedHash;
  var init_PedHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/PedHash.js"() {
      (function(PedHash2) {
        PedHash2[PedHash2["Michael"] = 225514697] = "Michael";
        PedHash2[PedHash2["Franklin"] = 2602752943] = "Franklin";
        PedHash2[PedHash2["Trevor"] = 2608926626] = "Trevor";
        PedHash2[PedHash2["Abigail"] = 1074457665] = "Abigail";
        PedHash2[PedHash2["Agent"] = 3614493108] = "Agent";
        PedHash2[PedHash2["Agent14"] = 4227433577] = "Agent14";
        PedHash2[PedHash2["AmandaTownley"] = 1830688247] = "AmandaTownley";
        PedHash2[PedHash2["Andreas"] = 1206185632] = "Andreas";
        PedHash2[PedHash2["Ashley"] = 2129936603] = "Ashley";
        PedHash2[PedHash2["AviSchwartzman"] = 939183526] = "AviSchwartzman";
        PedHash2[PedHash2["Ballasog"] = 2802535058] = "Ballasog";
        PedHash2[PedHash2["Bankman"] = 2426248831] = "Bankman";
        PedHash2[PedHash2["Barry"] = 797459875] = "Barry";
        PedHash2[PedHash2["Bestmen"] = 1464257942] = "Bestmen";
        PedHash2[PedHash2["Beverly"] = 3181518428] = "Beverly";
        PedHash2[PedHash2["Brad"] = 3183167778] = "Brad";
        PedHash2[PedHash2["Bride"] = 1633872967] = "Bride";
        PedHash2[PedHash2["Car3Guy1"] = 2230970679] = "Car3Guy1";
        PedHash2[PedHash2["Car3Guy2"] = 1975732938] = "Car3Guy2";
        PedHash2[PedHash2["Casey"] = 3774489940] = "Casey";
        PedHash2[PedHash2["Chef"] = 1240128502] = "Chef";
        PedHash2[PedHash2["Chef2"] = 2240322243] = "Chef2";
        PedHash2[PedHash2["Clay"] = 1825562762] = "Clay";
        PedHash2[PedHash2["Claypain"] = 2634057640] = "Claypain";
        PedHash2[PedHash2["Cletus"] = 3865252245] = "Cletus";
        PedHash2[PedHash2["CrisFormage"] = 678319271] = "CrisFormage";
        PedHash2[PedHash2["Dale"] = 1182012905] = "Dale";
        PedHash2[PedHash2["DaveNorton"] = 365775923] = "DaveNorton";
        PedHash2[PedHash2["Denise"] = 2181772221] = "Denise";
        PedHash2[PedHash2["Devin"] = 1952555184] = "Devin";
        PedHash2[PedHash2["DoaMan"] = 1646160893] = "DoaMan";
        PedHash2[PedHash2["Dom"] = 2620240008] = "Dom";
        PedHash2[PedHash2["Dreyfuss"] = 3666413874] = "Dreyfuss";
        PedHash2[PedHash2["DrFriedlander"] = 3422293493] = "DrFriedlander";
        PedHash2[PedHash2["EdToh"] = 712602007] = "EdToh";
        PedHash2[PedHash2["Fabien"] = 3499148112] = "Fabien";
        PedHash2[PedHash2["FbiSuit01"] = 988062523] = "FbiSuit01";
        PedHash2[PedHash2["Floyd"] = 2981205682] = "Floyd";
        PedHash2[PedHash2["G"] = 2216405299] = "G";
        PedHash2[PedHash2["Groom"] = 4274948997] = "Groom";
        PedHash2[PedHash2["Hao"] = 1704428387] = "Hao";
        PedHash2[PedHash2["Hunter"] = 3457361118] = "Hunter";
        PedHash2[PedHash2["Janet"] = 225287241] = "Janet";
        PedHash2[PedHash2["JayNorris"] = 2050158196] = "JayNorris";
        PedHash2[PedHash2["Jewelass"] = 257763003] = "Jewelass";
        PedHash2[PedHash2["JimmyBoston"] = 3986688045] = "JimmyBoston";
        PedHash2[PedHash2["JimmyDisanto"] = 1459905209] = "JimmyDisanto";
        PedHash2[PedHash2["JoeMinuteman"] = 3189787803] = "JoeMinuteman";
        PedHash2[PedHash2["JohnnyKlebitz"] = 2278195374] = "JohnnyKlebitz";
        PedHash2[PedHash2["Josef"] = 3776618420] = "Josef";
        PedHash2[PedHash2["Josh"] = 2040438510] = "Josh";
        PedHash2[PedHash2["KarenDaniels"] = 3948009817] = "KarenDaniels";
        PedHash2[PedHash2["KerryMcintosh"] = 1530648845] = "KerryMcintosh";
        PedHash2[PedHash2["LamarDavis"] = 1706635382] = "LamarDavis";
        PedHash2[PedHash2["Lazlow"] = 3756278757] = "Lazlow";
        PedHash2[PedHash2["LesterCrest"] = 1302784073] = "LesterCrest";
        PedHash2[PedHash2["Lifeinvad01"] = 1401530684] = "Lifeinvad01";
        PedHash2[PedHash2["Lifeinvad02"] = 666718676] = "Lifeinvad02";
        PedHash2[PedHash2["Magenta"] = 4242313482] = "Magenta";
        PedHash2[PedHash2["Malc"] = 4055673113] = "Malc";
        PedHash2[PedHash2["Manuel"] = 4248931856] = "Manuel";
        PedHash2[PedHash2["Marnie"] = 411185872] = "Marnie";
        PedHash2[PedHash2["MaryAnn"] = 2741999622] = "MaryAnn";
        PedHash2[PedHash2["Maude"] = 1005070462] = "Maude";
        PedHash2[PedHash2["Michelle"] = 3214308084] = "Michelle";
        PedHash2[PedHash2["Milton"] = 3408943538] = "Milton";
        PedHash2[PedHash2["Molly"] = 2936266209] = "Molly";
        PedHash2[PedHash2["MrK"] = 3990661997] = "MrK";
        PedHash2[PedHash2["MrsPhillips"] = 946007720] = "MrsPhillips";
        PedHash2[PedHash2["MrsThornhill"] = 503621995] = "MrsThornhill";
        PedHash2[PedHash2["Natalia"] = 3726105915] = "Natalia";
        PedHash2[PedHash2["NervousRon"] = 3170921201] = "NervousRon";
        PedHash2[PedHash2["Nigel"] = 3367442045] = "Nigel";
        PedHash2[PedHash2["OldMan1a"] = 1906124788] = "OldMan1a";
        PedHash2[PedHash2["OldMan2"] = 4011150407] = "OldMan2";
        PedHash2[PedHash2["Omega"] = 1625728984] = "Omega";
        PedHash2[PedHash2["ONeil"] = 768005095] = "ONeil";
        PedHash2[PedHash2["Orleans"] = 1641334641] = "Orleans";
        PedHash2[PedHash2["Ortega"] = 648372919] = "Ortega";
        PedHash2[PedHash2["Paper"] = 2577072326] = "Paper";
        PedHash2[PedHash2["Patricia"] = 3312325004] = "Patricia";
        PedHash2[PedHash2["Popov"] = 645279998] = "Popov";
        PedHash2[PedHash2["Paige"] = 357551935] = "Paige";
        PedHash2[PedHash2["Priest"] = 1681385341] = "Priest";
        PedHash2[PedHash2["PrologueDriver"] = 2237544099] = "PrologueDriver";
        PedHash2[PedHash2["PrologueSec01"] = 1888624839] = "PrologueSec01";
        PedHash2[PedHash2["PrologueSec02"] = 666086773] = "PrologueSec02";
        PedHash2[PedHash2["RampGang"] = 3845001836] = "RampGang";
        PedHash2[PedHash2["RampHic"] = 1165307954] = "RampHic";
        PedHash2[PedHash2["RampHipster"] = 3740245870] = "RampHipster";
        PedHash2[PedHash2["RampMex"] = 3870061732] = "RampMex";
        PedHash2[PedHash2["Rashkovsky"] = 940326374] = "Rashkovsky";
        PedHash2[PedHash2["RoccoPelosi"] = 3585757951] = "RoccoPelosi";
        PedHash2[PedHash2["RussianDrunk"] = 1024089777] = "RussianDrunk";
        PedHash2[PedHash2["ScreenWriter"] = 4293277303] = "ScreenWriter";
        PedHash2[PedHash2["SiemonYetarian"] = 1283141381] = "SiemonYetarian";
        PedHash2[PedHash2["Solomon"] = 2260598310] = "Solomon";
        PedHash2[PedHash2["SteveHains"] = 941695432] = "SteveHains";
        PedHash2[PedHash2["Stretch"] = 915948376] = "Stretch";
        PedHash2[PedHash2["Talina"] = 3885222120] = "Talina";
        PedHash2[PedHash2["Tanisha"] = 226559113] = "Tanisha";
        PedHash2[PedHash2["TaoCheng"] = 3697041061] = "TaoCheng";
        PedHash2[PedHash2["TaosTranslator"] = 2089096292] = "TaosTranslator";
        PedHash2[PedHash2["TennisCoach"] = 2721800023] = "TennisCoach";
        PedHash2[PedHash2["Terry"] = 1728056212] = "Terry";
        PedHash2[PedHash2["TomEpsilon"] = 3447159466] = "TomEpsilon";
        PedHash2[PedHash2["Tonya"] = 3402126148] = "Tonya";
        PedHash2[PedHash2["TracyDisanto"] = 3728026165] = "TracyDisanto";
        PedHash2[PedHash2["TrafficWarden"] = 1461287021] = "TrafficWarden";
        PedHash2[PedHash2["TylerDixon"] = 1382414087] = "TylerDixon";
        PedHash2[PedHash2["VagosSpeak"] = 4194109068] = "VagosSpeak";
        PedHash2[PedHash2["Wade"] = 2459507570] = "Wade";
        PedHash2[PedHash2["WeiCheng"] = 2867128955] = "WeiCheng";
        PedHash2[PedHash2["Zimbor"] = 188012277] = "Zimbor";
        PedHash2[PedHash2["AbigailCutscene"] = 2306246977] = "AbigailCutscene";
        PedHash2[PedHash2["AgentCutscene"] = 3614493108] = "AgentCutscene";
        PedHash2[PedHash2["Agent14Cutscene"] = 1841036427] = "Agent14Cutscene";
        PedHash2[PedHash2["AmandaTownleyCutscene"] = 2515474659] = "AmandaTownleyCutscene";
        PedHash2[PedHash2["AndreasCutscene"] = 3881194279] = "AndreasCutscene";
        PedHash2[PedHash2["AnitaCutscene"] = 117698822] = "AnitaCutscene";
        PedHash2[PedHash2["AntonCutscene"] = 2781317046] = "AntonCutscene";
        PedHash2[PedHash2["AshleyCutscene"] = 650367097] = "AshleyCutscene";
        PedHash2[PedHash2["AviSchwartzmanCutscene"] = 2560490906] = "AviSchwartzmanCutscene";
        PedHash2[PedHash2["BallasogCutscene"] = 2884567044] = "BallasogCutscene";
        PedHash2[PedHash2["BankmanCutscene"] = 2539657518] = "BankmanCutscene";
        PedHash2[PedHash2["BarryCutscene"] = 1767447799] = "BarryCutscene";
        PedHash2[PedHash2["BeverlyCutscene"] = 3027157846] = "BeverlyCutscene";
        PedHash2[PedHash2["BradCutscene"] = 4024807398] = "BradCutscene";
        PedHash2[PedHash2["BradCadaverCutscene"] = 1915268960] = "BradCadaverCutscene";
        PedHash2[PedHash2["BrideCutscene"] = 2193587873] = "BrideCutscene";
        PedHash2[PedHash2["BurgerDrugCutscene"] = 2363277399] = "BurgerDrugCutscene";
        PedHash2[PedHash2["Car3Guy1Cutscene"] = 71501447] = "Car3Guy1Cutscene";
        PedHash2[PedHash2["Car3Guy2Cutscene"] = 327394568] = "Car3Guy2Cutscene";
        PedHash2[PedHash2["CarBuyerCutscene"] = 2362341647] = "CarBuyerCutscene";
        PedHash2[PedHash2["CaseyCutscene"] = 3935738944] = "CaseyCutscene";
        PedHash2[PedHash2["ChefCutscene"] = 2739391114] = "ChefCutscene";
        PedHash2[PedHash2["Chef2Cutscene"] = 2925257274] = "Chef2Cutscene";
        PedHash2[PedHash2["ChinGoonCutscene"] = 2831296918] = "ChinGoonCutscene";
        PedHash2[PedHash2["ClayCutscene"] = 3687553076] = "ClayCutscene";
        PedHash2[PedHash2["CletusCutscene"] = 3404326357] = "CletusCutscene";
        PedHash2[PedHash2["CopCutscene"] = 2595446627] = "CopCutscene";
        PedHash2[PedHash2["CrisFormageCutscene"] = 3253960934] = "CrisFormageCutscene";
        PedHash2[PedHash2["CustomerCutscene"] = 2756669323] = "CustomerCutscene";
        PedHash2[PedHash2["DaleCutscene"] = 216536661] = "DaleCutscene";
        PedHash2[PedHash2["DaveNortonCutscene"] = 2240226444] = "DaveNortonCutscene";
        PedHash2[PedHash2["DebraCutscene"] = 3973074921] = "DebraCutscene";
        PedHash2[PedHash2["DeniseCutscene"] = 1870669624] = "DeniseCutscene";
        PedHash2[PedHash2["DeniseFriendCutscene"] = 3045926185] = "DeniseFriendCutscene";
        PedHash2[PedHash2["DevinCutscene"] = 788622594] = "DevinCutscene";
        PedHash2[PedHash2["DomCutscene"] = 1198698306] = "DomCutscene";
        PedHash2[PedHash2["DreyfussCutscene"] = 1012965715] = "DreyfussCutscene";
        PedHash2[PedHash2["DrFriedlanderCutscene"] = 2745392175] = "DrFriedlanderCutscene";
        PedHash2[PedHash2["FabienCutscene"] = 1191403201] = "FabienCutscene";
        PedHash2[PedHash2["FbiSuit01Cutscene"] = 1482427218] = "FbiSuit01Cutscene";
        PedHash2[PedHash2["FloydCutscene"] = 103106535] = "FloydCutscene";
        PedHash2[PedHash2["FosRepCutscene"] = 466359675] = "FosRepCutscene";
        PedHash2[PedHash2["GCutscene"] = 2727244247] = "GCutscene";
        PedHash2[PedHash2["GroomCutscene"] = 2058033618] = "GroomCutscene";
        PedHash2[PedHash2["GroveStrDlrCutscene"] = 3898166818] = "GroveStrDlrCutscene";
        PedHash2[PedHash2["GuadalopeCutscene"] = 261428209] = "GuadalopeCutscene";
        PedHash2[PedHash2["GurkCutscene"] = 3272931111] = "GurkCutscene";
        PedHash2[PedHash2["HaoCutscene"] = 3969814300] = "HaoCutscene";
        PedHash2[PedHash2["HughCutscene"] = 1863555924] = "HughCutscene";
        PedHash2[PedHash2["HunterCutscene"] = 1531218220] = "HunterCutscene";
        PedHash2[PedHash2["ImranCutscene"] = 3812756443] = "ImranCutscene";
        PedHash2[PedHash2["JackHowitzerCutscene"] = 1153203121] = "JackHowitzerCutscene";
        PedHash2[PedHash2["JanetCutscene"] = 808778210] = "JanetCutscene";
        PedHash2[PedHash2["JanitorCutscene"] = 3254803008] = "JanitorCutscene";
        PedHash2[PedHash2["JewelassCutscene"] = 1145088004] = "JewelassCutscene";
        PedHash2[PedHash2["JimmyBostonCutscene"] = 60192701] = "JimmyBostonCutscene";
        PedHash2[PedHash2["JimmyDisantoCutscene"] = 3100414644] = "JimmyDisantoCutscene";
        PedHash2[PedHash2["JoeMinutemanCutscene"] = 4036845097] = "JoeMinutemanCutscene";
        PedHash2[PedHash2["JohnnyKlebitzCutscene"] = 4203395201] = "JohnnyKlebitzCutscene";
        PedHash2[PedHash2["JosefCutscene"] = 1167549130] = "JosefCutscene";
        PedHash2[PedHash2["JoshCutscene"] = 1158606749] = "JoshCutscene";
        PedHash2[PedHash2["KarenDanielsCutscene"] = 1269774364] = "KarenDanielsCutscene";
        PedHash2[PedHash2["LamarDavisCutscene"] = 1162230285] = "LamarDavisCutscene";
        PedHash2[PedHash2["LazlowCutscene"] = 949295643] = "LazlowCutscene";
        PedHash2[PedHash2["LesterCrestCutscene"] = 3046438339] = "LesterCrestCutscene";
        PedHash2[PedHash2["Lifeinvad01Cutscene"] = 1918178165] = "Lifeinvad01Cutscene";
        PedHash2[PedHash2["MagentaCutscene"] = 1477887514] = "MagentaCutscene";
        PedHash2[PedHash2["ManuelCutscene"] = 4222842058] = "ManuelCutscene";
        PedHash2[PedHash2["MarnieCutscene"] = 1464721716] = "MarnieCutscene";
        PedHash2[PedHash2["MartinMadrazoCutscene"] = 1129928304] = "MartinMadrazoCutscene";
        PedHash2[PedHash2["MaryannCutscene"] = 161007533] = "MaryannCutscene";
        PedHash2[PedHash2["MaudeCutscene"] = 3166991819] = "MaudeCutscene";
        PedHash2[PedHash2["MerryWeatherCutscene"] = 1631478380] = "MerryWeatherCutscene";
        PedHash2[PedHash2["MichelleCutscene"] = 1890499016] = "MichelleCutscene";
        PedHash2[PedHash2["MiltonCutscene"] = 3077190415] = "MiltonCutscene";
        PedHash2[PedHash2["MollyCutscene"] = 1167167044] = "MollyCutscene";
        PedHash2[PedHash2["MoviePremFemaleCutscene"] = 1270514905] = "MoviePremFemaleCutscene";
        PedHash2[PedHash2["MoviePremMaleCutscene"] = 2372398717] = "MoviePremMaleCutscene";
        PedHash2[PedHash2["MrKCutscene"] = 3284966005] = "MrKCutscene";
        PedHash2[PedHash2["MrsPhillipsCutscene"] = 3422397391] = "MrsPhillipsCutscene";
        PedHash2[PedHash2["MrsThornhillCutscene"] = 1334976110] = "MrsThornhillCutscene";
        PedHash2[PedHash2["NataliaCutscene"] = 1325314544] = "NataliaCutscene";
        PedHash2[PedHash2["NervousRonCutscene"] = 2023152276] = "NervousRonCutscene";
        PedHash2[PedHash2["NigelCutscene"] = 3779566603] = "NigelCutscene";
        PedHash2[PedHash2["OldMan1aCutscene"] = 518814684] = "OldMan1aCutscene";
        PedHash2[PedHash2["OldMan2Cutscene"] = 2566514544] = "OldMan2Cutscene";
        PedHash2[PedHash2["OmegaCutscene"] = 2339419141] = "OmegaCutscene";
        PedHash2[PedHash2["OrleansCutscene"] = 2905870170] = "OrleansCutscene";
        PedHash2[PedHash2["OrtegaCutscene"] = 3235579087] = "OrtegaCutscene";
        PedHash2[PedHash2["OscarCutscene"] = 4095687067] = "OscarCutscene";
        PedHash2[PedHash2["PaigeCutscene"] = 1528799427] = "PaigeCutscene";
        PedHash2[PedHash2["PaperCutscene"] = 1798879480] = "PaperCutscene";
        PedHash2[PedHash2["PopovCutscene"] = 1635617250] = "PopovCutscene";
        PedHash2[PedHash2["PatriciaCutscene"] = 3750433537] = "PatriciaCutscene";
        PedHash2[PedHash2["PornDudesCutscene"] = 793443893] = "PornDudesCutscene";
        PedHash2[PedHash2["PriestCutscene"] = 1299047806] = "PriestCutscene";
        PedHash2[PedHash2["PrologueDriverCutscene"] = 4027271643] = "PrologueDriverCutscene";
        PedHash2[PedHash2["PrologueSec01Cutscene"] = 2141384740] = "PrologueSec01Cutscene";
        PedHash2[PedHash2["PrologueSec02Cutscene"] = 512955554] = "PrologueSec02Cutscene";
        PedHash2[PedHash2["RampGangCutscene"] = 3263172030] = "RampGangCutscene";
        PedHash2[PedHash2["RampHicCutscene"] = 2240582840] = "RampHicCutscene";
        PedHash2[PedHash2["RampHipsterCutscene"] = 569740212] = "RampHipsterCutscene";
        PedHash2[PedHash2["RampMarineCutscene"] = 1634506681] = "RampMarineCutscene";
        PedHash2[PedHash2["RampMexCutscene"] = 4132362192] = "RampMexCutscene";
        PedHash2[PedHash2["RashkovskyCutscene"] = 411081129] = "RashkovskyCutscene";
        PedHash2[PedHash2["ReporterCutscene"] = 776079908] = "ReporterCutscene";
        PedHash2[PedHash2["RoccoPelosiCutscene"] = 2858686092] = "RoccoPelosiCutscene";
        PedHash2[PedHash2["RussianDrunkCutscene"] = 1179785778] = "RussianDrunkCutscene";
        PedHash2[PedHash2["ScreenWriterCutscene"] = 2346790124] = "ScreenWriterCutscene";
        PedHash2[PedHash2["SiemonYetarianCutscene"] = 3230888450] = "SiemonYetarianCutscene";
        PedHash2[PedHash2["SolomonCutscene"] = 4140949582] = "SolomonCutscene";
        PedHash2[PedHash2["SteveHainsCutscene"] = 2766184958] = "SteveHainsCutscene";
        PedHash2[PedHash2["StretchCutscene"] = 2302502917] = "StretchCutscene";
        PedHash2[PedHash2["Stripper01Cutscene"] = 2934601397] = "Stripper01Cutscene";
        PedHash2[PedHash2["Stripper02Cutscene"] = 2168724337] = "Stripper02Cutscene";
        PedHash2[PedHash2["TanishaCutscene"] = 1123963760] = "TanishaCutscene";
        PedHash2[PedHash2["TaoChengCutscene"] = 2288257085] = "TaoChengCutscene";
        PedHash2[PedHash2["TaosTranslatorCutscene"] = 1397974313] = "TaosTranslatorCutscene";
        PedHash2[PedHash2["TennisCoachCutscene"] = 1545995274] = "TennisCoachCutscene";
        PedHash2[PedHash2["TerryCutscene"] = 978452933] = "TerryCutscene";
        PedHash2[PedHash2["TomCutscene"] = 1776856003] = "TomCutscene";
        PedHash2[PedHash2["TomEpsilonCutscene"] = 2349847778] = "TomEpsilonCutscene";
        PedHash2[PedHash2["TonyaCutscene"] = 1665391897] = "TonyaCutscene";
        PedHash2[PedHash2["TracyDisantoCutscene"] = 101298480] = "TracyDisantoCutscene";
        PedHash2[PedHash2["TrafficWardenCutscene"] = 3727243251] = "TrafficWardenCutscene";
        PedHash2[PedHash2["UndercoverCopCutscene"] = 4017642090] = "UndercoverCopCutscene";
        PedHash2[PedHash2["VagosSpeakCutscene"] = 1224690857] = "VagosSpeakCutscene";
        PedHash2[PedHash2["WadeCutscene"] = 3529955798] = "WadeCutscene";
        PedHash2[PedHash2["WeiChengCutscene"] = 819699067] = "WeiChengCutscene";
        PedHash2[PedHash2["ZimborCutscene"] = 3937184496] = "ZimborCutscene";
        PedHash2[PedHash2["Boar"] = 3462393972] = "Boar";
        PedHash2[PedHash2["Cat"] = 1462895032] = "Cat";
        PedHash2[PedHash2["ChickenHawk"] = 2864127842] = "ChickenHawk";
        PedHash2[PedHash2["Chimp"] = 2825402133] = "Chimp";
        PedHash2[PedHash2["Chop"] = 351016938] = "Chop";
        PedHash2[PedHash2["Cormorant"] = 1457690978] = "Cormorant";
        PedHash2[PedHash2["Cow"] = 4244282910] = "Cow";
        PedHash2[PedHash2["Coyote"] = 1682622302] = "Coyote";
        PedHash2[PedHash2["Crow"] = 402729631] = "Crow";
        PedHash2[PedHash2["Deer"] = 3630914197] = "Deer";
        PedHash2[PedHash2["Dolphin"] = 2344268885] = "Dolphin";
        PedHash2[PedHash2["Fish"] = 802685111] = "Fish";
        PedHash2[PedHash2["Hen"] = 1794449327] = "Hen";
        PedHash2[PedHash2["HammerShark"] = 1015224100] = "HammerShark";
        PedHash2[PedHash2["Humpback"] = 1193010354] = "Humpback";
        PedHash2[PedHash2["Husky"] = 1318032802] = "Husky";
        PedHash2[PedHash2["KillerWhale"] = 2374682809] = "KillerWhale";
        PedHash2[PedHash2["MountainLion"] = 307287994] = "MountainLion";
        PedHash2[PedHash2["Pig"] = 2971380566] = "Pig";
        PedHash2[PedHash2["Pigeon"] = 111281960] = "Pigeon";
        PedHash2[PedHash2["Poodle"] = 1125994524] = "Poodle";
        PedHash2[PedHash2["Pug"] = 1832265812] = "Pug";
        PedHash2[PedHash2["Rabbit"] = 3753204865] = "Rabbit";
        PedHash2[PedHash2["Rat"] = 3283429734] = "Rat";
        PedHash2[PedHash2["Retriever"] = 882848737] = "Retriever";
        PedHash2[PedHash2["Rhesus"] = 3268439891] = "Rhesus";
        PedHash2[PedHash2["Rottweiler"] = 2506301981] = "Rottweiler";
        PedHash2[PedHash2["Seagull"] = 3549666813] = "Seagull";
        PedHash2[PedHash2["Shepherd"] = 1126154828] = "Shepherd";
        PedHash2[PedHash2["Stingray"] = 2705875277] = "Stingray";
        PedHash2[PedHash2["TigerShark"] = 113504370] = "TigerShark";
        PedHash2[PedHash2["Westy"] = 2910340283] = "Westy";
        PedHash2[PedHash2["Abner"] = 4037813798] = "Abner";
        PedHash2[PedHash2["AlDiNapoli"] = 4042020578] = "AlDiNapoli";
        PedHash2[PedHash2["Antonb"] = 3479321132] = "Antonb";
        PedHash2[PedHash2["Armoured01"] = 3455013896] = "Armoured01";
        PedHash2[PedHash2["Babyd"] = 3658575486] = "Babyd";
        PedHash2[PedHash2["Bankman01"] = 3272005365] = "Bankman01";
        PedHash2[PedHash2["Baygor"] = 1380197501] = "Baygor";
        PedHash2[PedHash2["Benny"] = 3300333010] = "Benny";
        PedHash2[PedHash2["BikeHire01"] = 1984382277] = "BikeHire01";
        PedHash2[PedHash2["BikerChic"] = 4198014287] = "BikerChic";
        PedHash2[PedHash2["BoatStaff01M"] = 3361671816] = "BoatStaff01M";
        PedHash2[PedHash2["BoatStaff01F"] = 848542878] = "BoatStaff01F";
        PedHash2[PedHash2["BurgerDrug"] = 2340239206] = "BurgerDrug";
        PedHash2[PedHash2["Chip"] = 610290475] = "Chip";
        PedHash2[PedHash2["Claude01"] = 3237179831] = "Claude01";
        PedHash2[PedHash2["ClubHouseBar01"] = 1914945105] = "ClubHouseBar01";
        PedHash2[PedHash2["CocaineFemale01"] = 1897303236] = "CocaineFemale01";
        PedHash2[PedHash2["CocaineMale01"] = 3455927962] = "CocaineMale01";
        PedHash2[PedHash2["ComJane"] = 3064628686] = "ComJane";
        PedHash2[PedHash2["Corpse01"] = 773063444] = "Corpse01";
        PedHash2[PedHash2["Corpse02"] = 228356856] = "Corpse02";
        PedHash2[PedHash2["CounterfeitFemale01"] = 1074385436] = "CounterfeitFemale01";
        PedHash2[PedHash2["CounterfeitMale01"] = 2625926338] = "CounterfeitMale01";
        PedHash2[PedHash2["Cyclist01"] = 755956971] = "Cyclist01";
        PedHash2[PedHash2["DeadHooker"] = 1943971979] = "DeadHooker";
        PedHash2[PedHash2["Drowned"] = 1943971979] = "Drowned";
        PedHash2[PedHash2["ExArmy01"] = 1161072059] = "ExArmy01";
        PedHash2[PedHash2["ExecutivePAMale01"] = 983887149] = "ExecutivePAMale01";
        PedHash2[PedHash2["ExecutivePAFemale01"] = 2913175640] = "ExecutivePAFemale01";
        PedHash2[PedHash2["Famdd01"] = 866411749] = "Famdd01";
        PedHash2[PedHash2["FibArchitect"] = 874722259] = "FibArchitect";
        PedHash2[PedHash2["FibMugger01"] = 2243544680] = "FibMugger01";
        PedHash2[PedHash2["FibSec01"] = 1558115333] = "FibSec01";
        PedHash2[PedHash2["FilmDirector"] = 728636342] = "FilmDirector";
        PedHash2[PedHash2["FilmNoir"] = 732742363] = "FilmNoir";
        PedHash2[PedHash2["Finguru01"] = 1189322339] = "Finguru01";
        PedHash2[PedHash2["ForgeryFemale01"] = 3691903615] = "ForgeryFemale01";
        PedHash2[PedHash2["ForgeryMale01"] = 325317957] = "ForgeryMale01";
        PedHash2[PedHash2["FreemodeFemale01"] = 2627665880] = "FreemodeFemale01";
        PedHash2[PedHash2["FreemodeMale01"] = 1885233650] = "FreemodeMale01";
        PedHash2[PedHash2["Glenstank01"] = 1169888870] = "Glenstank01";
        PedHash2[PedHash2["Griff01"] = 3293887675] = "Griff01";
        PedHash2[PedHash2["Guido01"] = 3333724719] = "Guido01";
        PedHash2[PedHash2["GunVend01"] = 3005388626] = "GunVend01";
        PedHash2[PedHash2["Hacker"] = 2579169528] = "Hacker";
        PedHash2[PedHash2["HeliStaff01"] = 431423238] = "HeliStaff01";
        PedHash2[PedHash2["Hippie01"] = 4030826507] = "Hippie01";
        PedHash2[PedHash2["Hotposh01"] = 2526768638] = "Hotposh01";
        PedHash2[PedHash2["Imporage"] = 880829941] = "Imporage";
        PedHash2[PedHash2["Jesus01"] = 3459037009] = "Jesus01";
        PedHash2[PedHash2["Jewelass01"] = 4040474158] = "Jewelass01";
        PedHash2[PedHash2["JewelSec01"] = 2899099062] = "JewelSec01";
        PedHash2[PedHash2["JewelThief"] = 3872144604] = "JewelThief";
        PedHash2[PedHash2["Justin"] = 2109968527] = "Justin";
        PedHash2[PedHash2["Mani"] = 3367706194] = "Mani";
        PedHash2[PedHash2["Markfost"] = 479578891] = "Markfost";
        PedHash2[PedHash2["Marston01"] = 943915367] = "Marston01";
        PedHash2[PedHash2["MethFemale01"] = 3778572496] = "MethFemale01";
        PedHash2[PedHash2["MethMale01"] = 1293671805] = "MethMale01";
        PedHash2[PedHash2["MilitaryBum"] = 1191548746] = "MilitaryBum";
        PedHash2[PedHash2["Miranda"] = 1095737979] = "Miranda";
        PedHash2[PedHash2["Mistress"] = 1573528872] = "Mistress";
        PedHash2[PedHash2["Misty01"] = 3509125021] = "Misty01";
        PedHash2[PedHash2["MovieStar"] = 894928436] = "MovieStar";
        PedHash2[PedHash2["MPros01"] = 1822283721] = "MPros01";
        PedHash2[PedHash2["Niko01"] = 4007317449] = "Niko01";
        PedHash2[PedHash2["Paparazzi"] = 1346941736] = "Paparazzi";
        PedHash2[PedHash2["Party01"] = 921110016] = "Party01";
        PedHash2[PedHash2["PartyTarget"] = 2180468199] = "PartyTarget";
        PedHash2[PedHash2["PestContDriver"] = 994527967] = "PestContDriver";
        PedHash2[PedHash2["PestContGunman"] = 193469166] = "PestContGunman";
        PedHash2[PedHash2["Pogo01"] = 3696858125] = "Pogo01";
        PedHash2[PedHash2["Poppymich"] = 602513566] = "Poppymich";
        PedHash2[PedHash2["Princess"] = 3538133636] = "Princess";
        PedHash2[PedHash2["Prisoner01"] = 2073775040] = "Prisoner01";
        PedHash2[PedHash2["PrologueHostage01"] = 3306347811] = "PrologueHostage01";
        PedHash2[PedHash2["PrologueMournFemale01"] = 2718472679] = "PrologueMournFemale01";
        PedHash2[PedHash2["PrologueMournMale01"] = 3465937675] = "PrologueMournMale01";
        PedHash2[PedHash2["RivalPaparazzi"] = 1624626906] = "RivalPaparazzi";
        PedHash2[PedHash2["ShopKeep01"] = 416176080] = "ShopKeep01";
        PedHash2[PedHash2["SpyActor"] = 2886641112] = "SpyActor";
        PedHash2[PedHash2["SpyActress"] = 1535236204] = "SpyActress";
        PedHash2[PedHash2["StripperLite"] = 695248020] = "StripperLite";
        PedHash2[PedHash2["Taphillbilly"] = 2585681490] = "Taphillbilly";
        PedHash2[PedHash2["Tramp01"] = 1787764635] = "Tramp01";
        PedHash2[PedHash2["VagosFun01"] = 3299219389] = "VagosFun01";
        PedHash2[PedHash2["WillyFist"] = 2423691919] = "WillyFist";
        PedHash2[PedHash2["WeedFemale01"] = 1596374223] = "WeedFemale01";
        PedHash2[PedHash2["WeedMale01"] = 2648833641] = "WeedMale01";
        PedHash2[PedHash2["Zombie01"] = 2890614022] = "Zombie01";
        PedHash2[PedHash2["Acult01AMM"] = 1413662315] = "Acult01AMM";
        PedHash2[PedHash2["Acult01AMO"] = 1430544400] = "Acult01AMO";
        PedHash2[PedHash2["Acult01AMY"] = 3043264555] = "Acult01AMY";
        PedHash2[PedHash2["Acult02AMO"] = 1268862154] = "Acult02AMO";
        PedHash2[PedHash2["Acult02AMY"] = 2162532142] = "Acult02AMY";
        PedHash2[PedHash2["AfriAmer01AMM"] = 3513928062] = "AfriAmer01AMM";
        PedHash2[PedHash2["Airhostess01SFY"] = 1567728751] = "Airhostess01SFY";
        PedHash2[PedHash2["AirworkerSMY"] = 1644266841] = "AirworkerSMY";
        PedHash2[PedHash2["Ammucity01SMY"] = 2651349821] = "Ammucity01SMY";
        PedHash2[PedHash2["AmmuCountrySMM"] = 233415434] = "AmmuCountrySMM";
        PedHash2[PedHash2["ArmBoss01GMM"] = 4058522530] = "ArmBoss01GMM";
        PedHash2[PedHash2["ArmGoon01GMM"] = 4255728232] = "ArmGoon01GMM";
        PedHash2[PedHash2["ArmGoon02GMY"] = 3310258058] = "ArmGoon02GMY";
        PedHash2[PedHash2["ArmLieut01GMM"] = 3882958867] = "ArmLieut01GMM";
        PedHash2[PedHash2["Armoured01SMM"] = 2512875213] = "Armoured01SMM";
        PedHash2[PedHash2["Armoured02SMM"] = 1669696074] = "Armoured02SMM";
        PedHash2[PedHash2["Armymech01SMY"] = 1657546978] = "Armymech01SMY";
        PedHash2[PedHash2["Autopsy01SMY"] = 2988916046] = "Autopsy01SMY";
        PedHash2[PedHash2["Autoshop01SMM"] = 68070371] = "Autoshop01SMM";
        PedHash2[PedHash2["Autoshop02SMM"] = 4033578141] = "Autoshop02SMM";
        PedHash2[PedHash2["Azteca01GMY"] = 1752208920] = "Azteca01GMY";
        PedHash2[PedHash2["BallaEast01GMY"] = 4096714883] = "BallaEast01GMY";
        PedHash2[PedHash2["BallaOrig01GMY"] = 588969535] = "BallaOrig01GMY";
        PedHash2[PedHash2["Ballas01GFY"] = 361513884] = "Ballas01GFY";
        PedHash2[PedHash2["BallaSout01GMY"] = 599294057] = "BallaSout01GMY";
        PedHash2[PedHash2["Barman01SMY"] = 3852538118] = "Barman01SMY";
        PedHash2[PedHash2["Bartender01SFY"] = 2014052797] = "Bartender01SFY";
        PedHash2[PedHash2["Baywatch01SFY"] = 1250841910] = "Baywatch01SFY";
        PedHash2[PedHash2["Baywatch01SMY"] = 189425762] = "Baywatch01SMY";
        PedHash2[PedHash2["Beach01AFM"] = 808859815] = "Beach01AFM";
        PedHash2[PedHash2["Beach01AFY"] = 3349113128] = "Beach01AFY";
        PedHash2[PedHash2["Beach01AMM"] = 1077785853] = "Beach01AMM";
        PedHash2[PedHash2["Beach01AMO"] = 2217202584] = "Beach01AMO";
        PedHash2[PedHash2["Beach01AMY"] = 3523131524] = "Beach01AMY";
        PedHash2[PedHash2["Beach02AMM"] = 2021631368] = "Beach02AMM";
        PedHash2[PedHash2["Beach02AMY"] = 600300561] = "Beach02AMY";
        PedHash2[PedHash2["Beach03AMY"] = 3886638041] = "Beach03AMY";
        PedHash2[PedHash2["Beachvesp01AMY"] = 2114544056] = "Beachvesp01AMY";
        PedHash2[PedHash2["Beachvesp02AMY"] = 3394697810] = "Beachvesp02AMY";
        PedHash2[PedHash2["Bevhills01AFM"] = 3188223741] = "Bevhills01AFM";
        PedHash2[PedHash2["Bevhills01AFY"] = 1146800212] = "Bevhills01AFY";
        PedHash2[PedHash2["Bevhills01AMM"] = 1423699487] = "Bevhills01AMM";
        PedHash2[PedHash2["Bevhills01AMY"] = 1982350912] = "Bevhills01AMY";
        PedHash2[PedHash2["Bevhills02AFM"] = 2688103263] = "Bevhills02AFM";
        PedHash2[PedHash2["Bevhills02AFY"] = 1546450936] = "Bevhills02AFY";
        PedHash2[PedHash2["Bevhills02AMM"] = 1068876755] = "Bevhills02AMM";
        PedHash2[PedHash2["Bevhills02AMY"] = 1720428295] = "Bevhills02AMY";
        PedHash2[PedHash2["Bevhills03AFY"] = 549978415] = "Bevhills03AFY";
        PedHash2[PedHash2["Bevhills04AFY"] = 920595805] = "Bevhills04AFY";
        PedHash2[PedHash2["Blackops01SMY"] = 3019107892] = "Blackops01SMY";
        PedHash2[PedHash2["Blackops02SMY"] = 2047212121] = "Blackops02SMY";
        PedHash2[PedHash2["Blackops03SMY"] = 1349953339] = "Blackops03SMY";
        PedHash2[PedHash2["Bodybuild01AFM"] = 1004114196] = "Bodybuild01AFM";
        PedHash2[PedHash2["Bouncer01SMM"] = 2681481517] = "Bouncer01SMM";
        PedHash2[PedHash2["Breakdance01AMY"] = 933205398] = "Breakdance01AMY";
        PedHash2[PedHash2["Busboy01SMY"] = 3640249671] = "Busboy01SMY";
        PedHash2[PedHash2["Busicas01AMY"] = 2597531625] = "Busicas01AMY";
        PedHash2[PedHash2["Business01AFY"] = 664399832] = "Business01AFY";
        PedHash2[PedHash2["Business01AMM"] = 2120901815] = "Business01AMM";
        PedHash2[PedHash2["Business01AMY"] = 3382649284] = "Business01AMY";
        PedHash2[PedHash2["Business02AFM"] = 532905404] = "Business02AFM";
        PedHash2[PedHash2["Business02AFY"] = 826475330] = "Business02AFY";
        PedHash2[PedHash2["Business02AMY"] = 3014915558] = "Business02AMY";
        PedHash2[PedHash2["Business03AFY"] = 2928082356] = "Business03AFY";
        PedHash2[PedHash2["Business03AMY"] = 2705543429] = "Business03AMY";
        PedHash2[PedHash2["Business04AFY"] = 3083210802] = "Business04AFY";
        PedHash2[PedHash2["Busker01SMO"] = 2912874939] = "Busker01SMO";
        PedHash2[PedHash2["CCrew01SMM"] = 3387290987] = "CCrew01SMM";
        PedHash2[PedHash2["Chef01SMY"] = 261586155] = "Chef01SMY";
        PedHash2[PedHash2["ChemSec01SMM"] = 788443093] = "ChemSec01SMM";
        PedHash2[PedHash2["ChemWork01GMM"] = 4128603535] = "ChemWork01GMM";
        PedHash2[PedHash2["ChiBoss01GMM"] = 3118269184] = "ChiBoss01GMM";
        PedHash2[PedHash2["ChiCold01GMM"] = 275618457] = "ChiCold01GMM";
        PedHash2[PedHash2["ChiGoon01GMM"] = 2119136831] = "ChiGoon01GMM";
        PedHash2[PedHash2["ChiGoon02GMM"] = 4285659174] = "ChiGoon02GMM";
        PedHash2[PedHash2["CiaSec01SMM"] = 1650288984] = "CiaSec01SMM";
        PedHash2[PedHash2["Clown01SMY"] = 71929310] = "Clown01SMY";
        PedHash2[PedHash2["Cntrybar01SMM"] = 436345731] = "Cntrybar01SMM";
        PedHash2[PedHash2["Construct01SMY"] = 3621428889] = "Construct01SMY";
        PedHash2[PedHash2["Construct02SMY"] = 3321821918] = "Construct02SMY";
        PedHash2[PedHash2["Cop01SFY"] = 368603149] = "Cop01SFY";
        PedHash2[PedHash2["Cop01SMY"] = 1581098148] = "Cop01SMY";
        PedHash2[PedHash2["Cyclist01AMY"] = 4257633223] = "Cyclist01AMY";
        PedHash2[PedHash2["Dealer01SMY"] = 3835149295] = "Dealer01SMY";
        PedHash2[PedHash2["Devinsec01SMY"] = 2606068340] = "Devinsec01SMY";
        PedHash2[PedHash2["Dhill01AMY"] = 4282288299] = "Dhill01AMY";
        PedHash2[PedHash2["Dockwork01SMM"] = 349680864] = "Dockwork01SMM";
        PedHash2[PedHash2["Dockwork01SMY"] = 2255894993] = "Dockwork01SMY";
        PedHash2[PedHash2["Doctor01SMM"] = 3564307372] = "Doctor01SMM";
        PedHash2[PedHash2["Doorman01SMY"] = 579932932] = "Doorman01SMY";
        PedHash2[PedHash2["Downtown01AFM"] = 1699403886] = "Downtown01AFM";
        PedHash2[PedHash2["Downtown01AMY"] = 766375082] = "Downtown01AMY";
        PedHash2[PedHash2["DwService01SMY"] = 1976765073] = "DwService01SMY";
        PedHash2[PedHash2["DwService02SMY"] = 4119890438] = "DwService02SMY";
        PedHash2[PedHash2["Eastsa01AFM"] = 2638072698] = "Eastsa01AFM";
        PedHash2[PedHash2["Eastsa01AFY"] = 4121954205] = "Eastsa01AFY";
        PedHash2[PedHash2["Eastsa01AMM"] = 4188468543] = "Eastsa01AMM";
        PedHash2[PedHash2["Eastsa01AMY"] = 2756120947] = "Eastsa01AMY";
        PedHash2[PedHash2["Eastsa02AFM"] = 1674107025] = "Eastsa02AFM";
        PedHash2[PedHash2["Eastsa02AFY"] = 70821038] = "Eastsa02AFY";
        PedHash2[PedHash2["Eastsa02AMM"] = 131961260] = "Eastsa02AMM";
        PedHash2[PedHash2["Eastsa02AMY"] = 377976310] = "Eastsa02AMY";
        PedHash2[PedHash2["Eastsa03AFY"] = 1371553700] = "Eastsa03AFY";
        PedHash2[PedHash2["Epsilon01AFY"] = 1755064960] = "Epsilon01AFY";
        PedHash2[PedHash2["Epsilon01AMY"] = 2010389054] = "Epsilon01AMY";
        PedHash2[PedHash2["Epsilon02AMY"] = 2860711835] = "Epsilon02AMY";
        PedHash2[PedHash2["Factory01SFY"] = 1777626099] = "Factory01SFY";
        PedHash2[PedHash2["Factory01SMY"] = 1097048408] = "Factory01SMY";
        PedHash2[PedHash2["Famca01GMY"] = 3896218551] = "Famca01GMY";
        PedHash2[PedHash2["Famdnf01GMY"] = 3681718840] = "Famdnf01GMY";
        PedHash2[PedHash2["Famfor01GMY"] = 2217749257] = "Famfor01GMY";
        PedHash2[PedHash2["Families01GFY"] = 1309468115] = "Families01GFY";
        PedHash2[PedHash2["Farmer01AMM"] = 2488675799] = "Farmer01AMM";
        PedHash2[PedHash2["FatBla01AFM"] = 4206136267] = "FatBla01AFM";
        PedHash2[PedHash2["FatCult01AFM"] = 3050275044] = "FatCult01AFM";
        PedHash2[PedHash2["Fatlatin01AMM"] = 1641152947] = "Fatlatin01AMM";
        PedHash2[PedHash2["FatWhite01AFM"] = 951767867] = "FatWhite01AFM";
        PedHash2[PedHash2["FemBarberSFM"] = 373000027] = "FemBarberSFM";
        PedHash2[PedHash2["FibOffice01SMM"] = 3988550982] = "FibOffice01SMM";
        PedHash2[PedHash2["FibOffice02SMM"] = 653289389] = "FibOffice02SMM";
        PedHash2[PedHash2["FibSec01SMM"] = 2072724299] = "FibSec01SMM";
        PedHash2[PedHash2["Fireman01SMY"] = 3065114024] = "Fireman01SMY";
        PedHash2[PedHash2["Fitness01AFY"] = 1165780219] = "Fitness01AFY";
        PedHash2[PedHash2["Fitness02AFY"] = 331645324] = "Fitness02AFY";
        PedHash2[PedHash2["Gaffer01SMM"] = 2841034142] = "Gaffer01SMM";
        PedHash2[PedHash2["GarbageSMY"] = 4000686095] = "GarbageSMY";
        PedHash2[PedHash2["Gardener01SMM"] = 1240094341] = "Gardener01SMM";
        PedHash2[PedHash2["Gay01AMY"] = 3519864886] = "Gay01AMY";
        PedHash2[PedHash2["Gay02AMY"] = 2775713665] = "Gay02AMY";
        PedHash2[PedHash2["Genfat01AMM"] = 115168927] = "Genfat01AMM";
        PedHash2[PedHash2["Genfat02AMM"] = 330231874] = "Genfat02AMM";
        PedHash2[PedHash2["Genhot01AFY"] = 793439294] = "Genhot01AFY";
        PedHash2[PedHash2["Genstreet01AFO"] = 1640504453] = "Genstreet01AFO";
        PedHash2[PedHash2["Genstreet01AMO"] = 2908022696] = "Genstreet01AMO";
        PedHash2[PedHash2["Genstreet01AMY"] = 2557996913] = "Genstreet01AMY";
        PedHash2[PedHash2["Genstreet02AMY"] = 891398354] = "Genstreet02AMY";
        PedHash2[PedHash2["GentransportSMM"] = 411102470] = "GentransportSMM";
        PedHash2[PedHash2["Golfer01AFY"] = 2111372120] = "Golfer01AFY";
        PedHash2[PedHash2["Golfer01AMM"] = 2850754114] = "Golfer01AMM";
        PedHash2[PedHash2["Golfer01AMY"] = 3609190705] = "Golfer01AMY";
        PedHash2[PedHash2["Grip01SMY"] = 815693290] = "Grip01SMY";
        PedHash2[PedHash2["Hairdress01SMM"] = 1099825042] = "Hairdress01SMM";
        PedHash2[PedHash2["Hasjew01AMM"] = 1809430156] = "Hasjew01AMM";
        PedHash2[PedHash2["Hasjew01AMY"] = 3782053633] = "Hasjew01AMY";
        PedHash2[PedHash2["Highsec01SMM"] = 4049719826] = "Highsec01SMM";
        PedHash2[PedHash2["Highsec02SMM"] = 691061163] = "Highsec02SMM";
        PedHash2[PedHash2["Hiker01AFY"] = 813893651] = "Hiker01AFY";
        PedHash2[PedHash2["Hiker01AMY"] = 1358380044] = "Hiker01AMY";
        PedHash2[PedHash2["Hillbilly01AMM"] = 1822107721] = "Hillbilly01AMM";
        PedHash2[PedHash2["Hillbilly02AMM"] = 2064532783] = "Hillbilly02AMM";
        PedHash2[PedHash2["Hippie01AFY"] = 343259175] = "Hippie01AFY";
        PedHash2[PedHash2["Hippy01AMY"] = 2097407511] = "Hippy01AMY";
        PedHash2[PedHash2["Hipster01AFY"] = 2185745201] = "Hipster01AFY";
        PedHash2[PedHash2["Hipster01AMY"] = 587703123] = "Hipster01AMY";
        PedHash2[PedHash2["Hipster02AFY"] = 2549481101] = "Hipster02AFY";
        PedHash2[PedHash2["Hipster02AMY"] = 349505262] = "Hipster02AMY";
        PedHash2[PedHash2["Hipster03AFY"] = 2780469782] = "Hipster03AFY";
        PedHash2[PedHash2["Hipster03AMY"] = 1312913862] = "Hipster03AMY";
        PedHash2[PedHash2["Hipster04AFY"] = 429425116] = "Hipster04AFY";
        PedHash2[PedHash2["Hooker01SFY"] = 42647445] = "Hooker01SFY";
        PedHash2[PedHash2["Hooker02SFY"] = 348382215] = "Hooker02SFY";
        PedHash2[PedHash2["Hooker03SFY"] = 51789996] = "Hooker03SFY";
        PedHash2[PedHash2["Hwaycop01SMY"] = 1939545845] = "Hwaycop01SMY";
        PedHash2[PedHash2["Indian01AFO"] = 3134700416] = "Indian01AFO";
        PedHash2[PedHash2["Indian01AFY"] = 153984193] = "Indian01AFY";
        PedHash2[PedHash2["Indian01AMM"] = 3721046572] = "Indian01AMM";
        PedHash2[PedHash2["Indian01AMY"] = 706935758] = "Indian01AMY";
        PedHash2[PedHash2["JanitorSMM"] = 2842417644] = "JanitorSMM";
        PedHash2[PedHash2["Jetski01AMY"] = 767028979] = "Jetski01AMY";
        PedHash2[PedHash2["Juggalo01AFY"] = 3675473203] = "Juggalo01AFY";
        PedHash2[PedHash2["Juggalo01AMY"] = 2445950508] = "Juggalo01AMY";
        PedHash2[PedHash2["KorBoss01GMM"] = 891945583] = "KorBoss01GMM";
        PedHash2[PedHash2["Korean01GMY"] = 611648169] = "Korean01GMY";
        PedHash2[PedHash2["Korean02GMY"] = 2414729609] = "Korean02GMY";
        PedHash2[PedHash2["KorLieut01GMY"] = 2093736314] = "KorLieut01GMY";
        PedHash2[PedHash2["Ktown01AFM"] = 1388848350] = "Ktown01AFM";
        PedHash2[PedHash2["Ktown01AFO"] = 1204772502] = "Ktown01AFO";
        PedHash2[PedHash2["Ktown01AMM"] = 3512565361] = "Ktown01AMM";
        PedHash2[PedHash2["Ktown01AMO"] = 355916122] = "Ktown01AMO";
        PedHash2[PedHash2["Ktown01AMY"] = 452351020] = "Ktown01AMY";
        PedHash2[PedHash2["Ktown02AFM"] = 1090617681] = "Ktown02AFM";
        PedHash2[PedHash2["Ktown02AMY"] = 696250687] = "Ktown02AMY";
        PedHash2[PedHash2["Lathandy01SMM"] = 2659242702] = "Lathandy01SMM";
        PedHash2[PedHash2["Latino01AMY"] = 321657486] = "Latino01AMY";
        PedHash2[PedHash2["Lifeinvad01SMM"] = 3724572669] = "Lifeinvad01SMM";
        PedHash2[PedHash2["LinecookSMM"] = 3684436375] = "LinecookSMM";
        PedHash2[PedHash2["Lost01GFY"] = 4250220510] = "Lost01GFY";
        PedHash2[PedHash2["Lost01GMY"] = 1330042375] = "Lost01GMY";
        PedHash2[PedHash2["Lost02GMY"] = 1032073858] = "Lost02GMY";
        PedHash2[PedHash2["Lost03GMY"] = 850468060] = "Lost03GMY";
        PedHash2[PedHash2["Lsmetro01SMM"] = 1985653476] = "Lsmetro01SMM";
        PedHash2[PedHash2["Maid01SFM"] = 3767780806] = "Maid01SFM";
        PedHash2[PedHash2["Malibu01AMM"] = 803106487] = "Malibu01AMM";
        PedHash2[PedHash2["Mariachi01SMM"] = 2124742566] = "Mariachi01SMM";
        PedHash2[PedHash2["Marine01SMM"] = 4074414829] = "Marine01SMM";
        PedHash2[PedHash2["Marine01SMY"] = 1702441027] = "Marine01SMY";
        PedHash2[PedHash2["Marine02SMM"] = 4028996995] = "Marine02SMM";
        PedHash2[PedHash2["Marine02SMY"] = 1490458366] = "Marine02SMY";
        PedHash2[PedHash2["Marine03SMY"] = 1925237458] = "Marine03SMY";
        PedHash2[PedHash2["Methhead01AMY"] = 1768677545] = "Methhead01AMY";
        PedHash2[PedHash2["MexBoss01GMM"] = 1466037421] = "MexBoss01GMM";
        PedHash2[PedHash2["MexBoss02GMM"] = 1226102803] = "MexBoss02GMM";
        PedHash2[PedHash2["MexCntry01AMM"] = 3716251309] = "MexCntry01AMM";
        PedHash2[PedHash2["MexGang01GMY"] = 3185399110] = "MexGang01GMY";
        PedHash2[PedHash2["MexGoon01GMY"] = 653210662] = "MexGoon01GMY";
        PedHash2[PedHash2["MexGoon02GMY"] = 832784782] = "MexGoon02GMY";
        PedHash2[PedHash2["MexGoon03GMY"] = 2521633500] = "MexGoon03GMY";
        PedHash2[PedHash2["MexLabor01AMM"] = 2992445106] = "MexLabor01AMM";
        PedHash2[PedHash2["MexThug01AMY"] = 810804565] = "MexThug01AMY";
        PedHash2[PedHash2["Migrant01SFY"] = 3579522037] = "Migrant01SFY";
        PedHash2[PedHash2["Migrant01SMM"] = 3977045190] = "Migrant01SMM";
        PedHash2[PedHash2["MimeSMY"] = 1021093698] = "MimeSMY";
        PedHash2[PedHash2["Motox01AMY"] = 1694362237] = "Motox01AMY";
        PedHash2[PedHash2["Motox02AMY"] = 2007797722] = "Motox02AMY";
        PedHash2[PedHash2["MovAlien01"] = 1684083350] = "MovAlien01";
        PedHash2[PedHash2["MovPrem01SFY"] = 587253782] = "MovPrem01SFY";
        PedHash2[PedHash2["Movprem01SMM"] = 3630066984] = "Movprem01SMM";
        PedHash2[PedHash2["Movspace01SMM"] = 3887273010] = "Movspace01SMM";
        PedHash2[PedHash2["Musclbeac01AMY"] = 1264920838] = "Musclbeac01AMY";
        PedHash2[PedHash2["Musclbeac02AMY"] = 3374523516] = "Musclbeac02AMY";
        PedHash2[PedHash2["OgBoss01AMM"] = 1746653202] = "OgBoss01AMM";
        PedHash2[PedHash2["Paparazzi01AMM"] = 3972697109] = "Paparazzi01AMM";
        PedHash2[PedHash2["Paramedic01SMM"] = 3008586398] = "Paramedic01SMM";
        PedHash2[PedHash2["PestCont01SMY"] = 1209091352] = "PestCont01SMY";
        PedHash2[PedHash2["Pilot01SMM"] = 3881519900] = "Pilot01SMM";
        PedHash2[PedHash2["Pilot01SMY"] = 2872052743] = "Pilot01SMY";
        PedHash2[PedHash2["Pilot02SMM"] = 4131252449] = "Pilot02SMM";
        PedHash2[PedHash2["PoloGoon01GMY"] = 1329576454] = "PoloGoon01GMY";
        PedHash2[PedHash2["PoloGoon02GMY"] = 2733138262] = "PoloGoon02GMY";
        PedHash2[PedHash2["Polynesian01AMM"] = 2849617566] = "Polynesian01AMM";
        PedHash2[PedHash2["Polynesian01AMY"] = 2206530719] = "Polynesian01AMY";
        PedHash2[PedHash2["Postal01SMM"] = 1650036788] = "Postal01SMM";
        PedHash2[PedHash2["Postal02SMM"] = 1936142927] = "Postal02SMM";
        PedHash2[PedHash2["Prisguard01SMM"] = 1456041926] = "Prisguard01SMM";
        PedHash2[PedHash2["PrisMuscl01SMY"] = 1596003233] = "PrisMuscl01SMY";
        PedHash2[PedHash2["Prisoner01SMY"] = 2981862233] = "Prisoner01SMY";
        PedHash2[PedHash2["PrologueHostage01AFM"] = 379310561] = "PrologueHostage01AFM";
        PedHash2[PedHash2["PrologueHostage01AMM"] = 2534589327] = "PrologueHostage01AMM";
        PedHash2[PedHash2["Ranger01SFY"] = 2680682039] = "Ranger01SFY";
        PedHash2[PedHash2["Ranger01SMY"] = 4017173934] = "Ranger01SMY";
        PedHash2[PedHash2["Roadcyc01AMY"] = 4116817094] = "Roadcyc01AMY";
        PedHash2[PedHash2["Robber01SMY"] = 3227390873] = "Robber01SMY";
        PedHash2[PedHash2["RsRanger01AMO"] = 1011059922] = "RsRanger01AMO";
        PedHash2[PedHash2["Runner01AFY"] = 3343476521] = "Runner01AFY";
        PedHash2[PedHash2["Runner01AMY"] = 623927022] = "Runner01AMY";
        PedHash2[PedHash2["Runner02AMY"] = 2218630415] = "Runner02AMY";
        PedHash2[PedHash2["Rurmeth01AFY"] = 1064866854] = "Rurmeth01AFY";
        PedHash2[PedHash2["Rurmeth01AMM"] = 1001210244] = "Rurmeth01AMM";
        PedHash2[PedHash2["Salton01AFM"] = 3725461865] = "Salton01AFM";
        PedHash2[PedHash2["Salton01AFO"] = 3439295882] = "Salton01AFO";
        PedHash2[PedHash2["Salton01AMM"] = 1328415626] = "Salton01AMM";
        PedHash2[PedHash2["Salton01AMO"] = 539004493] = "Salton01AMO";
        PedHash2[PedHash2["Salton01AMY"] = 3613420592] = "Salton01AMY";
        PedHash2[PedHash2["Salton02AMM"] = 1626646295] = "Salton02AMM";
        PedHash2[PedHash2["Salton03AMM"] = 2995538501] = "Salton03AMM";
        PedHash2[PedHash2["Salton04AMM"] = 2521108919] = "Salton04AMM";
        PedHash2[PedHash2["SalvaBoss01GMY"] = 2422005962] = "SalvaBoss01GMY";
        PedHash2[PedHash2["SalvaGoon01GMY"] = 663522487] = "SalvaGoon01GMY";
        PedHash2[PedHash2["SalvaGoon02GMY"] = 846439045] = "SalvaGoon02GMY";
        PedHash2[PedHash2["SalvaGoon03GMY"] = 62440720] = "SalvaGoon03GMY";
        PedHash2[PedHash2["SbikeAMO"] = 1794381917] = "SbikeAMO";
        PedHash2[PedHash2["Scdressy01AFY"] = 3680420864] = "Scdressy01AFY";
        PedHash2[PedHash2["Scientist01SMM"] = 1092080539] = "Scientist01SMM";
        PedHash2[PedHash2["Scrubs01SFY"] = 2874755766] = "Scrubs01SFY";
        PedHash2[PedHash2["Security01SMM"] = 3613962792] = "Security01SMM";
        PedHash2[PedHash2["Sheriff01SFY"] = 1096929346] = "Sheriff01SFY";
        PedHash2[PedHash2["Sheriff01SMY"] = 2974087609] = "Sheriff01SMY";
        PedHash2[PedHash2["ShopHighSFM"] = 2923947184] = "ShopHighSFM";
        PedHash2[PedHash2["ShopLowSFY"] = 2842568196] = "ShopLowSFY";
        PedHash2[PedHash2["ShopMaskSMY"] = 1846684678] = "ShopMaskSMY";
        PedHash2[PedHash2["ShopMidSFY"] = 1055701597] = "ShopMidSFY";
        PedHash2[PedHash2["Skater01AFY"] = 1767892582] = "Skater01AFY";
        PedHash2[PedHash2["Skater01AMM"] = 3654768780] = "Skater01AMM";
        PedHash2[PedHash2["Skater01AMY"] = 3250873975] = "Skater01AMY";
        PedHash2[PedHash2["Skater02AMY"] = 2952446692] = "Skater02AMY";
        PedHash2[PedHash2["Skidrow01AFM"] = 2962707003] = "Skidrow01AFM";
        PedHash2[PedHash2["Skidrow01AMM"] = 32417469] = "Skidrow01AMM";
        PedHash2[PedHash2["Snowcop01SMM"] = 451459928] = "Snowcop01SMM";
        PedHash2[PedHash2["Socenlat01AMM"] = 193817059] = "Socenlat01AMM";
        PedHash2[PedHash2["Soucent01AFM"] = 1951946145] = "Soucent01AFM";
        PedHash2[PedHash2["Soucent01AFO"] = 1039800368] = "Soucent01AFO";
        PedHash2[PedHash2["Soucent01AFY"] = 744758650] = "Soucent01AFY";
        PedHash2[PedHash2["Soucent01AMM"] = 1750583735] = "Soucent01AMM";
        PedHash2[PedHash2["Soucent01AMO"] = 718836251] = "Soucent01AMO";
        PedHash2[PedHash2["Soucent01AMY"] = 3877027275] = "Soucent01AMY";
        PedHash2[PedHash2["Soucent02AFM"] = 4079145784] = "Soucent02AFM";
        PedHash2[PedHash2["Soucent02AFO"] = 2775443222] = "Soucent02AFO";
        PedHash2[PedHash2["Soucent02AFY"] = 1519319503] = "Soucent02AFY";
        PedHash2[PedHash2["Soucent02AMM"] = 2674735073] = "Soucent02AMM";
        PedHash2[PedHash2["Soucent02AMO"] = 1082572151] = "Soucent02AMO";
        PedHash2[PedHash2["Soucent02AMY"] = 2896414922] = "Soucent02AMY";
        PedHash2[PedHash2["Soucent03AFY"] = 2276611093] = "Soucent03AFY";
        PedHash2[PedHash2["Soucent03AMM"] = 2346291386] = "Soucent03AMM";
        PedHash2[PedHash2["Soucent03AMO"] = 238213328] = "Soucent03AMO";
        PedHash2[PedHash2["Soucent03AMY"] = 3287349092] = "Soucent03AMY";
        PedHash2[PedHash2["Soucent04AMM"] = 3271294718] = "Soucent04AMM";
        PedHash2[PedHash2["Soucent04AMY"] = 2318861297] = "Soucent04AMY";
        PedHash2[PedHash2["Soucentmc01AFM"] = 3454621138] = "Soucentmc01AFM";
        PedHash2[PedHash2["Staggrm01AMO"] = 2442448387] = "Staggrm01AMO";
        PedHash2[PedHash2["Stbla01AMY"] = 3482496489] = "Stbla01AMY";
        PedHash2[PedHash2["Stbla02AMY"] = 2563194959] = "Stbla02AMY";
        PedHash2[PedHash2["Stlat01AMY"] = 2255803900] = "Stlat01AMY";
        PedHash2[PedHash2["Stlat02AMM"] = 3265820418] = "Stlat02AMM";
        PedHash2[PedHash2["Stripper01SFY"] = 1381498905] = "Stripper01SFY";
        PedHash2[PedHash2["Stripper02SFY"] = 1846523796] = "Stripper02SFY";
        PedHash2[PedHash2["StripperLiteSFY"] = 1544875514] = "StripperLiteSFY";
        PedHash2[PedHash2["Strperf01SMM"] = 2035992488] = "Strperf01SMM";
        PedHash2[PedHash2["Strpreach01SMM"] = 469792763] = "Strpreach01SMM";
        PedHash2[PedHash2["StrPunk01GMY"] = 4246489531] = "StrPunk01GMY";
        PedHash2[PedHash2["StrPunk02GMY"] = 228715206] = "StrPunk02GMY";
        PedHash2[PedHash2["Strvend01SMM"] = 3465614249] = "Strvend01SMM";
        PedHash2[PedHash2["Strvend01SMY"] = 2457805603] = "Strvend01SMY";
        PedHash2[PedHash2["Stwhi01AMY"] = 605602864] = "Stwhi01AMY";
        PedHash2[PedHash2["Stwhi02AMY"] = 919005580] = "Stwhi02AMY";
        PedHash2[PedHash2["Sunbathe01AMY"] = 3072929548] = "Sunbathe01AMY";
        PedHash2[PedHash2["Surfer01AMY"] = 3938633710] = "Surfer01AMY";
        PedHash2[PedHash2["Swat01SMY"] = 2374966032] = "Swat01SMY";
        PedHash2[PedHash2["Sweatshop01SFM"] = 824925120] = "Sweatshop01SFM";
        PedHash2[PedHash2["Sweatshop01SFY"] = 2231547570] = "Sweatshop01SFY";
        PedHash2[PedHash2["Tattoo01AMO"] = 2494442380] = "Tattoo01AMO";
        PedHash2[PedHash2["Tennis01AFY"] = 1426880966] = "Tennis01AFY";
        PedHash2[PedHash2["Tennis01AMM"] = 1416254276] = "Tennis01AMM";
        PedHash2[PedHash2["Topless01AFY"] = 2633130371] = "Topless01AFY";
        PedHash2[PedHash2["Tourist01AFM"] = 1347814329] = "Tourist01AFM";
        PedHash2[PedHash2["Tourist01AFY"] = 1446741360] = "Tourist01AFY";
        PedHash2[PedHash2["Tourist01AMM"] = 3365863812] = "Tourist01AMM";
        PedHash2[PedHash2["Tourist02AFY"] = 2435054400] = "Tourist02AFY";
        PedHash2[PedHash2["Tramp01AFM"] = 1224306523] = "Tramp01AFM";
        PedHash2[PedHash2["Tramp01AMM"] = 516505552] = "Tramp01AMM";
        PedHash2[PedHash2["Tramp01AMO"] = 390939205] = "Tramp01AMO";
        PedHash2[PedHash2["TrampBeac01AFM"] = 2359345766] = "TrampBeac01AFM";
        PedHash2[PedHash2["TrampBeac01AMM"] = 1404403376] = "TrampBeac01AMM";
        PedHash2[PedHash2["Tranvest01AMM"] = 3773208948] = "Tranvest01AMM";
        PedHash2[PedHash2["Tranvest02AMM"] = 4144940484] = "Tranvest02AMM";
        PedHash2[PedHash2["Trucker01SMM"] = 1498487404] = "Trucker01SMM";
        PedHash2[PedHash2["Ups01SMM"] = 2680389410] = "Ups01SMM";
        PedHash2[PedHash2["Ups02SMM"] = 3502104854] = "Ups02SMM";
        PedHash2[PedHash2["Uscg01SMY"] = 3389018345] = "Uscg01SMY";
        PedHash2[PedHash2["Vagos01GFY"] = 1520708641] = "Vagos01GFY";
        PedHash2[PedHash2["Valet01SMY"] = 999748158] = "Valet01SMY";
        PedHash2[PedHash2["Vindouche01AMY"] = 3247667175] = "Vindouche01AMY";
        PedHash2[PedHash2["Vinewood01AFY"] = 435429221] = "Vinewood01AFY";
        PedHash2[PedHash2["Vinewood01AMY"] = 1264851357] = "Vinewood01AMY";
        PedHash2[PedHash2["Vinewood02AFY"] = 3669401835] = "Vinewood02AFY";
        PedHash2[PedHash2["Vinewood02AMY"] = 1561705728] = "Vinewood02AMY";
        PedHash2[PedHash2["Vinewood03AFY"] = 933092024] = "Vinewood03AFY";
        PedHash2[PedHash2["Vinewood03AMY"] = 534725268] = "Vinewood03AMY";
        PedHash2[PedHash2["Vinewood04AFY"] = 4209271110] = "Vinewood04AFY";
        PedHash2[PedHash2["Vinewood04AMY"] = 835315305] = "Vinewood04AMY";
        PedHash2[PedHash2["Waiter01SMY"] = 2907468364] = "Waiter01SMY";
        PedHash2[PedHash2["WinClean01SMY"] = 1426951581] = "WinClean01SMY";
        PedHash2[PedHash2["Xmech01SMY"] = 1142162924] = "Xmech01SMY";
        PedHash2[PedHash2["Xmech02SMY"] = 3189832196] = "Xmech02SMY";
        PedHash2[PedHash2["Xmech02SMYMP"] = 1755203590] = "Xmech02SMYMP";
        PedHash2[PedHash2["Yoga01AFY"] = 3290105390] = "Yoga01AFY";
        PedHash2[PedHash2["Yoga01AMY"] = 2869588309] = "Yoga01AMY";
      })(PedHash || (PedHash = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/VehicleHash.js
  var VehicleHash;
  var init_VehicleHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/VehicleHash.js"() {
      (function(VehicleHash2) {
        VehicleHash2[VehicleHash2["Adder"] = 3078201489] = "Adder";
        VehicleHash2[VehicleHash2["Airbus"] = 1283517198] = "Airbus";
        VehicleHash2[VehicleHash2["Airtug"] = 1560980623] = "Airtug";
        VehicleHash2[VehicleHash2["Akuma"] = 1672195559] = "Akuma";
        VehicleHash2[VehicleHash2["Alpha"] = 767087018] = "Alpha";
        VehicleHash2[VehicleHash2["Ambulance"] = 1171614426] = "Ambulance";
        VehicleHash2[VehicleHash2["Annihilator"] = 837858166] = "Annihilator";
        VehicleHash2[VehicleHash2["Apc"] = 562680400] = "Apc";
        VehicleHash2[VehicleHash2["Ardent"] = 159274291] = "Ardent";
        VehicleHash2[VehicleHash2["ArmyTanker"] = 3087536137] = "ArmyTanker";
        VehicleHash2[VehicleHash2["ArmyTrailer"] = 2818520053] = "ArmyTrailer";
        VehicleHash2[VehicleHash2["ArmyTrailer2"] = 2657817814] = "ArmyTrailer2";
        VehicleHash2[VehicleHash2["Asea"] = 2485144969] = "Asea";
        VehicleHash2[VehicleHash2["Asea2"] = 2487343317] = "Asea2";
        VehicleHash2[VehicleHash2["Asterope"] = 2391954683] = "Asterope";
        VehicleHash2[VehicleHash2["Avarus"] = 2179174271] = "Avarus";
        VehicleHash2[VehicleHash2["Bagger"] = 2154536131] = "Bagger";
        VehicleHash2[VehicleHash2["BaleTrailer"] = 3895125590] = "BaleTrailer";
        VehicleHash2[VehicleHash2["Baller"] = 3486135912] = "Baller";
        VehicleHash2[VehicleHash2["Baller2"] = 142944341] = "Baller2";
        VehicleHash2[VehicleHash2["Baller3"] = 1878062887] = "Baller3";
        VehicleHash2[VehicleHash2["Baller4"] = 634118882] = "Baller4";
        VehicleHash2[VehicleHash2["Baller5"] = 470404958] = "Baller5";
        VehicleHash2[VehicleHash2["Baller6"] = 666166960] = "Baller6";
        VehicleHash2[VehicleHash2["Banshee"] = 3253274834] = "Banshee";
        VehicleHash2[VehicleHash2["Banshee2"] = 633712403] = "Banshee2";
        VehicleHash2[VehicleHash2["Barracks"] = 3471458123] = "Barracks";
        VehicleHash2[VehicleHash2["Barracks2"] = 1074326203] = "Barracks2";
        VehicleHash2[VehicleHash2["Barracks3"] = 630371791] = "Barracks3";
        VehicleHash2[VehicleHash2["Bati"] = 4180675781] = "Bati";
        VehicleHash2[VehicleHash2["Bati2"] = 3403504941] = "Bati2";
        VehicleHash2[VehicleHash2["Benson"] = 2053223216] = "Benson";
        VehicleHash2[VehicleHash2["Besra"] = 1824333165] = "Besra";
        VehicleHash2[VehicleHash2["BestiaGTS"] = 1274868363] = "BestiaGTS";
        VehicleHash2[VehicleHash2["BF400"] = 86520421] = "BF400";
        VehicleHash2[VehicleHash2["BfInjection"] = 1126868326] = "BfInjection";
        VehicleHash2[VehicleHash2["Biff"] = 850991848] = "Biff";
        VehicleHash2[VehicleHash2["Bifta"] = 3945366167] = "Bifta";
        VehicleHash2[VehicleHash2["Bison"] = 4278019151] = "Bison";
        VehicleHash2[VehicleHash2["Bison2"] = 2072156101] = "Bison2";
        VehicleHash2[VehicleHash2["Bison3"] = 1739845664] = "Bison3";
        VehicleHash2[VehicleHash2["BJXL"] = 850565707] = "BJXL";
        VehicleHash2[VehicleHash2["Blade"] = 3089165662] = "Blade";
        VehicleHash2[VehicleHash2["Blazer"] = 2166734073] = "Blazer";
        VehicleHash2[VehicleHash2["Blazer2"] = 4246935337] = "Blazer2";
        VehicleHash2[VehicleHash2["Blazer3"] = 3025077634] = "Blazer3";
        VehicleHash2[VehicleHash2["Blazer4"] = 3854198872] = "Blazer4";
        VehicleHash2[VehicleHash2["Blazer5"] = 2704629607] = "Blazer5";
        VehicleHash2[VehicleHash2["Blimp"] = 4143991942] = "Blimp";
        VehicleHash2[VehicleHash2["Blimp2"] = 3681241380] = "Blimp2";
        VehicleHash2[VehicleHash2["Blista"] = 3950024287] = "Blista";
        VehicleHash2[VehicleHash2["Blista2"] = 1039032026] = "Blista2";
        VehicleHash2[VehicleHash2["Blista3"] = 3703315515] = "Blista3";
        VehicleHash2[VehicleHash2["Bmx"] = 1131912276] = "Bmx";
        VehicleHash2[VehicleHash2["BoatTrailer"] = 524108981] = "BoatTrailer";
        VehicleHash2[VehicleHash2["BobcatXL"] = 1069929536] = "BobcatXL";
        VehicleHash2[VehicleHash2["Bodhi2"] = 2859047862] = "Bodhi2";
        VehicleHash2[VehicleHash2["Boxville"] = 2307837162] = "Boxville";
        VehicleHash2[VehicleHash2["Boxville2"] = 4061868990] = "Boxville2";
        VehicleHash2[VehicleHash2["Boxville3"] = 121658888] = "Boxville3";
        VehicleHash2[VehicleHash2["Boxville4"] = 444171386] = "Boxville4";
        VehicleHash2[VehicleHash2["Boxville5"] = 682434785] = "Boxville5";
        VehicleHash2[VehicleHash2["Brawler"] = 2815302597] = "Brawler";
        VehicleHash2[VehicleHash2["Brickade"] = 3989239879] = "Brickade";
        VehicleHash2[VehicleHash2["Brioso"] = 1549126457] = "Brioso";
        VehicleHash2[VehicleHash2["BType"] = 117401876] = "BType";
        VehicleHash2[VehicleHash2["BType2"] = 3463132580] = "BType2";
        VehicleHash2[VehicleHash2["BType3"] = 3692679425] = "BType3";
        VehicleHash2[VehicleHash2["Buccaneer"] = 3612755468] = "Buccaneer";
        VehicleHash2[VehicleHash2["Buccaneer2"] = 3281516360] = "Buccaneer2";
        VehicleHash2[VehicleHash2["Buffalo"] = 3990165190] = "Buffalo";
        VehicleHash2[VehicleHash2["Buffalo2"] = 736902334] = "Buffalo2";
        VehicleHash2[VehicleHash2["Buffalo3"] = 237764926] = "Buffalo3";
        VehicleHash2[VehicleHash2["Bulldozer"] = 1886712733] = "Bulldozer";
        VehicleHash2[VehicleHash2["Bullet"] = 2598821281] = "Bullet";
        VehicleHash2[VehicleHash2["Burrito"] = 2948279460] = "Burrito";
        VehicleHash2[VehicleHash2["Burrito2"] = 3387490166] = "Burrito2";
        VehicleHash2[VehicleHash2["Burrito3"] = 2551651283] = "Burrito3";
        VehicleHash2[VehicleHash2["Burrito4"] = 893081117] = "Burrito4";
        VehicleHash2[VehicleHash2["Burrito5"] = 1132262048] = "Burrito5";
        VehicleHash2[VehicleHash2["Bus"] = 3581397346] = "Bus";
        VehicleHash2[VehicleHash2["Buzzard"] = 788747387] = "Buzzard";
        VehicleHash2[VehicleHash2["Buzzard2"] = 745926877] = "Buzzard2";
        VehicleHash2[VehicleHash2["CableCar"] = 3334677549] = "CableCar";
        VehicleHash2[VehicleHash2["Caddy"] = 1147287684] = "Caddy";
        VehicleHash2[VehicleHash2["Caddy2"] = 3757070668] = "Caddy2";
        VehicleHash2[VehicleHash2["Caddy3"] = 3525819835] = "Caddy3";
        VehicleHash2[VehicleHash2["Camper"] = 1876516712] = "Camper";
        VehicleHash2[VehicleHash2["Carbonizzare"] = 2072687711] = "Carbonizzare";
        VehicleHash2[VehicleHash2["CarbonRS"] = 11251904] = "CarbonRS";
        VehicleHash2[VehicleHash2["Cargobob"] = 4244420235] = "Cargobob";
        VehicleHash2[VehicleHash2["Cargobob2"] = 1621617168] = "Cargobob2";
        VehicleHash2[VehicleHash2["Cargobob3"] = 1394036463] = "Cargobob3";
        VehicleHash2[VehicleHash2["Cargobob4"] = 2025593404] = "Cargobob4";
        VehicleHash2[VehicleHash2["CargoPlane"] = 368211810] = "CargoPlane";
        VehicleHash2[VehicleHash2["Casco"] = 941800958] = "Casco";
        VehicleHash2[VehicleHash2["Cavalcade"] = 2006918058] = "Cavalcade";
        VehicleHash2[VehicleHash2["Cavalcade2"] = 3505073125] = "Cavalcade2";
        VehicleHash2[VehicleHash2["Cheetah"] = 2983812512] = "Cheetah";
        VehicleHash2[VehicleHash2["Cheetah2"] = 223240013] = "Cheetah2";
        VehicleHash2[VehicleHash2["Chimera"] = 6774487] = "Chimera";
        VehicleHash2[VehicleHash2["Chino"] = 349605904] = "Chino";
        VehicleHash2[VehicleHash2["Chino2"] = 2933279331] = "Chino2";
        VehicleHash2[VehicleHash2["Cliffhanger"] = 390201602] = "Cliffhanger";
        VehicleHash2[VehicleHash2["Coach"] = 2222034228] = "Coach";
        VehicleHash2[VehicleHash2["Cog55"] = 906642318] = "Cog55";
        VehicleHash2[VehicleHash2["Cog552"] = 704435172] = "Cog552";
        VehicleHash2[VehicleHash2["CogCabrio"] = 330661258] = "CogCabrio";
        VehicleHash2[VehicleHash2["Cognoscenti"] = 2264796e3] = "Cognoscenti";
        VehicleHash2[VehicleHash2["Cognoscenti2"] = 3690124666] = "Cognoscenti2";
        VehicleHash2[VehicleHash2["Comet2"] = 3249425686] = "Comet2";
        VehicleHash2[VehicleHash2["Comet3"] = 2272483501] = "Comet3";
        VehicleHash2[VehicleHash2["Contender"] = 683047626] = "Contender";
        VehicleHash2[VehicleHash2["Coquette"] = 108773431] = "Coquette";
        VehicleHash2[VehicleHash2["Coquette2"] = 1011753235] = "Coquette2";
        VehicleHash2[VehicleHash2["Coquette3"] = 784565758] = "Coquette3";
        VehicleHash2[VehicleHash2["Cruiser"] = 448402357] = "Cruiser";
        VehicleHash2[VehicleHash2["Crusader"] = 321739290] = "Crusader";
        VehicleHash2[VehicleHash2["Cuban800"] = 3650256867] = "Cuban800";
        VehicleHash2[VehicleHash2["Cutter"] = 3288047904] = "Cutter";
        VehicleHash2[VehicleHash2["Daemon"] = 2006142190] = "Daemon";
        VehicleHash2[VehicleHash2["Daemon2"] = 2890830793] = "Daemon2";
        VehicleHash2[VehicleHash2["Defiler"] = 822018448] = "Defiler";
        VehicleHash2[VehicleHash2["Diablous"] = 4055125828] = "Diablous";
        VehicleHash2[VehicleHash2["Diablous2"] = 1790834270] = "Diablous2";
        VehicleHash2[VehicleHash2["Dilettante"] = 3164157193] = "Dilettante";
        VehicleHash2[VehicleHash2["Dilettante2"] = 1682114128] = "Dilettante2";
        VehicleHash2[VehicleHash2["Dinghy"] = 1033245328] = "Dinghy";
        VehicleHash2[VehicleHash2["Dinghy2"] = 276773164] = "Dinghy2";
        VehicleHash2[VehicleHash2["Dinghy3"] = 509498602] = "Dinghy3";
        VehicleHash2[VehicleHash2["Dinghy4"] = 867467158] = "Dinghy4";
        VehicleHash2[VehicleHash2["DLoader"] = 1770332643] = "DLoader";
        VehicleHash2[VehicleHash2["DockTrailer"] = 2154757102] = "DockTrailer";
        VehicleHash2[VehicleHash2["Docktug"] = 3410276810] = "Docktug";
        VehicleHash2[VehicleHash2["Dodo"] = 3393804037] = "Dodo";
        VehicleHash2[VehicleHash2["Dominator"] = 80636076] = "Dominator";
        VehicleHash2[VehicleHash2["Dominator2"] = 3379262425] = "Dominator2";
        VehicleHash2[VehicleHash2["Double"] = 2623969160] = "Double";
        VehicleHash2[VehicleHash2["Dubsta"] = 1177543287] = "Dubsta";
        VehicleHash2[VehicleHash2["Dubsta2"] = 3900892662] = "Dubsta2";
        VehicleHash2[VehicleHash2["Dubsta3"] = 3057713523] = "Dubsta3";
        VehicleHash2[VehicleHash2["Dukes"] = 723973206] = "Dukes";
        VehicleHash2[VehicleHash2["Dukes2"] = 3968823444] = "Dukes2";
        VehicleHash2[VehicleHash2["Dump"] = 2164484578] = "Dump";
        VehicleHash2[VehicleHash2["Dune"] = 2633113103] = "Dune";
        VehicleHash2[VehicleHash2["Dune2"] = 534258863] = "Dune2";
        VehicleHash2[VehicleHash2["Dune3"] = 1897744184] = "Dune3";
        VehicleHash2[VehicleHash2["Dune4"] = 3467805257] = "Dune4";
        VehicleHash2[VehicleHash2["Dune5"] = 3982671785] = "Dune5";
        VehicleHash2[VehicleHash2["Duster"] = 970356638] = "Duster";
        VehicleHash2[VehicleHash2["Elegy"] = 196747873] = "Elegy";
        VehicleHash2[VehicleHash2["Elegy2"] = 3728579874] = "Elegy2";
        VehicleHash2[VehicleHash2["Emperor"] = 3609690755] = "Emperor";
        VehicleHash2[VehicleHash2["Emperor2"] = 2411965148] = "Emperor2";
        VehicleHash2[VehicleHash2["Emperor3"] = 3053254478] = "Emperor3";
        VehicleHash2[VehicleHash2["Enduro"] = 1753414259] = "Enduro";
        VehicleHash2[VehicleHash2["EntityXF"] = 3003014393] = "EntityXF";
        VehicleHash2[VehicleHash2["Esskey"] = 2035069708] = "Esskey";
        VehicleHash2[VehicleHash2["Exemplar"] = 4289813342] = "Exemplar";
        VehicleHash2[VehicleHash2["F620"] = 3703357e3] = "F620";
        VehicleHash2[VehicleHash2["Faction"] = 2175389151] = "Faction";
        VehicleHash2[VehicleHash2["Faction2"] = 2504420315] = "Faction2";
        VehicleHash2[VehicleHash2["Faction3"] = 2255212070] = "Faction3";
        VehicleHash2[VehicleHash2["Faggio"] = 2452219115] = "Faggio";
        VehicleHash2[VehicleHash2["Faggio2"] = 55628203] = "Faggio2";
        VehicleHash2[VehicleHash2["Faggio3"] = 3005788552] = "Faggio3";
        VehicleHash2[VehicleHash2["FBI"] = 1127131465] = "FBI";
        VehicleHash2[VehicleHash2["FBI2"] = 2647026068] = "FBI2";
        VehicleHash2[VehicleHash2["FCR"] = 627535535] = "FCR";
        VehicleHash2[VehicleHash2["FCR2"] = 3537231886] = "FCR2";
        VehicleHash2[VehicleHash2["Felon"] = 3903372712] = "Felon";
        VehicleHash2[VehicleHash2["Felon2"] = 4205676014] = "Felon2";
        VehicleHash2[VehicleHash2["Feltzer2"] = 2299640309] = "Feltzer2";
        VehicleHash2[VehicleHash2["Feltzer3"] = 2728226064] = "Feltzer3";
        VehicleHash2[VehicleHash2["FireTruk"] = 1938952078] = "FireTruk";
        VehicleHash2[VehicleHash2["Fixter"] = 3458454463] = "Fixter";
        VehicleHash2[VehicleHash2["Flatbed"] = 1353720154] = "Flatbed";
        VehicleHash2[VehicleHash2["Forklift"] = 1491375716] = "Forklift";
        VehicleHash2[VehicleHash2["FMJ"] = 1426219628] = "FMJ";
        VehicleHash2[VehicleHash2["FQ2"] = 3157435195] = "FQ2";
        VehicleHash2[VehicleHash2["Freight"] = 1030400667] = "Freight";
        VehicleHash2[VehicleHash2["FreightCar"] = 184361638] = "FreightCar";
        VehicleHash2[VehicleHash2["FreightCont1"] = 920453016] = "FreightCont1";
        VehicleHash2[VehicleHash2["FreightCont2"] = 240201337] = "FreightCont2";
        VehicleHash2[VehicleHash2["FreightGrain"] = 642617954] = "FreightGrain";
        VehicleHash2[VehicleHash2["FreightTrailer"] = 3517691494] = "FreightTrailer";
        VehicleHash2[VehicleHash2["Frogger"] = 744705981] = "Frogger";
        VehicleHash2[VehicleHash2["Frogger2"] = 1949211328] = "Frogger2";
        VehicleHash2[VehicleHash2["Fugitive"] = 1909141499] = "Fugitive";
        VehicleHash2[VehicleHash2["Furoregt"] = 3205927392] = "Furoregt";
        VehicleHash2[VehicleHash2["Fusilade"] = 499169875] = "Fusilade";
        VehicleHash2[VehicleHash2["Futo"] = 2016857647] = "Futo";
        VehicleHash2[VehicleHash2["Gargoyle"] = 741090084] = "Gargoyle";
        VehicleHash2[VehicleHash2["Gauntlet"] = 2494797253] = "Gauntlet";
        VehicleHash2[VehicleHash2["Gauntlet2"] = 349315417] = "Gauntlet2";
        VehicleHash2[VehicleHash2["GBurrito"] = 2549763894] = "GBurrito";
        VehicleHash2[VehicleHash2["GBurrito2"] = 296357396] = "GBurrito2";
        VehicleHash2[VehicleHash2["Glendale"] = 75131841] = "Glendale";
        VehicleHash2[VehicleHash2["GP1"] = 1234311532] = "GP1";
        VehicleHash2[VehicleHash2["GrainTrailer"] = 1019737494] = "GrainTrailer";
        VehicleHash2[VehicleHash2["Granger"] = 2519238556] = "Granger";
        VehicleHash2[VehicleHash2["Gresley"] = 2751205197] = "Gresley";
        VehicleHash2[VehicleHash2["Guardian"] = 2186977100] = "Guardian";
        VehicleHash2[VehicleHash2["Habanero"] = 884422927] = "Habanero";
        VehicleHash2[VehicleHash2["Hakuchou"] = 1265391242] = "Hakuchou";
        VehicleHash2[VehicleHash2["Hakuchou2"] = 4039289119] = "Hakuchou2";
        VehicleHash2[VehicleHash2["HalfTrack"] = 4262731174] = "HalfTrack";
        VehicleHash2[VehicleHash2["Handler"] = 444583674] = "Handler";
        VehicleHash2[VehicleHash2["Hauler"] = 1518533038] = "Hauler";
        VehicleHash2[VehicleHash2["Hauler2"] = 387748548] = "Hauler2";
        VehicleHash2[VehicleHash2["Hexer"] = 301427732] = "Hexer";
        VehicleHash2[VehicleHash2["Hotknife"] = 37348240] = "Hotknife";
        VehicleHash2[VehicleHash2["Huntley"] = 486987393] = "Huntley";
        VehicleHash2[VehicleHash2["Hydra"] = 970385471] = "Hydra";
        VehicleHash2[VehicleHash2["Infernus"] = 418536135] = "Infernus";
        VehicleHash2[VehicleHash2["Infernus2"] = 2889029532] = "Infernus2";
        VehicleHash2[VehicleHash2["Ingot"] = 3005245074] = "Ingot";
        VehicleHash2[VehicleHash2["Innovation"] = 4135840458] = "Innovation";
        VehicleHash2[VehicleHash2["Insurgent"] = 2434067162] = "Insurgent";
        VehicleHash2[VehicleHash2["Insurgent2"] = 2071877360] = "Insurgent2";
        VehicleHash2[VehicleHash2["Insurgent3"] = 2370534026] = "Insurgent3";
        VehicleHash2[VehicleHash2["Intruder"] = 886934177] = "Intruder";
        VehicleHash2[VehicleHash2["Issi2"] = 3117103977] = "Issi2";
        VehicleHash2[VehicleHash2["ItaliGTB"] = 2246633323] = "ItaliGTB";
        VehicleHash2[VehicleHash2["ItaliGTB2"] = 3812247419] = "ItaliGTB2";
        VehicleHash2[VehicleHash2["Jackal"] = 3670438162] = "Jackal";
        VehicleHash2[VehicleHash2["JB700"] = 1051415893] = "JB700";
        VehicleHash2[VehicleHash2["Jester"] = 2997294755] = "Jester";
        VehicleHash2[VehicleHash2["Jester2"] = 3188613414] = "Jester2";
        VehicleHash2[VehicleHash2["Jet"] = 1058115860] = "Jet";
        VehicleHash2[VehicleHash2["Jetmax"] = 861409633] = "Jetmax";
        VehicleHash2[VehicleHash2["Journey"] = 4174679674] = "Journey";
        VehicleHash2[VehicleHash2["Kalahari"] = 92612664] = "Kalahari";
        VehicleHash2[VehicleHash2["Khamelion"] = 544021352] = "Khamelion";
        VehicleHash2[VehicleHash2["Kuruma"] = 2922118804] = "Kuruma";
        VehicleHash2[VehicleHash2["Kuruma2"] = 410882957] = "Kuruma2";
        VehicleHash2[VehicleHash2["Landstalker"] = 1269098716] = "Landstalker";
        VehicleHash2[VehicleHash2["Lazer"] = 3013282534] = "Lazer";
        VehicleHash2[VehicleHash2["LE7B"] = 3062131285] = "LE7B";
        VehicleHash2[VehicleHash2["Lectro"] = 640818791] = "Lectro";
        VehicleHash2[VehicleHash2["Lguard"] = 469291905] = "Lguard";
        VehicleHash2[VehicleHash2["Limo2"] = 4180339789] = "Limo2";
        VehicleHash2[VehicleHash2["Lurcher"] = 2068293287] = "Lurcher";
        VehicleHash2[VehicleHash2["Luxor"] = 621481054] = "Luxor";
        VehicleHash2[VehicleHash2["Luxor2"] = 3080673438] = "Luxor2";
        VehicleHash2[VehicleHash2["Lynx"] = 482197771] = "Lynx";
        VehicleHash2[VehicleHash2["Mamba"] = 2634021974] = "Mamba";
        VehicleHash2[VehicleHash2["Mammatus"] = 2548391185] = "Mammatus";
        VehicleHash2[VehicleHash2["Manana"] = 2170765704] = "Manana";
        VehicleHash2[VehicleHash2["Manchez"] = 2771538552] = "Manchez";
        VehicleHash2[VehicleHash2["Marquis"] = 3251507587] = "Marquis";
        VehicleHash2[VehicleHash2["Marshall"] = 1233534620] = "Marshall";
        VehicleHash2[VehicleHash2["Massacro"] = 4152024626] = "Massacro";
        VehicleHash2[VehicleHash2["Massacro2"] = 3663206819] = "Massacro2";
        VehicleHash2[VehicleHash2["Maverick"] = 2634305738] = "Maverick";
        VehicleHash2[VehicleHash2["Mesa"] = 914654722] = "Mesa";
        VehicleHash2[VehicleHash2["Mesa2"] = 3546958660] = "Mesa2";
        VehicleHash2[VehicleHash2["Mesa3"] = 2230595153] = "Mesa3";
        VehicleHash2[VehicleHash2["MetroTrain"] = 868868440] = "MetroTrain";
        VehicleHash2[VehicleHash2["Miljet"] = 165154707] = "Miljet";
        VehicleHash2[VehicleHash2["Minivan"] = 3984502180] = "Minivan";
        VehicleHash2[VehicleHash2["Minivan2"] = 3168702960] = "Minivan2";
        VehicleHash2[VehicleHash2["Mixer"] = 3510150843] = "Mixer";
        VehicleHash2[VehicleHash2["Mixer2"] = 475220373] = "Mixer2";
        VehicleHash2[VehicleHash2["Monroe"] = 3861591579] = "Monroe";
        VehicleHash2[VehicleHash2["Monster"] = 3449006043] = "Monster";
        VehicleHash2[VehicleHash2["Moonbeam"] = 525509695] = "Moonbeam";
        VehicleHash2[VehicleHash2["Moonbeam2"] = 1896491931] = "Moonbeam2";
        VehicleHash2[VehicleHash2["Mower"] = 1783355638] = "Mower";
        VehicleHash2[VehicleHash2["Mule"] = 904750859] = "Mule";
        VehicleHash2[VehicleHash2["Mule2"] = 3244501995] = "Mule2";
        VehicleHash2[VehicleHash2["Mule3"] = 2242229361] = "Mule3";
        VehicleHash2[VehicleHash2["Nemesis"] = 3660088182] = "Nemesis";
        VehicleHash2[VehicleHash2["Nero"] = 1034187331] = "Nero";
        VehicleHash2[VehicleHash2["Nero2"] = 1093792632] = "Nero2";
        VehicleHash2[VehicleHash2["Nightblade"] = 2688780135] = "Nightblade";
        VehicleHash2[VehicleHash2["Nightshade"] = 2351681756] = "Nightshade";
        VehicleHash2[VehicleHash2["NightShark"] = 433954513] = "NightShark";
        VehicleHash2[VehicleHash2["Nimbus"] = 2999939664] = "Nimbus";
        VehicleHash2[VehicleHash2["Ninef"] = 1032823388] = "Ninef";
        VehicleHash2[VehicleHash2["Ninef2"] = 2833484545] = "Ninef2";
        VehicleHash2[VehicleHash2["Omnis"] = 3517794615] = "Omnis";
        VehicleHash2[VehicleHash2["Oppressor"] = 884483972] = "Oppressor";
        VehicleHash2[VehicleHash2["Oracle"] = 1348744438] = "Oracle";
        VehicleHash2[VehicleHash2["Oracle2"] = 3783366066] = "Oracle2";
        VehicleHash2[VehicleHash2["Osiris"] = 1987142870] = "Osiris";
        VehicleHash2[VehicleHash2["Packer"] = 569305213] = "Packer";
        VehicleHash2[VehicleHash2["Panto"] = 3863274624] = "Panto";
        VehicleHash2[VehicleHash2["Paradise"] = 1488164764] = "Paradise";
        VehicleHash2[VehicleHash2["Patriot"] = 3486509883] = "Patriot";
        VehicleHash2[VehicleHash2["PBus"] = 2287941233] = "PBus";
        VehicleHash2[VehicleHash2["PCJ"] = 3385765638] = "PCJ";
        VehicleHash2[VehicleHash2["Penetrator"] = 2536829930] = "Penetrator";
        VehicleHash2[VehicleHash2["Penumbra"] = 3917501776] = "Penumbra";
        VehicleHash2[VehicleHash2["Peyote"] = 1830407356] = "Peyote";
        VehicleHash2[VehicleHash2["Pfister811"] = 2465164804] = "Pfister811";
        VehicleHash2[VehicleHash2["Phantom"] = 2157618379] = "Phantom";
        VehicleHash2[VehicleHash2["Phantom2"] = 2645431192] = "Phantom2";
        VehicleHash2[VehicleHash2["Phantom3"] = 177270108] = "Phantom3";
        VehicleHash2[VehicleHash2["Phoenix"] = 2199527893] = "Phoenix";
        VehicleHash2[VehicleHash2["Picador"] = 1507916787] = "Picador";
        VehicleHash2[VehicleHash2["Pigalle"] = 1078682497] = "Pigalle";
        VehicleHash2[VehicleHash2["Police"] = 2046537925] = "Police";
        VehicleHash2[VehicleHash2["Police2"] = 2667966721] = "Police2";
        VehicleHash2[VehicleHash2["Police3"] = 1912215274] = "Police3";
        VehicleHash2[VehicleHash2["Police4"] = 2321795001] = "Police4";
        VehicleHash2[VehicleHash2["Policeb"] = 4260343491] = "Policeb";
        VehicleHash2[VehicleHash2["PoliceOld1"] = 2758042359] = "PoliceOld1";
        VehicleHash2[VehicleHash2["PoliceOld2"] = 2515846680] = "PoliceOld2";
        VehicleHash2[VehicleHash2["PoliceT"] = 456714581] = "PoliceT";
        VehicleHash2[VehicleHash2["Polmav"] = 353883353] = "Polmav";
        VehicleHash2[VehicleHash2["Pony"] = 4175309224] = "Pony";
        VehicleHash2[VehicleHash2["Pony2"] = 943752001] = "Pony2";
        VehicleHash2[VehicleHash2["Pounder"] = 2112052861] = "Pounder";
        VehicleHash2[VehicleHash2["Prairie"] = 2844316578] = "Prairie";
        VehicleHash2[VehicleHash2["Pranger"] = 741586030] = "Pranger";
        VehicleHash2[VehicleHash2["Predator"] = 3806844075] = "Predator";
        VehicleHash2[VehicleHash2["Premier"] = 2411098011] = "Premier";
        VehicleHash2[VehicleHash2["Primo"] = 3144368207] = "Primo";
        VehicleHash2[VehicleHash2["Primo2"] = 2254540506] = "Primo2";
        VehicleHash2[VehicleHash2["PropTrailer"] = 356391690] = "PropTrailer";
        VehicleHash2[VehicleHash2["Prototipo"] = 2123327359] = "Prototipo";
        VehicleHash2[VehicleHash2["Radi"] = 2643899483] = "Radi";
        VehicleHash2[VehicleHash2["RakeTrailer"] = 390902130] = "RakeTrailer";
        VehicleHash2[VehicleHash2["RancherXL"] = 1645267888] = "RancherXL";
        VehicleHash2[VehicleHash2["RancherXL2"] = 1933662059] = "RancherXL2";
        VehicleHash2[VehicleHash2["RallyTruck"] = 2191146052] = "RallyTruck";
        VehicleHash2[VehicleHash2["RapidGT"] = 2360515092] = "RapidGT";
        VehicleHash2[VehicleHash2["RapidGT2"] = 1737773231] = "RapidGT2";
        VehicleHash2[VehicleHash2["Raptor"] = 3620039993] = "Raptor";
        VehicleHash2[VehicleHash2["RatBike"] = 1873600305] = "RatBike";
        VehicleHash2[VehicleHash2["RatLoader"] = 3627815886] = "RatLoader";
        VehicleHash2[VehicleHash2["RatLoader2"] = 3705788919] = "RatLoader2";
        VehicleHash2[VehicleHash2["Reaper"] = 234062309] = "Reaper";
        VehicleHash2[VehicleHash2["Rebel"] = 3087195462] = "Rebel";
        VehicleHash2[VehicleHash2["Rebel2"] = 2249373259] = "Rebel2";
        VehicleHash2[VehicleHash2["Regina"] = 4280472072] = "Regina";
        VehicleHash2[VehicleHash2["RentalBus"] = 3196165219] = "RentalBus";
        VehicleHash2[VehicleHash2["Rhapsody"] = 841808271] = "Rhapsody";
        VehicleHash2[VehicleHash2["Rhino"] = 782665360] = "Rhino";
        VehicleHash2[VehicleHash2["Riot"] = 3089277354] = "Riot";
        VehicleHash2[VehicleHash2["Ripley"] = 3448987385] = "Ripley";
        VehicleHash2[VehicleHash2["Rocoto"] = 2136773105] = "Rocoto";
        VehicleHash2[VehicleHash2["Romero"] = 627094268] = "Romero";
        VehicleHash2[VehicleHash2["Rubble"] = 2589662668] = "Rubble";
        VehicleHash2[VehicleHash2["Ruffian"] = 3401388520] = "Ruffian";
        VehicleHash2[VehicleHash2["Ruiner"] = 4067225593] = "Ruiner";
        VehicleHash2[VehicleHash2["Ruiner2"] = 941494461] = "Ruiner2";
        VehicleHash2[VehicleHash2["Ruiner3"] = 777714999] = "Ruiner3";
        VehicleHash2[VehicleHash2["Rumpo"] = 1162065741] = "Rumpo";
        VehicleHash2[VehicleHash2["Rumpo2"] = 2518351607] = "Rumpo2";
        VehicleHash2[VehicleHash2["Rumpo3"] = 1475773103] = "Rumpo3";
        VehicleHash2[VehicleHash2["Ruston"] = 719660200] = "Ruston";
        VehicleHash2[VehicleHash2["SabreGT"] = 2609945748] = "SabreGT";
        VehicleHash2[VehicleHash2["SabreGT2"] = 223258115] = "SabreGT2";
        VehicleHash2[VehicleHash2["Sadler"] = 3695398481] = "Sadler";
        VehicleHash2[VehicleHash2["Sadler2"] = 734217681] = "Sadler2";
        VehicleHash2[VehicleHash2["Sanchez"] = 788045382] = "Sanchez";
        VehicleHash2[VehicleHash2["Sanchez2"] = 2841686334] = "Sanchez2";
        VehicleHash2[VehicleHash2["Sanctus"] = 1491277511] = "Sanctus";
        VehicleHash2[VehicleHash2["Sandking"] = 3105951696] = "Sandking";
        VehicleHash2[VehicleHash2["Sandking2"] = 989381445] = "Sandking2";
        VehicleHash2[VehicleHash2["Savage"] = 4212341271] = "Savage";
        VehicleHash2[VehicleHash2["Schafter2"] = 3039514899] = "Schafter2";
        VehicleHash2[VehicleHash2["Schafter3"] = 2809443750] = "Schafter3";
        VehicleHash2[VehicleHash2["Schafter4"] = 1489967196] = "Schafter4";
        VehicleHash2[VehicleHash2["Schafter5"] = 3406724313] = "Schafter5";
        VehicleHash2[VehicleHash2["Schafter6"] = 1922255844] = "Schafter6";
        VehicleHash2[VehicleHash2["Schwarzer"] = 3548084598] = "Schwarzer";
        VehicleHash2[VehicleHash2["Scorcher"] = 4108429845] = "Scorcher";
        VehicleHash2[VehicleHash2["Scrap"] = 2594165727] = "Scrap";
        VehicleHash2[VehicleHash2["Seashark"] = 3264692260] = "Seashark";
        VehicleHash2[VehicleHash2["Seashark2"] = 3678636260] = "Seashark2";
        VehicleHash2[VehicleHash2["Seashark3"] = 3983945033] = "Seashark3";
        VehicleHash2[VehicleHash2["Seminole"] = 1221512915] = "Seminole";
        VehicleHash2[VehicleHash2["Sentinel"] = 1349725314] = "Sentinel";
        VehicleHash2[VehicleHash2["Sentinel2"] = 873639469] = "Sentinel2";
        VehicleHash2[VehicleHash2["Serrano"] = 1337041428] = "Serrano";
        VehicleHash2[VehicleHash2["Seven70"] = 2537130571] = "Seven70";
        VehicleHash2[VehicleHash2["Shamal"] = 3080461301] = "Shamal";
        VehicleHash2[VehicleHash2["Sheava"] = 819197656] = "Sheava";
        VehicleHash2[VehicleHash2["Sheriff"] = 2611638396] = "Sheriff";
        VehicleHash2[VehicleHash2["Sheriff2"] = 1922257928] = "Sheriff2";
        VehicleHash2[VehicleHash2["Shotaro"] = 3889340782] = "Shotaro";
        VehicleHash2[VehicleHash2["Skylift"] = 1044954915] = "Skylift";
        VehicleHash2[VehicleHash2["SlamVan"] = 729783779] = "SlamVan";
        VehicleHash2[VehicleHash2["SlamVan2"] = 833469436] = "SlamVan2";
        VehicleHash2[VehicleHash2["SlamVan3"] = 1119641113] = "SlamVan3";
        VehicleHash2[VehicleHash2["Sovereign"] = 743478836] = "Sovereign";
        VehicleHash2[VehicleHash2["Specter"] = 1886268224] = "Specter";
        VehicleHash2[VehicleHash2["Specter2"] = 1074745671] = "Specter2";
        VehicleHash2[VehicleHash2["Speeder"] = 231083307] = "Speeder";
        VehicleHash2[VehicleHash2["Speeder2"] = 437538602] = "Speeder2";
        VehicleHash2[VehicleHash2["Speedo"] = 3484649228] = "Speedo";
        VehicleHash2[VehicleHash2["Speedo2"] = 728614474] = "Speedo2";
        VehicleHash2[VehicleHash2["Squalo"] = 400514754] = "Squalo";
        VehicleHash2[VehicleHash2["Stalion"] = 1923400478] = "Stalion";
        VehicleHash2[VehicleHash2["Stalion2"] = 3893323758] = "Stalion2";
        VehicleHash2[VehicleHash2["Stanier"] = 2817386317] = "Stanier";
        VehicleHash2[VehicleHash2["Stinger"] = 1545842587] = "Stinger";
        VehicleHash2[VehicleHash2["StingerGT"] = 2196019706] = "StingerGT";
        VehicleHash2[VehicleHash2["Stockade"] = 1747439474] = "Stockade";
        VehicleHash2[VehicleHash2["Stockade3"] = 4080511798] = "Stockade3";
        VehicleHash2[VehicleHash2["Stratum"] = 1723137093] = "Stratum";
        VehicleHash2[VehicleHash2["Stretch"] = 2333339779] = "Stretch";
        VehicleHash2[VehicleHash2["Stunt"] = 2172210288] = "Stunt";
        VehicleHash2[VehicleHash2["Submersible"] = 771711535] = "Submersible";
        VehicleHash2[VehicleHash2["Submersible2"] = 3228633070] = "Submersible2";
        VehicleHash2[VehicleHash2["Sultan"] = 970598228] = "Sultan";
        VehicleHash2[VehicleHash2["SultanRS"] = 3999278268] = "SultanRS";
        VehicleHash2[VehicleHash2["Suntrap"] = 4012021193] = "Suntrap";
        VehicleHash2[VehicleHash2["Superd"] = 1123216662] = "Superd";
        VehicleHash2[VehicleHash2["Supervolito"] = 710198397] = "Supervolito";
        VehicleHash2[VehicleHash2["Supervolito2"] = 2623428164] = "Supervolito2";
        VehicleHash2[VehicleHash2["Surano"] = 384071873] = "Surano";
        VehicleHash2[VehicleHash2["Surfer"] = 699456151] = "Surfer";
        VehicleHash2[VehicleHash2["Surfer2"] = 2983726598] = "Surfer2";
        VehicleHash2[VehicleHash2["Surge"] = 2400073108] = "Surge";
        VehicleHash2[VehicleHash2["Swift2"] = 1075432268] = "Swift2";
        VehicleHash2[VehicleHash2["Swift"] = 3955379698] = "Swift";
        VehicleHash2[VehicleHash2["T20"] = 1663218586] = "T20";
        VehicleHash2[VehicleHash2["Taco"] = 1951180813] = "Taco";
        VehicleHash2[VehicleHash2["Tailgater"] = 3286105550] = "Tailgater";
        VehicleHash2[VehicleHash2["Tampa"] = 972671128] = "Tampa";
        VehicleHash2[VehicleHash2["Tampa2"] = 3223586949] = "Tampa2";
        VehicleHash2[VehicleHash2["Tampa3"] = 3084515313] = "Tampa3";
        VehicleHash2[VehicleHash2["Tanker"] = 3564062519] = "Tanker";
        VehicleHash2[VehicleHash2["Tanker2"] = 1956216962] = "Tanker2";
        VehicleHash2[VehicleHash2["TankerCar"] = 586013744] = "TankerCar";
        VehicleHash2[VehicleHash2["Taxi"] = 3338918751] = "Taxi";
        VehicleHash2[VehicleHash2["Technical"] = 2198148358] = "Technical";
        VehicleHash2[VehicleHash2["Technical2"] = 1180875963] = "Technical2";
        VehicleHash2[VehicleHash2["Technical3"] = 1356124575] = "Technical3";
        VehicleHash2[VehicleHash2["Tempesta"] = 272929391] = "Tempesta";
        VehicleHash2[VehicleHash2["Thrust"] = 1836027715] = "Thrust";
        VehicleHash2[VehicleHash2["TipTruck"] = 48339065] = "TipTruck";
        VehicleHash2[VehicleHash2["TipTruck2"] = 3347205726] = "TipTruck2";
        VehicleHash2[VehicleHash2["Titan"] = 1981688531] = "Titan";
        VehicleHash2[VehicleHash2["Torero"] = 1504306544] = "Torero";
        VehicleHash2[VehicleHash2["Tornado"] = 464687292] = "Tornado";
        VehicleHash2[VehicleHash2["Tornado2"] = 1531094468] = "Tornado2";
        VehicleHash2[VehicleHash2["Tornado3"] = 1762279763] = "Tornado3";
        VehicleHash2[VehicleHash2["Tornado4"] = 2261744861] = "Tornado4";
        VehicleHash2[VehicleHash2["Tornado5"] = 2497353967] = "Tornado5";
        VehicleHash2[VehicleHash2["Tornado6"] = 2736567667] = "Tornado6";
        VehicleHash2[VehicleHash2["Toro"] = 1070967343] = "Toro";
        VehicleHash2[VehicleHash2["Toro2"] = 908897389] = "Toro2";
        VehicleHash2[VehicleHash2["Tourbus"] = 1941029835] = "Tourbus";
        VehicleHash2[VehicleHash2["TowTruck"] = 2971866336] = "TowTruck";
        VehicleHash2[VehicleHash2["TowTruck2"] = 3852654278] = "TowTruck2";
        VehicleHash2[VehicleHash2["TR2"] = 2078290630] = "TR2";
        VehicleHash2[VehicleHash2["TR3"] = 1784254509] = "TR3";
        VehicleHash2[VehicleHash2["TR4"] = 2091594960] = "TR4";
        VehicleHash2[VehicleHash2["Tractor"] = 1641462412] = "Tractor";
        VehicleHash2[VehicleHash2["Tractor2"] = 2218488798] = "Tractor2";
        VehicleHash2[VehicleHash2["Tractor3"] = 1445631933] = "Tractor3";
        VehicleHash2[VehicleHash2["TrailerLogs"] = 2016027501] = "TrailerLogs";
        VehicleHash2[VehicleHash2["TrailerLarge"] = 1502869817] = "TrailerLarge";
        VehicleHash2[VehicleHash2["Trailers"] = 3417488910] = "Trailers";
        VehicleHash2[VehicleHash2["Trailers2"] = 2715434129] = "Trailers2";
        VehicleHash2[VehicleHash2["Trailers3"] = 2236089197] = "Trailers3";
        VehicleHash2[VehicleHash2["Trailers4"] = 3194418602] = "Trailers4";
        VehicleHash2[VehicleHash2["TrailerSmall"] = 712162987] = "TrailerSmall";
        VehicleHash2[VehicleHash2["TrailerSmall2"] = 2413121211] = "TrailerSmall2";
        VehicleHash2[VehicleHash2["Trash"] = 1917016601] = "Trash";
        VehicleHash2[VehicleHash2["Trash2"] = 3039269212] = "Trash2";
        VehicleHash2[VehicleHash2["TRFlat"] = 2942498482] = "TRFlat";
        VehicleHash2[VehicleHash2["TriBike"] = 1127861609] = "TriBike";
        VehicleHash2[VehicleHash2["TriBike2"] = 3061159916] = "TriBike2";
        VehicleHash2[VehicleHash2["TriBike3"] = 3894672200] = "TriBike3";
        VehicleHash2[VehicleHash2["TrophyTruck"] = 101905590] = "TrophyTruck";
        VehicleHash2[VehicleHash2["TrophyTruck2"] = 3631668194] = "TrophyTruck2";
        VehicleHash2[VehicleHash2["Tropic"] = 290013743] = "Tropic";
        VehicleHash2[VehicleHash2["Tropic2"] = 1448677353] = "Tropic2";
        VehicleHash2[VehicleHash2["Tropos"] = 1887331236] = "Tropos";
        VehicleHash2[VehicleHash2["Tug"] = 2194326579] = "Tug";
        VehicleHash2[VehicleHash2["Turismor"] = 408192225] = "Turismor";
        VehicleHash2[VehicleHash2["Turismo2"] = 3312836369] = "Turismo2";
        VehicleHash2[VehicleHash2["TVTrailer"] = 2524324030] = "TVTrailer";
        VehicleHash2[VehicleHash2["Tyrus"] = 2067820283] = "Tyrus";
        VehicleHash2[VehicleHash2["UtilliTruck"] = 516990260] = "UtilliTruck";
        VehicleHash2[VehicleHash2["UtilliTruck2"] = 887537515] = "UtilliTruck2";
        VehicleHash2[VehicleHash2["UtilliTruck3"] = 2132890591] = "UtilliTruck3";
        VehicleHash2[VehicleHash2["Vacca"] = 338562499] = "Vacca";
        VehicleHash2[VehicleHash2["Vader"] = 4154065143] = "Vader";
        VehicleHash2[VehicleHash2["Vagner"] = 1939284556] = "Vagner";
        VehicleHash2[VehicleHash2["Valkyrie"] = 2694714877] = "Valkyrie";
        VehicleHash2[VehicleHash2["Valkyrie2"] = 1543134283] = "Valkyrie2";
        VehicleHash2[VehicleHash2["Velum"] = 2621610858] = "Velum";
        VehicleHash2[VehicleHash2["Velum2"] = 1077420264] = "Velum2";
        VehicleHash2[VehicleHash2["Verlierer2"] = 1102544804] = "Verlierer2";
        VehicleHash2[VehicleHash2["Vestra"] = 1341619767] = "Vestra";
        VehicleHash2[VehicleHash2["Vigero"] = 3469130167] = "Vigero";
        VehicleHash2[VehicleHash2["Vindicator"] = 2941886209] = "Vindicator";
        VehicleHash2[VehicleHash2["Virgo"] = 3796912450] = "Virgo";
        VehicleHash2[VehicleHash2["Virgo2"] = 3395457658] = "Virgo2";
        VehicleHash2[VehicleHash2["Virgo3"] = 16646064] = "Virgo3";
        VehicleHash2[VehicleHash2["Volatus"] = 2449479409] = "Volatus";
        VehicleHash2[VehicleHash2["Voltic"] = 2672523198] = "Voltic";
        VehicleHash2[VehicleHash2["Voltic2"] = 989294410] = "Voltic2";
        VehicleHash2[VehicleHash2["Voodoo"] = 2006667053] = "Voodoo";
        VehicleHash2[VehicleHash2["Voodoo2"] = 523724515] = "Voodoo2";
        VehicleHash2[VehicleHash2["Vortex"] = 3685342204] = "Vortex";
        VehicleHash2[VehicleHash2["Warrener"] = 1373123368] = "Warrener";
        VehicleHash2[VehicleHash2["Washington"] = 1777363799] = "Washington";
        VehicleHash2[VehicleHash2["Wastelander"] = 2382949506] = "Wastelander";
        VehicleHash2[VehicleHash2["Windsor"] = 1581459400] = "Windsor";
        VehicleHash2[VehicleHash2["Windsor2"] = 2364918497] = "Windsor2";
        VehicleHash2[VehicleHash2["Wolfsbane"] = 3676349299] = "Wolfsbane";
        VehicleHash2[VehicleHash2["XA21"] = 917809321] = "XA21";
        VehicleHash2[VehicleHash2["XLS"] = 1203490606] = "XLS";
        VehicleHash2[VehicleHash2["XLS2"] = 3862958888] = "XLS2";
        VehicleHash2[VehicleHash2["Youga"] = 65402552] = "Youga";
        VehicleHash2[VehicleHash2["Youga2"] = 1026149675] = "Youga2";
        VehicleHash2[VehicleHash2["Zentorno"] = 2891838741] = "Zentorno";
        VehicleHash2[VehicleHash2["Zion"] = 3172678083] = "Zion";
        VehicleHash2[VehicleHash2["Zion2"] = 3101863448] = "Zion2";
        VehicleHash2[VehicleHash2["ZombieA"] = 3285698347] = "ZombieA";
        VehicleHash2[VehicleHash2["ZombieB"] = 3724934023] = "ZombieB";
        VehicleHash2[VehicleHash2["ZType"] = 758895617] = "ZType";
      })(VehicleHash || (VehicleHash = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/WeaponHash.js
  var WeaponHash, VehicleWeaponHash, AmmoType;
  var init_WeaponHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/WeaponHash.js"() {
      (function(WeaponHash2) {
        WeaponHash2[WeaponHash2["Dagger"] = -1834847097] = "Dagger";
        WeaponHash2[WeaponHash2["Bat"] = -1786099057] = "Bat";
        WeaponHash2[WeaponHash2["Bottle"] = -102323637] = "Bottle";
        WeaponHash2[WeaponHash2["Crowbar"] = -2067956739] = "Crowbar";
        WeaponHash2[WeaponHash2["Unarmed"] = -1569615261] = "Unarmed";
        WeaponHash2[WeaponHash2["Flashlight"] = -1951375401] = "Flashlight";
        WeaponHash2[WeaponHash2["GolfClub"] = 1141786504] = "GolfClub";
        WeaponHash2[WeaponHash2["Hammer"] = 1317494643] = "Hammer";
        WeaponHash2[WeaponHash2["Hatchet"] = -102973651] = "Hatchet";
        WeaponHash2[WeaponHash2["KnuckleDuster"] = -656458692] = "KnuckleDuster";
        WeaponHash2[WeaponHash2["Knife"] = -1716189206] = "Knife";
        WeaponHash2[WeaponHash2["Machete"] = -581044007] = "Machete";
        WeaponHash2[WeaponHash2["SwitchBlade"] = -538741184] = "SwitchBlade";
        WeaponHash2[WeaponHash2["Nightstick"] = 1737195953] = "Nightstick";
        WeaponHash2[WeaponHash2["Wrench"] = 419712736] = "Wrench";
        WeaponHash2[WeaponHash2["BattleAxe"] = -853065399] = "BattleAxe";
        WeaponHash2[WeaponHash2["PoolCue"] = -1810795771] = "PoolCue";
        WeaponHash2[WeaponHash2["StoneHatchet"] = 940833800] = "StoneHatchet";
        WeaponHash2[WeaponHash2["Pistol"] = 453432689] = "Pistol";
        WeaponHash2[WeaponHash2["PistolMk2"] = 3219281620] = "PistolMk2";
        WeaponHash2[WeaponHash2["CombatPistol"] = 1593441988] = "CombatPistol";
        WeaponHash2[WeaponHash2["APPistol"] = 584646201] = "APPistol";
        WeaponHash2[WeaponHash2["StunGun"] = 911657153] = "StunGun";
        WeaponHash2[WeaponHash2["StunGunMp"] = 1171102963] = "StunGunMp";
        WeaponHash2[WeaponHash2["Pistol50"] = -1716589765] = "Pistol50";
        WeaponHash2[WeaponHash2["SNSPistol"] = -1076751822] = "SNSPistol";
        WeaponHash2[WeaponHash2["SNSPistolMk2"] = -2009644972] = "SNSPistolMk2";
        WeaponHash2[WeaponHash2["HeavyPistol"] = -771403250] = "HeavyPistol";
        WeaponHash2[WeaponHash2["VintagePistol"] = 137902532] = "VintagePistol";
        WeaponHash2[WeaponHash2["FlareGun"] = 1198879012] = "FlareGun";
        WeaponHash2[WeaponHash2["MarksmanPistol"] = -598887786] = "MarksmanPistol";
        WeaponHash2[WeaponHash2["Revolver"] = -1045183535] = "Revolver";
        WeaponHash2[WeaponHash2["RevolverMk2"] = -879347409] = "RevolverMk2";
        WeaponHash2[WeaponHash2["DoubleAction"] = -1746263880] = "DoubleAction";
        WeaponHash2[WeaponHash2["RayPistol"] = -1355376991] = "RayPistol";
        WeaponHash2[WeaponHash2["CeramicPistol"] = 727643628] = "CeramicPistol";
        WeaponHash2[WeaponHash2["NavyRevolver"] = -1853920116] = "NavyRevolver";
        WeaponHash2[WeaponHash2["GadgetPistol"] = 1470379660] = "GadgetPistol";
        WeaponHash2[WeaponHash2["MicroSMG"] = 324215364] = "MicroSMG";
        WeaponHash2[WeaponHash2["SMG"] = 736523883] = "SMG";
        WeaponHash2[WeaponHash2["SMGMk2"] = 2024373456] = "SMGMk2";
        WeaponHash2[WeaponHash2["AssaultSMG"] = -270015777] = "AssaultSMG";
        WeaponHash2[WeaponHash2["CombatPDW"] = 171789620] = "CombatPDW";
        WeaponHash2[WeaponHash2["MachinePistol"] = -619010992] = "MachinePistol";
        WeaponHash2[WeaponHash2["MiniSMG"] = -1121678507] = "MiniSMG";
        WeaponHash2[WeaponHash2["RayCarbine"] = 1198256469] = "RayCarbine";
        WeaponHash2[WeaponHash2["MG"] = -1660422300] = "MG";
        WeaponHash2[WeaponHash2["CombatMG"] = 2144741730] = "CombatMG";
        WeaponHash2[WeaponHash2["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
        WeaponHash2[WeaponHash2["Gusenberg"] = 1627465347] = "Gusenberg";
        WeaponHash2[WeaponHash2["PumpShotgun"] = 487013001] = "PumpShotgun";
        WeaponHash2[WeaponHash2["PumpShotgunMk2"] = 1432025498] = "PumpShotgunMk2";
        WeaponHash2[WeaponHash2["SawnOffShotgun"] = 2017895192] = "SawnOffShotgun";
        WeaponHash2[WeaponHash2["AssaultShotgun"] = -494615257] = "AssaultShotgun";
        WeaponHash2[WeaponHash2["BullpupShotgun"] = -1654528753] = "BullpupShotgun";
        WeaponHash2[WeaponHash2["Musket"] = -1466123874] = "Musket";
        WeaponHash2[WeaponHash2["HeavyShotgun"] = 984333226] = "HeavyShotgun";
        WeaponHash2[WeaponHash2["DoubleBarrelShotgun"] = -275439685] = "DoubleBarrelShotgun";
        WeaponHash2[WeaponHash2["SweeperShotgun"] = 317205821] = "SweeperShotgun";
        WeaponHash2[WeaponHash2["CombatShotgun"] = 94989220] = "CombatShotgun";
        WeaponHash2[WeaponHash2["AssaultRifle"] = -1074790547] = "AssaultRifle";
        WeaponHash2[WeaponHash2["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
        WeaponHash2[WeaponHash2["CarbineRifle"] = -2084633992] = "CarbineRifle";
        WeaponHash2[WeaponHash2["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
        WeaponHash2[WeaponHash2["AdvancedRifle"] = -1357824103] = "AdvancedRifle";
        WeaponHash2[WeaponHash2["SpecialCarbine"] = -1063057011] = "SpecialCarbine";
        WeaponHash2[WeaponHash2["SpecialCarbineMk2"] = -1768145561] = "SpecialCarbineMk2";
        WeaponHash2[WeaponHash2["BullpupRifle"] = 2132975508] = "BullpupRifle";
        WeaponHash2[WeaponHash2["BullpupRifleMk2"] = -2066285827] = "BullpupRifleMk2";
        WeaponHash2[WeaponHash2["CompactRifle"] = 1649403952] = "CompactRifle";
        WeaponHash2[WeaponHash2["MilitaryRifle"] = -1658906650] = "MilitaryRifle";
        WeaponHash2[WeaponHash2["HeavyRifle"] = -947031628] = "HeavyRifle";
        WeaponHash2[WeaponHash2["SniperRifle"] = 100416529] = "SniperRifle";
        WeaponHash2[WeaponHash2["HeavySniper"] = 205991906] = "HeavySniper";
        WeaponHash2[WeaponHash2["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
        WeaponHash2[WeaponHash2["MarksmanRifle"] = -952879014] = "MarksmanRifle";
        WeaponHash2[WeaponHash2["MarksmanRifleMk2"] = 1785463520] = "MarksmanRifleMk2";
        WeaponHash2[WeaponHash2["RPG"] = -1312131151] = "RPG";
        WeaponHash2[WeaponHash2["GrenadeLauncher"] = -1568386805] = "GrenadeLauncher";
        WeaponHash2[WeaponHash2["GrenadeLauncherSmoke"] = 1305664598] = "GrenadeLauncherSmoke";
        WeaponHash2[WeaponHash2["Minigun"] = 1119849093] = "Minigun";
        WeaponHash2[WeaponHash2["Firework"] = 2138347493] = "Firework";
        WeaponHash2[WeaponHash2["Railgun"] = 1834241177] = "Railgun";
        WeaponHash2[WeaponHash2["HomingLauncher"] = 1672152130] = "HomingLauncher";
        WeaponHash2[WeaponHash2["CompactGrenadeLauncher"] = 125959754] = "CompactGrenadeLauncher";
        WeaponHash2[WeaponHash2["RayMinigun"] = -1238556825] = "RayMinigun";
        WeaponHash2[WeaponHash2["EmpLauncher"] = -618237638] = "EmpLauncher";
        WeaponHash2[WeaponHash2["Grenade"] = -1813897027] = "Grenade";
        WeaponHash2[WeaponHash2["BZGas"] = -1600701090] = "BZGas";
        WeaponHash2[WeaponHash2["Molotov"] = 615608432] = "Molotov";
        WeaponHash2[WeaponHash2["StickyBomb"] = 741814745] = "StickyBomb";
        WeaponHash2[WeaponHash2["ProximityMine"] = -1420407917] = "ProximityMine";
        WeaponHash2[WeaponHash2["Snowball"] = 126349499] = "Snowball";
        WeaponHash2[WeaponHash2["PipeBomb"] = -1169823560] = "PipeBomb";
        WeaponHash2[WeaponHash2["Ball"] = 600439132] = "Ball";
        WeaponHash2[WeaponHash2["SmokeGrenade"] = -37975472] = "SmokeGrenade";
        WeaponHash2[WeaponHash2["Flare"] = 1233104067] = "Flare";
        WeaponHash2[WeaponHash2["PetrolCan"] = 883325847] = "PetrolCan";
        WeaponHash2[WeaponHash2["Parachute"] = -72657034] = "Parachute";
        WeaponHash2[WeaponHash2["FireExtinguisher"] = 101631238] = "FireExtinguisher";
        WeaponHash2[WeaponHash2["HazardCan"] = -1168940174] = "HazardCan";
        WeaponHash2[WeaponHash2["FertilizerCan"] = 406929569] = "FertilizerCan";
      })(WeaponHash || (WeaponHash = {}));
      (function(VehicleWeaponHash2) {
        VehicleWeaponHash2[VehicleWeaponHash2["Invalid"] = -1] = "Invalid";
        VehicleWeaponHash2[VehicleWeaponHash2["Tank"] = 1945616459] = "Tank";
        VehicleWeaponHash2[VehicleWeaponHash2["SpaceRocket"] = -123497569] = "SpaceRocket";
        VehicleWeaponHash2[VehicleWeaponHash2["PlaneRocket"] = -821520672] = "PlaneRocket";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerLaser"] = -268631733] = "PlayerLaser";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerBullet"] = 1259576109] = "PlayerBullet";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerBuzzard"] = 1186503822] = "PlayerBuzzard";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerHunter"] = -1625648674] = "PlayerHunter";
        VehicleWeaponHash2[VehicleWeaponHash2["PlayerLazer"] = -494786007] = "PlayerLazer";
        VehicleWeaponHash2[VehicleWeaponHash2["EnemyLaser"] = 1566990507] = "EnemyLaser";
        VehicleWeaponHash2[VehicleWeaponHash2["SearchLight"] = -844344963] = "SearchLight";
        VehicleWeaponHash2[VehicleWeaponHash2["Radar"] = -764006018] = "Radar";
      })(VehicleWeaponHash || (VehicleWeaponHash = {}));
      (function(AmmoType2) {
        AmmoType2[AmmoType2["Melee"] = 0] = "Melee";
        AmmoType2[AmmoType2["FireExtinguisher"] = 1359393852] = "FireExtinguisher";
        AmmoType2[AmmoType2["Flare"] = 1808594799] = "Flare";
        AmmoType2[AmmoType2["FlareGun"] = 1173416293] = "FlareGun";
        AmmoType2[AmmoType2["PetrolCan"] = 3395492001] = "PetrolCan";
        AmmoType2[AmmoType2["Shotgun"] = 2416459067] = "Shotgun";
        AmmoType2[AmmoType2["Pistol"] = 1950175060] = "Pistol";
        AmmoType2[AmmoType2["Ball"] = 4287981158] = "Ball";
        AmmoType2[AmmoType2["Snowball"] = 2182627693] = "Snowball";
        AmmoType2[AmmoType2["Sniper"] = 1285032059] = "Sniper";
        AmmoType2[AmmoType2["AssaultRifle"] = 218444191] = "AssaultRifle";
        AmmoType2[AmmoType2["SMG"] = 1820140472] = "SMG";
        AmmoType2[AmmoType2["Molotov"] = 1446246869] = "Molotov";
        AmmoType2[AmmoType2["StunGun"] = 2955849184] = "StunGun";
        AmmoType2[AmmoType2["MG"] = 1788949567] = "MG";
        AmmoType2[AmmoType2["GrenadeLauncher"] = 1003267566] = "GrenadeLauncher";
        AmmoType2[AmmoType2["RPG"] = 1742569970] = "RPG";
        AmmoType2[AmmoType2["Minigun"] = 2680539266] = "Minigun";
        AmmoType2[AmmoType2["Firework"] = 2938367503] = "Firework";
        AmmoType2[AmmoType2["Railgun"] = 2034517757] = "Railgun";
        AmmoType2[AmmoType2["HomingLauncher"] = 2568293933] = "HomingLauncher";
        AmmoType2[AmmoType2["Grenade"] = 1003688881] = "Grenade";
        AmmoType2[AmmoType2["StickyBomb"] = 1411692055] = "StickyBomb";
        AmmoType2[AmmoType2["ProximityMine"] = 2938243239] = "ProximityMine";
        AmmoType2[AmmoType2["PipeBomb"] = 357983224] = "PipeBomb";
        AmmoType2[AmmoType2["SmokeGrenade"] = 3859679398] = "SmokeGrenade";
        AmmoType2[AmmoType2["BZGas"] = 2608103076] = "BZGas";
      })(AmmoType || (AmmoType = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/WeatherTypeHash.js
  var WeatherTypeHash;
  var init_WeatherTypeHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/WeatherTypeHash.js"() {
      (function(WeatherTypeHash2) {
        WeatherTypeHash2[WeatherTypeHash2["Unknown"] = -1] = "Unknown";
        WeatherTypeHash2[WeatherTypeHash2["ExtraSunny"] = -1750463879] = "ExtraSunny";
        WeatherTypeHash2[WeatherTypeHash2["Clear"] = 916995460] = "Clear";
        WeatherTypeHash2[WeatherTypeHash2["Neutral"] = -1530260698] = "Neutral";
        WeatherTypeHash2[WeatherTypeHash2["Smog"] = 282916021] = "Smog";
        WeatherTypeHash2[WeatherTypeHash2["Foggy"] = -1368164796] = "Foggy";
        WeatherTypeHash2[WeatherTypeHash2["Clouds"] = 821931868] = "Clouds";
        WeatherTypeHash2[WeatherTypeHash2["Overcast"] = -1148613331] = "Overcast";
        WeatherTypeHash2[WeatherTypeHash2["Clearing"] = 1840358669] = "Clearing";
        WeatherTypeHash2[WeatherTypeHash2["Raining"] = 1420204096] = "Raining";
        WeatherTypeHash2[WeatherTypeHash2["ThunderStorm"] = -1233681761] = "ThunderStorm";
        WeatherTypeHash2[WeatherTypeHash2["Blizzard"] = 669657108] = "Blizzard";
        WeatherTypeHash2[WeatherTypeHash2["Snowing"] = -273223690] = "Snowing";
        WeatherTypeHash2[WeatherTypeHash2["Snowlight"] = 603685163] = "Snowlight";
        WeatherTypeHash2[WeatherTypeHash2["Christmas"] = -1429616491] = "Christmas";
        WeatherTypeHash2[WeatherTypeHash2["Halloween"] = -921030142] = "Halloween";
      })(WeatherTypeHash || (WeatherTypeHash = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/index.js
  var init_hashes = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/hashes/index.js"() {
      init_MaterialHash();
      init_PedHash();
      init_VehicleHash();
      init_WeaponHash();
      init_WeatherTypeHash();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Model.js
  var Model;
  var init_Model = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Model.js"() {
      init_Game();
      init_hashes();
      init_utils();
      Model = class {
        constructor(hash) {
          if (typeof hash === "string") {
            this.hash = Game.generateHash(hash);
          } else {
            this.hash = hash;
          }
        }
        get Hash() {
          return this.hash;
        }
        get IsValid() {
          return IsModelValid(this.hash);
        }
        get IsInCdImage() {
          return IsModelInCdimage(this.hash);
        }
        get IsLoaded() {
          return HasModelLoaded(this.hash);
        }
        get IsCollisionLoaded() {
          return HasCollisionForModelLoaded(this.hash);
        }
        get IsBicycle() {
          return IsThisModelABicycle(this.hash);
        }
        get IsBike() {
          return IsThisModelABike(this.hash);
        }
        get IsBoat() {
          return IsThisModelABoat(this.hash);
        }
        get IsCar() {
          return IsThisModelACar(this.hash);
        }
        get IsCargobob() {
          return this.hash === VehicleHash.Cargobob || this.hash === VehicleHash.Cargobob2 || this.hash === VehicleHash.Cargobob3 || this.hash === VehicleHash.Cargobob4;
        }
        get IsHelicopter() {
          return IsThisModelAHeli(this.hash);
        }
        get IsPed() {
          return IsModelAPed(this.hash);
        }
        get IsPlane() {
          return IsThisModelAPlane(this.hash);
        }
        get IsProp() {
          return this.IsValid && !this.IsPed && !this.IsVehicle && !IsWeaponValid(this.hash);
        }
        get IsQuadbike() {
          return IsThisModelAQuadbike(this.hash);
        }
        get IsTrain() {
          return IsThisModelATrain(this.hash);
        }
        get IsVehicle() {
          return IsModelAVehicle(this.hash);
        }
        get Dimensions() {
          const [min, max] = GetModelDimensions(this.hash);
          const right = new Vector3(min[0], min[1], min[2]);
          const left = new Vector3(max[0], max[1], max[2]);
          return Vector3.subtract(left, right);
        }
        request(timeout = 1e3) {
          return new Promise((resolve) => {
            if (!this.IsInCdImage && !this.IsValid && !IsWeaponValid(this.hash)) {
              resolve(false);
            }
            RequestModel(this.hash);
            const start = GetGameTimer();
            const interval = setInterval(() => {
              if (this.IsLoaded || GetGameTimer() - start >= timeout) {
                clearInterval(interval);
                this.markAsNoLongerNeeded();
                resolve(this.IsLoaded);
              }
            }, 0);
          });
        }
        markAsNoLongerNeeded() {
          SetModelAsNoLongerNeeded(this.hash);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Entity.js
  var Entity;
  var init_Entity = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Entity.js"() {
      init_Blip2();
      init_enums();
      init_Game();
      init_Model();
      init_utils();
      init_models();
      Entity = class {
        constructor(handle) {
          this.handle = handle;
        }
        static fromHandle(handle) {
          switch (GetEntityType(handle)) {
            case 1:
              return new Ped(handle);
            case 2:
              return new Vehicle(handle);
            case 3:
              return new Prop(handle);
          }
          return null;
        }
        static fromNetworkId(networkId) {
          return this.fromHandle(NetworkGetEntityFromNetworkId(networkId));
        }
        get Handle() {
          return this.handle;
        }
        get NetworkId() {
          return NetworkGetNetworkIdFromEntity(this.handle);
        }
        get Health() {
          return GetEntityHealth(this.handle);
        }
        set Health(amount) {
          SetEntityHealth(this.handle, amount);
        }
        get MaxHealth() {
          return GetEntityMaxHealth(this.handle);
        }
        set MaxHealth(amount) {
          SetEntityMaxHealth(this.handle, amount);
        }
        isDead() {
          return IsEntityDead(this.handle);
        }
        isAlive() {
          return !this.isDead();
        }
        get Model() {
          return new Model(GetEntityModel(this.handle));
        }
        get Position() {
          const coords = GetEntityCoords(this.handle, false);
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        set Position(position) {
          SetEntityCoords(this.handle, position.x, position.y, position.z, false, false, false, true);
        }
        set PositionNoOffset(position) {
          SetEntityCoordsNoOffset(this.handle, position.x, position.y, position.z, true, true, true);
        }
        get Rotation() {
          const rotation = GetEntityRotation(this.handle, 2);
          return new Vector3(rotation[0], rotation[1], rotation[2]);
        }
        set Rotation(rotation) {
          SetEntityRotation(this.handle, rotation.x, rotation.y, rotation.z, 2, true);
        }
        get Quaternion() {
          const quaternion = GetEntityQuaternion(this.handle);
          return new Quaternion(quaternion[0], quaternion[1], quaternion[2], quaternion[3]);
        }
        set Quaternion(quaternion) {
          SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
        }
        get Heading() {
          return GetEntityHeading(this.handle);
        }
        set Heading(heading) {
          SetEntityHeading(this.handle, heading);
        }
        set IsPositionFrozen(value) {
          FreezeEntityPosition(this.handle, value);
        }
        get Velocity() {
          const velocity = GetEntityVelocity(this.handle);
          return new Vector3(velocity[0], velocity[1], velocity[2]);
        }
        set Velocity(velocity) {
          SetEntityVelocity(this.handle, velocity.x, velocity.y, velocity.z);
        }
        get RotationVelocity() {
          const velocity = GetEntityRotationVelocity(this.handle);
          return new Vector3(velocity[0], velocity[1], velocity[2]);
        }
        set MaxSpeed(value) {
          SetEntityMaxSpeed(this.handle, value);
        }
        set HasGravity(value) {
          SetEntityHasGravity(this.handle, value);
        }
        get HeightAboveGround() {
          return GetEntityHeightAboveGround(this.handle);
        }
        get SubmersionLevel() {
          return GetEntitySubmergedLevel(this.handle);
        }
        get LodDistance() {
          return GetEntityLodDist(this.handle);
        }
        set LodDistance(value) {
          SetEntityLodDist(this.handle, value);
        }
        get IsVisible() {
          return IsEntityVisible(this.handle);
        }
        set IsVisible(value) {
          SetEntityVisible(this.handle, value, false);
        }
        get IsOccluded() {
          return IsEntityOccluded(this.handle);
        }
        get IsOnScreen() {
          return IsEntityOnScreen(this.handle);
        }
        get IsUpright() {
          return IsEntityUpright(this.handle, 0);
        }
        get IsUpsideDown() {
          return IsEntityUpsidedown(this.handle);
        }
        get IsInAir() {
          return IsEntityInAir(this.handle);
        }
        get IsInWater() {
          return IsEntityInWater(this.handle);
        }
        get IsPersistent() {
          return IsEntityAMissionEntity(this.handle);
        }
        set IsPersistent(value) {
          if (value) {
            SetEntityAsMissionEntity(this.handle, true, false);
          } else {
            this.markAsNoLongerNeeded();
          }
        }
        get IsOnFire() {
          return IsEntityOnFire(this.handle);
        }
        set IsInvincible(value) {
          SetEntityInvincible(this.handle, value);
        }
        set IsOnlyDamagedByPlayer(value) {
          SetEntityOnlyDamagedByPlayer(this.handle, value);
        }
        get Opacity() {
          return GetEntityAlpha(this.handle);
        }
        set Opacity(value) {
          SetEntityAlpha(this.handle, value, false);
        }
        resetOpacity() {
          ResetEntityAlpha(this.handle);
        }
        get HasCollided() {
          return HasEntityCollidedWithAnything(this.handle);
        }
        get MaterialCollidingWith() {
          return GetLastMaterialHitByEntity(this.handle);
        }
        get IsCollisionEnabled() {
          return !GetEntityCollisonDisabled(this.handle);
        }
        set IsCollisionEnabled(value) {
          SetEntityCollision(this.handle, value, false);
        }
        set IsRecordingCollisions(value) {
          SetEntityRecordsCollisions(this.handle, value);
        }
        get Bones() {
          if (!this.bones) {
            this.bones = new EntityBoneCollection(this);
          }
          return this.bones;
        }
        get AttachedBlip() {
          const handle = GetBlipFromEntity(this.handle);
          if (DoesBlipExist(handle)) {
            return new Blip(handle);
          }
          return null;
        }
        attachBlip() {
          return new Blip(AddBlipForEntity(this.handle));
        }
        setNoCollision(entity, toggle) {
          SetEntityNoCollisionEntity(this.handle, entity.Handle, toggle);
        }
        hasClearLosToEntity(entity, traceType = 17) {
          return HasEntityClearLosToEntity(this.handle, entity.Handle, traceType);
        }
        hasClearLosToEntityInFront(entity) {
          return HasEntityClearLosToEntityInFront(this.handle, entity.Handle);
        }
        hasBeenDamagedBy(entity) {
          return HasEntityBeenDamagedByEntity(this.handle, entity.Handle, true);
        }
        hasBeenDamagedByWeapon(weapon) {
          return HasEntityBeenDamagedByWeapon(this.handle, Number(weapon), 0);
        }
        hasBeenDamagedByAnyWeapon() {
          return HasEntityBeenDamagedByWeapon(this.handle, 0, 2);
        }
        hasBeenDamagedByAnyMeleeWeapon() {
          return HasEntityBeenDamagedByWeapon(this.handle, 0, 1);
        }
        clearLastWeaponDamage() {
          ClearEntityLastWeaponDamage(this.handle);
        }
        isInArea(minBounds, maxBounds) {
          return IsEntityInArea(this.handle, minBounds.x, minBounds.y, minBounds.z, maxBounds.x, maxBounds.y, maxBounds.z, false, false, 0);
        }
        isInAngledArea(origin, edge, angle) {
          return IsEntityInAngledArea(this.handle, origin.x, origin.y, origin.z, edge.x, edge.y, edge.z, angle, false, true, 0);
        }
        isInRangeOf(position, range) {
          const v = Vector3.subtract(this.Position, position);
          return v.dotProduct(v) < range * range;
        }
        isNearEntity(entity, bounds) {
          return IsEntityAtEntity(this.handle, entity.Handle, bounds.x, bounds.y, bounds.z, false, true, 0);
        }
        isTouching(entity) {
          return IsEntityTouchingEntity(this.handle, entity.Handle);
        }
        isTouchingModel(model) {
          return IsEntityTouchingModel(this.handle, model.Hash);
        }
        getOffsetPosition(offset) {
          const o = GetOffsetFromEntityInWorldCoords(this.handle, offset.x, offset.y, offset.z);
          return new Vector3(o[0], o[1], o[2]);
        }
        getPositionOffset(worldCoords) {
          const o = GetOffsetFromEntityGivenWorldCoords(this.handle, worldCoords.x, worldCoords.y, worldCoords.z);
          return new Vector3(o[0], o[1], o[2]);
        }
        attachTo(entity, position, rotation, collisions = false, unk9 = true, useSoftPinning = true, rotationOrder = 1) {
          if (this.handle == entity.Handle) {
            throw new Error("You cannot attach an entity to the same entity this will result in a crash!");
          }
          AttachEntityToEntity(this.handle, entity.Handle, -1, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, unk9, useSoftPinning, collisions, IsEntityAPed(entity.Handle), rotationOrder, true);
        }
        attachToBone(entityBone, position, rotation, collisions = false, unk9 = true, useSoftPinning = true, rotationOrder = 1) {
          if (this.handle == entityBone.Owner.Handle) {
            throw new Error("You cannot attach an entity to the same entity this will result in a crash!");
          }
          AttachEntityToEntity(this.handle, entityBone.Owner.Handle, entityBone.Index, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, unk9, useSoftPinning, collisions, IsEntityAPed(entityBone.Owner.Handle), rotationOrder, true);
        }
        detach() {
          DetachEntity(this.handle, true, true);
        }
        isAttached() {
          return IsEntityAttached(this.handle);
        }
        isAttachedTo(entity) {
          return IsEntityAttachedToEntity(this.handle, entity.Handle);
        }
        getEntityAttachedTo() {
          return Entity.fromHandle(GetEntityAttachedTo(this.handle));
        }
        applyForce(direction, rotation, forceType = ForceType.MaxForceRot2) {
          ApplyForceToEntity(this.handle, Number(forceType), direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, 0, false, true, true, false, true);
        }
        applyForceRelative(direction, rotation, forceType = ForceType.MaxForceRot2) {
          ApplyForceToEntity(this.handle, Number(forceType), direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, 0, true, true, true, false, true);
        }
        removeAllParticleEffects() {
          RemoveParticleFxFromEntity(this.handle);
        }
        exists() {
          return DoesEntityExist(this.handle) ? true : false;
        }
        delete() {
          if (this.handle !== Game.PlayerPed.Handle) {
            SetEntityAsMissionEntity(this.handle, false, true);
            DeleteEntity(this.handle);
          }
        }
        markAsNoLongerNeeded() {
          SetEntityAsMissionEntity(this.Handle, false, true);
          SetEntityAsNoLongerNeeded(this.Handle);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/EntityBone.js
  var EntityBone;
  var init_EntityBone = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/EntityBone.js"() {
      init_utils();
      EntityBone = class {
        constructor(owner, boneIndex, boneName) {
          this.owner = owner;
          this.index = boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName !== null && boneName !== void 0 ? boneName : "");
        }
        get Index() {
          return this.index;
        }
        get Owner() {
          return this.owner;
        }
        get Position() {
          const coords = GetWorldPositionOfEntityBone(this.owner.Handle, this.index);
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        get IsValid() {
          return this.owner.exists() && this.index !== -1;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/EntityBoneCollection.js
  var EntityBoneCollection;
  var init_EntityBoneCollection = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/EntityBoneCollection.js"() {
      init_models();
      EntityBoneCollection = class {
        constructor(owner) {
          this._currentIndex = -1;
          this.owner = owner;
        }
        hasBone(name) {
          return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
        }
        getBone(boneIndex, boneName) {
          return new EntityBone(this.owner, boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName !== null && boneName !== void 0 ? boneName : ""));
        }
        get Core() {
          return new EntityBone(this.owner, -1);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Tasks.js
  var __awaiter, Tasks;
  var init_Tasks = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Tasks.js"() {
      init_enums();
      init_models();
      init_utils();
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Tasks = class {
        constructor(ped) {
          this.ped = ped;
        }
        achieveHeading(heading, timeout = 0) {
          TaskAchieveHeading(this.ped.Handle, heading, timeout);
        }
        aimAt(target, duration) {
          if (target instanceof Entity)
            TaskAimGunAtEntity(this.ped.Handle, target.Handle, duration, false);
          else
            TaskAimGunAtCoord(this.ped.Handle, target.x, target.y, target.z, duration, false, false);
        }
        arrest(ped) {
          TaskArrestPed(this.ped.Handle, ped.Handle);
        }
        chatTo(ped) {
          TaskChatToPed(this.ped.Handle, ped.Handle, 16, 0, 0, 0, 0, 0);
        }
        jump() {
          TaskJump(this.ped.Handle, true);
        }
        climb() {
          TaskClimb(this.ped.Handle, true);
        }
        climbLadder() {
          TaskClimbLadder(this.ped.Handle, 1);
        }
        cower(duration) {
          TaskCower(this.ped.Handle, duration);
        }
        chaseWithGroundVehicle(target) {
          TaskVehicleChase(this.ped.Handle, target.Handle);
        }
        chaseWithHelicopter(target, offset) {
          TaskHeliChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
        }
        chaseWithPlane(target, offset) {
          TaskPlaneChase(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z);
        }
        cruiseWithVehicle(vehicle, speed, drivingstyle = DrivingStyle.None) {
          TaskVehicleDriveWander(this.ped.Handle, vehicle.Handle, speed, drivingstyle);
        }
        driveTo(vehicle, target, radius, speed, drivingstyle = DrivingStyle.None) {
          TaskVehicleDriveToCoordLongrange(this.ped.Handle, vehicle.Handle, target.x, target.y, target.z, speed, drivingstyle, radius);
        }
        enterAnyVehicle(seat = VehicleSeat.Any, timeout = -1, speed = 0, flag = 0) {
          TaskEnterVehicle(this.ped.Handle, 0, timeout, seat, speed, flag, 0);
        }
        static everyoneLeaveVehicle(vehicle) {
          TaskEveryoneLeaveVehicle(vehicle.Handle);
        }
        fightAgainst(target, duration) {
          if (duration) {
            TaskCombatPedTimed(this.ped.Handle, target.Handle, duration, 0);
          } else {
            TaskCombatPed(this.ped.Handle, target.Handle, 0, 16);
          }
        }
        fightAgainstHatedTargets(radius, duration) {
          if (duration) {
            TaskCombatHatedTargetsAroundPedTimed(this.ped.Handle, radius, duration, 0);
          } else {
            TaskCombatHatedTargetsAroundPed(this.ped.Handle, radius, 0);
          }
        }
        fleeFrom(pedOrPosition, duration = -1) {
          if (pedOrPosition instanceof Ped) {
            TaskSmartFleePed(this.ped.Handle, pedOrPosition.Handle, 100, duration, false, false);
          } else {
            TaskSmartFleeCoord(this.ped.Handle, pedOrPosition.x, pedOrPosition.y, pedOrPosition.z, 100, duration, false, false);
          }
        }
        followPointRoute(points) {
          TaskFlushRoute();
          points.forEach((point) => TaskExtendRoute(point.x, point.y, point.z));
          TaskFollowPointRoute(this.ped.Handle, 1, 0);
        }
        followToOffsetFromEntity(target, offset, timeout, stoppingRange, movementSpeed = 1, persistFollowing = true) {
          TaskFollowToOffsetOfEntity(this.ped.Handle, target.Handle, offset.x, offset.y, offset.z, movementSpeed, timeout, stoppingRange, persistFollowing);
        }
        goTo(position, ignorePaths = false, timeout = -1, speed = 1) {
          if (ignorePaths) {
            TaskGoStraightToCoord(this.ped.Handle, position.x, position.y, position.z, speed, timeout, 0, 0);
          } else {
            TaskFollowNavMeshToCoord(this.ped.Handle, position.x, position.y, position.z, speed, timeout, 0, false, 0);
          }
        }
        goToEntity(target, offset = null, timeout = -1) {
          if (offset === null) {
            offset = new Vector3(0, 0, 0);
          }
          TaskGotoEntityOffsetXy(this.ped.Handle, target.Handle, timeout, offset.x, offset.y, offset.z, 1, true);
        }
        guardCurrentPosition() {
          TaskGuardCurrentPosition(this.ped.Handle, 15, 10, true);
        }
        handsUp(duration) {
          TaskHandsUp(this.ped.Handle, duration, 0, -1, false);
        }
        landPlane(startPosition, touchdownPosition, plane = null) {
          if (plane === null) {
            plane = this.ped.CurrentVehicle;
          }
          if (plane === null || !plane.exists() || plane.isDead()) {
            TaskPlaneLand(this.ped.Handle, 0, startPosition.x, startPosition.y, startPosition.z, touchdownPosition.x, touchdownPosition.y, touchdownPosition.z);
          } else {
            TaskPlaneLand(this.ped.Handle, plane.Handle, startPosition.x, startPosition.y, startPosition.z, touchdownPosition.x, touchdownPosition.y, touchdownPosition.z);
          }
        }
        lookAt(targetOrPosition, duration = -1) {
          if (targetOrPosition instanceof Entity)
            TaskLookAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, 0, 2);
          else
            TaskLookAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, 0, 2);
        }
        parachuteTo(position) {
          TaskParachuteToTarget(this.ped.Handle, position.x, position.y, position.z);
        }
        parkVehicle(vehicle, position, heading, radius = 20, keepEngineOn = false) {
          TaskVehiclePark(this.ped.Handle, vehicle.Handle, position.x, position.y, position.z, heading, 1, radius, keepEngineOn);
        }
        performSequence(sequence) {
          if (!sequence.IsClosed) {
            sequence.close();
          }
          this.clearAll();
          this.ped.BlockPermanentEvents = true;
          TaskPerformSequence(this.ped.Handle, sequence.Handle);
        }
        playAnimation(animDict, animName, blendInSpeed, blendOutSpeed, duration, playbackRate, flags) {
          return __awaiter(this, void 0, void 0, function* () {
            if (!HasAnimDictLoaded(animDict)) {
              RequestAnimDict(animDict);
            }
            const start = GetGameTimer();
            while (!HasAnimDictLoaded(animDict)) {
              if (GetGameTimer() - start >= 1e3)
                return;
              yield Wait(10);
            }
            TaskPlayAnim(this.ped.Handle, animDict, animName, blendInSpeed, blendOutSpeed, duration, flags, playbackRate, false, false, false);
          });
        }
        reactAndFlee(ped) {
          TaskReactAndFleePed(this.ped.Handle, ped.Handle);
        }
        reloadWeapon() {
          TaskReloadWeapon(this.ped.Handle, true);
        }
        shootAt(targetOrPosition, duration = -1, pattern = FiringPattern.Default) {
          if (targetOrPosition instanceof Ped)
            TaskShootAtEntity(this.ped.Handle, targetOrPosition.Handle, duration, pattern);
          else
            TaskShootAtCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration, pattern);
        }
        shuffleToNextVehicleSeat(vehicle) {
          TaskShuffleToNextVehicleSeat(this.ped.Handle, vehicle.Handle);
        }
        skyDive() {
          TaskSkyDive(this.ped.Handle);
        }
        slideTo(position, heading, duration = 0.7) {
          TaskPedSlideToCoord(this.ped.Handle, position.x, position.y, position.z, heading, duration);
        }
        standStill(duration) {
          TaskStandStill(this.ped.Handle, duration);
        }
        startScenario(name, position, heading = 0, duration = 0, sittingScenario = false, teleport = true) {
          TaskStartScenarioAtPosition(this.ped.Handle, name, position.x, position.y, position.z, heading, duration, sittingScenario, teleport);
        }
        swapWeapon() {
          TaskSwapWeapon(this.ped.Handle, false);
        }
        turnTo(targetOrPosition, duration = -1) {
          if (targetOrPosition instanceof Entity)
            TaskTurnPedToFaceEntity(this.ped.Handle, targetOrPosition.Handle, duration);
          else
            TaskTurnPedToFaceCoord(this.ped.Handle, targetOrPosition.x, targetOrPosition.y, targetOrPosition.z, duration);
        }
        useParachute() {
          TaskParachute(this.ped.Handle, true);
        }
        useMobilePhone(duration = 1) {
          TaskUseMobilePhone(this.ped.Handle, duration);
        }
        putAwayParachute() {
          TaskParachute(this.ped.Handle, false);
        }
        putAwayMobilePhone() {
          TaskUseMobilePhone(this.ped.Handle, 0);
        }
        vehicleChase(target) {
          TaskVehicleChase(this.ped.Handle, target.Handle);
        }
        vehicleShootAtPed(target) {
          TaskVehicleShootAtPed(this.ped.Handle, target.Handle, 20);
        }
        wait(duration) {
          TaskPause(this.ped.Handle, duration);
        }
        wanderAround(position, radius) {
          if (position && radius)
            TaskWanderInArea(this.ped.Handle, position.x, position.y, position.z, radius, 0, 0);
          else
            TaskWanderStandard(this.ped.Handle, 0, 0);
        }
        warpIntoVehicle(vehicle, seat) {
          TaskWarpPedIntoVehicle(this.ped.Handle, vehicle.Handle, seat);
        }
        warpOutOfVehicle(vehicle, flags) {
          TaskLeaveVehicle(this.ped.Handle, vehicle.Handle, flags);
        }
        clearAll() {
          ClearPedTasks(this.ped.Handle);
        }
        clearAllImmediately() {
          ClearPedTasksImmediately(this.ped.Handle);
        }
        clearLookAt() {
          TaskClearLookAt(this.ped.Handle);
        }
        clearSecondary() {
          ClearPedSecondaryTask(this.ped.Handle);
        }
        clearAnimation(animDict, animName) {
          StopAnimTask(this.ped.Handle, animDict, animName, -4);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHash.js
  var WeaponComponentHash;
  var init_WeaponComponentHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHash.js"() {
      (function(WeaponComponentHash2) {
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_BASE"] = 4081463091] = "COMPONENT_KNUCKLE_VARMOD_BASE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_PIMP"] = 3323197061] = "COMPONENT_KNUCKLE_VARMOD_PIMP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_BALLAS"] = 4007263587] = "COMPONENT_KNUCKLE_VARMOD_BALLAS";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_DOLLAR"] = 1351683121] = "COMPONENT_KNUCKLE_VARMOD_DOLLAR";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_DIAMOND"] = 2539772380] = "COMPONENT_KNUCKLE_VARMOD_DIAMOND";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_HATE"] = 2112683568] = "COMPONENT_KNUCKLE_VARMOD_HATE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_LOVE"] = 1062111910] = "COMPONENT_KNUCKLE_VARMOD_LOVE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_PLAYER"] = 146278587] = "COMPONENT_KNUCKLE_VARMOD_PLAYER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_KING"] = 3800804335] = "COMPONENT_KNUCKLE_VARMOD_KING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_KNUCKLE_VARMOD_VAGOS"] = 2062808965] = "COMPONENT_KNUCKLE_VARMOD_VAGOS";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_BASE"] = 2436343040] = "COMPONENT_SWITCHBLADE_VARMOD_BASE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_VAR1"] = 1530822070] = "COMPONENT_SWITCHBLADE_VARMOD_VAR1";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SWITCHBLADE_VARMOD_VAR2"] = 3885209186] = "COMPONENT_SWITCHBLADE_VARMOD_VAR2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_CLIP_01"] = 4275109233] = "COMPONENT_PISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_CLIP_02"] = 3978713628] = "COMPONENT_PISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH"] = 899381934] = "COMPONENT_AT_PI_FLSH";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_SUPP_02"] = 1709866683] = "COMPONENT_AT_PI_SUPP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_VARMOD_LUXE"] = 3610841222] = "COMPONENT_PISTOL_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_CLIP_01"] = 119648377] = "COMPONENT_COMBATPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_CLIP_02"] = 3598405421] = "COMPONENT_COMBATPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_SUPP"] = 3271853210] = "COMPONENT_AT_PI_SUPP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER"] = 3328527730] = "COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_CLIP_01"] = 834974250] = "COMPONENT_APPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_CLIP_02"] = 614078421] = "COMPONENT_APPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_APPISTOL_VARMOD_LUXE"] = 2608252716] = "COMPONENT_APPISTOL_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_CLIP_01"] = 580369945] = "COMPONENT_PISTOL50_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_CLIP_02"] = 3654528146] = "COMPONENT_PISTOL50_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_SUPP_02"] = 2805810788] = "COMPONENT_AT_AR_SUPP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL50_VARMOD_LUXE"] = 2008591151] = "COMPONENT_PISTOL50_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_VARMOD_BOSS"] = 384708672] = "COMPONENT_REVOLVER_VARMOD_BOSS";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_VARMOD_GOON"] = 2492708877] = "COMPONENT_REVOLVER_VARMOD_GOON";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_CLIP_01"] = 3917905123] = "COMPONENT_REVOLVER_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_CLIP_01"] = 4169150169] = "COMPONENT_SNSPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_CLIP_02"] = 2063610803] = "COMPONENT_SNSPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_VARMOD_LOWRIDER"] = 2150886575] = "COMPONENT_SNSPISTOL_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_CLIP_01"] = 222992026] = "COMPONENT_HEAVYPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_CLIP_02"] = 1694090795] = "COMPONENT_HEAVYPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYPISTOL_VARMOD_LUXE"] = 2053798779] = "COMPONENT_HEAVYPISTOL_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_01"] = 3122911422] = "COMPONENT_REVOLVER_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_TRACER"] = 3336103030] = "COMPONENT_REVOLVER_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY"] = 15712037] = "COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT"] = 284438159] = "COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CLIP_FMJ"] = 231258687] = "COMPONENT_REVOLVER_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SIGHTS"] = 1108334355] = "COMPONENT_AT_SIGHTS";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_MK2"] = 77277509] = "COMPONENT_AT_SCOPE_MACRO_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP_03"] = 654802123] = "COMPONENT_AT_PI_COMP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO"] = 3225415071] = "COMPONENT_REVOLVER_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_02"] = 11918884] = "COMPONENT_REVOLVER_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_03"] = 176157112] = "COMPONENT_REVOLVER_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_04"] = 4074914441] = "COMPONENT_REVOLVER_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_05"] = 288456487] = "COMPONENT_REVOLVER_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_06"] = 398658626] = "COMPONENT_REVOLVER_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_07"] = 628697006] = "COMPONENT_REVOLVER_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_08"] = 925911836] = "COMPONENT_REVOLVER_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_09"] = 1222307441] = "COMPONENT_REVOLVER_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_10"] = 552442715] = "COMPONENT_REVOLVER_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_REVOLVER_MK2_CAMO_IND_01"] = 3646023783] = "COMPONENT_REVOLVER_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_01"] = 21392614] = "COMPONENT_SNSPISTOL_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_02"] = 3465283442] = "COMPONENT_SNSPISTOL_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_TRACER"] = 2418909806] = "COMPONENT_SNSPISTOL_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY"] = 3870121849] = "COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT"] = 2366665730] = "COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CLIP_FMJ"] = 3239176998] = "COMPONENT_SNSPISTOL_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH_03"] = 1246324211] = "COMPONENT_AT_PI_FLSH_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_RAIL_02"] = 1205768792] = "COMPONENT_AT_PI_RAIL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP_02"] = 2860680127] = "COMPONENT_AT_PI_COMP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO"] = 259780317] = "COMPONENT_SNSPISTOL_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_02"] = 2321624822] = "COMPONENT_SNSPISTOL_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_03"] = 1996130345] = "COMPONENT_SNSPISTOL_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_04"] = 2839309484] = "COMPONENT_SNSPISTOL_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_05"] = 2626704212] = "COMPONENT_SNSPISTOL_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_06"] = 1308243489] = "COMPONENT_SNSPISTOL_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_07"] = 1122574335] = "COMPONENT_SNSPISTOL_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_08"] = 1420313469] = "COMPONENT_SNSPISTOL_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_09"] = 109848390] = "COMPONENT_SNSPISTOL_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_10"] = 593945703] = "COMPONENT_SNSPISTOL_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_IND_01"] = 1142457062] = "COMPONENT_SNSPISTOL_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE"] = 3891161322] = "COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE"] = 691432737] = "COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE"] = 987648331] = "COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE"] = 3863286761] = "COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE"] = 3447384986] = "COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE"] = 4202375078] = "COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE"] = 3800418970] = "COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE"] = 730876697] = "COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE"] = 583159708] = "COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE"] = 2366463693] = "COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE"] = 520557834] = "COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_01"] = 2499030370] = "COMPONENT_PISTOL_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_02"] = 1591132456] = "COMPONENT_PISTOL_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_TRACER"] = 634039983] = "COMPONENT_PISTOL_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_INCENDIARY"] = 733837882] = "COMPONENT_PISTOL_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT"] = 2248057097] = "COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CLIP_FMJ"] = 1329061674] = "COMPONENT_PISTOL_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_RAIL"] = 2396306288] = "COMPONENT_AT_PI_RAIL";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_FLSH_02"] = 1140676955] = "COMPONENT_AT_PI_FLSH_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_PI_COMP"] = 568543123] = "COMPONENT_AT_PI_COMP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO"] = 1550611612] = "COMPONENT_PISTOL_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_02"] = 368550800] = "COMPONENT_PISTOL_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_03"] = 2525897947] = "COMPONENT_PISTOL_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_04"] = 24902297] = "COMPONENT_PISTOL_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_05"] = 4066925682] = "COMPONENT_PISTOL_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_06"] = 3710005734] = "COMPONENT_PISTOL_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_07"] = 3141791350] = "COMPONENT_PISTOL_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_08"] = 1301287696] = "COMPONENT_PISTOL_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_09"] = 1597093459] = "COMPONENT_PISTOL_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_10"] = 1769871776] = "COMPONENT_PISTOL_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_IND_01"] = 2467084625] = "COMPONENT_PISTOL_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_SLIDE"] = 3036451504] = "COMPONENT_PISTOL_MK2_CAMO_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_02_SLIDE"] = 438243936] = "COMPONENT_PISTOL_MK2_CAMO_02_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_03_SLIDE"] = 3839888240] = "COMPONENT_PISTOL_MK2_CAMO_03_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_04_SLIDE"] = 740920107] = "COMPONENT_PISTOL_MK2_CAMO_04_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_05_SLIDE"] = 3753350949] = "COMPONENT_PISTOL_MK2_CAMO_05_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_06_SLIDE"] = 1809261196] = "COMPONENT_PISTOL_MK2_CAMO_06_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_07_SLIDE"] = 2648428428] = "COMPONENT_PISTOL_MK2_CAMO_07_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_08_SLIDE"] = 3004802348] = "COMPONENT_PISTOL_MK2_CAMO_08_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_09_SLIDE"] = 3330502162] = "COMPONENT_PISTOL_MK2_CAMO_09_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_10_SLIDE"] = 1135718771] = "COMPONENT_PISTOL_MK2_CAMO_10_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE"] = 1253942266] = "COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_VINTAGEPISTOL_CLIP_01"] = 1168357051] = "COMPONENT_VINTAGEPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_VINTAGEPISTOL_CLIP_02"] = 867832552] = "COMPONENT_VINTAGEPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_RAYPISTOL_VARMOD_XMAS18"] = 3621517063] = "COMPONENT_RAYPISTOL_VARMOD_XMAS18";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_CLIP_01"] = 1423184737] = "COMPONENT_CERAMICPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_CLIP_02"] = 2172153001] = "COMPONENT_CERAMICPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CERAMICPISTOL_SUPP"] = 2466764538] = "COMPONENT_CERAMICPISTOL_SUPP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_CLIP_01"] = 3410538224] = "COMPONENT_MICROSMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_CLIP_02"] = 283556395] = "COMPONENT_MICROSMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO"] = 2637152041] = "COMPONENT_AT_SCOPE_MACRO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MICROSMG_VARMOD_LUXE"] = 1215999497] = "COMPONENT_MICROSMG_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_01"] = 643254679] = "COMPONENT_SMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_02"] = 889808635] = "COMPONENT_SMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_CLIP_03"] = 2043113590] = "COMPONENT_SMG_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_FLSH"] = 2076495324] = "COMPONENT_AT_AR_FLSH";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02"] = 1019656791] = "COMPONENT_AT_SCOPE_MACRO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_VARMOD_LUXE"] = 663170192] = "COMPONENT_SMG_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_CLIP_01"] = 2366834608] = "COMPONENT_ASSAULTSMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_CLIP_02"] = 3141985303] = "COMPONENT_ASSAULTSMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER"] = 663517359] = "COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MINISMG_CLIP_01"] = 2227745491] = "COMPONENT_MINISMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MINISMG_CLIP_02"] = 2474561719] = "COMPONENT_MINISMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_01"] = 1277460590] = "COMPONENT_SMG_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_02"] = 3112393518] = "COMPONENT_SMG_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_TRACER"] = 2146055916] = "COMPONENT_SMG_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_INCENDIARY"] = 3650233061] = "COMPONENT_SMG_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT"] = 974903034] = "COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CLIP_FMJ"] = 190476639] = "COMPONENT_SMG_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SIGHTS_SMG"] = 2681951826] = "COMPONENT_AT_SIGHTS_SMG";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2"] = 3842157419] = "COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_SMG_MK2"] = 1038927834] = "COMPONENT_AT_SCOPE_SMALL_SMG_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_01"] = 3113485012] = "COMPONENT_AT_MUZZLE_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_02"] = 3362234491] = "COMPONENT_AT_MUZZLE_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_03"] = 3725708239] = "COMPONENT_AT_MUZZLE_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_04"] = 3968886988] = "COMPONENT_AT_MUZZLE_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_05"] = 48731514] = "COMPONENT_AT_MUZZLE_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_06"] = 880736428] = "COMPONENT_AT_MUZZLE_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_07"] = 1303784126] = "COMPONENT_AT_MUZZLE_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SB_BARREL_01"] = 3641720545] = "COMPONENT_AT_SB_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SB_BARREL_02"] = 2774849419] = "COMPONENT_AT_SB_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO"] = 3298267239] = "COMPONENT_SMG_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_02"] = 940943685] = "COMPONENT_SMG_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_03"] = 1263226800] = "COMPONENT_SMG_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_04"] = 3966931456] = "COMPONENT_SMG_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_05"] = 1224100642] = "COMPONENT_SMG_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_06"] = 899228776] = "COMPONENT_SMG_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_07"] = 616006309] = "COMPONENT_SMG_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_08"] = 2733014785] = "COMPONENT_SMG_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_09"] = 572063080] = "COMPONENT_SMG_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_10"] = 1170588613] = "COMPONENT_SMG_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SMG_MK2_CAMO_IND_01"] = 966612367] = "COMPONENT_SMG_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_01"] = 1198425599] = "COMPONENT_MACHINEPISTOL_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_02"] = 3106695545] = "COMPONENT_MACHINEPISTOL_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MACHINEPISTOL_CLIP_03"] = 2850671348] = "COMPONENT_MACHINEPISTOL_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_01"] = 1125642654] = "COMPONENT_COMBATPDW_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_02"] = 860508675] = "COMPONENT_COMBATPDW_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATPDW_CLIP_03"] = 1857603803] = "COMPONENT_COMBATPDW_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_AFGRIP"] = 202788691] = "COMPONENT_AT_AR_AFGRIP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL"] = 2855028148] = "COMPONENT_AT_SCOPE_SMALL";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_SUPP"] = 3859329886] = "COMPONENT_AT_SR_SUPP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER"] = 2732039643] = "COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE"] = 2242268665] = "COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSHOTGUN_CLIP_01"] = 2498239431] = "COMPONENT_ASSAULTSHOTGUN_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTSHOTGUN_CLIP_02"] = 2260565874] = "COMPONENT_ASSAULTSHOTGUN_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_SUPP"] = 2205435306] = "COMPONENT_AT_AR_SUPP";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_01"] = 3449028929] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY"] = 2676628469] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING"] = 1315288101] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT"] = 3914869031] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE"] = 1004815965] = "COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_MK2"] = 1060929921] = "COMPONENT_AT_SCOPE_SMALL_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_SUPP_03"] = 2890063729] = "COMPONENT_AT_SR_SUPP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_08"] = 1602080333] = "COMPONENT_AT_MUZZLE_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO"] = 3820854852] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_02"] = 387223451] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_03"] = 617753366] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_04"] = 4072589040] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_05"] = 8741501] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_06"] = 3693681093] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_07"] = 3783533691] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_08"] = 3639579478] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_09"] = 4012490698] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_10"] = 1739501925] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01"] = 1178671645] = "COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_01"] = 844049759] = "COMPONENT_HEAVYSHOTGUN_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_02"] = 2535257853] = "COMPONENT_HEAVYSHOTGUN_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSHOTGUN_CLIP_03"] = 2294798931] = "COMPONENT_HEAVYSHOTGUN_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_01"] = 3193891350] = "COMPONENT_ASSAULTRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_02"] = 2971750299] = "COMPONENT_ASSAULTRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_CLIP_03"] = 3689981245] = "COMPONENT_ASSAULTRIFLE_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_VARMOD_LUXE"] = 1319990579] = "COMPONENT_ASSAULTRIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_01"] = 2680042476] = "COMPONENT_CARBINERIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_02"] = 2433783441] = "COMPONENT_CARBINERIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_CLIP_03"] = 3127044405] = "COMPONENT_CARBINERIFLE_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MEDIUM"] = 2698550338] = "COMPONENT_AT_SCOPE_MEDIUM";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_VARMOD_LUXE"] = 3634075224] = "COMPONENT_CARBINERIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_CLIP_01"] = 4203716879] = "COMPONENT_ADVANCEDRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_CLIP_02"] = 2395064697] = "COMPONENT_ADVANCEDRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE"] = 930927479] = "COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_01"] = 3334989185] = "COMPONENT_SPECIALCARBINE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_02"] = 2089537806] = "COMPONENT_SPECIALCARBINE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_CLIP_03"] = 1801039530] = "COMPONENT_SPECIALCARBINE_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER"] = 1929467122] = "COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_CLIP_01"] = 3315675008] = "COMPONENT_BULLPUPRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_CLIP_02"] = 3009973007] = "COMPONENT_BULLPUPRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_VARMOD_LOW"] = 2824322168] = "COMPONENT_BULLPUPRIFLE_VARMOD_LOW";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_01"] = 25766362] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_02"] = 4021290536] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER"] = 2183159977] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY"] = 2845636954] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING"] = 4205311469] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ"] = 1130501904] = "COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MACRO_02_MK2"] = 3350057221] = "COMPONENT_AT_SCOPE_MACRO_02_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_BP_BARREL_01"] = 1704640795] = "COMPONENT_AT_BP_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_BP_BARREL_02"] = 1005743559] = "COMPONENT_AT_BP_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_AFGRIP_02"] = 2640679034] = "COMPONENT_AT_AR_AFGRIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO"] = 2923451831] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_02"] = 3104173419] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_03"] = 2797881576] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_04"] = 2491819116] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_05"] = 2318995410] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_06"] = 36929477] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_07"] = 4026522462] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_08"] = 3720197850] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_09"] = 3412267557] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_10"] = 2826785822] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01"] = 3320426066] = "COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_01"] = 382112385] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_02"] = 3726614828] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER"] = 2271594122] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY"] = 3724612230] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING"] = 1362433589] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ"] = 1346235024] = "COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MEDIUM_MK2"] = 3328927042] = "COMPONENT_AT_SCOPE_MEDIUM_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SC_BARREL_01"] = 3879097257] = "COMPONENT_AT_SC_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SC_BARREL_02"] = 4185880635] = "COMPONENT_AT_SC_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO"] = 3557537083] = "COMPONENT_SPECIALCARBINE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_02"] = 1125852043] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_03"] = 886015732] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_04"] = 3032680157] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_05"] = 3999758885] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_06"] = 3750812792] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_07"] = 172765678] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_08"] = 2312089847] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_09"] = 2072122460] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_10"] = 2308747125] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01"] = 1377355801] = "COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_01"] = 2249208895] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_02"] = 3509242479] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER"] = 4012669121] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY"] = 4218476627] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING"] = 2816286296] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ"] = 1675665560] = "COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_BARREL_01"] = 1134861606] = "COMPONENT_AT_AR_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_AR_BARREL_02"] = 1447477866] = "COMPONENT_AT_AR_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO"] = 2434475183] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_02"] = 937772107] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_03"] = 1401650071] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_04"] = 628662130] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_05"] = 3309920045] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_06"] = 3482022833] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_07"] = 2847614993] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_08"] = 4234628436] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_09"] = 2088750491] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_10"] = 2781053842] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01"] = 3115408816] = "COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_01"] = 1283078430] = "COMPONENT_CARBINERIFLE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_02"] = 1574296533] = "COMPONENT_CARBINERIFLE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER"] = 391640422] = "COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY"] = 1025884839] = "COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING"] = 626875735] = "COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ"] = 1141059345] = "COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_CR_BARREL_01"] = 2201368575] = "COMPONENT_AT_CR_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_CR_BARREL_02"] = 2335983627] = "COMPONENT_AT_CR_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO"] = 1272803094] = "COMPONENT_CARBINERIFLE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_02"] = 1080719624] = "COMPONENT_CARBINERIFLE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_03"] = 792221348] = "COMPONENT_CARBINERIFLE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_04"] = 3842785869] = "COMPONENT_CARBINERIFLE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_05"] = 3548192559] = "COMPONENT_CARBINERIFLE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_06"] = 2250671235] = "COMPONENT_CARBINERIFLE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_07"] = 4095795318] = "COMPONENT_CARBINERIFLE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_08"] = 2866892280] = "COMPONENT_CARBINERIFLE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_09"] = 2559813981] = "COMPONENT_CARBINERIFLE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_10"] = 1796459838] = "COMPONENT_CARBINERIFLE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01"] = 3663056191] = "COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_01"] = 1363085923] = "COMPONENT_COMPACTRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_02"] = 1509923832] = "COMPONENT_COMPACTRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMPACTRIFLE_CLIP_03"] = 3322377230] = "COMPONENT_COMPACTRIFLE_CLIP_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_CLIP_01"] = 759617595] = "COMPONENT_MILITARYRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_CLIP_02"] = 1749732930] = "COMPONENT_MILITARYRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MILITARYRIFLE_SIGHT_01"] = 1803744149] = "COMPONENT_MILITARYRIFLE_SIGHT_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_CLIP_01"] = 4097109892] = "COMPONENT_MG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_CLIP_02"] = 2182449991] = "COMPONENT_MG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_SMALL_02"] = 1006677997] = "COMPONENT_AT_SCOPE_SMALL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MG_VARMOD_LOWRIDER"] = 3604658878] = "COMPONENT_MG_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_CLIP_01"] = 3791631178] = "COMPONENT_COMBATMG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_CLIP_02"] = 3603274966] = "COMPONENT_COMBATMG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_VARMOD_LOWRIDER"] = 2466172125] = "COMPONENT_COMBATMG_VARMOD_LOWRIDER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_01"] = 1227564412] = "COMPONENT_COMBATMG_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_02"] = 400507625] = "COMPONENT_COMBATMG_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_TRACER"] = 4133787461] = "COMPONENT_COMBATMG_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY"] = 3274096058] = "COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING"] = 696788003] = "COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CLIP_FMJ"] = 1475288264] = "COMPONENT_COMBATMG_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MG_BARREL_01"] = 3276730932] = "COMPONENT_AT_MG_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MG_BARREL_02"] = 3051509595] = "COMPONENT_AT_MG_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO"] = 1249283253] = "COMPONENT_COMBATMG_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_02"] = 3437259709] = "COMPONENT_COMBATMG_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_03"] = 3197423398] = "COMPONENT_COMBATMG_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_04"] = 1980349969] = "COMPONENT_COMBATMG_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_05"] = 1219453777] = "COMPONENT_COMBATMG_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_06"] = 2441508106] = "COMPONENT_COMBATMG_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_07"] = 2220186280] = "COMPONENT_COMBATMG_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_08"] = 457967755] = "COMPONENT_COMBATMG_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_09"] = 235171324] = "COMPONENT_COMBATMG_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_10"] = 42685294] = "COMPONENT_COMBATMG_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_COMBATMG_MK2_CAMO_IND_01"] = 3607349581] = "COMPONENT_COMBATMG_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GUSENBERG_CLIP_01"] = 484812453] = "COMPONENT_GUSENBERG_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GUSENBERG_CLIP_02"] = 3939025520] = "COMPONENT_GUSENBERG_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNIPERRIFLE_CLIP_01"] = 2613461129] = "COMPONENT_SNIPERRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE"] = 3527687644] = "COMPONENT_AT_SCOPE_LARGE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_MAX"] = 3159677559] = "COMPONENT_AT_SCOPE_MAX";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_SNIPERRIFLE_VARMOD_LUXE"] = 1077065191] = "COMPONENT_SNIPERRIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_CLIP_01"] = 1198478068] = "COMPONENT_HEAVYSNIPER_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_01"] = 2497785294] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_02"] = 3872379306] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER"] = 3615105746] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY"] = 1842849902] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING"] = 4100968569] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ"] = 3779763923] = "COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2"] = 1528590652] = "COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MRFL_BARREL_01"] = 941317513] = "COMPONENT_AT_MRFL_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MRFL_BARREL_02"] = 1748450780] = "COMPONENT_AT_MRFL_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO"] = 2425682848] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_02"] = 1931539634] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_03"] = 1624199183] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_04"] = 4268133183] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_05"] = 4084561241] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_06"] = 423313640] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_07"] = 276639596] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_08"] = 3303610433] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_09"] = 2612118995] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_10"] = 996213771] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01"] = 3080918746] = "COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_01"] = 4196276776] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_02"] = 752418717] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY"] = 247526935] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING"] = 4164277972] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ"] = 1005144310] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE"] = 2313935527] = "COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_MK2"] = 2193687427] = "COMPONENT_AT_SCOPE_LARGE_MK2";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_NV"] = 3061846192] = "COMPONENT_AT_SCOPE_NV";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_THERMAL"] = 776198721] = "COMPONENT_AT_SCOPE_THERMAL";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_MUZZLE_09"] = 1764221345] = "COMPONENT_AT_MUZZLE_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_BARREL_01"] = 2425761975] = "COMPONENT_AT_SR_BARREL_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SR_BARREL_02"] = 277524638] = "COMPONENT_AT_SR_BARREL_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO"] = 4164123906] = "COMPONENT_HEAVYSNIPER_MK2_CAMO";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_02"] = 3317620069] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_03"] = 3916506229] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_03";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_04"] = 329939175] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_04";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_05"] = 643374672] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_05";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_06"] = 807875052] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_06";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_07"] = 2893163128] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_07";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_08"] = 3198471901] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_08";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_09"] = 3447155842] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_09";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_10"] = 2881858759] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_10";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01"] = 1815270123] = "COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_CLIP_01"] = 3627761985] = "COMPONENT_MARKSMANRIFLE_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_CLIP_02"] = 3439143621] = "COMPONENT_MARKSMANRIFLE_CLIP_02";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM"] = 471997210] = "COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_MARKSMANRIFLE_VARMOD_LUXE"] = 371102273] = "COMPONENT_MARKSMANRIFLE_VARMOD_LUXE";
        WeaponComponentHash2[WeaponComponentHash2["COMPONENT_GRENADELAUNCHER_CLIP_01"] = 296639639] = "COMPONENT_GRENADELAUNCHER_CLIP_01";
        WeaponComponentHash2[WeaponComponentHash2["Invalid"] = 4294967295] = "Invalid";
        WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleClip01"] = 4203716879] = "AdvancedRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleClip02"] = 2395064697] = "AdvancedRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["AdvancedRifleVarmodLuxe"] = 930927479] = "AdvancedRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["APPistolClip01"] = 834974250] = "APPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["APPistolClip02"] = 614078421] = "APPistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["APPistolVarmodLuxe"] = 2608252716] = "APPistolVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip01"] = 3193891350] = "AssaultRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip02"] = 2971750299] = "AssaultRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleClip03"] = 3689981245] = "AssaultRifleClip03";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleVarmodLuxe"] = 1319990579] = "AssaultRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["AssaultSMGClip01"] = 2366834608] = "AssaultSMGClip01";
        WeaponComponentHash2[WeaponComponentHash2["AssaultSMGClip02"] = 3141985303] = "AssaultSMGClip02";
        WeaponComponentHash2[WeaponComponentHash2["AssaultSMGVarmodLowrider"] = 663517359] = "AssaultSMGVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["AssaultShotgunClip01"] = 2498239431] = "AssaultShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["AssaultShotgunClip02"] = 2260565874] = "AssaultShotgunClip02";
        WeaponComponentHash2[WeaponComponentHash2["AtArAfGrip"] = 202788691] = "AtArAfGrip";
        WeaponComponentHash2[WeaponComponentHash2["AtArFlsh"] = 2076495324] = "AtArFlsh";
        WeaponComponentHash2[WeaponComponentHash2["AtArSupp"] = 2205435306] = "AtArSupp";
        WeaponComponentHash2[WeaponComponentHash2["AtArSupp02"] = 2805810788] = "AtArSupp02";
        WeaponComponentHash2[WeaponComponentHash2["AtPiFlsh"] = 899381934] = "AtPiFlsh";
        WeaponComponentHash2[WeaponComponentHash2["AtPiSupp"] = 3271853210] = "AtPiSupp";
        WeaponComponentHash2[WeaponComponentHash2["AtPiSupp02"] = 1709866683] = "AtPiSupp02";
        WeaponComponentHash2[WeaponComponentHash2["AtRailCover01"] = 1967214384] = "AtRailCover01";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeLarge"] = 3527687644] = "AtScopeLarge";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeLargeFixedZoom"] = 471997210] = "AtScopeLargeFixedZoom";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMacro"] = 2637152041] = "AtScopeMacro";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMacro02"] = 1019656791] = "AtScopeMacro02";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMax"] = 3159677559] = "AtScopeMax";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMedium"] = 2698550338] = "AtScopeMedium";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeSmall"] = 2855028148] = "AtScopeSmall";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeSmall02"] = 1006677997] = "AtScopeSmall02";
        WeaponComponentHash2[WeaponComponentHash2["AtSrSupp"] = 3859329886] = "AtSrSupp";
        WeaponComponentHash2[WeaponComponentHash2["BullpupRifleClip01"] = 3315675008] = "BullpupRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["BullpupRifleClip02"] = 3009973007] = "BullpupRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["BullpupRifleVarmodLow"] = 2824322168] = "BullpupRifleVarmodLow";
        WeaponComponentHash2[WeaponComponentHash2["BullpupShotgunClip01"] = 3377353998] = "BullpupShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip01"] = 2680042476] = "CarbineRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip02"] = 2433783441] = "CarbineRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleClip03"] = 3127044405] = "CarbineRifleClip03";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleVarmodLuxe"] = 3634075224] = "CarbineRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGClip01"] = 3791631178] = "CombatMGClip01";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGClip02"] = 3603274966] = "CombatMGClip02";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGVarmodLowrider"] = 2466172125] = "CombatMGVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip01"] = 1125642654] = "CombatPDWClip01";
        WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip02"] = 860508675] = "CombatPDWClip02";
        WeaponComponentHash2[WeaponComponentHash2["CombatPDWClip03"] = 1857603803] = "CombatPDWClip03";
        WeaponComponentHash2[WeaponComponentHash2["CombatPistolClip01"] = 119648377] = "CombatPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["CombatPistolClip02"] = 3598405421] = "CombatPistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["CombatPistolVarmodLowrider"] = 3328527730] = "CombatPistolVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip01"] = 1363085923] = "CompactRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip02"] = 1509923832] = "CompactRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["CompactRifleClip03"] = 3322377230] = "CompactRifleClip03";
        WeaponComponentHash2[WeaponComponentHash2["DBShotgunClip01"] = 703231006] = "DBShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["FireworkClip01"] = 3840197261] = "FireworkClip01";
        WeaponComponentHash2[WeaponComponentHash2["FlareGunClip01"] = 2481569177] = "FlareGunClip01";
        WeaponComponentHash2[WeaponComponentHash2["FlashlightLight"] = 3719772431] = "FlashlightLight";
        WeaponComponentHash2[WeaponComponentHash2["GrenadeLauncherClip01"] = 296639639] = "GrenadeLauncherClip01";
        WeaponComponentHash2[WeaponComponentHash2["GusenbergClip01"] = 484812453] = "GusenbergClip01";
        WeaponComponentHash2[WeaponComponentHash2["GusenbergClip02"] = 3939025520] = "GusenbergClip02";
        WeaponComponentHash2[WeaponComponentHash2["HeavyPistolClip01"] = 222992026] = "HeavyPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["HeavyPistolClip02"] = 1694090795] = "HeavyPistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["HeavyPistolVarmodLuxe"] = 2053798779] = "HeavyPistolVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip01"] = 844049759] = "HeavyShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip02"] = 2535257853] = "HeavyShotgunClip02";
        WeaponComponentHash2[WeaponComponentHash2["HeavyShotgunClip03"] = 2294798931] = "HeavyShotgunClip03";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperClip01"] = 1198478068] = "HeavySniperClip01";
        WeaponComponentHash2[WeaponComponentHash2["HomingLauncherClip01"] = 4162006335] = "HomingLauncherClip01";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodBallas"] = 4007263587] = "KnuckleVarmodBallas";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodBase"] = 4081463091] = "KnuckleVarmodBase";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodDiamond"] = 2539772380] = "KnuckleVarmodDiamond";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodDollar"] = 1351683121] = "KnuckleVarmodDollar";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodHate"] = 2112683568] = "KnuckleVarmodHate";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodKing"] = 3800804335] = "KnuckleVarmodKing";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodLove"] = 1062111910] = "KnuckleVarmodLove";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodPimp"] = 3323197061] = "KnuckleVarmodPimp";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodPlayer"] = 146278587] = "KnuckleVarmodPlayer";
        WeaponComponentHash2[WeaponComponentHash2["KnuckleVarmodVagos"] = 2062808965] = "KnuckleVarmodVagos";
        WeaponComponentHash2[WeaponComponentHash2["MGClip01"] = 4097109892] = "MGClip01";
        WeaponComponentHash2[WeaponComponentHash2["MGClip02"] = 2182449991] = "MGClip02";
        WeaponComponentHash2[WeaponComponentHash2["MGVarmodLowrider"] = 3604658878] = "MGVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip01"] = 1198425599] = "MachinePistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip02"] = 3106695545] = "MachinePistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["MachinePistolClip03"] = 2850671348] = "MachinePistolClip03";
        WeaponComponentHash2[WeaponComponentHash2["MarksmanPistolClip01"] = 3416146413] = "MarksmanPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleClip01"] = 3627761985] = "MarksmanRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleClip02"] = 3439143621] = "MarksmanRifleClip02";
        WeaponComponentHash2[WeaponComponentHash2["MarksmanRifleVarmodLuxe"] = 371102273] = "MarksmanRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["MicroSMGClip01"] = 3410538224] = "MicroSMGClip01";
        WeaponComponentHash2[WeaponComponentHash2["MicroSMGClip02"] = 283556395] = "MicroSMGClip02";
        WeaponComponentHash2[WeaponComponentHash2["MicroSMGVarmodLuxe"] = 1215999497] = "MicroSMGVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["MinigunClip01"] = 3370020614] = "MinigunClip01";
        WeaponComponentHash2[WeaponComponentHash2["MusketClip01"] = 1322387263] = "MusketClip01";
        WeaponComponentHash2[WeaponComponentHash2["Pistol50Clip01"] = 580369945] = "Pistol50Clip01";
        WeaponComponentHash2[WeaponComponentHash2["Pistol50Clip02"] = 3654528146] = "Pistol50Clip02";
        WeaponComponentHash2[WeaponComponentHash2["Pistol50VarmodLuxe"] = 2008591151] = "Pistol50VarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["PistolClip01"] = 4275109233] = "PistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["PistolClip02"] = 3978713628] = "PistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["PistolVarmodLuxe"] = 3610841222] = "PistolVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["PoliceTorchFlashlight"] = 3315797997] = "PoliceTorchFlashlight";
        WeaponComponentHash2[WeaponComponentHash2["PumpShotgunClip01"] = 3513717816] = "PumpShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["PumpShotgunVarmodLowrider"] = 2732039643] = "PumpShotgunVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["RPGClip01"] = 1319465907] = "RPGClip01";
        WeaponComponentHash2[WeaponComponentHash2["RailgunClip01"] = 59044840] = "RailgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["RevolverClip01"] = 3917905123] = "RevolverClip01";
        WeaponComponentHash2[WeaponComponentHash2["RevolverVarmodBoss"] = 384708672] = "RevolverVarmodBoss";
        WeaponComponentHash2[WeaponComponentHash2["RevolverVarmodGoon"] = 2492708877] = "RevolverVarmodGoon";
        WeaponComponentHash2[WeaponComponentHash2["SMGClip01"] = 643254679] = "SMGClip01";
        WeaponComponentHash2[WeaponComponentHash2["SMGClip02"] = 889808635] = "SMGClip02";
        WeaponComponentHash2[WeaponComponentHash2["SMGClip03"] = 2043113590] = "SMGClip03";
        WeaponComponentHash2[WeaponComponentHash2["SMGVarmodLuxe"] = 663170192] = "SMGVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["SNSPistolClip01"] = 4169150169] = "SNSPistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["SNSPistolClip02"] = 2063610803] = "SNSPistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["SNSPistolVarmodLowrider"] = 2150886575] = "SNSPistolVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["SawnoffShotgunClip01"] = 3352699429] = "SawnoffShotgunClip01";
        WeaponComponentHash2[WeaponComponentHash2["SawnoffShotgunVarmodLuxe"] = 2242268665] = "SawnoffShotgunVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["SniperRifleClip01"] = 2613461129] = "SniperRifleClip01";
        WeaponComponentHash2[WeaponComponentHash2["SniperRifleVarmodLuxe"] = 1077065191] = "SniperRifleVarmodLuxe";
        WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip01"] = 3334989185] = "SpecialCarbineClip01";
        WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip02"] = 2089537806] = "SpecialCarbineClip02";
        WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineClip03"] = 1801039530] = "SpecialCarbineClip03";
        WeaponComponentHash2[WeaponComponentHash2["SpecialCarbineVarmodLowrider"] = 1929467122] = "SpecialCarbineVarmodLowrider";
        WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodBase"] = 2436343040] = "SwitchbladeVarmodBase";
        WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodVar1"] = 1530822070] = "SwitchbladeVarmodVar1";
        WeaponComponentHash2[WeaponComponentHash2["SwitchbladeVarmodVar2"] = 3885209186] = "SwitchbladeVarmodVar2";
        WeaponComponentHash2[WeaponComponentHash2["VintagePistolClip01"] = 1168357051] = "VintagePistolClip01";
        WeaponComponentHash2[WeaponComponentHash2["VintagePistolClip02"] = 867832552] = "VintagePistolClip02";
        WeaponComponentHash2[WeaponComponentHash2["AtSights"] = 1108334355] = "AtSights";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeSmallMk2"] = 1060929921] = "AtScopeSmallMk2";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMacroMk2"] = 77277509] = "AtScopeMacroMk2";
        WeaponComponentHash2[WeaponComponentHash2["AtScopeMediumMk2"] = 3328927042] = "AtScopeMediumMk2";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle1"] = 3113485012] = "AtMuzzle1";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle2"] = 3362234491] = "AtMuzzle2";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle3"] = 3725708239] = "AtMuzzle3";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle4"] = 3968886988] = "AtMuzzle4";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle5"] = 48731514] = "AtMuzzle5";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle6"] = 880736428] = "AtMuzzle6";
        WeaponComponentHash2[WeaponComponentHash2["AtMuzzle7"] = 1303784126] = "AtMuzzle7";
        WeaponComponentHash2[WeaponComponentHash2["AtArAfGrip2"] = 2640679034] = "AtArAfGrip2";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipNormal"] = 2499030370] = "PistolMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipExtended"] = 1591132456] = "PistolMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipFMJ"] = 1329061674] = "PistolMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipHollowpoint"] = 2248057097] = "PistolMk2ClipHollowpoint";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipIncendiary"] = 733837882] = "PistolMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2ClipTracer"] = 634039983] = "PistolMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2Scope"] = 2396306288] = "PistolMk2Scope";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2Flash"] = 1140676955] = "PistolMk2Flash";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2Compensator"] = 568543123] = "PistolMk2Compensator";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoDigital"] = 1550611612] = "PistolMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoBrushstroke"] = 368550800] = "PistolMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoWoodland"] = 2525897947] = "PistolMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSkull"] = 24902297] = "PistolMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSessanta"] = 4066925682] = "PistolMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoPerseus"] = 3710005734] = "PistolMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoLeopard"] = 3141791350] = "PistolMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoZebra"] = 1301287696] = "PistolMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoGeometric"] = 1597093459] = "PistolMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoBoom"] = 1769871776] = "PistolMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoPatriotic"] = 2467084625] = "PistolMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideDigital"] = 3036451504] = "PistolMk2CamoSlideDigital";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideBrushstroke"] = 438243936] = "PistolMk2CamoSlideBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideWoodland"] = 3839888240] = "PistolMk2CamoSlideWoodland";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideSkull"] = 740920107] = "PistolMk2CamoSlideSkull";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideSessanta"] = 3753350949] = "PistolMk2CamoSlideSessanta";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlidePerseus"] = 1809261196] = "PistolMk2CamoSlidePerseus";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideLeopard"] = 2648428428] = "PistolMk2CamoSlideLeopard";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideZebra"] = 3004802348] = "PistolMk2CamoSlideZebra";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideGeometric"] = 3330502162] = "PistolMk2CamoSlideGeometric";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlideBoom"] = 1135718771] = "PistolMk2CamoSlideBoom";
        WeaponComponentHash2[WeaponComponentHash2["PistolMk2CamoSlidePatriotic"] = 1253942266] = "PistolMk2CamoSlidePatriotic";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipNormal"] = 2249208895] = "AssaultRifleMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipExtended"] = 3509242479] = "AssaultRifleMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipArmorPiercing"] = 2816286296] = "AssaultRifleMk2ClipArmorPiercing";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipFMJ"] = 1675665560] = "AssaultRifleMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipIncendiary"] = 4218476627] = "AssaultRifleMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2ClipTracer"] = 4012669121] = "AssaultRifleMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2BarrelNormal"] = 1134861606] = "AssaultRifleMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2BarrelHeavy"] = 1447477866] = "AssaultRifleMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoDigital"] = 2434475183] = "AssaultRifleMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoBrushstroke"] = 937772107] = "AssaultRifleMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoWoodland"] = 1401650071] = "AssaultRifleMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoSkull"] = 628662130] = "AssaultRifleMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoSessanta"] = 3309920045] = "AssaultRifleMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoPerseus"] = 3482022833] = "AssaultRifleMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoLeopard"] = 2847614993] = "AssaultRifleMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoZebra"] = 4234628436] = "AssaultRifleMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoGeometric"] = 2088750491] = "AssaultRifleMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoBoom"] = 2781053842] = "AssaultRifleMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["AssaultRifleMk2CamoPatriotic"] = 3115408816] = "AssaultRifleMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipNormal"] = 1283078430] = "CarbineRifleMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipExtended"] = 1574296533] = "CarbineRifleMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipArmorPiercing"] = 626875735] = "CarbineRifleMk2ClipArmorPiercing";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipFMJ"] = 1141059345] = "CarbineRifleMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipIncendiary"] = 1025884839] = "CarbineRifleMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2ClipTracer"] = 391640422] = "CarbineRifleMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2BarrelNormal"] = 2201368575] = "CarbineRifleMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2BarrelHeavy"] = 2335983627] = "CarbineRifleMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoDigital"] = 1272803094] = "CarbineRifleMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoBrushstroke"] = 1080719624] = "CarbineRifleMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoWoodland"] = 792221348] = "CarbineRifleMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoSkull"] = 3842785869] = "CarbineRifleMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoSessanta"] = 3548192559] = "CarbineRifleMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoPerseus"] = 2250671235] = "CarbineRifleMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoLeopard"] = 4095795318] = "CarbineRifleMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoZebra"] = 2866892280] = "CarbineRifleMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoGeometric"] = 2559813981] = "CarbineRifleMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoBoom"] = 1796459838] = "CarbineRifleMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["CarbineRifleMk2CamoPatriotic"] = 3663056191] = "CarbineRifleMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipNormal"] = 1227564412] = "CombatMGMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipExtended"] = 400507625] = "CombatMGMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipArmorPiercing"] = 696788003] = "CombatMGMk2ClipArmorPiercing";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipFMJ"] = 1475288264] = "CombatMGMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipIncendiary"] = 3274096058] = "CombatMGMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2ClipTracer"] = 4133787461] = "CombatMGMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2BarrelNormal"] = 3276730932] = "CombatMGMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2BarrelHeavy"] = 3051509595] = "CombatMGMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoDigital"] = 1249283253] = "CombatMGMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoBrushstroke"] = 3437259709] = "CombatMGMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoWoodland"] = 3197423398] = "CombatMGMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoSkull"] = 1980349969] = "CombatMGMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoSessanta"] = 1219453777] = "CombatMGMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoPerseus"] = 2441508106] = "CombatMGMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoLeopard"] = 2220186280] = "CombatMGMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoZebra"] = 457967755] = "CombatMGMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoGeometric"] = 235171324] = "CombatMGMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoBoom"] = 42685294] = "CombatMGMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["CombatMGMk2CamoPatriotic"] = 3607349581] = "CombatMGMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipNormal"] = 4196276776] = "HeavySniperMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipExtended"] = 752418717] = "HeavySniperMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipArmorPiercing"] = 4164277972] = "HeavySniperMk2ClipArmorPiercing";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipExplosive"] = 2313935527] = "HeavySniperMk2ClipExplosive";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipFMJ"] = 1005144310] = "HeavySniperMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ClipIncendiary"] = 247526935] = "HeavySniperMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeLarge"] = 2193687427] = "HeavySniperMk2ScopeLarge";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeNightvision"] = 3061846192] = "HeavySniperMk2ScopeNightvision";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2ScopeThermal"] = 776198721] = "HeavySniperMk2ScopeThermal";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Suppressor"] = 2890063729] = "HeavySniperMk2Suppressor";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Muzzle8"] = 1602080333] = "HeavySniperMk2Muzzle8";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2Muzzle9"] = 1764221345] = "HeavySniperMk2Muzzle9";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2BarrelNormal"] = 2425761975] = "HeavySniperMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2BarrelHeavy"] = 277524638] = "HeavySniperMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoDigital"] = 4164123906] = "HeavySniperMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoBrushstroke"] = 3317620069] = "HeavySniperMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoWoodland"] = 3916506229] = "HeavySniperMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoSkull"] = 329939175] = "HeavySniperMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoSessanta"] = 643374672] = "HeavySniperMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoPerseus"] = 807875052] = "HeavySniperMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoLeopard"] = 2893163128] = "HeavySniperMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoZebra"] = 3198471901] = "HeavySniperMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoGeometric"] = 3447155842] = "HeavySniperMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoBoom"] = 2881858759] = "HeavySniperMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["HeavySniperMk2CamoPatriotic"] = 1815270123] = "HeavySniperMk2CamoPatriotic";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipNormal"] = 1277460590] = "SMGMk2ClipNormal";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipExtended"] = 3112393518] = "SMGMk2ClipExtended";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipFMJ"] = 190476639] = "SMGMk2ClipFMJ";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipHollowpoint"] = 974903034] = "SMGMk2ClipHollowpoint";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipIncendiary"] = 3650233061] = "SMGMk2ClipIncendiary";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ClipTracer"] = 2146055916] = "SMGMk2ClipTracer";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2Sights"] = 2681951826] = "SMGMk2Sights";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ScopeMacro"] = 3842157419] = "SMGMk2ScopeMacro";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2ScopeSmall"] = 1038927834] = "SMGMk2ScopeSmall";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2BarrelNormal"] = 3641720545] = "SMGMk2BarrelNormal";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2BarrelHeavy"] = 2774849419] = "SMGMk2BarrelHeavy";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoDigital"] = 3298267239] = "SMGMk2CamoDigital";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoBrushstroke"] = 940943685] = "SMGMk2CamoBrushstroke";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoWoodland"] = 1263226800] = "SMGMk2CamoWoodland";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoSkull"] = 3966931456] = "SMGMk2CamoSkull";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoSessanta"] = 1224100642] = "SMGMk2CamoSessanta";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoPerseus"] = 899228776] = "SMGMk2CamoPerseus";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoLeopard"] = 616006309] = "SMGMk2CamoLeopard";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoZebra"] = 2733014785] = "SMGMk2CamoZebra";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoGeometric"] = 572063080] = "SMGMk2CamoGeometric";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoBoom"] = 1170588613] = "SMGMk2CamoBoom";
        WeaponComponentHash2[WeaponComponentHash2["SMGMk2CamoPatriotic"] = 966612367] = "SMGMk2CamoPatriotic";
      })(WeaponComponentHash || (WeaponComponentHash = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/ComponentAttachmentPoint.js
  var ComponentAttachmentPoint;
  var init_ComponentAttachmentPoint = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/ComponentAttachmentPoint.js"() {
      (function(ComponentAttachmentPoint2) {
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Invalid"] = 4294967295] = "Invalid";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Clip"] = 3723347892] = "Clip";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Clip2"] = 291640902] = "Clip2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["FlashLaser"] = 679107254] = "FlashLaser";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["FlashLaser2"] = 2722126698] = "FlashLaser2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Supp"] = 1863181664] = "Supp";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Supp2"] = 945598191] = "Supp2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["GunRoot"] = 962500902] = "GunRoot";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Scope"] = 196630833] = "Scope";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Scope2"] = 1684637069] = "Scope2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Grip"] = 2972950469] = "Grip";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Grip2"] = 3748215485] = "Grip2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["TorchBulb"] = 421673795] = "TorchBulb";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Rail"] = 2451679629] = "Rail";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Rail2"] = 497110245] = "Rail2";
        ComponentAttachmentPoint2[ComponentAttachmentPoint2["Barrel"] = 2982890265] = "Barrel";
      })(ComponentAttachmentPoint || (ComponentAttachmentPoint = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/DlcWeaponComponentData.js
  function initializeOnce() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      const strLength = 64;
      const weaponCount = GetNumDlcWeapons();
      for (let i = 0; i < weaponCount; i++) {
        const componentCount = GetNumDlcWeaponComponents(i);
        for (let j = 0; j < componentCount; j++) {
          const buffer = new Uint8Array(14 * intLength + 4 * strLength);
          Citizen.invokeNative("0x6CF598A2957C2BF8", i, j, buffer, Citizen.returnResultAnyway());
          const dlcWeaponComponentData = {
            attachBone: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
            bActiveByDefault: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
            unk: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
            componentHash: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
            unk2: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength),
            componentCost: getUInt32FromUint8Array(buffer, 10 * intLength, 11 * intLength),
            name: getStringFromUInt8Array(buffer, 12 * intLength, 12 * intLength + strLength),
            desc: getStringFromUInt8Array(buffer, 12 * intLength + strLength, 12 * intLength + 2 * strLength)
          };
          DlcWeaponComponentData.set(dlcWeaponComponentData.componentHash, dlcWeaponComponentData);
        }
      }
      isInitialized = true;
    };
  }
  var DlcWeaponComponentData;
  var init_DlcWeaponComponentData = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/DlcWeaponComponentData.js"() {
      init_utils();
      DlcWeaponComponentData = /* @__PURE__ */ new Map();
      initializeOnce()();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/ComponentDisplayNameByHash.js
  function initializeOnce2() {
    let isInitialized = false;
    return function() {
      if (isInitialized) {
        return;
      }
      for (const [hash, data] of DlcWeaponComponentData) {
        ComponentDisplayNameByHash.set(hash, data.name);
      }
      isInitialized = true;
    };
  }
  var ComponentDisplayNameByHash;
  var init_ComponentDisplayNameByHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/ComponentDisplayNameByHash.js"() {
      init_WeaponComponentHash();
      init_DlcWeaponComponentData();
      ComponentDisplayNameByHash = /* @__PURE__ */ new Map([
        [WeaponComponentHash.Invalid, "WCT_INVALID"],
        [WeaponComponentHash.KnuckleVarmodBase, "WT_KNUCKLE"],
        [WeaponComponentHash.KnuckleVarmodPimp, "WCT_KNUCK_02"],
        [WeaponComponentHash.KnuckleVarmodBallas, "WCT_KNUCK_BG"],
        [WeaponComponentHash.KnuckleVarmodDollar, "WCT_KNUCK_DLR"],
        [WeaponComponentHash.KnuckleVarmodDiamond, "WCT_KNUCK_DMD"],
        [WeaponComponentHash.KnuckleVarmodHate, "WCT_KNUCK_HT"],
        [WeaponComponentHash.KnuckleVarmodLove, "WCT_KNUCK_LV"],
        [WeaponComponentHash.KnuckleVarmodPlayer, "WCT_KNUCK_PC"],
        [WeaponComponentHash.KnuckleVarmodKing, "WCT_KNUCK_SLG"],
        [WeaponComponentHash.KnuckleVarmodVagos, "WCT_KNUCK_VG"],
        [WeaponComponentHash.Invalid, "WCT_INVALID"],
        [WeaponComponentHash.AtRailCover01, "WCT_RAIL"],
        [WeaponComponentHash.AtArAfGrip, "WCT_GRIP"],
        [WeaponComponentHash.AtArAfGrip2, "WCT_GRIP"],
        [WeaponComponentHash.AtPiFlsh, "WCT_FLASH"],
        [WeaponComponentHash.AtArFlsh, "WCT_FLASH"],
        [WeaponComponentHash.PistolMk2Flash, "WCT_FLASH"],
        [WeaponComponentHash.AtScopeMacro, "WCT_SCOPE_MAC"],
        [WeaponComponentHash.AtScopeMacro02, "WCT_SCOPE_MAC"],
        [WeaponComponentHash.AtScopeSmall, "WCT_SCOPE_SML"],
        [WeaponComponentHash.AtScopeSmall02, "WCT_SCOPE_SML"],
        [WeaponComponentHash.AtScopeMedium, "WCT_SCOPE_MED"],
        [WeaponComponentHash.AtScopeLarge, "WCT_SCOPE_LRG"],
        [WeaponComponentHash.AtScopeMax, "WCT_SCOPE_MAX"],
        [WeaponComponentHash.AtPiSupp, "WCT_SUPP"],
        [WeaponComponentHash.AtArSupp, "WCT_SUPP"],
        [WeaponComponentHash.AtArSupp02, "WCT_SUPP"],
        [WeaponComponentHash.AtSrSupp, "WCT_SUPP"],
        [WeaponComponentHash.HeavySniperMk2Suppressor, "WCT_SUPP"],
        [WeaponComponentHash.AtPiSupp02, "WCT_SUPP"],
        [WeaponComponentHash.CombatPistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.APPistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MicroSMGClip01, "WCT_CLIP1"],
        [WeaponComponentHash.AssaultRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.CarbineRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.AdvancedRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MGClip01, "WCT_CLIP1"],
        [WeaponComponentHash.CombatMGClip01, "WCT_CLIP1"],
        [WeaponComponentHash.AssaultShotgunClip01, "WCT_CLIP1"],
        [WeaponComponentHash.SniperRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.HeavySniperClip01, "WCT_CLIP1"],
        [WeaponComponentHash.AssaultSMGClip01, "WCT_CLIP1"],
        [WeaponComponentHash.Pistol50Clip01, "WCT_CLIP1"],
        [195735895, "WCT_CLIP1"],
        [1525977990, "WCT_CLIP1"],
        [3404452422, "WCT_CLIP1"],
        [4170538377, "WCT_CLIP1"],
        [WeaponComponentHash.SNSPistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.VintagePistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.HeavyShotgunClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MarksmanRifleClip01, "WCT_CLIP1"],
        [WeaponComponentHash.CombatPDWClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MarksmanPistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.MachinePistolClip01, "WCT_CLIP1"],
        [WeaponComponentHash.PistolMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.AssaultRifleMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.CarbineRifleMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.CombatMGMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.HeavySniperMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.SMGMk2ClipNormal, "WCT_CLIP1"],
        [WeaponComponentHash.PistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.CombatPistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.APPistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MicroSMGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.SMGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.AssaultRifleClip02, "WCT_CLIP2"],
        [WeaponComponentHash.CarbineRifleClip02, "WCT_CLIP2"],
        [WeaponComponentHash.AdvancedRifleClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.CombatMGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.AssaultShotgunClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MinigunClip01, "WCT_CLIP2"],
        [WeaponComponentHash.AssaultSMGClip02, "WCT_CLIP2"],
        [WeaponComponentHash.Pistol50Clip02, "WCT_CLIP2"],
        [1824470811, "WCT_CLIP2"],
        [3787849722, "WCT_CLIP2"],
        [1048471894, "WCT_CLIP2"],
        [WeaponComponentHash.SNSPistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.VintagePistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.HeavyShotgunClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MarksmanRifleClip02, "WCT_CLIP2"],
        [WeaponComponentHash.CombatPDWClip02, "WCT_CLIP2"],
        [WeaponComponentHash.MachinePistolClip02, "WCT_CLIP2"],
        [WeaponComponentHash.PistolMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.AssaultRifleMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.CarbineRifleMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.CombatMGMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.HeavySniperMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.SMGMk2ClipExtended, "WCT_CLIP2"],
        [WeaponComponentHash.AtScopeLargeFixedZoom, "WCT_SCOPE_LRG"],
        [WeaponComponentHash.AssaultRifleVarmodLuxe, "WCT_VAR_GOLD"],
        [WeaponComponentHash.CarbineRifleVarmodLuxe, "WCT_VAR_GOLD"],
        [WeaponComponentHash.PistolVarmodLuxe, "WCT_VAR_GOLD"],
        [WeaponComponentHash.SMGVarmodLuxe, "WCT_VAR_GOLD"],
        [WeaponComponentHash.MicroSMGVarmodLuxe, "WCT_VAR_GOLD"],
        [371102273, "WCT_VAR_GOLD"],
        [WeaponComponentHash.AssaultSMGVarmodLowrider, "WCT_VAR_GOLD"],
        [WeaponComponentHash.CombatPistolVarmodLowrider, "WCT_VAR_GOLD"],
        [WeaponComponentHash.MGVarmodLowrider, "WCT_VAR_GOLD"],
        [WeaponComponentHash.PumpShotgunVarmodLowrider, "WCT_VAR_GOLD"],
        [WeaponComponentHash.AdvancedRifleVarmodLuxe, "WCT_VAR_METAL"],
        [WeaponComponentHash.APPistolVarmodLuxe, "WCT_VAR_METAL"],
        [WeaponComponentHash.SawnoffShotgunVarmodLuxe, "WCT_VAR_METAL"],
        [WeaponComponentHash.BullpupRifleVarmodLow, "WCT_VAR_METAL"],
        [WeaponComponentHash.Pistol50VarmodLuxe, "WCT_VAR_SIL"],
        [WeaponComponentHash.HeavyPistolVarmodLuxe, "WCT_VAR_WOOD"],
        [WeaponComponentHash.SniperRifleVarmodLuxe, "WCT_VAR_WOOD"],
        [WeaponComponentHash.SNSPistolVarmodLowrider, "WCT_VAR_WOOD"],
        [WeaponComponentHash.CombatMGVarmodLowrider, "WCT_VAR_ETCHM"],
        [WeaponComponentHash.SpecialCarbineVarmodLowrider, "WCT_VAR_ETCHM"],
        [WeaponComponentHash.SwitchbladeVarmodBase, "WCT_SB_BASE"],
        [WeaponComponentHash.SwitchbladeVarmodVar1, "WCT_SB_VAR1"],
        [WeaponComponentHash.SwitchbladeVarmodVar2, "WCT_SB_VAR2"],
        [WeaponComponentHash.RevolverClip01, "WCT_CLIP1"],
        [WeaponComponentHash.RevolverVarmodBoss, "WCT_REV_VARB"],
        [WeaponComponentHash.RevolverVarmodGoon, "WCT_REV_VARG"],
        [WeaponComponentHash.SMGClip03, "WCT_CLIP_DRM"],
        [WeaponComponentHash.AssaultRifleClip03, "WCT_CLIP_DRM"],
        [WeaponComponentHash.HeavyShotgunClip03, "WCT_CLIP_DRM"],
        [WeaponComponentHash.CarbineRifleClip03, "WCT_CLIP_BOX"],
        [WeaponComponentHash.AssaultRifleMk2ClipArmorPiercing, "WCT_CLIP_AP"],
        [WeaponComponentHash.CarbineRifleMk2ClipArmorPiercing, "WCT_CLIP_AP"],
        [WeaponComponentHash.CombatMGMk2ClipArmorPiercing, "WCT_CLIP_AP"],
        [WeaponComponentHash.HeavySniperMk2ClipArmorPiercing, "WCT_CLIP_AP"],
        [WeaponComponentHash.PistolMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.AssaultRifleMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.CarbineRifleMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.CombatMGMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.HeavySniperMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.SMGMk2ClipFMJ, "WCT_CLIP_FMJ"],
        [WeaponComponentHash.PistolMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.AssaultRifleMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.CarbineRifleMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.CombatMGMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.HeavySniperMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.SMGMk2ClipIncendiary, "WCT_CLIP_INC"],
        [WeaponComponentHash.PistolMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.AssaultRifleMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.CarbineRifleMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.CombatMGMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.SMGMk2ClipTracer, "WCT_CLIP_TR"],
        [WeaponComponentHash.HeavySniperMk2ClipExplosive, "WCT_CLIP_EX"],
        [WeaponComponentHash.PistolMk2ClipHollowpoint, "WCT_CLIP_HP"],
        [WeaponComponentHash.SMGMk2ClipHollowpoint, "WCT_CLIP_HP"],
        [WeaponComponentHash.AssaultRifleMk2BarrelNormal, "WCT_BARR"],
        [WeaponComponentHash.CarbineRifleMk2BarrelNormal, "WCT_BARR"],
        [WeaponComponentHash.CombatMGMk2BarrelNormal, "WCT_BARR"],
        [WeaponComponentHash.SMGMk2BarrelNormal, "WCT_BARR"],
        [WeaponComponentHash.AssaultRifleMk2BarrelHeavy, "WCT_BARR2"],
        [WeaponComponentHash.CarbineRifleMk2BarrelHeavy, "WCT_BARR2"],
        [WeaponComponentHash.CombatMGMk2BarrelHeavy, "WCT_BARR2"],
        [WeaponComponentHash.SMGMk2BarrelHeavy, "WCT_BARR2"],
        [WeaponComponentHash.PistolMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.AssaultRifleMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.CarbineRifleMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.CombatMGMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.HeavySniperMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.SMGMk2CamoDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.PistolMk2CamoSlideDigital, "WCT_CAMO_1"],
        [WeaponComponentHash.PistolMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.AssaultRifleMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.CarbineRifleMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.CombatMGMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.HeavySniperMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.SMGMk2CamoBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.PistolMk2CamoSlideBrushstroke, "WCT_CAMO_2"],
        [WeaponComponentHash.PistolMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.AssaultRifleMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.CarbineRifleMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.CombatMGMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.HeavySniperMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.SMGMk2CamoWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.PistolMk2CamoSlideWoodland, "WCT_CAMO_3"],
        [WeaponComponentHash.PistolMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.AssaultRifleMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.CarbineRifleMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.CombatMGMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.HeavySniperMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.SMGMk2CamoSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.PistolMk2CamoSlideSkull, "WCT_CAMO_4"],
        [WeaponComponentHash.PistolMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.AssaultRifleMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.CarbineRifleMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.CombatMGMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.HeavySniperMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.SMGMk2CamoSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.PistolMk2CamoSlideSessanta, "WCT_CAMO_5"],
        [WeaponComponentHash.PistolMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.AssaultRifleMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.CarbineRifleMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.CombatMGMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.HeavySniperMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.SMGMk2CamoPerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.PistolMk2CamoSlidePerseus, "WCT_CAMO_6"],
        [WeaponComponentHash.PistolMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.AssaultRifleMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.CarbineRifleMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.CombatMGMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.HeavySniperMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.SMGMk2CamoLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.PistolMk2CamoSlideLeopard, "WCT_CAMO_7"],
        [WeaponComponentHash.PistolMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.AssaultRifleMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.CarbineRifleMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.CombatMGMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.HeavySniperMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.SMGMk2CamoZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.PistolMk2CamoSlideZebra, "WCT_CAMO_8"],
        [WeaponComponentHash.PistolMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.AssaultRifleMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.CarbineRifleMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.CombatMGMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.HeavySniperMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.SMGMk2CamoGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.PistolMk2CamoSlideGeometric, "WCT_CAMO_9"],
        [WeaponComponentHash.PistolMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.AssaultRifleMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.CarbineRifleMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.CombatMGMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.HeavySniperMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.SMGMk2CamoBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.PistolMk2CamoSlideBoom, "WCT_CAMO_10"],
        [WeaponComponentHash.PistolMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.AssaultRifleMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.CarbineRifleMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.CombatMGMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.HeavySniperMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.SMGMk2CamoPatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.PistolMk2CamoSlidePatriotic, "WCT_CAMO_IND"],
        [WeaponComponentHash.AtSights, "WCT_HOLO"],
        [WeaponComponentHash.AtScopeSmallMk2, "WCT_SCOPE_SML2"],
        [WeaponComponentHash.AtScopeMacroMk2, "WCT_SCOPE_MAC2"],
        [WeaponComponentHash.AtScopeMediumMk2, "WCT_SCOPE_MED2"],
        [WeaponComponentHash.AtMuzzle1, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle2, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle3, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle4, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle5, "WCT_MUZZ"],
        [WeaponComponentHash.AtMuzzle7, "WCT_MUZZ"],
        [WeaponComponentHash.HeavySniperMk2Muzzle8, "WCT_MUZZ"],
        [WeaponComponentHash.HeavySniperMk2Muzzle9, "WCT_MUZZ"],
        [WeaponComponentHash.PistolMk2Scope, "WCT_SCOPE_PI"],
        [WeaponComponentHash.PistolMk2Compensator, "WCT_COMP"],
        [WeaponComponentHash.HeavySniperMk2ScopeLarge, "WCT_SCOPE_LRG2"]
      ]);
      initializeOnce2()();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHashesByWeaponHash.js
  function initializeOnce3() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      const strLength = 64;
      const weaponCount = GetNumDlcWeapons();
      for (let i = 0; i < weaponCount; i++) {
        const weaponBuffer = new Uint8Array(14 * intLength + 4 * strLength);
        Citizen.invokeNative("0x79923CD21BECE14E", i, weaponBuffer, Citizen.returnResultAnyway());
        const weaponHash = getUInt32FromUint8Array(weaponBuffer, 2 * intLength, 3 * intLength);
        const componentCount = GetNumDlcWeaponComponents(i);
        const componentHashes = [];
        for (let j = 0; j < componentCount; j++) {
          const componentBuffer = new Uint8Array(14 * intLength + 4 * strLength);
          Citizen.invokeNative("0x6CF598A2957C2BF8", i, j, componentBuffer, Citizen.returnResultAnyway());
          const componentHash = getUInt32FromUint8Array(componentBuffer, 6 * intLength, 7 * intLength);
          componentHashes.push(componentHash);
        }
        WeaponComponentHashesByWeaponHash.set(weaponHash, componentHashes);
      }
      isInitialized = true;
    };
  }
  var WeaponComponentHashesByWeaponHash;
  var init_WeaponComponentHashesByWeaponHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHashesByWeaponHash.js"() {
      init_hashes();
      init_WeaponComponentHash();
      init_utils();
      WeaponComponentHashesByWeaponHash = /* @__PURE__ */ new Map([
        [
          WeaponHash.KnuckleDuster,
          [
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_BASE,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_PIMP,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_BALLAS,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_DOLLAR,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_DIAMOND,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_HATE,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_LOVE,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_PLAYER,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_KING,
            WeaponComponentHash.COMPONENT_KNUCKLE_VARMOD_VAGOS
          ]
        ],
        [
          WeaponHash.SwitchBlade,
          [
            WeaponComponentHash.COMPONENT_SWITCHBLADE_VARMOD_BASE,
            WeaponComponentHash.COMPONENT_SWITCHBLADE_VARMOD_VAR1,
            WeaponComponentHash.COMPONENT_SWITCHBLADE_VARMOD_VAR2
          ]
        ],
        [
          WeaponHash.Pistol,
          [
            WeaponComponentHash.COMPONENT_PISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_PISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP_02,
            WeaponComponentHash.COMPONENT_PISTOL_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.CombatPistol,
          [
            WeaponComponentHash.COMPONENT_COMBATPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_COMBATPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_COMBATPISTOL_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.APPistol,
          [
            WeaponComponentHash.COMPONENT_APPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_APPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_APPISTOL_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.Pistol50,
          [
            WeaponComponentHash.COMPONENT_PISTOL50_CLIP_01,
            WeaponComponentHash.COMPONENT_PISTOL50_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_PISTOL50_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.Revolver,
          [
            WeaponComponentHash.COMPONENT_REVOLVER_VARMOD_BOSS,
            WeaponComponentHash.COMPONENT_REVOLVER_VARMOD_GOON,
            WeaponComponentHash.COMPONENT_REVOLVER_CLIP_01
          ]
        ],
        [
          WeaponHash.SNSPistol,
          [
            WeaponComponentHash.COMPONENT_SNSPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_SNSPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_SNSPISTOL_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.HeavyPistol,
          [
            WeaponComponentHash.COMPONENT_HEAVYPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_HEAVYPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_HEAVYPISTOL_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.RevolverMk2,
          [
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_PI_COMP_03,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_REVOLVER_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.SNSPistolMk2,
          [
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH_03,
            WeaponComponentHash.COMPONENT_AT_PI_RAIL_02,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_PI_COMP_02,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_IND_01,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_02_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_03_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_04_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_05_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_06_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_07_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_08_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_09_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_10_SLIDE,
            WeaponComponentHash.COMPONENT_SNSPISTOL_MK2_CAMO_IND_01_SLIDE
          ]
        ],
        [
          WeaponHash.PistolMk2,
          [
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_PI_RAIL,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH_02,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_PI_COMP,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_IND_01,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_02_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_03_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_04_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_05_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_06_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_07_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_08_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_09_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_10_SLIDE,
            WeaponComponentHash.COMPONENT_PISTOL_MK2_CAMO_IND_01_SLIDE
          ]
        ],
        [
          WeaponHash.VintagePistol,
          [
            WeaponComponentHash.COMPONENT_VINTAGEPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_VINTAGEPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP
          ]
        ],
        [
          WeaponHash.RayPistol,
          [WeaponComponentHash.COMPONENT_RAYPISTOL_VARMOD_XMAS18]
        ],
        [
          WeaponHash.CeramicPistol,
          [
            WeaponComponentHash.COMPONENT_CERAMICPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_CERAMICPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_CERAMICPISTOL_SUPP
          ]
        ],
        [
          WeaponHash.MicroSMG,
          [
            WeaponComponentHash.COMPONENT_MICROSMG_CLIP_01,
            WeaponComponentHash.COMPONENT_MICROSMG_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_PI_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_MICROSMG_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.SMG,
          [
            WeaponComponentHash.COMPONENT_SMG_CLIP_01,
            WeaponComponentHash.COMPONENT_SMG_CLIP_02,
            WeaponComponentHash.COMPONENT_SMG_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_02,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_SMG_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.AssaultSMG,
          [
            WeaponComponentHash.COMPONENT_ASSAULTSMG_CLIP_01,
            WeaponComponentHash.COMPONENT_ASSAULTSMG_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_ASSAULTSMG_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.MiniSMG,
          [WeaponComponentHash.COMPONENT_MINISMG_CLIP_01, WeaponComponentHash.COMPONENT_MINISMG_CLIP_02]
        ],
        [
          WeaponHash.SMGMk2,
          [
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_SMG_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS_SMG,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_02_SMG_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_SMG_MK2,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_SB_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_SB_BARREL_02,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_SMG_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.MachinePistol,
          [
            WeaponComponentHash.COMPONENT_MACHINEPISTOL_CLIP_01,
            WeaponComponentHash.COMPONENT_MACHINEPISTOL_CLIP_02,
            WeaponComponentHash.COMPONENT_MACHINEPISTOL_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_PI_SUPP
          ]
        ],
        [
          WeaponHash.CombatPDW,
          [
            WeaponComponentHash.COMPONENT_COMBATPDW_CLIP_01,
            WeaponComponentHash.COMPONENT_COMBATPDW_CLIP_02,
            WeaponComponentHash.COMPONENT_COMBATPDW_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL
          ]
        ],
        [
          WeaponHash.PumpShotgun,
          [
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SR_SUPP,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.SawnOffShotgun,
          [WeaponComponentHash.COMPONENT_SAWNOFFSHOTGUN_VARMOD_LUXE]
        ],
        [
          WeaponHash.AssaultShotgun,
          [
            WeaponComponentHash.COMPONENT_ASSAULTSHOTGUN_CLIP_01,
            WeaponComponentHash.COMPONENT_ASSAULTSHOTGUN_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP
          ]
        ],
        [
          WeaponHash.BullpupShotgun,
          [
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP
          ]
        ],
        [
          WeaponHash.PumpShotgunMk2,
          [
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_HOLLOWPOINT,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CLIP_EXPLOSIVE,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SR_SUPP_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_08,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_PUMPSHOTGUN_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.HeavyShotgun,
          [
            WeaponComponentHash.COMPONENT_HEAVYSHOTGUN_CLIP_01,
            WeaponComponentHash.COMPONENT_HEAVYSHOTGUN_CLIP_02,
            WeaponComponentHash.COMPONENT_HEAVYSHOTGUN_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP
          ]
        ],
        [
          WeaponHash.CombatShotgun,
          [WeaponComponentHash.COMPONENT_AT_AR_FLSH, WeaponComponentHash.COMPONENT_AT_AR_SUPP]
        ],
        [
          WeaponHash.AssaultRifle,
          [
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.CarbineRifle,
          [
            WeaponComponentHash.COMPONENT_CARBINERIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.AdvancedRifle,
          [
            WeaponComponentHash.COMPONENT_ADVANCEDRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_ADVANCEDRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_ADVANCEDRIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.SpecialCarbine,
          [
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_CLIP_01,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_CLIP_02,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_CLIP_03,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.BullpupRifle,
          [
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_VARMOD_LOW
          ]
        ],
        [
          WeaponHash.BullpupRifleMk2,
          [
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_02_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_MK2,
            WeaponComponentHash.COMPONENT_AT_BP_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_BP_BARREL_02,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_BULLPUPRIFLE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.SpecialCarbineMk2,
          [
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_AT_SC_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_SC_BARREL_02,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_SPECIALCARBINE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.AssaultRifleMk2,
          [
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_AR_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_AR_BARREL_02,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_ASSAULTRIFLE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.CarbineRifleMk2,
          [
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MACRO_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_CR_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_CR_BARREL_02,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_CARBINERIFLE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.CompactRifle,
          [
            WeaponComponentHash.COMPONENT_COMPACTRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_COMPACTRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_COMPACTRIFLE_CLIP_03
          ]
        ],
        [
          WeaponHash.MilitaryRifle,
          [
            WeaponComponentHash.COMPONENT_MILITARYRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_MILITARYRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_MILITARYRIFLE_SIGHT_01,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP
          ]
        ],
        [
          WeaponHash.MG,
          [
            WeaponComponentHash.COMPONENT_MG_CLIP_01,
            WeaponComponentHash.COMPONENT_MG_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_02,
            WeaponComponentHash.COMPONENT_MG_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.CombatMG,
          [
            WeaponComponentHash.COMPONENT_COMBATMG_CLIP_01,
            WeaponComponentHash.COMPONENT_COMBATMG_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_COMBATMG_VARMOD_LOWRIDER
          ]
        ],
        [
          WeaponHash.CombatMGMk2,
          [
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_MG_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_MG_BARREL_02,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_COMBATMG_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.Gusenberg,
          [
            WeaponComponentHash.COMPONENT_GUSENBERG_CLIP_01,
            WeaponComponentHash.COMPONENT_GUSENBERG_CLIP_02
          ]
        ],
        [
          WeaponHash.SniperRifle,
          [
            WeaponComponentHash.COMPONENT_SNIPERRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP_02,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MAX,
            WeaponComponentHash.COMPONENT_SNIPERRIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.HeavySniper,
          [
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_CLIP_01,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MAX
          ]
        ],
        [
          WeaponHash.MarksmanRifleMk2,
          [
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_TRACER,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_AT_SIGHTS,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MEDIUM_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM_MK2,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_01,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_02,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_04,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_05,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_06,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_07,
            WeaponComponentHash.COMPONENT_AT_MRFL_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_MRFL_BARREL_02,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP_02,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.HeavySniperMk2,
          [
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_01,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_02,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_INCENDIARY,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_ARMORPIERCING,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_FMJ,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CLIP_EXPLOSIVE,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE_MK2,
            WeaponComponentHash.COMPONENT_AT_SCOPE_MAX,
            WeaponComponentHash.COMPONENT_AT_SCOPE_NV,
            WeaponComponentHash.COMPONENT_AT_SCOPE_THERMAL,
            WeaponComponentHash.COMPONENT_AT_SR_SUPP_03,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_08,
            WeaponComponentHash.COMPONENT_AT_MUZZLE_09,
            WeaponComponentHash.COMPONENT_AT_SR_BARREL_01,
            WeaponComponentHash.COMPONENT_AT_SR_BARREL_02,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_02,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_03,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_04,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_05,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_06,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_07,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_08,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_09,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_10,
            WeaponComponentHash.COMPONENT_HEAVYSNIPER_MK2_CAMO_IND_01
          ]
        ],
        [
          WeaponHash.MarksmanRifle,
          [
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_CLIP_01,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_CLIP_02,
            WeaponComponentHash.COMPONENT_AT_SCOPE_LARGE_FIXED_ZOOM,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_SUPP,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_MARKSMANRIFLE_VARMOD_LUXE
          ]
        ],
        [
          WeaponHash.GrenadeLauncher,
          [
            WeaponComponentHash.COMPONENT_GRENADELAUNCHER_CLIP_01,
            WeaponComponentHash.COMPONENT_AT_AR_FLSH,
            WeaponComponentHash.COMPONENT_AT_AR_AFGRIP,
            WeaponComponentHash.COMPONENT_AT_SCOPE_SMALL
          ]
        ]
      ]);
      initializeOnce3()();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/ComponentAttachmentPointByHash.js
  function initializeOnce4() {
    let isInitialized = false;
    return function() {
      if (isInitialized) {
        return;
      }
      for (const [hash, data] of DlcWeaponComponentData) {
        ComponentAttachmentPointByHash.set(hash, data.attachBone);
      }
      isInitialized = true;
    };
  }
  var ComponentAttachmentPointByHash;
  var init_ComponentAttachmentPointByHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/ComponentAttachmentPointByHash.js"() {
      init_WeaponComponentHash();
      init_ComponentAttachmentPoint();
      init_DlcWeaponComponentData();
      ComponentAttachmentPointByHash = /* @__PURE__ */ new Map([
        [WeaponComponentHash.PistolClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatPistolClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatPistolClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.APPistolClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.APPistolClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MicroSMGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MicroSMGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGClip03, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleClip03, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleClip03, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AdvancedRifleClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AdvancedRifleClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PumpShotgunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultShotgunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultShotgunClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SniperRifleClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.MinigunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultSMGClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultSMGClip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.BullpupShotgunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.Pistol50Clip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.Pistol50Clip02, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SawnoffShotgunClip01, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipHollowpoint, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.PistolMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipArmorPiercing, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AssaultRifleMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipArmorPiercing, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CarbineRifleMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipArmorPiercing, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.CombatMGMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipArmorPiercing, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.HeavySniperMk2ClipExplosive, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipNormal, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipExtended, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipFMJ, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipHollowpoint, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.SMGMk2ClipTracer, ComponentAttachmentPoint.Clip],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
        [WeaponComponentHash.PistolMk2Compensator, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtPiSupp02, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.HeavySniperMk2Suppressor, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.HeavySniperMk2Muzzle8, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.HeavySniperMk2Muzzle9, ComponentAttachmentPoint.Supp],
        [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],
        [WeaponComponentHash.PistolVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatPistolVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.APPistolVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.MicroSMGVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AdvancedRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.MGVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PumpShotgunVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SniperRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultSMGVarmodLowrider, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.Pistol50VarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SawnoffShotgunVarmodLuxe, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.PistolMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AssaultRifleMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CarbineRifleMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.CombatMGMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.HeavySniperMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.SMGMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],
        [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMacro02, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMedium, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeSmall, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeSmall02, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMedium, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeLarge, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeLarge, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeSmall, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.PistolMk2Scope, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.PistolMk2Flash, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.HeavySniperMk2ScopeLarge, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.HeavySniperMk2ScopeNightvision, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.HeavySniperMk2ScopeThermal, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.SMGMk2Sights, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.SMGMk2ScopeMacro, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.SMGMk2ScopeSmall, ComponentAttachmentPoint.Scope],
        [WeaponComponentHash.PistolMk2CamoSlideDigital, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideBrushstroke, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideWoodland, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideSkull, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideSessanta, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlidePerseus, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideLeopard, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideZebra, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideGeometric, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlideBoom, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.PistolMk2CamoSlidePatriotic, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMacroMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeSmallMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMacroMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.GrenadeLauncherClip01, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
        [WeaponComponentHash.AtRailCover01, ComponentAttachmentPoint.Rail],
        [WeaponComponentHash.AssaultRifleMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.AssaultRifleMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.CarbineRifleMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.CarbineRifleMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.CombatMGMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.CombatMGMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.HeavySniperMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.HeavySniperMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.SMGMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
        [WeaponComponentHash.SMGMk2BarrelHeavy, ComponentAttachmentPoint.Barrel]
      ]);
      initializeOnce4()();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHudStats.js
  function initializeOnce5() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      for (const hash of enumValues(WeaponComponentHash)) {
        const buffer = new Uint8Array(40);
        Citizen.invokeNative("0xB3CAF387AE12E9F8", hash, buffer, Citizen.returnResultAnyway());
        const weaponComponentHudStat = {
          hudDamage: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
          hudSpeed: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
          hudCapacity: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
          hudAccuracy: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
          hudRange: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength)
        };
        WeaponComponentHudStats.set(hash, weaponComponentHudStat);
      }
      isInitialized = true;
    };
  }
  var WeaponComponentHudStats;
  var init_WeaponComponentHudStats = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentHudStats.js"() {
      init_WeaponComponentHash();
      init_utils();
      init_utils();
      WeaponComponentHudStats = /* @__PURE__ */ new Map();
      initializeOnce5()();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponent.js
  var WeaponComponent;
  var init_WeaponComponent = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponent.js"() {
      init_WeaponComponentHash();
      init_ComponentAttachmentPoint();
      init_Game();
      init_ComponentDisplayNameByHash();
      init_WeaponComponentHashesByWeaponHash();
      init_ComponentAttachmentPointByHash();
      init_WeaponComponentHudStats();
      WeaponComponent = class {
        constructor(owner, weapon, componentHash) {
          this.owner = owner;
          this.weapon = weapon;
          this.componentHash = componentHash;
        }
        get IsInvalid() {
          return this.componentHash === WeaponComponentHash.Invalid;
        }
        get ComponentHash() {
          return this.componentHash;
        }
        get Active() {
          return HasPedGotWeaponComponent(this.owner.Handle, this.weapon.Hash, this.componentHash);
        }
        set Active(value) {
          if (value) {
            GiveWeaponComponentToPed(this.owner.Handle, this.weapon.Hash, this.componentHash);
          } else {
            RemoveWeaponComponentFromPed(this.owner.Handle, this.weapon.Hash, this.componentHash);
          }
        }
        get DisplayName() {
          return WeaponComponent.getComponentDisplayNameFromHash(this.weapon.Hash, this.componentHash);
        }
        get LocalizedName() {
          return Game.getGXTEntry(this.DisplayName);
        }
        get AttachmentPoint() {
          return WeaponComponent.getAttachmentPoint(this.weapon.Hash, this.componentHash);
        }
        get HudStats() {
          return WeaponComponentHudStats.get(this.componentHash);
        }
        static getComponentDisplayNameFromHash(hash, componentHash) {
          var _a;
          if (!hash) {
            return "WCT_INVALID";
          }
          return (_a = ComponentDisplayNameByHash.get(componentHash)) !== null && _a !== void 0 ? _a : "WCT_INVALID";
        }
        static getAttachmentPoint(weaponHash, componentHash) {
          var _a;
          const componentHashes = WeaponComponentHashesByWeaponHash.get(weaponHash);
          if (!componentHashes) {
            return ComponentAttachmentPoint.Invalid;
          }
          if (componentHashes.every((x) => x !== componentHash)) {
            return ComponentAttachmentPoint.Invalid;
          }
          return (_a = ComponentAttachmentPointByHash.get(componentHash)) !== null && _a !== void 0 ? _a : ComponentAttachmentPoint.Invalid;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/InvalidWeaponComponent.js
  var InvalidWeaponComponent;
  var init_InvalidWeaponComponent = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/InvalidWeaponComponent.js"() {
      init_WeaponComponent();
      init_WeaponComponentHash();
      init_ComponentAttachmentPoint();
      init_Game();
      InvalidWeaponComponent = class extends WeaponComponent {
        constructor() {
          super(null, null, WeaponComponentHash.Invalid);
        }
        get Active() {
          return false;
        }
        set Active(value) {
        }
        get DisplayName() {
          return "WCT_INVALID";
        }
        get LocalizedName() {
          return Game.getGXTEntry(this.DisplayName);
        }
        static getAttachmentPoint(hash, componentHash) {
          return ComponentAttachmentPoint.Invalid;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentCollection.js
  var WeaponComponentCollection;
  var init_WeaponComponentCollection = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/WeaponComponentCollection.js"() {
      init_WeaponComponent();
      init_InvalidWeaponComponent();
      init_WeaponComponentHashesByWeaponHash();
      init_ComponentAttachmentPoint();
      init_ComponentAttachmentPointByHash();
      WeaponComponentCollection = class {
        constructor(owner, weapon) {
          this.components = /* @__PURE__ */ new Map();
          this.invalidComponent = new InvalidWeaponComponent();
          this.owner = owner;
          this.weapon = weapon;
        }
        [Symbol.iterator]() {
          let pointer = 0;
          const components = Array.from(this.components.values());
          return {
            next() {
              if (pointer < components.length) {
                return { done: false, value: components[pointer++] };
              } else {
                return { done: true, value: null };
              }
            }
          };
        }
        get(componentHash) {
          if (this.AllWeaponComponentHashes.some((x) => x === componentHash)) {
            let component = this.components.get(componentHash);
            if (!component) {
              component = this.createAndAddComponent(componentHash);
            }
            return component;
          }
          return this.invalidComponent;
        }
        get Count() {
          return this.components.size;
        }
        getClipComponent(index) {
          return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.Clip, ComponentAttachmentPoint.Clip2);
        }
        get ClipVariationsCount() {
          return this.getComponentHashesByAttachmentPoints(ComponentAttachmentPoint.Clip, ComponentAttachmentPoint.Clip2).length;
        }
        getScopeComponent(index) {
          return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.Scope, ComponentAttachmentPoint.Scope2);
        }
        get ScopeVariationsCount() {
          return this.getComponentHashesByAttachmentPoints(ComponentAttachmentPoint.Scope, ComponentAttachmentPoint.Scope2).length;
        }
        getSuppressorComponent() {
          return this.getAnyComponentByAttachmentPoints(void 0, ComponentAttachmentPoint.Supp, ComponentAttachmentPoint.Supp2);
        }
        getFlashLightComponent() {
          return this.getAnyComponentByAttachmentPoints(void 0, ComponentAttachmentPoint.FlashLaser, ComponentAttachmentPoint.FlashLaser2);
        }
        getLuxuryFinishComponent() {
          return this.getAnyComponentByAttachmentPoints(void 0, ComponentAttachmentPoint.GunRoot);
        }
        getMk2CamoComponent(index) {
          return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.GunRoot);
        }
        getMk2BarrelComponent(index) {
          return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.Barrel);
        }
        createAndAddComponent(hash) {
          const uintHash = hash >>> 0;
          console.log("createAndAdd", hash, uintHash);
          console.log("about to create", this.owner, this.weapon, uintHash);
          const component = new WeaponComponent(this.owner, this.weapon, uintHash);
          this.components.set(uintHash, component);
          return component;
        }
        get AllWeaponComponentHashes() {
          return WeaponComponentHashesByWeaponHash.get(this.weapon.Hash);
        }
        getComponentHashesByAttachmentPoints(...attachmentPoints) {
          return this.AllWeaponComponentHashes.filter((hash) => attachmentPoints.some((attachmentPoint) => ComponentAttachmentPointByHash.get(hash) === attachmentPoint));
        }
        getAnyComponentByAttachmentPoints(index, ...attachmentPoints) {
          var _a;
          const hashes = this.getComponentHashesByAttachmentPoints(...attachmentPoints);
          if (index === void 0) {
            return (_a = this.get(hashes[0])) !== null && _a !== void 0 ? _a : this.invalidComponent;
          }
          return 0 <= index && index <= hashes.length - 1 ? this.get(hashes[index]) : this.invalidComponent;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/DlcWeaponData.js
  function initializeOnce6() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      const strLength = 64;
      const weaponCount = GetNumDlcWeapons();
      for (let i = 0; i < weaponCount; i++) {
        const buffer = new Uint8Array(14 * intLength + 4 * strLength);
        Citizen.invokeNative("0x79923CD21BECE14E", i, buffer, Citizen.returnResultAnyway());
        const dlcWeaponData = {
          validCheck: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
          weaponHash: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
          unk: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
          weaponCost: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
          ammoCost: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength),
          ammoType: getUInt32FromUint8Array(buffer, 10 * intLength, 11 * intLength),
          defaultClipSize: getUInt32FromUint8Array(buffer, 12 * intLength, 13 * intLength),
          name: getStringFromUInt8Array(buffer, 14 * intLength, 14 * intLength + strLength),
          desc: getStringFromUInt8Array(buffer, 14 * intLength + strLength, 14 * intLength + 2 * strLength),
          simpleDesc: getStringFromUInt8Array(buffer, 14 * intLength + 2 * strLength, 14 * intLength + 3 * strLength),
          upperCaseName: getStringFromUInt8Array(buffer, 14 * intLength + 3 * strLength, 14 * intLength + 4 * strLength)
        };
        DlcWeaponData.set(dlcWeaponData.weaponHash, dlcWeaponData);
      }
      isInitialized = true;
    };
  }
  var DlcWeaponData;
  var init_DlcWeaponData = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/DlcWeaponData.js"() {
      init_utils();
      init_utils();
      DlcWeaponData = /* @__PURE__ */ new Map();
      initializeOnce6()();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponDisplayNameByHash.js
  function initializeOnce7() {
    let isInitialized = false;
    return function() {
      if (isInitialized) {
        return;
      }
      for (const [hash, data] of DlcWeaponData) {
        WeaponDisplayNameByHash.set(hash, data.name);
      }
      isInitialized = true;
    };
  }
  var WeaponDisplayNameByHash;
  var init_WeaponDisplayNameByHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponDisplayNameByHash.js"() {
      init_DlcWeaponData();
      init_hashes();
      WeaponDisplayNameByHash = /* @__PURE__ */ new Map([
        [WeaponHash.Pistol, "WT_PIST"],
        [WeaponHash.CombatPistol, "WT_PIST_CBT"],
        [WeaponHash.APPistol, "WT_PIST_AP"],
        [WeaponHash.SMG, "WT_SMG"],
        [WeaponHash.MicroSMG, "WT_SMG_MCR"],
        [WeaponHash.AssaultRifle, "WT_RIFLE_ASL"],
        [WeaponHash.CarbineRifle, "WT_RIFLE_CBN"],
        [WeaponHash.AdvancedRifle, "WT_RIFLE_ADV"],
        [WeaponHash.MG, "WT_MG"],
        [WeaponHash.CombatMG, "WT_MG_CBT"],
        [WeaponHash.PumpShotgun, "WT_SG_PMP"],
        [WeaponHash.SawnOffShotgun, "WT_SG_SOF"],
        [WeaponHash.AssaultShotgun, "WT_SG_ASL"],
        [WeaponHash.HeavySniper, "WT_SNIP_HVY"],
        [WeaponHash.SniperRifle, "WT_SNIP_RIF"],
        [WeaponHash.GrenadeLauncher, "WT_GL"],
        [WeaponHash.RPG, "WT_RPG"],
        [WeaponHash.Minigun, "WT_MINIGUN"],
        [WeaponHash.AssaultSMG, "WT_SMG_ASL"],
        [WeaponHash.BullpupShotgun, "WT_SG_BLP"],
        [WeaponHash.Pistol50, "WT_PIST_50"],
        [WeaponHash.Bottle, "WT_BOTTLE"],
        [WeaponHash.Gusenberg, "WT_GUSENBERG"],
        [WeaponHash.SNSPistol, "WT_SNSPISTOL"],
        [WeaponHash.VintagePistol, "TT_VPISTOL"],
        [WeaponHash.Dagger, "WT_DAGGER"],
        [WeaponHash.FlareGun, "WT_FLAREGUN"],
        [WeaponHash.Musket, "WT_MUSKET"],
        [WeaponHash.Firework, "WT_FWRKLNCHR"],
        [WeaponHash.MarksmanRifle, "WT_HMKRIFLE"],
        [WeaponHash.HeavyShotgun, "WT_HVYSHOT"],
        [WeaponHash.ProximityMine, "WT_PRXMINE"],
        [WeaponHash.HomingLauncher, "WT_HOMLNCH"],
        [WeaponHash.CombatPDW, "WT_COMBATPDW"],
        [WeaponHash.KnuckleDuster, "WT_KNUCKLE"],
        [WeaponHash.MarksmanPistol, "WT_MKPISTOL"],
        [WeaponHash.Machete, "WT_MACHETE"],
        [WeaponHash.MachinePistol, "WT_MCHPIST"],
        [WeaponHash.Flashlight, "WT_FLASHLIGHT"],
        [WeaponHash.DoubleBarrelShotgun, "WT_DBSHGN"],
        [WeaponHash.CompactRifle, "WT_CMPRIFLE"],
        [WeaponHash.SwitchBlade, "WT_SWBLADE"],
        [WeaponHash.Revolver, "WT_REVOLVER"],
        [WeaponHash.PistolMk2, "WT_PIST2"],
        [WeaponHash.AssaultRifleMk2, "WT_RIFLE_ASL2"],
        [WeaponHash.CarbineRifleMk2, "WT_RIFLE_CBN2"],
        [WeaponHash.CombatMGMk2, "WT_MG_CBT2"],
        [WeaponHash.HeavySniperMk2, "WT_SNIP_HVY2"],
        [WeaponHash.SMGMk2, "WT_SMG2"]
      ]);
      initializeOnce7()();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponHudStats.js
  function initializeOnce8() {
    let isInitialized = false;
    return function() {
      if (isInitialized || IsDuplicityVersion()) {
        return;
      }
      const intLength = 4;
      for (const hash of enumValues(WeaponHash)) {
        const buffer = new Uint8Array(40);
        Citizen.invokeNative("0xD92C739EE34C9EBA", hash, buffer, Citizen.returnResultAnyway());
        const weaponHudStats = {
          hudDamage: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
          hudSpeed: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
          hudCapacity: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
          hudAccuracy: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
          hudRange: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength)
        };
        WeaponHudStats.set(hash, weaponHudStats);
      }
      isInitialized = true;
    };
  }
  var WeaponHudStats;
  var init_WeaponHudStats = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponHudStats.js"() {
      init_utils();
      init_hashes();
      init_utils();
      WeaponHudStats = /* @__PURE__ */ new Map();
      initializeOnce8()();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/Mk2WeaponHash.js
  var Mk2WeaponHash;
  var init_Mk2WeaponHash = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/Mk2WeaponHash.js"() {
      (function(Mk2WeaponHash2) {
        Mk2WeaponHash2[Mk2WeaponHash2["PistolMk2"] = 3219281620] = "PistolMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["SNSPistolMk2"] = 2285322324] = "SNSPistolMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["RevolverMk2"] = 3415619887] = "RevolverMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["SMGMk2"] = 2024373456] = "SMGMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["PumpShotgunMk2"] = 1432025498] = "PumpShotgunMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["SpecialCarbineMk2"] = 2526821735] = "SpecialCarbineMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["BullpupRifleMk2"] = 2228681469] = "BullpupRifleMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
        Mk2WeaponHash2[Mk2WeaponHash2["MarksmanRifleMk2"] = 1785463520] = "MarksmanRifleMk2";
      })(Mk2WeaponHash || (Mk2WeaponHash = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/Weapon.js
  var Weapon;
  var init_Weapon = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/Weapon.js"() {
      init_WeaponComponentCollection();
      init_hashes();
      init_WeaponDisplayNameByHash();
      init_Game();
      init_Model();
      init_WeaponHudStats();
      init_utils();
      init_Mk2WeaponHash();
      init_WeaponComponentHashesByWeaponHash();
      Weapon = class {
        constructor(owner, hash) {
          this.owner = owner;
          this.hash = hash;
          this.components = new WeaponComponentCollection(this.owner, this);
        }
        get Components() {
          return this.components;
        }
        get Hash() {
          return this.hash;
        }
        get IsUnarmed() {
          return this.hash === WeaponHash.Unarmed;
        }
        get IsPresent() {
          if (this.IsUnarmed) {
            return true;
          }
          return HasPedGotWeapon(this.owner.Handle, this.hash, false);
        }
        get DisplayName() {
          var _a;
          return (_a = Weapon.getDisplayNameFromHash(this.hash)) !== null && _a !== void 0 ? _a : "WCT_INVALID";
        }
        get LocalizedName() {
          return Game.getGXTEntry(this.DisplayName);
        }
        get Model() {
          return new Model(GetWeapontypeModel(this.hash));
        }
        get Tint() {
          return GetPedWeaponTintIndex(this.owner.Handle, this.hash);
        }
        set Tint(tint) {
          SetPedWeaponTintIndex(this.owner.Handle, this.hash, tint);
        }
        get Group() {
          return GetWeapontypeGroup(this.hash);
        }
        get AmmoType() {
          return GetPedAmmoTypeFromWeapon(this.owner.Handle, this.hash);
        }
        get Ammo() {
          if (this.IsUnarmed) {
            return 1;
          }
          if (!this.IsPresent) {
            return GetPedAmmoByType(this.owner.Handle, this.AmmoType);
          }
          return GetAmmoInPedWeapon(this.owner.Handle, this.hash);
        }
        set Ammo(count) {
          if (this.IsUnarmed) {
            return;
          }
          if (this.IsPresent) {
            SetPedAmmo(this.owner.Handle, this.hash, count);
          } else {
            GiveWeaponToPed(this.owner.Handle, this.hash, count, false, true);
          }
        }
        get MaxAmmo() {
          if (this.IsUnarmed) {
            return 1;
          }
          const amount = Citizen.invokeNative("0xDC16122C7A20C933", this.owner.Handle, this.hash, Citizen.pointerValueInt(), Citizen.resultAsInteger());
          return amount;
        }
        get MaxAmmoInClip() {
          if (this.IsUnarmed) {
            return 1;
          }
          if (!this.IsPresent) {
            return 0;
          }
          return GetMaxAmmoInClip(this.owner.Handle, this.hash, true);
        }
        get DefaultClipSize() {
          return GetWeaponClipSize(this.hash);
        }
        set InfiniteAmmo(toggle) {
          if (this.IsUnarmed) {
            return;
          }
          SetPedInfiniteAmmo(this.owner.Handle, toggle, this.hash);
        }
        set InfiniteAmmoClip(toggle) {
          SetPedInfiniteAmmoClip(this.owner.Handle, toggle);
        }
        get CanUseOnParachute() {
          return CanUseWeaponOnParachute(this.hash);
        }
        get IsMk2() {
          return Array.from(enumValues(Mk2WeaponHash)).some((x) => x === this.hash);
        }
        setLivery(liveryId, colorId) {
          if (!this.IsMk2) {
            console.log(`[ERROR]${this.setLivery.name} failed. Reason: non-Mk2 weapon`);
            return;
          }
          const component = this.Components.getMk2CamoComponent(liveryId);
          if (component.IsInvalid) {
            console.log(`[ERROR]${this.setLivery.name} failed. Reason: invalid liveryId/Component`);
            return;
          }
          component.Active = true;
          SetPedWeaponLiveryColor(this.owner.Handle, this.hash, component.ComponentHash, colorId);
        }
        get HudStats() {
          return WeaponHudStats.get(this.hash);
        }
        static getDisplayNameFromHash(hash) {
          var _a;
          if (!hash) {
            return "WT_INVALID";
          }
          return (_a = WeaponDisplayNameByHash.get(hash)) !== null && _a !== void 0 ? _a : "WCT_INVALID";
        }
        static getWeaponComponentHashes(hash) {
          const hashes = WeaponComponentHashesByWeaponHash.get(hash);
          if (!hashes) {
            return [];
          }
          return [...hashes];
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponCollection.js
  var WeaponCollection;
  var init_WeaponCollection = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponCollection.js"() {
      init_Weapon();
      init_models();
      WeaponCollection = class {
        constructor(owner) {
          this.weapons = /* @__PURE__ */ new Map();
          this.owner = owner;
        }
        [Symbol.iterator]() {
          let pointer = 0;
          const weapons2 = Array.from(this.weapons.values());
          return {
            next() {
              if (pointer < weapons2.length) {
                return { done: false, value: weapons2[pointer++] };
              } else {
                return { done: true, value: null };
              }
            }
          };
        }
        get(hash) {
          let weapon = this.weapons.get(hash);
          if (!weapon) {
            if (!this.hasWeapon(hash)) {
              return null;
            }
            weapon = this.createAndAddWeapon(hash);
          }
          return weapon;
        }
        get Current() {
          const [, hash] = GetCurrentPedWeapon(this.owner.Handle, true);
          if (this.weapons.has(hash)) {
            return this.weapons.get(hash);
          } else {
            return this.createAndAddWeapon(hash);
          }
        }
        get CurrentWeaponObject() {
          if (this.Current.IsUnarmed) {
            return null;
          }
          return new Prop(GetCurrentPedWeaponEntityIndex(this.owner.Handle));
        }
        get BestWeapon() {
          const hash = GetBestPedWeapon(this.owner.Handle, false);
          if (this.weapons.has(hash)) {
            return this.weapons.get(hash);
          } else {
            return this.createAndAddWeapon(hash);
          }
        }
        hasWeapon(hash) {
          return HasPedGotWeapon(this.owner.Handle, hash, false);
        }
        isWeaponValid(hash) {
          return IsWeaponValid(hash);
        }
        give(hash, ammoCount, equipNow, isAmmoLoaded) {
          let weapon = this.weapons.get(hash);
          if (!weapon) {
            weapon = this.createAndAddWeapon(hash);
          }
          if (weapon.IsPresent) {
            this.select(weapon);
          } else {
            GiveWeaponToPed(this.owner.Handle, weapon.Hash, ammoCount, equipNow, isAmmoLoaded);
          }
          return weapon;
        }
        select(weapon) {
          if (weapon instanceof Weapon) {
            if (!weapon.IsPresent) {
              return false;
            }
            SetCurrentPedWeapon(this.owner.Handle, weapon.Hash, true);
            return true;
          } else {
            if (!this.hasWeapon(weapon)) {
              return false;
            }
            SetCurrentPedWeapon(this.owner.Handle, weapon, true);
            return true;
          }
        }
        remove(weapon) {
          if (weapon instanceof Weapon) {
            if (this.weapons.has(weapon.Hash)) {
              this.weapons.delete(weapon.Hash);
            }
            this.remove(weapon.Hash);
          } else {
            RemoveWeaponFromPed(this.owner.Handle, weapon);
          }
        }
        removeAll() {
          RemoveAllPedWeapons(this.owner.Handle, true);
          this.weapons.clear();
        }
        drop() {
          SetPedDropsWeapon(this.owner.Handle);
        }
        createAndAddWeapon(hash) {
          const uintHash = hash >>> 0;
          const weapon = new Weapon(this.owner, uintHash);
          this.weapons.set(uintHash, weapon);
          return weapon;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Ped.js
  var Ped;
  var init_Ped = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Ped.js"() {
      init_lib();
      init_enums();
      init_Tasks();
      init_models();
      init_WeaponCollection();
      Ped = class extends Entity {
        constructor(handle) {
          super(handle);
          this.speechModifierNames = [
            "SPEECH_PARAMS_STANDARD",
            "SPEECH_PARAMS_ALLOW_REPEAT",
            "SPEECH_PARAMS_BEAT",
            "SPEECH_PARAMS_FORCE",
            "SPEECH_PARAMS_FORCE_FRONTEND",
            "SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND",
            "SPEECH_PARAMS_FORCE_NORMAL",
            "SPEECH_PARAMS_FORCE_NORMAL_CLEAR",
            "SPEECH_PARAMS_FORCE_NORMAL_CRITICAL",
            "SPEECH_PARAMS_FORCE_SHOUTED",
            "SPEECH_PARAMS_FORCE_SHOUTED_CLEAR",
            "SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY",
            "SPEECH_PARAMS_MEGAPHONE",
            "SPEECH_PARAMS_HELI",
            "SPEECH_PARAMS_FORCE_MEGAPHONE",
            "SPEECH_PARAMS_FORCE_HELI",
            "SPEECH_PARAMS_INTERRUPT",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR",
            "SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_INTERRUPT_NO_FORCE",
            "SPEECH_PARAMS_INTERRUPT_FRONTEND",
            "SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND",
            "SPEECH_PARAMS_ADD_BLIP",
            "SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT",
            "SPEECH_PARAMS_ADD_BLIP_FORCE",
            "SPEECH_PARAMS_ADD_BLIP_SHOUTED",
            "SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE",
            "SPEECH_PARAMS_ADD_BLIP_INTERRUPT",
            "SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR",
            "SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL",
            "SPEECH_PARAMS_SHOUTED",
            "SPEECH_PARAMS_SHOUTED_CLEAR",
            "SPEECH_PARAMS_SHOUTED_CRITICAL"
          ];
        }
        static exists(ped) {
          return typeof ped !== "undefined" && ped.exists();
        }
        get Player() {
          return new Player(NetworkGetPlayerIndexFromPed(this.handle));
        }
        get Money() {
          return GetPedMoney(this.handle);
        }
        set Money(amount) {
          SetPedMoney(this.handle, amount);
        }
        get Gender() {
          return IsPedMale(this.handle) ? Gender.Male : Gender.Female;
        }
        get Armor() {
          return GetPedArmour(this.handle);
        }
        set Armor(amount) {
          if (amount > 100)
            amount = 100;
          SetPedArmour(this.handle, amount);
        }
        get Accuracy() {
          return GetPedAccuracy(this.handle);
        }
        set Accuracy(accuracy) {
          if (accuracy > 100)
            accuracy = 100;
          SetPedAccuracy(this.handle, accuracy);
        }
        get Health() {
          return super.Health - 100;
        }
        set Health(amount) {
          super.Health = amount + 100;
        }
        get MaxHealth() {
          return super.MaxHealth - 100;
        }
        set MaxHealth(amount) {
          super.MaxHealth = amount + 100;
        }
        set Sweat(value) {
          SetPedSweat(this.handle, value);
        }
        set WetnessHeight(value) {
          if (value === 0) {
            ClearPedWetness(this.Handle);
          } else {
            SetPedWetnessHeight(this.handle, value);
          }
        }
        set Voice(value) {
          SetAmbientVoiceName(this.handle, value);
        }
        set ShootRate(value) {
          if (value > 1e3)
            value = 1e3;
          SetPedShootRate(this.handle, value);
        }
        get WasKilledByStealth() {
          return WasPedKilledByStealth(this.handle);
        }
        get WasKilledByTakedown() {
          return WasPedKilledByTakedown(this.handle);
        }
        get SeatIndex() {
          if (!this.CurrentVehicle)
            return VehicleSeat.None;
          const numberOfSeats = GetVehicleModelNumberOfSeats(this.CurrentVehicle.Model.Hash);
          for (let seat = -1; seat < numberOfSeats; seat++) {
            if (this.CurrentVehicle.getPedOnSeat(seat).Handle == this.handle) {
              return seat;
            }
          }
          return VehicleSeat.None;
        }
        get CurrentVehicle() {
          const veh = new Vehicle(GetVehiclePedIsIn(this.handle, false));
          return veh.exists() ? veh : null;
        }
        get LastVehicle() {
          const veh = new Vehicle(GetVehiclePedIsIn(this.handle, true));
          return veh.exists() ? veh : null;
        }
        get VehicleTryingToEnter() {
          const veh = new Vehicle(GetVehiclePedIsTryingToEnter(this.handle));
          return veh.exists() ? veh : null;
        }
        get IsJumpingOutOfVehicle() {
          return IsPedJumpingOutOfVehicle(this.handle);
        }
        set StaysInVehicleWhenJacked(value) {
          SetPedStayInVehicleWhenJacked(this.handle, value);
        }
        set MaxDrivingSpeed(value) {
          SetDriveTaskMaxCruiseSpeed(this.handle, value);
        }
        get IsHuman() {
          return IsPedHuman(this.handle);
        }
        set IsEnemy(value) {
          SetPedAsEnemy(this.handle, value);
        }
        set IsPriorityTargetForEnemies(value) {
          SetEntityIsTargetPriority(this.handle, value, 0);
        }
        get IsPlayer() {
          return IsPedAPlayer(this.handle);
        }
        get IsCuffed() {
          return IsPedCuffed(this.handle);
        }
        get IsWearingHelmet() {
          return IsPedWearingHelmet(this.handle);
        }
        get IsRagdoll() {
          return IsPedRagdoll(this.handle);
        }
        get IsIdle() {
          return !this.IsInjured && !this.IsRagdoll && !this.IsInAir && !this.IsOnFire && !this.IsDucking && !this.IsGettingIntoAVehicle && !this.IsInCombat && !this.IsInMeleeCombat && (!this.isInAnyVehicle() || this.isSittingInAnyVehicle());
        }
        get IsProne() {
          return IsPedProne(this.handle);
        }
        set IsDucking(value) {
          SetPedDucking(this.handle, value);
        }
        get IsDucking() {
          return IsPedDucking(this.handle);
        }
        get IsGettingUp() {
          return IsPedGettingUp(this.handle);
        }
        get IsClimbing() {
          return IsPedClimbing(this.handle);
        }
        get IsJumping() {
          return IsPedJumping(this.handle);
        }
        get IsFalling() {
          return IsPedFalling(this.handle);
        }
        get IsStopped() {
          return IsPedStopped(this.handle);
        }
        get IsWalking() {
          return IsPedWalking(this.handle);
        }
        get IsRunning() {
          return IsPedRunning(this.handle);
        }
        get IsSprinting() {
          return IsPedSprinting(this.handle);
        }
        get IsDiving() {
          return IsPedDiving(this.handle);
        }
        get IsInParachuteFreeFall() {
          return IsPedInParachuteFreeFall(this.handle);
        }
        get IsSwimming() {
          return IsPedSwimming(this.handle);
        }
        get IsSwimmingUnderWater() {
          return IsPedSwimmingUnderWater(this.handle);
        }
        get IsVaulting() {
          return IsPedVaulting(this.handle);
        }
        get IsOnBike() {
          return IsPedOnAnyBike(this.handle);
        }
        get IsOnFoot() {
          return IsPedOnFoot(this.handle);
        }
        get IsInSub() {
          return IsPedInAnySub(this.handle);
        }
        get IsInTaxi() {
          return IsPedInAnyTaxi(this.handle);
        }
        get IsInTrain() {
          return IsPedInAnyTrain(this.handle);
        }
        get IsInHeli() {
          return IsPedInAnyHeli(this.handle);
        }
        get IsInPlane() {
          return IsPedInAnyPlane(this.handle);
        }
        get IsInFlyingVehicle() {
          return IsPedInFlyingVehicle(this.handle);
        }
        get IsInBoat() {
          return IsPedInAnyBoat(this.handle);
        }
        get IsInPoliceVehicle() {
          return IsPedInAnyPoliceVehicle(this.handle);
        }
        get IsJacking() {
          return IsPedJacking(this.handle);
        }
        get IsBeingJacked() {
          return IsPedBeingJacked(this.handle);
        }
        get IsGettingIntoAVehicle() {
          return IsPedGettingIntoAVehicle(this.handle);
        }
        get IsTryingToEnterALockedVehicle() {
          return IsPedTryingToEnterALockedVehicle(this.handle);
        }
        get IsInjured() {
          return IsPedInjured(this.handle);
        }
        get IsFleeing() {
          return IsPedFleeing(this.handle);
        }
        get IsInCombat() {
          return IsPedInCombat(this.handle, PlayerPedId());
        }
        get IsInMeleeCombat() {
          return IsPedInMeleeCombat(this.handle);
        }
        get IsInStealthMode() {
          return GetPedStealthMovement(this.handle);
        }
        get IsAmbientSpeechPlaying() {
          return IsAmbientSpeechPlaying(this.handle);
        }
        get IsScriptedSpeechPlaying() {
          return IsScriptedSpeechPlaying(this.handle);
        }
        get IsAnySpeechPlaying() {
          return IsAnySpeechPlaying(this.handle);
        }
        get IsAmbientSpeechEnabled() {
          return !IsAmbientSpeechDisabled(this.handle);
        }
        set IsPainAudioEnabled(value) {
          DisablePedPainAudio(this.handle, !value);
        }
        get IsPlantingBomb() {
          return IsPedPlantingBomb(this.handle);
        }
        get IsShooting() {
          return IsPedShooting(this.handle);
        }
        get IsAiming() {
          return this.getConfigFlag(78);
        }
        get IsReloading() {
          return IsPedReloading(this.handle);
        }
        get IsDoingDriveby() {
          return IsPedDoingDriveby(this.handle);
        }
        get IsGoingIntoCover() {
          return IsPedGoingIntoCover(this.handle);
        }
        get IsBeingStunned() {
          return IsPedBeingStunned(this.handle, 0);
        }
        get IsBeingStealthKilled() {
          return IsPedBeingStealthKilled(this.handle);
        }
        get IsPerformingStealthKill() {
          return IsPedPerformingStealthKill(this.handle);
        }
        get IsAimingFromCover() {
          return IsPedAimingFromCover(this.handle);
        }
        isInCover(expectUseWeapon = false) {
          return IsPedInCover(this.handle, expectUseWeapon);
        }
        get IsInCoverFacingLeft() {
          return IsPedInCoverFacingLeft(this.handle);
        }
        set FiringPattern(value) {
          SetPedFiringPattern(this.handle, value);
        }
        set DropsWeaponsOnDeath(value) {
          SetPedDropsWeaponsWhenDead(this.handle, value);
        }
        set DrivingSpeed(value) {
          SetDriveTaskCruiseSpeed(this.handle, value);
        }
        set DrivingStyle(style) {
          SetDriveTaskDrivingStyle(this.handle, Number(style));
        }
        set IsDrunk(isDrunk) {
          SetPedIsDrunk(this.handle, isDrunk);
        }
        set MotionBlur(value) {
          SetPedMotionBlur(this.handle, value);
        }
        get Task() {
          if (!this.tasks) {
            this.tasks = new Tasks(this);
          }
          return this.tasks;
        }
        get TaskSequenceProgress() {
          return GetSequenceProgress(this.handle);
        }
        set BlockPermanentEvents(block) {
          SetBlockingOfNonTemporaryEvents(this.handle, block);
        }
        isInAnyVehicle() {
          return IsPedInAnyVehicle(this.handle, false);
        }
        isInVehicle(vehicle) {
          return IsPedInVehicle(this.handle, vehicle.Handle, false);
        }
        isSittingInAnyVehicle() {
          return IsPedSittingInAnyVehicle(this.handle);
        }
        isSittingInVehicle(vehicle) {
          return IsPedSittingInVehicle(this.handle, vehicle.Handle);
        }
        setIntoVehicle(vehicle, seat) {
          SetPedIntoVehicle(this.handle, vehicle.Handle, Number(seat));
        }
        isHeadtracking(entity) {
          return IsPedHeadtrackingEntity(this.handle, entity.Handle);
        }
        isInCombatAgainst(target) {
          return IsPedInCombat(this.handle, target.Handle);
        }
        getJacker() {
          return new Ped(GetPedsJacker(this.handle));
        }
        getJackTarget() {
          return new Ped(GetJackTarget(this.handle));
        }
        getMeleeTarget() {
          return new Ped(GetMeleeTargetForPed(this.handle));
        }
        getKiller() {
          return Entity.fromHandle(GetPedSourceOfDeath(this.handle));
        }
        kill() {
          this.Health = -1;
        }
        resurrect() {
          const maxHealth = this.Health;
          const isCollisionEnabled = super.IsCollisionEnabled;
          ResurrectPed(this.handle);
          this.MaxHealth = maxHealth;
          this.Health = maxHealth;
          super.IsCollisionEnabled = isCollisionEnabled;
          ClearPedTasksImmediately(this.handle);
        }
        resetVisibleDamage() {
          ResetPedVisibleDamage(this.handle);
        }
        clearBloodDamage() {
          ClearPedBloodDamage(this.handle);
        }
        get IsInGroup() {
          return IsPedInGroup(this.handle);
        }
        set NeverLeavesGroup(value) {
          SetPedNeverLeavesGroup(this.handle, value);
        }
        leaveGroup() {
          RemovePedFromGroup(this.handle);
        }
        playAmbientSpeed(speechName, voiceName = "", modifier = SpeechModifier.Standard) {
          if (Number(modifier) >= 0 && Number(modifier) < this.speechModifierNames.length) {
            if (voiceName === "") {
              PlayAmbientSpeech1(this.handle, speechName, this.speechModifierNames[Number(modifier)]);
            } else {
              PlayAmbientSpeechWithVoice(this.handle, speechName, voiceName, this.speechModifierNames[Number(modifier)], false);
            }
          } else {
            throw new RangeError("modifier");
          }
        }
        applyDamage(damageAmount) {
          ApplyDamageToPed(this.handle, damageAmount, true);
        }
        hasBeenDamagedByWeapon(weapon) {
          return HasPedBeenDamagedByWeapon(this.handle, Number(weapon), 0);
        }
        hasBeenDamagedByAnyWeapon() {
          return HasPedBeenDamagedByWeapon(this.handle, 0, 2);
        }
        hasBeenDamagedByAnyMeleeWeapon() {
          return HasPedBeenDamagedByWeapon(this.handle, 0, 1);
        }
        clearLastWeaponDamage() {
          ClearPedLastWeaponDamage(this.handle);
        }
        get Bones() {
          if (!this.pedBones) {
            this.pedBones = new PedBoneCollection(this);
          }
          return this.pedBones;
        }
        get Weapons() {
          if (!this.weapons) {
            this.weapons = new WeaponCollection(this);
          }
          return this.weapons;
        }
        giveWeapon(weapon, ammoCount = 999, isHidden = false, equipNow = true) {
          GiveWeaponToPed(this.handle, weapon, ammoCount, isHidden, equipNow);
        }
        removeWeapon(weapon) {
          RemoveWeaponFromPed(this.handle, weapon);
        }
        removeAllWeapons() {
          RemoveAllPedWeapons(this.handle, true);
        }
        getLastWeaponImpactPosition() {
          const position = GetPedLastWeaponImpactCoord(this.handle)[1];
          return new Vector3(position[0], position[1], position[2]);
        }
        get CanRagdoll() {
          return CanPedRagdoll(this.handle);
        }
        set CanRagdoll(value) {
          SetPedCanRagdoll(this.handle, value);
        }
        ragdoll(duration = -1, ragdollType = RagdollType.Normal) {
          this.CanRagdoll = true;
          SetPedToRagdoll(this.handle, duration, duration, Number(ragdollType), false, false, false);
        }
        cancelRagdoll() {
          SetPedToRagdoll(this.handle, 1, 1, 1, false, false, false);
        }
        giveHelmet(canBeRemovedByPed, helmetType, textureIndex) {
          GivePedHelmet(this.handle, !canBeRemovedByPed, Number(helmetType), textureIndex);
        }
        removeHelmet(instantly) {
          RemovePedHelmet(this.handle, instantly);
        }
        openParachute() {
          ForcePedToOpenParachute(this.handle);
        }
        getConfigFlag(flagId) {
          return GetPedConfigFlag(this.handle, flagId, true);
        }
        setConfigFlag(flagId, value) {
          SetPedConfigFlag(this.handle, flagId, value);
        }
        resetConfigFlag(flagId) {
          SetPedResetFlag(this.handle, flagId, true);
        }
        clone() {
          return new Ped(ClonePed(this.handle, false, false, false));
        }
        exists(ped) {
          var _a;
          if (!ped) {
            return super.exists() && GetEntityType(this.handle) === 1;
          }
          return (_a = ped === null || ped === void 0 ? void 0 : ped.exists()) !== null && _a !== void 0 ? _a : false;
        }
        setComponentVariation(componentId, drawableId, textureId, paletteId = 0) {
          SetPedComponentVariation(this.handle, componentId, drawableId, textureId, paletteId);
        }
        setRandomComponentVariation() {
          SetPedRandomComponentVariation(this.handle, 0);
        }
        setDefaultComponentVariation() {
          SetPedDefaultComponentVariation(this.handle);
        }
        getDrawableVariation(componentId) {
          return GetPedDrawableVariation(this.handle, componentId);
        }
        getNumberOfDrawableVariations(componentId) {
          return GetNumberOfPedDrawableVariations(this.handle, componentId);
        }
        getTextureVariation(componentId) {
          return GetPedTextureVariation(this.handle, componentId);
        }
        getNumberTextureVariations(componentId, drawableId = this.getDrawableVariation(componentId)) {
          return GetNumberOfPedTextureVariations(this.handle, componentId, drawableId);
        }
        setRandomProps() {
          SetPedRandomProps(this.handle);
        }
        setPropIndex(propId, drawableId, textureId, attach = true) {
          SetPedPropIndex(this.handle, propId, drawableId, textureId, attach);
        }
        clearProp(propId) {
          ClearPedProp(this.handle, propId);
        }
        clearAllProps() {
          ClearAllPedProps(this.handle);
        }
        knockPropOff(p1, p2, p3, p4) {
          KnockOffPedProp(this.handle, p1, p2, p3, p4);
        }
        isPropValid(propId, drawableId, textureId) {
          return SetPedPreloadPropData(this.handle, propId, drawableId, textureId);
        }
        getPropIndex(propId) {
          return GetPedPropIndex(this.handle, propId);
        }
        getNumberOfPropDrawableVariations(propId) {
          return GetNumberOfPedPropDrawableVariations(this.handle, propId);
        }
        getNumberOfPropTextureVariations(propId, drawableId = this.getPropIndex(propId)) {
          return GetNumberOfPedPropTextureVariations(this.handle, propId, drawableId);
        }
        getPropTextureIndex(propId) {
          return GetPedPropTextureIndex(this.handle, propId);
        }
        setHelmetPropIndex(propIndex) {
          SetPedHelmetPropIndex(this.handle, propIndex);
        }
        setEyeColor(color) {
          SetPedEyeColor(this.handle, color);
        }
        getEyeColor() {
          return GetPedEyeColor(this.handle);
        }
        setHairColors(primary, highlight) {
          SetPedHairColor(this.handle, primary, highlight);
        }
        setHairColor(color) {
          this.setHairColors(color, this.getHairHighlightColor());
        }
        getHairColor() {
          return GetPedHairColor(this.handle);
        }
        setHairHighlightColor(color) {
          this.setHairColors(this.getHairColor(), color);
        }
        getHairHighlightColor() {
          return GetPedHairHighlightColor(this.handle);
        }
        getHeadOverlayNum(overlayId) {
          return GetPedHeadOverlayNum(overlayId);
        }
        getHeadOverlayValue(overlayId) {
          return GetPedHeadOverlayValue(this.handle, overlayId);
        }
        setHeadOverlayValue(overlayId, value) {
          const opacity = GetPedHeadOverlayData(this.handle, overlayId)[5];
          this.setHeadOverlay(overlayId, value, opacity);
        }
        getHeadOverlay(overlayId) {
          const [ret, overlayValue, colourType, firstColour, secondColour, overlayOpacity] = GetPedHeadOverlayData(this.handle, overlayId);
          if (!ret) {
            return void 0;
          }
          return [overlayValue, colourType, firstColour, secondColour, overlayOpacity];
        }
        setHeadOverlay(overlayId, index, opacity) {
          SetPedHeadOverlay(this.handle, overlayId, index, opacity);
        }
        getHeadOverlayOpacity(overlayId) {
          return GetPedHeadOverlayData(this.handle, overlayId)[5];
        }
        setHeadOverlayOpacity(overlayId, opacity) {
          this.setHeadOverlay(overlayId, this.getHeadOverlayValue(overlayId), opacity);
        }
        setHeadOverlayColor(overlayId, color) {
          let colorId = 0;
          if (overlayId === 1 || overlayId === 2 || overlayId === 10) {
            colorId = 1;
          } else if (overlayId === 5 || overlayId === 8) {
            colorId = 2;
          }
          SetPedHeadOverlayColor(this.handle, overlayId, colorId, color, color);
        }
        setHeadBlend(shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent = false) {
          SetPedHeadBlendData(this.handle, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent);
        }
        getHeadBlend() {
          const buffer = new ArrayBuffer(80);
          if (!Citizen.invokeNative("0x2746BD9D88C5C5D0", this.handle, new Float32Array(buffer))) {
            return void 0;
          }
          const { 0: shapeFirstId, 2: shapeSecondId, 4: shapeThirdId, 6: skinFirstId, 8: skinSecondId, 10: skinThirdId, 18: isParent } = new Uint32Array(buffer);
          const { 0: shapeMix, 2: skinMix, 4: thirdMix } = new Float32Array(buffer, 48);
          return [
            shapeFirstId,
            shapeSecondId,
            shapeThirdId,
            skinFirstId,
            skinSecondId,
            skinThirdId,
            shapeMix,
            skinMix,
            thirdMix,
            !!isParent
          ];
        }
        finalizeHeadBlend() {
          FinalizeHeadBlend(this.handle);
        }
        hasHeadBlendFinished() {
          return HasPedHeadBlendFinished(this.handle);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/PedBone.js
  var PedBone;
  var init_PedBone = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/PedBone.js"() {
      init_models();
      PedBone = class extends EntityBone {
        constructor(owner, boneId) {
          super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
        }
        get IsValid() {
          return Ped.exists(this.Owner) && this.Index !== -1;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/PedBoneCollection.js
  var PedBoneCollection;
  var init_PedBoneCollection = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/PedBoneCollection.js"() {
      init_models();
      PedBoneCollection = class extends EntityBoneCollection {
        constructor(owner) {
          super(owner);
        }
        get Core() {
          return new PedBone(this.owner, -1);
        }
        get LastDamaged() {
          const [, outBone] = GetPedLastDamageBone(this.owner.Handle, 0);
          return PedBone[outBone];
        }
        clearLastDamaged() {
          ClearPedLastDamageBone(this.owner.Handle);
        }
        getBone(boneIndex, boneName) {
          return new PedBone(this.owner, boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName !== null && boneName !== void 0 ? boneName : ""));
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Player.js
  var Player;
  var init_Player = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Player.js"() {
      init_lib();
      init_models();
      Player = class {
        constructor(handle) {
          this.pvp = false;
          this.handle = handle;
          if (!IsDuplicityVersion()) {
            this.PvPEnabled = true;
          }
        }
        static fromPedHandle(handle) {
          return new Player(NetworkGetPlayerIndexFromPed(handle));
        }
        static fromServerId(serverId2) {
          return new Player(GetPlayerFromServerId(serverId2));
        }
        get Handle() {
          return this.handle;
        }
        get Character() {
          return this.Ped;
        }
        get Ped() {
          const handle = GetPlayerPed(this.handle);
          if (typeof this.ped === "undefined" || handle !== this.ped.Handle) {
            this.ped = new Ped(handle);
          }
          return this.ped;
        }
        get ServerId() {
          return GetPlayerServerId(this.handle);
        }
        get Name() {
          return GetPlayerName(this.handle);
        }
        get PvPEnabled() {
          return this.pvp;
        }
        set PvPEnabled(value) {
          NetworkSetFriendlyFireOption(value);
          SetCanAttackFriendly(this.Character.Handle, value, value);
          this.pvp = value;
        }
        get IsDead() {
          return IsPlayerDead(this.handle);
        }
        get EntityPlayerIsAimingAt() {
          const [entityHit, entity] = GetEntityPlayerIsFreeAimingAt(this.handle);
          if (entityHit) {
            return Entity.fromHandle(entity);
          }
          return null;
        }
        get StealthNoise() {
          return GetPlayerCurrentStealthNoise(this.handle);
        }
        get FakeWantedLevel() {
          return GetPlayerFakeWantedLevel(this.handle);
        }
        get PlayerGroup() {
          return GetPlayerGroup(this.handle);
        }
        get HasReserveParachute() {
          return GetPlayerHasReserveParachute(this.handle);
        }
        get HealthRechargeLimit() {
          return GetPlayerHealthRechargeLimit(this.handle);
        }
        get IsInvincible() {
          if (IsDuplicityVersion()) {
            return GetPlayerInvincible(this.handle);
          } else {
            return GetPlayerInvincible_2(this.handle);
          }
        }
        get MaxArmor() {
          return GetPlayerMaxArmour(this.handle);
        }
        get ParachuteModelOverride() {
          return new Model(GetPlayerParachuteModelOverride(this.handle));
        }
        get ParachutePackTintIndex() {
          return GetPlayerParachutePackTintIndex(this.handle);
        }
        get ParachuteTintIndex() {
          return GetPlayerParachuteTintIndex(this.handle);
        }
        get ParachuteColorTrailColor() {
          return Color.fromArray(GetPlayerParachuteSmokeTrailColor(this.handle));
        }
        get ReserveParachuteModelOverride() {
          return new Model(GetPlayerReserveParachuteModelOverride(this.handle));
        }
        get ReserveParachuteTintIndex() {
          return GetPlayerReserveParachuteTintIndex(this.handle);
        }
        get PlayerRgbColour() {
          return Color.fromArray(GetPlayerRgbColour(this.handle));
        }
        get Stamina() {
          return GetPlayerSprintStaminaRemaining(this.handle);
        }
        get SprintTimeRemaining() {
          return GetPlayerSprintStaminaRemaining(this.handle);
        }
        get TargetEntity() {
          const [entityHit, entity] = GetPlayerTargetEntity(this.handle);
          if (entityHit) {
            return Entity.fromHandle(entity);
          }
          return null;
        }
        get Team() {
          return GetPlayerTeam(this.handle);
        }
        CanPedHearPlayer(ped) {
          return CanPedHearPlayer(this.handle, ped.Handle);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Prop.js
  var Prop;
  var init_Prop = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Prop.js"() {
      init_models();
      Prop = class extends Entity {
        static exists(prop) {
          return typeof prop !== "undefined" && prop.exists();
        }
        constructor(handle) {
          super(handle);
        }
        exists() {
          return super.exists() && GetEntityType(this.handle) === 3;
        }
        placeOnGround() {
          PlaceObjectOnGroundProperly(this.handle);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Vehicle.js
  var Vehicle;
  var init_Vehicle2 = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/Vehicle.js"() {
      init_models();
      init_enums();
      init_Game();
      Vehicle = class extends Entity {
        constructor(handle) {
          super(handle);
        }
        static getModelDisplayName(vehicleModel) {
          return GetDisplayNameFromVehicleModel(vehicleModel.Hash);
        }
        static getModelClass(vehicleModel) {
          return GetVehicleClassFromName(vehicleModel.Hash);
        }
        static getClassDisplayName(vehicleClass) {
          return `VEH_CLASS_${vehicleClass}`;
        }
        static exists(vehicle) {
          return typeof vehicle !== "undefined" && vehicle.exists();
        }
        exists() {
          return super.exists() && GetEntityType(this.handle) === 2;
        }
        get DisplayName() {
          return Vehicle.getModelDisplayName(this.Model);
        }
        get ClassDisplayName() {
          return Vehicle.getClassDisplayName(this.ClassType);
        }
        get NumberPlate() {
          return GetVehicleNumberPlateText(this.handle);
        }
        set NumberPlate(value) {
          SetVehicleNumberPlateText(this.handle, value.substring(0, 8));
        }
        get ClassType() {
          return GetVehicleClass(this.handle);
        }
        get BodyHealth() {
          return GetVehicleBodyHealth(this.handle);
        }
        set BodyHealth(value) {
          SetVehicleBodyHealth(this.handle, value);
        }
        get EngineHealth() {
          return GetVehicleEngineHealth(this.handle);
        }
        set EngineHealth(value) {
          SetVehicleEngineHealth(this.handle, value);
        }
        get PetrolTankHealth() {
          return GetVehiclePetrolTankHealth(this.handle);
        }
        set PetrolTankHealth(value) {
          SetVehiclePetrolTankHealth(this.handle, value);
        }
        get FuelLevel() {
          return GetVehicleFuelLevel(this.handle);
        }
        set FuelLevel(value) {
          SetVehicleFuelLevel(this.handle, value);
        }
        get OilLevel() {
          return GetVehicleOilLevel(this.handle);
        }
        set OilLevel(value) {
          SetVehicleOilLevel(this.handle, value);
        }
        get Gravity() {
          return GetVehicleGravityAmount(this.handle);
        }
        set Gravity(value) {
          SetVehicleGravityAmount(this.handle, value);
        }
        get IsEngineRunning() {
          return GetIsVehicleEngineRunning(this.handle);
        }
        set IsEngineRunning(value) {
          SetVehicleEngineOn(this.handle, value, true, true);
        }
        get IsEngineStarting() {
          return IsVehicleEngineStarting(this.handle);
        }
        set IsEngineStarting(value) {
          if ((this.IsEngineStarting || this.IsEngineRunning) && value) {
            return;
          }
          SetVehicleEngineOn(this.handle, value, !value, true);
        }
        get IsRadioEnabled() {
          if (Game.Player.Character.isInVehicle(this)) {
            return IsPlayerVehicleRadioEnabled();
          }
          return false;
        }
        set IsRadioEnabled(value) {
          SetVehicleRadioEnabled(this.handle, value);
        }
        set RadioStation(value) {
          this.IsRadioEnabled = true;
          SetVehRadioStation(this.handle, value);
        }
        get Speed() {
          return GetEntitySpeed(this.handle);
        }
        set Speed(value) {
          if (this.Model.IsTrain) {
            SetTrainSpeed(this.handle, value);
            SetTrainCruiseSpeed(this.handle, value);
          } else {
            SetVehicleForwardSpeed(this.handle, value);
          }
        }
        get WheelSpeed() {
          return GetVehicleDashboardSpeed(this.handle);
        }
        get Acceleration() {
          return GetVehicleCurrentAcceleration(this.handle);
        }
        get CurrentRPM() {
          return GetVehicleCurrentRpm(this.handle);
        }
        set CurrentRPM(value) {
          SetVehicleCurrentRpm(this.handle, value);
        }
        get HighGear() {
          return GetVehicleHighGear(this.handle);
        }
        set HighGear(value) {
          SetVehicleHighGear(this.handle, value);
        }
        get CurrentGear() {
          return GetVehicleCurrentGear(this.handle);
        }
        get SteeringAngle() {
          return GetVehicleSteeringAngle(this.handle);
        }
        set SteeringAngle(value) {
          SetVehicleSteeringAngle(this.handle, value);
        }
        get SteeringScale() {
          return GetVehicleSteeringScale(this.handle);
        }
        set SteeringScale(value) {
          SetVehicleSteeringScale(this.handle, value);
        }
        get IsAlarmSet() {
          return IsVehicleAlarmSet(this.handle);
        }
        set IsAlarmSet(value) {
          SetVehicleAlarm(this.handle, value);
        }
        get IsAlarmSounding() {
          return IsVehicleAlarmActivated(this.handle);
        }
        get AlarmTimeLeft() {
          return GetVehicleAlarmTimeLeft(this.handle);
        }
        set AlarmTimeLeft(value) {
          SetVehicleAlarmTimeLeft(this.handle, value);
        }
        startAlarm() {
          StartVehicleAlarm(this.handle);
        }
        get IsSirenActive() {
          return IsVehicleSirenOn(this.handle);
        }
        set IsSirenActive(value) {
          SetVehicleSiren(this.handle, value);
        }
        set IsSirenSilent(value) {
          DisableVehicleImpactExplosionActivation(this.handle, value);
        }
        soundHorn(duration) {
          StartVehicleHorn(this.handle, duration, Game.generateHash("HELDDOWN"), false);
        }
        get IsWanted() {
          return IsVehicleWanted(this.handle);
        }
        set IsWanted(value) {
          SetVehicleIsWanted(this.handle, value);
        }
        set ProvidesCover(value) {
          SetVehicleProvidesCover(this.handle, value);
        }
        set DropsMoneyOnExplosion(value) {
          SetVehicleCreatesMoneyPickupsWhenExploded(this.handle, value);
        }
        get PreviouslyOwnedByPlayer() {
          return IsVehiclePreviouslyOwnedByPlayer(this.handle);
        }
        set PreviouslyOwnedByPlayer(value) {
          SetVehicleHasBeenOwnedByPlayer(this.handle, value);
        }
        get NeedsToBeHotwired() {
          return IsVehicleNeedsToBeHotwired(this.handle);
        }
        set NeedsToBeHotwired(value) {
          SetVehicleNeedsToBeHotwired(this.handle, value);
        }
        get AreLightsOn() {
          return GetVehicleLightsState(this.handle)[0];
        }
        set AreLightsOn(value) {
          SetVehicleLights(this.handle, value ? 3 : 4);
        }
        get AreHighBeamsOn() {
          return GetVehicleLightsState(this.handle)[1];
        }
        set AreHighBeamsOn(value) {
          SetVehicleFullbeam(this.handle, value);
        }
        get IsInteriorLightOn() {
          return IsVehicleInteriorLightOn(this.handle);
        }
        set IsInteriorLightOn(value) {
          SetVehicleInteriorlight(this.handle, value);
        }
        get IsSearchLightOn() {
          return IsVehicleSearchlightOn(this.handle);
        }
        set IsSearchLightOn(value) {
          SetVehicleSearchlight(this.handle, value, false);
        }
        get IsTaxiLightOn() {
          return IsTaxiLightOn(this.handle);
        }
        set IsTaxiLightOn(value) {
          SetTaxiLights(this.handle, value);
        }
        get IsLeftIndicatorLightOn() {
          const val = GetVehicleIndicatorLights(this.handle);
          return val === 1 || val === 3;
        }
        set IsLeftIndicatorLightOn(value) {
          SetVehicleIndicatorLights(this.handle, 1, value);
        }
        get IsRightIndicatorLightOn() {
          return GetVehicleIndicatorLights(this.handle) >= 2;
        }
        set IsRightIndicatorLightOn(value) {
          SetVehicleIndicatorLights(this.handle, 0, value);
        }
        get IsHandbrakeForcedOn() {
          return GetVehicleHandbrake(this.handle);
        }
        set IsHandbrakeForcedOn(value) {
          SetVehicleHandbrake(this.handle, value);
        }
        set AreBrakeLightsOn(value) {
          SetVehicleBrakeLights(this.handle, value);
        }
        set LightsMultiplier(value) {
          SetVehicleLightMultiplier(this.handle, value);
        }
        set CanBeVisiblyDamaged(value) {
          SetVehicleCanBeVisiblyDamaged(this.handle, value);
        }
        set Strong(toggle) {
          SetVehicleStrong(this.handle, toggle);
        }
        set CanBreak(toggle) {
          SetVehicleCanBreak(this.handle, toggle);
        }
        get IsDamaged() {
          return IsVehicleDamaged(this.handle);
        }
        get IsDriveable() {
          return IsVehicleDriveable(this.handle, false);
        }
        set IsDriveable(value) {
          SetVehicleUndriveable(this.handle, !value);
        }
        get IsEngineOnFire() {
          return IsVehicleEngineOnFire(this.handle);
        }
        get HasRoof() {
          return DoesVehicleHaveRoof(this.handle);
        }
        get IsLeftHeadLightBroken() {
          return GetIsLeftVehicleHeadlightDamaged(this.handle);
        }
        get IsRightHeadLightBroken() {
          return GetIsRightVehicleHeadlightDamaged(this.handle);
        }
        get IsRearBumperBrokenOff() {
          return IsVehicleBumperBrokenOff(this.handle, false);
        }
        get IsFrontBumperBrokenOff() {
          return IsVehicleBumperBrokenOff(this.handle, true);
        }
        set IsAxlesStrong(value) {
          SetVehicleHasStrongAxles(this.handle, value);
        }
        set CanEngineDegrade(value) {
          SetVehicleEngineCanDegrade(this.handle, value);
        }
        set EnginePowerMultiplier(value) {
          SetVehicleEnginePowerMultiplier(this.handle, value);
        }
        set EngineTorqueMultiplier(value) {
          SetVehicleEngineTorqueMultiplier(this.handle, value);
        }
        get LandingGearState() {
          return GetLandingGearState(this.handle);
        }
        set LandingGearState(value) {
          SetVehicleLandingGear(this.handle, value);
        }
        get RoofState() {
          return GetConvertibleRoofState(this.handle);
        }
        set RoofState(value) {
          switch (value) {
            case VehicleRoofState.Closed:
              RaiseConvertibleRoof(this.handle, true);
              RaiseConvertibleRoof(this.handle, false);
              break;
            case VehicleRoofState.Closing:
              RaiseConvertibleRoof(this.handle, false);
              break;
            case VehicleRoofState.Opened:
              LowerConvertibleRoof(this.handle, true);
              LowerConvertibleRoof(this.handle, false);
              break;
            case VehicleRoofState.Opening:
              LowerConvertibleRoof(this.handle, false);
              break;
          }
        }
        get LockStatus() {
          return GetVehicleDoorLockStatus(this.handle);
        }
        set LockStatus(value) {
          SetVehicleDoorsLocked(this.handle, value);
        }
        get MaxBraking() {
          return GetVehicleMaxBraking(this.handle);
        }
        get MaxTraction() {
          return GetVehicleMaxTraction(this.handle);
        }
        get IsOnAllWheels() {
          return IsVehicleOnAllWheels(this.handle);
        }
        get IsStopped() {
          return IsVehicleStopped(this.handle);
        }
        get IsStoppedAtTrafficLights() {
          return IsVehicleStoppedAtTrafficLights(this.handle);
        }
        get IsStolen() {
          return IsVehicleStolen(this.handle);
        }
        set IsStolen(value) {
          SetVehicleIsStolen(this.handle, value);
        }
        get IsConvertible() {
          return IsVehicleAConvertible(this.handle, false);
        }
        set IsBurnoutForced(value) {
          SetVehicleBurnout(this.handle, value);
        }
        get IsInBurnout() {
          return IsVehicleInBurnout(this.handle);
        }
        get Driver() {
          return this.getPedOnSeat(VehicleSeat.Driver);
        }
        get Occupants() {
          const driver = this.Driver;
          if (!Ped.exists(driver)) {
            return this.Passengers;
          }
          return [driver, ...this.Passengers];
        }
        get Passengers() {
          const passengerCount = this.PassengerCount;
          if (passengerCount === 0) {
            return [];
          }
          const result = [];
          for (let i = 0; i < this.PassengerCapacity; i++) {
            if (!this.isSeatFree(i)) {
              result.push(this.getPedOnSeat(i));
              if (result.length === passengerCount) {
                break;
              }
            }
          }
          return result;
        }
        get Doors() {
          if (!this._doors) {
            this._doors = new VehicleDoorCollection(this);
          }
          return this._doors;
        }
        get Mods() {
          if (!this._mods) {
            this._mods = new VehicleModCollection(this);
          }
          return this._mods;
        }
        get Wheels() {
          if (!this._wheels) {
            this._wheels = new VehicleWheelCollection(this);
          }
          return this._wheels;
        }
        get Windows() {
          if (!this._windows) {
            this._windows = new VehicleWindowCollection(this);
          }
          return this._windows;
        }
        extraExists(extra) {
          return DoesExtraExist(this.handle, extra);
        }
        isExtraOn(extra) {
          return this.extraExists(extra) ? IsVehicleExtraTurnedOn(this.handle, extra) : false;
        }
        toggleExtra(extra, toggle) {
          if (this.extraExists(extra)) {
            SetVehicleExtra(this.handle, extra, !toggle);
          }
        }
        getPedOnSeat(seat) {
          return new Ped(GetPedInVehicleSeat(this.handle, seat));
        }
        isSeatFree(seat) {
          return IsVehicleSeatFree(this.handle, seat);
        }
        wash() {
          this.DirtLevel = 0;
        }
        get DirtLevel() {
          return GetVehicleDirtLevel(this.handle);
        }
        set DirtLevel(value) {
          SetVehicleDirtLevel(this.handle, value);
        }
        placeOnGround() {
          SetVehicleOnGroundProperly(this.handle);
        }
        repair() {
          SetVehicleFixed(this.handle);
        }
        explode() {
          ExplodeVehicle(this.handle, true, false);
        }
        explodeNetworked() {
          NetworkExplodeVehicle(this.handle, true, false, false);
        }
        get CanTiresBurst() {
          return GetVehicleTyresCanBurst(this.handle);
        }
        set CanTiresBurst(value) {
          SetVehicleTyresCanBurst(this.handle, value);
        }
        set CanWheelsBreak(value) {
          SetVehicleWheelsCanBreak(this.handle, value);
        }
        set CanDeformWheels(value) {
          SetVehicleCanDeformWheels(this.handle, value);
        }
        get HasBombBay() {
          return this.Bones ? this.Bones.hasBone("door_hatch_1") && this.Bones.hasBone("door_hatch_r") : false;
        }
        openBombBay() {
          if (this.HasBombBay) {
            OpenBombBayDoors(this.handle);
          }
        }
        closeBombBay() {
          if (this.HasBombBay) {
            CloseBombBayDoors(this.handle);
          }
        }
        setHeliYawPitchRollMult(mult) {
          if (this.Model.IsHelicopter && mult >= 0 && mult <= 1) {
            SetHelicopterRollPitchYawMult(this.handle, mult);
          }
        }
        set TowingCraneRaisedAmount(value) {
          SetTowTruckCraneHeight(this.handle, value);
        }
        get TowedVehicle() {
          return new Vehicle(GetEntityAttachedToTowTruck(this.handle));
        }
        towVehicle(vehicle, rear) {
          AttachVehicleToTowTruck(this.handle, vehicle.Handle, rear, 0, 0, 0);
        }
        detachFromTowTruck() {
          DetachVehicleFromAnyTowTruck(this.handle);
        }
        detachTowedVehicle() {
          const vehicle = this.TowedVehicle;
          if (Vehicle.exists(this.TowedVehicle)) {
            DetachVehicleFromTowTruck(this.handle, vehicle.Handle);
          }
        }
        deform(position, damageAmount, radius) {
          SetVehicleDamage(this.handle, position.x, position.y, position.z, damageAmount, radius, false);
        }
        get PassengerCapacity() {
          return GetVehicleMaxNumberOfPassengers(this.handle);
        }
        get PassengerCount() {
          return GetVehicleNumberOfPassengers(this.handle);
        }
        set RespotTimer(time) {
          SetNetworkVehicleRespotTimer(this.NetworkId, time);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleDoor.js
  var VehicleDoor;
  var init_VehicleDoor = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleDoor.js"() {
      VehicleDoor = class {
        constructor(owner, index) {
          this._owner = owner;
          this._index = index;
        }
        get Index() {
          return this._index;
        }
        set Index(index) {
          this._index = index;
        }
        get AngleRatio() {
          return GetVehicleDoorAngleRatio(this._owner.Handle, this.Index);
        }
        set AngleRatio(value) {
          SetVehicleDoorControl(this._owner.Handle, this.Index, 1, value);
        }
        set CanBeBroken(value) {
          SetVehicleDoorBreakable(this._owner.Handle, this.Index, value);
        }
        get IsOpen() {
          return this.AngleRatio > 0;
        }
        get IsFullyOpen() {
          return IsVehicleDoorFullyOpen(this._owner.Handle, this.Index);
        }
        get IsBroken() {
          return IsVehicleDoorDamaged(this._owner.Handle, this.Index);
        }
        get Vehicle() {
          return this._owner;
        }
        open(loose = false, instantly = false) {
          SetVehicleDoorOpen(this._owner.Handle, this.Index, loose, instantly);
        }
        close(instantly = false) {
          SetVehicleDoorShut(this._owner.Handle, this.Index, instantly);
        }
        break(stayInTheWorld = true) {
          SetVehicleDoorBroken(this._owner.Handle, this.Index, stayInTheWorld);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleDoorCollection.js
  var VehicleDoorCollection;
  var init_VehicleDoorCollection = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleDoorCollection.js"() {
      init_enums();
      init_VehicleDoor();
      VehicleDoorCollection = class {
        constructor(owner) {
          this._vehicleDoors = /* @__PURE__ */ new Map();
          this._owner = owner;
        }
        getDoors(index) {
          if (!this._vehicleDoors.has(index)) {
            this._vehicleDoors.set(index, new VehicleDoor(this._owner, index));
          }
          return this._vehicleDoors.get(index);
        }
        getAllDoors() {
          return Object.keys(VehicleDoorIndex).filter((key) => !isNaN(Number(key))).map((key) => {
            const index = Number(key);
            if (this.hasDoor(index)) {
              return this.getDoors(index);
            }
            return null;
          }).filter((d) => d);
        }
        openAllDoors(loose, instantly) {
          this.getAllDoors().forEach((door) => {
            door === null || door === void 0 ? void 0 : door.open(loose, instantly);
          });
        }
        closeAllDoors(instantly) {
          this.getAllDoors().forEach((door) => {
            door === null || door === void 0 ? void 0 : door.close(instantly);
          });
        }
        breakAllDoors(stayInTheWorld) {
          this.getAllDoors().forEach((door) => {
            door === null || door === void 0 ? void 0 : door.break(stayInTheWorld);
          });
        }
        hasDoor(index) {
          if (this._owner.Bones === void 0)
            return false;
          switch (index) {
            case VehicleDoorIndex.FrontLeftDoor:
              return this._owner.Bones.hasBone("door_dside_f");
            case VehicleDoorIndex.FrontRightDoor:
              return this._owner.Bones.hasBone("door_pside_f");
            case VehicleDoorIndex.BackLeftDoor:
              return this._owner.Bones.hasBone("door_dside_r");
            case VehicleDoorIndex.BackRightDoor:
              return this._owner.Bones.hasBone("door_pside_r");
            case VehicleDoorIndex.Hood:
              return this._owner.Bones.hasBone("bonnet");
            case VehicleDoorIndex.Trunk:
              return this._owner.Bones.hasBone("boot");
            default:
              return false;
          }
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleMod.js
  var VehicleMod;
  var init_VehicleMod = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleMod.js"() {
      VehicleMod = class {
        constructor(owner, modType) {
          this._owner = owner;
          this._modType = modType;
        }
        get ModType() {
          return this._modType;
        }
        set ModType(modType) {
          this._modType = modType;
        }
        get Index() {
          return GetVehicleMod(this._owner.Handle, this.ModType);
        }
        set Index(value) {
          SetVehicleMod(this._owner.Handle, this.ModType, value, this.Variation);
        }
        get Variation() {
          return GetVehicleModVariation(this._owner.Handle, this.ModType);
        }
        set Variation(value) {
          SetVehicleMod(this._owner.Handle, this.ModType, this.Index, value);
        }
        get ModCount() {
          return GetNumVehicleMods(this._owner.Handle, this.ModType);
        }
        get Vehicle() {
          return this._owner;
        }
        remove() {
          RemoveVehicleMod(this._owner.Handle, this.ModType);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleToggleMod.js
  var VehicleToggleMod;
  var init_VehicleToggleMod = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleToggleMod.js"() {
      VehicleToggleMod = class {
        constructor(owner, modType) {
          this._owner = owner;
          this._modType = modType;
        }
        get ModType() {
          return this._modType;
        }
        set ModType(modType) {
          this._modType = modType;
        }
        get IsInstalled() {
          return IsToggleModOn(this._owner.Handle, this.ModType);
        }
        set IsInstalled(value) {
          ToggleVehicleMod(this._owner.Handle, this.ModType, value);
        }
        get LocalizedModTypeName() {
          return GetModSlotName(this._owner.Handle, this.ModType);
        }
        get Vehicle() {
          return this._owner;
        }
        remove() {
          RemoveVehicleMod(this._owner.Handle, this.ModType);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleModCollection.js
  var VehicleModCollection;
  var init_VehicleModCollection = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleModCollection.js"() {
      init_enums();
      init_VehicleMod();
      init_utils();
      init_VehicleToggleMod();
      VehicleModCollection = class {
        constructor(owner) {
          this._vehicleMods = /* @__PURE__ */ new Map();
          this._vehicleToggleMods = /* @__PURE__ */ new Map();
          this._owner = owner;
        }
        hasVehicleMod(type) {
          return GetNumVehicleMods(this._owner.Handle, type) > 0;
        }
        getMod(modType) {
          if (!this._vehicleMods.has(modType)) {
            this._vehicleMods.set(modType, new VehicleMod(this._owner, modType));
          }
          return this._vehicleMods.get(modType);
        }
        getToggleMod(modType) {
          if (!this._vehicleToggleMods.has(modType)) {
            this._vehicleToggleMods.set(modType, new VehicleToggleMod(this._owner, modType));
          }
          return this._vehicleToggleMods.get(modType);
        }
        getAllMods() {
          return Object.keys(VehicleModType).filter((key) => !isNaN(Number(key))).map((key) => {
            const index = Number(key);
            if (this.hasVehicleMod(index)) {
              return this.getMod(index);
            }
            return null;
          }).filter((m) => m);
        }
        get WheelType() {
          return GetVehicleWheelType(this._owner.Handle);
        }
        set WheelType(type) {
          SetVehicleWheelType(this._owner.Handle, type);
        }
        installModKit() {
          SetVehicleModKit(this._owner.Handle, 0);
        }
        get Livery() {
          var _a, _b;
          const modCount = (_a = this.getMod(VehicleModType.Livery)) === null || _a === void 0 ? void 0 : _a.ModCount;
          if (modCount !== void 0 && modCount > 0) {
            return (_b = this.getMod(VehicleModType.Livery)) === null || _b === void 0 ? void 0 : _b.Index;
          }
          return GetVehicleLivery(this._owner.Handle);
        }
        set Livery(value) {
          if (value === void 0)
            return;
          const mod = this.getMod(VehicleModType.Livery);
          if (mod !== void 0 && mod.ModCount > 0) {
            mod.Index = value;
          } else {
            SetVehicleLivery(this._owner.Handle, value);
          }
        }
        get LiveryCount() {
          var _a;
          const modCount = (_a = this.getMod(VehicleModType.Livery)) === null || _a === void 0 ? void 0 : _a.ModCount;
          if (modCount !== void 0 && modCount > 0) {
            return modCount;
          }
          return GetVehicleLiveryCount(this._owner.Handle);
        }
        get WindowTint() {
          return GetVehicleWindowTint(this._owner.Handle);
        }
        set WindowTint(tint) {
          SetVehicleWindowTint(this._owner.Handle, tint);
        }
        get PrimaryColor() {
          return GetVehicleColours(this._owner.Handle)[0];
        }
        set PrimaryColor(color) {
          SetVehicleColours(this._owner.Handle, color, this.SecondaryColor);
        }
        get SecondaryColor() {
          return GetVehicleColours(this._owner.Handle)[1];
        }
        set SecondaryColor(color) {
          SetVehicleColours(this._owner.Handle, this.PrimaryColor, color);
        }
        get RimColor() {
          return GetVehicleExtraColours(this._owner.Handle)[1];
        }
        set RimColor(color) {
          SetVehicleExtraColours(this._owner.Handle, this.PearlescentColor, color);
        }
        get PearlescentColor() {
          return GetVehicleExtraColours(this._owner.Handle)[0];
        }
        set PearlescentColor(color) {
          SetVehicleExtraColours(this._owner.Handle, color, this.RimColor);
        }
        set TrimColor(color) {
          SetVehicleInteriorColour(this._owner.Handle, color);
        }
        set DashboardColor(color) {
          SetVehicleDashboardColour(this._owner.Handle, color);
        }
        setModColor1(paintType, color) {
          SetVehicleModColor_1(this._owner.Handle, paintType, color, 0);
        }
        setModColor2(paintType, color) {
          SetVehicleModColor_2(this._owner.Handle, paintType, color);
        }
        get ColorCombination() {
          return GetVehicleColourCombination(this._owner.Handle);
        }
        set ColorCombination(value) {
          SetVehicleColourCombination(this._owner.Handle, value);
        }
        get ColorCombinationCount() {
          return GetNumberOfVehicleColours(this._owner.Handle);
        }
        get TireSmokeColor() {
          const color = GetVehicleTyreSmokeColor(this._owner.Handle);
          return Color.fromRgb(color[0], color[1], color[2]);
        }
        set TireSmokeColor(color) {
          SetVehicleTyreSmokeColor(this._owner.Handle, color.r, color.g, color.b);
        }
        get NeonLightsColor() {
          const color = GetVehicleNeonLightsColour(this._owner.Handle);
          return Color.fromRgb(color[0], color[1], color[2]);
        }
        set NeonLightsColor(color) {
          SetVehicleNeonLightsColour(this._owner.Handle, color.r, color.g, color.b);
        }
        isNeonLightsOn(light) {
          return IsVehicleNeonLightEnabled(this._owner.Handle, light);
        }
        setNeonLightsOn(light, on2) {
          SetVehicleNeonLightEnabled(this._owner.Handle, light, on2);
        }
        areAllNeonLightsOn() {
          if (!this.HasAllNeonLights) {
            return false;
          }
          let on2 = true;
          Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
            if (!on2) {
              return;
            }
            on2 = this.isNeonLightsOn(Number(key));
          });
          return on2;
        }
        setAllNeonLightsOn(on2) {
          Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
            this.setNeonLightsOn(Number(key), on2);
          });
        }
        get HasAllNeonLights() {
          return Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).findIndex((light) => !this.hasNeonLight(Number(light))) === -1;
        }
        hasNeonLight(light) {
          if (this._owner.Bones === void 0)
            return false;
          switch (light) {
            case VehicleNeonLight.Left:
              return this._owner.Bones.hasBone("neon_l");
            case VehicleNeonLight.Right:
              return this._owner.Bones.hasBone("neon_r");
            case VehicleNeonLight.Front:
              return this._owner.Bones.hasBone("neon_f");
            case VehicleNeonLight.Back:
              return this._owner.Bones.hasBone("neon_b");
            default:
              return false;
          }
        }
        get CustomPrimaryColor() {
          const color = GetVehicleCustomPrimaryColour(this._owner.Handle);
          return Color.fromRgb(color[0], color[1], color[2]);
        }
        set CustomPrimaryColor(color) {
          SetVehicleCustomPrimaryColour(this._owner.Handle, color.r, color.g, color.b);
        }
        get CustomSecondaryColor() {
          const color = GetVehicleCustomSecondaryColour(this._owner.Handle);
          return Color.fromRgb(color[0], color[1], color[2]);
        }
        set CustomSecondaryColor(color) {
          SetVehicleCustomSecondaryColour(this._owner.Handle, color.r, color.g, color.b);
        }
        get IsPrimaryColorCustom() {
          return GetIsVehiclePrimaryColourCustom(this._owner.Handle);
        }
        get IsSecondaryColorCustom() {
          return GetIsVehicleSecondaryColourCustom(this._owner.Handle);
        }
        clearCustomPrimaryColor() {
          ClearVehicleCustomPrimaryColour(this._owner.Handle);
        }
        clearCustomSecondaryColor() {
          ClearVehicleCustomSecondaryColour(this._owner.Handle);
        }
        get LicensePlateStyle() {
          return GetVehicleNumberPlateTextIndex(this._owner.Handle);
        }
        set LicensePlateStyle(style) {
          SetVehicleNumberPlateTextIndex(this._owner.Handle, style);
        }
        get LicensePlateType() {
          return GetVehiclePlateType(this._owner.Handle);
        }
        get LicensePlate() {
          return GetVehicleNumberPlateText(this._owner.Handle);
        }
        set LicensePlate(text) {
          SetVehicleNumberPlateText(this._owner.Handle, text);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleWheel.js
  var VehicleWheel;
  var init_VehicleWheel = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleWheel.js"() {
      VehicleWheel = class {
        constructor(owner, index) {
          this._owner = owner;
          this._index = index;
        }
        get Index() {
          return this._index;
        }
        set Index(index) {
          this._index = index;
        }
        get Vehicle() {
          return this._owner;
        }
        burst() {
          SetVehicleTyreBurst(this._owner.Handle, this.Index, true, 1e3);
        }
        fix() {
          SetVehicleTyreFixed(this._owner.Handle, this.Index);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleWheelCollection.js
  var VehicleWheelCollection;
  var init_VehicleWheelCollection = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleWheelCollection.js"() {
      init_VehicleWheel();
      init_enums();
      VehicleWheelCollection = class {
        constructor(owner) {
          this._vehicleWheels = /* @__PURE__ */ new Map();
          this._owner = owner;
        }
        getWheel(index) {
          if (!this._vehicleWheels.has(index)) {
            this._vehicleWheels.set(index, new VehicleWheel(this._owner, index));
          }
          return this._vehicleWheels.get(index);
        }
        getAllWheels() {
          return Object.keys(VehicleWheelIndex).filter((key) => !isNaN(Number(key))).map((key) => {
            const index = Number(key);
            if (this.hasWheel(index)) {
              return this.getWheel(index);
            }
            return null;
          }).filter((w) => w);
        }
        burstAllWheels() {
          this.getAllWheels().forEach((wheel) => {
            wheel === null || wheel === void 0 ? void 0 : wheel.burst();
          });
        }
        fixAllWheels() {
          this.getAllWheels().forEach((wheel) => {
            wheel === null || wheel === void 0 ? void 0 : wheel.fix();
          });
        }
        hasWheel(wheel) {
          if (this._owner.Bones === void 0)
            return false;
          switch (wheel) {
            case VehicleWheelIndex.FrontLeftWheel:
              return this._owner.Bones.hasBone("wheel_lf");
            case VehicleWheelIndex.FrontRightWheel:
              return this._owner.Bones.hasBone("wheel_rf");
            case VehicleWheelIndex.MidLeftWheel:
              return this._owner.Bones.hasBone("wheel_lm");
            case VehicleWheelIndex.MidRightWheel:
              return this._owner.Bones.hasBone("wheel_rm");
            case VehicleWheelIndex.RearLeftWheel:
              return this._owner.Bones.hasBone("wheel_lr");
            case VehicleWheelIndex.RearRightWheel:
              return this._owner.Bones.hasBone("wheel_rr");
            default:
              return false;
          }
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleWindow.js
  var VehicleWindow;
  var init_VehicleWindow = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleWindow.js"() {
      VehicleWindow = class {
        constructor(owner, index) {
          this._owner = owner;
          this._index = index;
        }
        get Index() {
          return this._index;
        }
        set Index(index) {
          this._index = index;
        }
        get IsIntact() {
          return IsVehicleWindowIntact(this._owner.Handle, this.Index);
        }
        get Vehicle() {
          return this._owner;
        }
        repair() {
          FixVehicleWindow(this._owner.Handle, this.Index);
        }
        smash() {
          SmashVehicleWindow(this._owner.Handle, this.Index);
        }
        rollUp() {
          RollUpWindow(this._owner.Handle, this.Index);
        }
        rollDown() {
          RollDownWindow(this._owner.Handle, this.Index);
        }
        remove() {
          RemoveVehicleWindow(this._owner.Handle, this.Index);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleWindowCollection.js
  var VehicleWindowCollection;
  var init_VehicleWindowCollection = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/VehicleWindowCollection.js"() {
      init_enums();
      init_VehicleWindow();
      VehicleWindowCollection = class {
        constructor(owner) {
          this._vehicleWindows = /* @__PURE__ */ new Map();
          this._owner = owner;
        }
        getWindow(index) {
          if (!this._vehicleWindows.has(index)) {
            this._vehicleWindows.set(index, new VehicleWindow(this._owner, index));
          }
          return this._vehicleWindows.get(index);
        }
        getAllWindows() {
          return Object.keys(VehicleWindowIndex).filter((key) => !isNaN(Number(key))).map((key) => {
            const index = Number(key);
            if (this.hasWindow(index)) {
              return this.getWindow(index);
            }
            return null;
          }).filter((w) => w);
        }
        get AreAllWindowsIntact() {
          return AreAllVehicleWindowsIntact(this._owner.Handle);
        }
        rollDownAllWindows() {
          this.getAllWindows().forEach((window) => {
            window === null || window === void 0 ? void 0 : window.rollDown();
          });
        }
        rollUpAllWindows() {
          this.getAllWindows().forEach((window) => {
            window === null || window === void 0 ? void 0 : window.rollUp();
          });
        }
        hasWindow(window) {
          if (this._owner.Bones === void 0)
            return false;
          switch (window) {
            case VehicleWindowIndex.FrontLeftWindow:
              return this._owner.Bones.hasBone("window_lf");
            case VehicleWindowIndex.FrontRightWindow:
              return this._owner.Bones.hasBone("window_rf");
            case VehicleWindowIndex.BackLeftWindow:
              return this._owner.Bones.hasBone("window_lr");
            case VehicleWindowIndex.BackRightWindow:
              return this._owner.Bones.hasBone("window_rr");
            default:
              return false;
          }
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/index.js
  var init_models = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/models/index.js"() {
      init_Entity();
      init_EntityBone();
      init_EntityBoneCollection();
      init_Ped();
      init_PedBone();
      init_PedBoneCollection();
      init_Player();
      init_Prop();
      init_Vehicle2();
      init_VehicleDoor();
      init_VehicleDoorCollection();
      init_VehicleMod();
      init_VehicleToggleMod();
      init_VehicleModCollection();
      init_VehicleWheel();
      init_VehicleWheelCollection();
      init_VehicleWindow();
      init_VehicleWindowCollection();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Game.js
  var Game;
  var init_Game = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Game.js"() {
      init_Audio();
      init_enums();
      init_models();
      Game = class {
        static generateHash(input) {
          if (typeof input === "undefined") {
            return 0;
          }
          const _hash = this.hashCache.get(input);
          if (_hash)
            return _hash;
          const hash = GetHashKey(input);
          this.hashCache.set(input, hash);
          return hash;
        }
        static get Language() {
          return GetUiLanguageId();
        }
        static get GameTime() {
          return GetGameTimer();
        }
        static set TimeScale(time) {
          SetTimeScale(time <= 1 && time >= 0 ? time : 1);
        }
        static get FrameCount() {
          return GetFrameCount();
        }
        static get FPS() {
          return 1 / this.LastFrameTime;
        }
        static get LastFrameTime() {
          return GetFrameTime();
        }
        static get Player() {
          const handle = PlayerId();
          if (typeof this.cachedPlayer === "undefined" || handle !== this.cachedPlayer.Handle) {
            this.cachedPlayer = new Player(handle);
          }
          return this.cachedPlayer;
        }
        static get PlayerPed() {
          return this.Player.Character;
        }
        static *playerList(excludeLocalPlayer = false) {
          const localPlayer = this.Player;
          for (const id of GetActivePlayers()) {
            if (excludeLocalPlayer && localPlayer.Handle === id) {
              continue;
            }
            yield new Player(id);
          }
        }
        static get PlayerVersusPlayer() {
          return this.Player.PvPEnabled;
        }
        static set PlayerVersusPlayer(value) {
          this.Player.PvPEnabled = value;
        }
        static get MaxWantedLevel() {
          return GetMaxWantedLevel();
        }
        static set MaxWantedLevel(value) {
          if (value < 0) {
            value = 0;
          } else if (value > 5) {
            value = 5;
          }
          SetMaxWantedLevel(value);
        }
        static set WantedMultiplier(value) {
          SetWantedLevelMultiplier(value);
        }
        static set ShowPoliceBlipsOnRadar(toggle) {
          SetPoliceRadarBlips(toggle);
        }
        static get Nightvision() {
          return IsNightvisionActive();
        }
        static set Nightvision(toggle) {
          SetNightvision(toggle);
        }
        static get ThermalVision() {
          return IsSeethroughActive();
        }
        static set ThermalVision(toggle) {
          SetSeethrough(toggle);
        }
        static get IsMissionActive() {
          return GetMissionFlag();
        }
        static set IsMissionActive(toggle) {
          SetMissionFlag(toggle);
        }
        static get IsRandomEventActive() {
          return GetRandomEventFlag();
        }
        static set IsRandomEventActive(toggle) {
          SetRandomEventFlag(toggle);
        }
        static get IsCutsceneActive() {
          return IsCutsceneActive();
        }
        static get IsWaypointActive() {
          return IsWaypointActive();
        }
        static get IsPaused() {
          return IsPauseMenuActive();
        }
        static set IsPaused(toggle) {
          SetPauseMenuActive(toggle);
        }
        static get IsLoading() {
          return GetIsLoadingScreenActive();
        }
        static get CurrentInputMode() {
          return IsInputDisabled(2) ? InputMode.MouseAndKeyboard : InputMode.GamePad;
        }
        static get RadioStation() {
          const stationName = GetPlayerRadioStationName();
          return RadioStation[stationName];
        }
        static set RadioStation(station) {
          SetRadioToStationName(station);
        }
        static isControlPressed(inputMode, control) {
          return IsControlPressed(inputMode, Number(control));
        }
        static isDisabledControlPressed(inputMode, control) {
          return IsDisabledControlPressed(inputMode, Number(control));
        }
        static isControlJustPressed(inputMode, control) {
          return IsControlJustPressed(inputMode, Number(control));
        }
        static isDisabledControlJustPressed(inputMode, control) {
          return IsDisabledControlJustPressed(inputMode, Number(control));
        }
        static isControlReleased(inputMode, control) {
          return IsControlReleased(inputMode, Number(control));
        }
        static isDisabledControlReleased(inputMode, control) {
          return IsDisabledControlReleased(inputMode, Number(control));
        }
        static isControlJustReleased(inputMode, control) {
          return IsControlJustReleased(inputMode, Number(control));
        }
        static isDisabledControlJustReleased(inputMode, control) {
          return IsDisabledControlJustReleased(inputMode, Number(control));
        }
        static isControlEnabled(inputMode, control) {
          return IsControlEnabled(inputMode, Number(control));
        }
        static enableControlThisFrame(inputMode, control) {
          EnableControlAction(inputMode, Number(control), true);
        }
        static disableControlThisFrame(inputMode, control) {
          DisableControlAction(inputMode, Number(control), true);
        }
        static disableAllControlsThisFrame(inputMode) {
          DisableAllControlActions(inputMode);
        }
        static enableAllControlsThisFrame(inputMode) {
          EnableAllControlActions(inputMode);
        }
        static entityFromHandle(handle) {
          switch (GetEntityType(handle)) {
            case 1:
              return new Ped(handle);
            case 2:
              return new Vehicle(handle);
            case 3:
              return new Prop(handle);
          }
          return null;
        }
        static playSound(soundFile, soundSet) {
          Audio.playSound(soundFile, soundSet);
        }
        static playMusic(musicFile) {
          Audio.playMusic(musicFile);
        }
        static stopMusic(musicFile) {
          Audio.stopMusic(musicFile);
        }
        static doesGXTEntryExist(entry) {
          if (typeof entry === "number") {
            return DoesTextLabelExist(entry.toString());
          } else {
            return DoesTextLabelExist(entry);
          }
        }
        static getGXTEntry(entry) {
          return Game.doesGXTEntryExist(entry) ? GetLabelText(entry.toString()) : "";
        }
        set ExtendWorldBoundry(vec) {
          ExtendWorldBoundaryForPlayer(vec.x, vec.y, vec.z);
        }
        get LastVehicle() {
          return new Vehicle(GetPlayersLastVehicle());
        }
      };
      Game.hashCache = /* @__PURE__ */ new Map();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Camera.js
  var Camera;
  var init_Camera = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Camera.js"() {
      init_models();
      init_utils();
      Camera = class {
        constructor(handle) {
          this.shakeNames = [
            "HAND_SHAKE",
            "SMALL_EXPLOSION_SHAKE",
            "MEDIUM_EXPLOSION_SHAKE",
            "LARGE_EXPLOSION_SHAKE",
            "JOLT_SHAKE",
            "VIBRATE_SHAKE",
            "ROAD_VIBRATION_SHAKE",
            "DRUNK_SHAKE",
            "SKY_DIVING_SHAKE",
            "FAMILY5_DRUG_TRIP_SHAKE",
            "DEATH_FAIL_IN_EFFECT_SHAKE"
          ];
          this.handle = handle;
        }
        get IsActive() {
          return IsCamActive(this.handle);
        }
        set IsActive(active) {
          SetCamActive(this.handle, active);
        }
        get Position() {
          const pos = GetCamCoord(this.handle);
          return new Vector3(pos[0], pos[1], pos[2]);
        }
        set Position(position) {
          SetCamCoord(this.handle, position.x, position.y, position.z);
        }
        get Rotation() {
          const rot = GetCamRot(this.handle, 2);
          return new Vector3(rot[0], rot[1], rot[2]);
        }
        set Rotation(rotation) {
          SetCamRot(this.handle, rotation.x, rotation.y, rotation.z, 2);
        }
        get Direction() {
          return this.ForwardVector;
        }
        set Direction(direction) {
          const dir = direction.normalize;
          const vec1 = new Vector3(dir.x, dir.y, 0);
          const vec2 = new Vector3(dir.z, vec1.distanceSquared(vec1), 0);
          const vec3 = vec2.normalize;
          this.Rotation = new Vector3(Math.atan2(vec3.x, vec3.y) * 57.29577951308232, this.Rotation.y, Math.atan2(dir.x, dir.y) * -57.29577951308232);
        }
        get ForwardVector() {
          const rotation = Vector3.multiply(this.Rotation, Math.PI / 180);
          const normalized = Vector3.normalize(new Vector3(-Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.sin(rotation.x)));
          return new Vector3(normalized.x, normalized.y, normalized.z);
        }
        get FieldOfView() {
          return GetCamFov(this.handle);
        }
        set FieldOfView(fieldOfView) {
          SetCamFov(this.handle, fieldOfView);
        }
        get NearClip() {
          return GetCamNearClip(this.handle);
        }
        set NearClip(nearClip) {
          SetCamNearClip(this.handle, nearClip);
        }
        get FarClip() {
          return GetCamFarClip(this.handle);
        }
        set FarClip(farClip) {
          SetCamFarClip(this.handle, farClip);
        }
        set NearDepthOfField(nearDepthOfField) {
          SetCamNearDof(this.handle, nearDepthOfField);
        }
        get FarDepthOfField() {
          return GetCamFarDof(this.handle);
        }
        set FarDepthOfField(farDepthOfField) {
          SetCamFarDof(this.handle, farDepthOfField);
        }
        set DepthOfFieldStrength(strength) {
          SetCamDofStrength(this.handle, strength);
        }
        set MotionBlurStrength(strength) {
          SetCamMotionBlurStrength(this.handle, strength);
        }
        shake(shakeType, amplitude) {
          ShakeCam(this.handle, this.shakeNames[Number(shakeType)], amplitude);
        }
        stopShaking() {
          StopCamShaking(this.handle, true);
        }
        get IsShaking() {
          return IsCamShaking(this.handle);
        }
        set ShakeAmplitude(amplitude) {
          SetCamShakeAmplitude(this.handle, amplitude);
        }
        pointAt(target, offset = new Vector3(0, 0, 0)) {
          if (target instanceof Entity) {
            PointCamAtEntity(this.handle, target.Handle, offset.x, offset.y, offset.z, true);
          } else if (target instanceof PedBone) {
            PointCamAtPedBone(this.handle, target.Owner.Handle, target.Index, offset.x, offset.y, offset.z, true);
          } else {
            PointCamAtCoord(this.handle, target.x, target.y, target.z);
          }
        }
        stopPointing() {
          StopCamPointing(this.handle);
        }
        interpTo(to, duration, easePosition, easeRotation) {
          SetCamActiveWithInterp(to.handle, this.handle, duration, Number(easePosition), Number(easeRotation));
        }
        get IsInterpolating() {
          return IsCamInterpolating(this.handle);
        }
        attachTo(object, offset) {
          if (object instanceof Entity) {
            AttachCamToEntity(this.handle, object.Handle, offset.x, offset.y, offset.z, true);
          } else if (object instanceof PedBone) {
            AttachCamToPedBone(this.handle, object.Owner.Handle, object.Index, offset.x, offset.y, offset.z, true);
          }
        }
        detach() {
          DetachCam(this.handle);
        }
        delete() {
          DestroyCam(this.handle, false);
        }
        exists() {
          return DoesCamExist(this.handle);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Pickup.js
  var Pickup;
  var init_Pickup = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Pickup.js"() {
      init_utils();
      Pickup = class {
        constructor(handle) {
          this.handle = handle;
        }
        get Position() {
          const coords = GetPickupCoords(this.handle);
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        get IsCollected() {
          return HasPickupBeenCollected(this.handle);
        }
        delete() {
          RemovePickup(this.handle);
        }
        exists() {
          return DoesPickupExist(this.handle);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Raycast.js
  var RaycastResult;
  var init_Raycast = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Raycast.js"() {
      init_Game();
      init_utils();
      RaycastResult = class {
        constructor(handle) {
          this.handle = handle;
          this.hitPositionArg = new Vector3(0, 0, 0);
          this.hitSomethingArg = false;
          this.entityHandleArg = null;
          this.surfaceNormalArg = new Vector3(0, 0, 0);
          this.materialArg = 0;
          const results = GetShapeTestResultEx(this.handle);
          this.hitSomethingArg = results[1];
          this.hitPositionArg = new Vector3(results[2][0], results[2][1], results[2][2]);
          this.surfaceNormalArg = new Vector3(results[3][0], results[3][1], results[3][2]);
          this.materialArg = results[4];
          this.entityHandleArg = Game.entityFromHandle(results[5]);
          this.result = results[0];
        }
        get HitEntity() {
          return this.entityHandleArg;
        }
        get HitPosition() {
          return this.hitPositionArg;
        }
        get SurfaceNormal() {
          return this.surfaceNormalArg;
        }
        get DidHit() {
          return this.hitSomethingArg;
        }
        get DidHitEntity() {
          var _a;
          return ((_a = this.entityHandleArg) === null || _a === void 0 ? void 0 : _a.Handle) !== 0;
        }
        get Material() {
          return this.materialArg;
        }
        get Result() {
          return this.result;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/World.js
  var __awaiter2, World;
  var init_World = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/World.js"() {
      init_lib();
      init_Blip2();
      init_Camera();
      init_enums();
      init_hashes();
      init_models();
      init_Pickup();
      init_Raycast();
      init_utils();
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      World = class {
        static get RenderingCamera() {
          return new Camera(GetRenderingCam());
        }
        static set RenderingCamera(value) {
          if (value === null) {
            RenderScriptCams(false, false, 3e3, true, false);
          } else {
            value.IsActive = true;
            RenderScriptCams(true, false, 3e3, true, false);
          }
        }
        static get CurrentDate() {
          const year = GetClockYear();
          const month = GetClockMonth();
          const day = GetClockDayOfMonth();
          const hour = GetClockHours();
          const minutes = GetClockMinutes();
          const seconds = GetClockSeconds();
          return new Date(year, month, day, hour, minutes, seconds);
        }
        static set CurrentDate(date) {
          SetClockDate(date.getDate(), date.getMonth(), date.getFullYear());
          NetworkOverrideClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        static set Blackout(value) {
          SetBlackout(value);
        }
        static get CloudHat() {
          return this.currentCloudHat;
        }
        static set CloudHat(value) {
          var _a;
          this.currentCloudHat = value;
          if (this.currentCloudHat === CloudHat.Unknown) {
            this.currentCloudHat = CloudHat.Clear;
            ClearCloudHat();
            return;
          }
          SetCloudHatTransition((_a = this.cloudHatDict.get(this.currentCloudHat)) !== null && _a !== void 0 ? _a : "", 3);
        }
        static get CloudHatOpacity() {
          return GetCloudHatOpacity();
        }
        static set CloudHatOpacity(value) {
          SetCloudHatOpacity(Maths.clamp(value, 0, 1));
        }
        static get Weather() {
          switch (GetPrevWeatherTypeHashName()) {
            case -1750463879:
              return Weather.ExtraSunny;
            case 916995460:
              return Weather.Clear;
            case -1530260698:
              return Weather.Neutral;
            case 282916021:
              return Weather.Smog;
            case -1368164796:
              return Weather.Foggy;
            case 821931868:
              return Weather.Clouds;
            case -1148613331:
              return Weather.Overcast;
            case 1840358669:
              return Weather.Clearing;
            case 1420204096:
              return Weather.Raining;
            case -1233681761:
              return Weather.ThunderStorm;
            case 669657108:
              return Weather.Blizzard;
            case -273223690:
              return Weather.Snowing;
            case 603685163:
              return Weather.Snowlight;
            case -1429616491:
              return Weather.Christmas;
            case -921030142:
              return Weather.Halloween;
            default:
              return Weather.Unknown;
          }
        }
        static set Weather(value) {
          if (value !== Weather.Unknown) {
            const weather = this.weatherDict[value];
            SetWeatherTypeOverTime(weather, 1);
            setTimeout(() => {
              SetWeatherTypeNow(weather);
            }, 100);
          }
        }
        static get NextWeather() {
          switch (GetNextWeatherTypeHashName()) {
            case -1750463879:
              return Weather.ExtraSunny;
            case 916995460:
              return Weather.Clear;
            case -1530260698:
              return Weather.Neutral;
            case 282916021:
              return Weather.Smog;
            case -1368164796:
              return Weather.Foggy;
            case 821931868:
              return Weather.Clouds;
            case -1148613331:
              return Weather.Overcast;
            case 1840358669:
              return Weather.Clearing;
            case 1420204096:
              return Weather.Raining;
            case -1233681761:
              return Weather.ThunderStorm;
            case 669657108:
              return Weather.Blizzard;
            case -273223690:
              return Weather.Snowing;
            case 603685163:
              return Weather.Snowlight;
            case -1429616491:
              return Weather.Christmas;
            case -921030142:
              return Weather.Halloween;
            default:
              return Weather.Unknown;
          }
        }
        static set NextWeather(value) {
          if (value !== Weather.Unknown) {
            const weather = this.weatherDict[value];
            SetWeatherTypeOverTime(weather, 0);
          }
        }
        static get WeatherTransition() {
          const transition = GetWeatherTypeTransition();
          return [this.weatherDict[transition[0]], this.weatherDict[transition[1]], transition[2]];
        }
        static set WeatherTransition(transition) {
          SetWeatherTypeTransition(transition[0], transition[1], transition[2]);
        }
        static transitionToWeather(weather, duration) {
          if (weather !== Weather.Unknown) {
            SetWeatherTypeOverTime(this.weatherDict[weather], duration);
          }
        }
        static destroyAllCameras() {
          DestroyAllCams(false);
        }
        static createBlip(position, radius) {
          if (radius !== null && radius !== void 0) {
            return new Blip(AddBlipForRadius(position.x, position.y, position.z, radius));
          }
          return new Blip(AddBlipForCoord(position.x, position.y, position.z));
        }
        static createCamera(position, rotation, fieldOfView) {
          return new Camera(CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, fieldOfView, true, 2));
        }
        static createPed(model, position, heading = 0, isNetwork = true) {
          return __awaiter2(this, void 0, void 0, function* () {
            if (!model.IsPed || !(yield model.request(1e3))) {
              return null;
            }
            return new Ped(CreatePed(26, model.Hash, position.x, position.y, position.z, heading, isNetwork, false));
          });
        }
        static createRandomPed(position) {
          return new Ped(CreateRandomPed(position.x, position.y, position.z));
        }
        static createVehicle(model, position, heading = 0, isNetwork = true) {
          return __awaiter2(this, void 0, void 0, function* () {
            if (!model.IsVehicle || !(yield model.request(1e3))) {
              return null;
            }
            return new Vehicle(CreateVehicle(model.Hash, position.x, position.y, position.z, heading, isNetwork, false));
          });
        }
        static createRandomVehicle(position, heading = 0, isNetwork = true) {
          return __awaiter2(this, void 0, void 0, function* () {
            const vehicleCount = Object.keys(VehicleHash).length / 2;
            const randomIndex = Maths.getRandomInt(0, vehicleCount);
            const randomVehicleName = VehicleHash[randomIndex];
            const modelHash = GetHashKey(randomVehicleName);
            const model = new Model(modelHash);
            if (!model.IsVehicle || !(yield model.request(1e3))) {
              return null;
            }
            return new Vehicle(CreateVehicle(model.Hash, position.x, position.y, position.z, heading, isNetwork, false));
          });
        }
        static createProp(model, position, dynamic, placeOnGround, isNetwork = true) {
          return __awaiter2(this, void 0, void 0, function* () {
            if (!model.IsProp || !(yield model.request(1e3))) {
              return null;
            }
            const prop = new Prop(CreateObject(model.Hash, position.x, position.y, position.z, isNetwork, true, dynamic));
            if (placeOnGround) {
              prop.placeOnGround();
            }
            return prop;
          });
        }
        static CreatePickup(type, position, model, value, rotation) {
          return __awaiter2(this, void 0, void 0, function* () {
            if (!(yield model.request(1e3))) {
              return null;
            }
            let handle = 0;
            if (rotation !== void 0)
              handle = CreatePickupRotate(type, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, 0, value, 2, true, model.Hash);
            else
              handle = CreatePickup(type, position.x, position.y, position.z, 0, value, true, model.Hash);
            if (handle === 0) {
              return null;
            }
            return new Pickup(handle);
          });
        }
        static CreateAmbientPickup(type, position, model, value) {
          return __awaiter2(this, void 0, void 0, function* () {
            if (!(yield model.request(1e3))) {
              return null;
            }
            const handle = CreateAmbientPickup(type, position.x, position.y, position.z, 0, value, model.Hash, false, true);
            if (handle === 0) {
              return null;
            }
            return new Prop(handle);
          });
        }
        static drawMarker(type, position, direction, rotation, scale, color, bobUpAndDown = false, faceCamera = false, rotateY = false, textureDict = "", textureName = "", drawOnEntity = false) {
          DrawMarker(Number(type), position.x, position.y, position.z, direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, scale.x, scale.y, scale.z, color.r, color.g, color.b, color.a, bobUpAndDown, faceCamera, 2, rotateY, textureDict, textureName, drawOnEntity);
        }
        static drawLightWithRange(pos, color, range, intensity) {
          DrawLightWithRange(pos.x, pos.y, pos.z, color.r, color.g, color.b, range, intensity);
        }
        static drawSpotLight(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
          DrawSpotLight(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, color.r, color.g, color.b, distance, brightness, roundness, radius, fadeOut);
        }
        static drawSpotLightWithShadow(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
          DrawSpotLightWithShadow(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, color.r, color.g, color.b, distance, brightness, roundness, radius, fadeOut, 0);
        }
        static drawLine(start, end, color) {
          DrawLine(start.x, start.y, start.z, end.x, end.y, end.z, color.r, color.g, color.b, color.a);
        }
        static drawPoly(vertexA, vertexB, vertexC, color) {
          DrawPoly(vertexA.x, vertexA.y, vertexA.z, vertexB.x, vertexB.y, vertexB.z, vertexC.x, vertexC.y, vertexC.z, color.r, color.g, color.b, color.a);
        }
        static raycast(source, direction, maxDistance, options, ignoreEntity) {
          const target = Vector3.add(source, Vector3.multiply(direction, maxDistance));
          return new RaycastResult(StartShapeTestRay(source.x, source.y, source.z, target.x, target.y, target.z, Number(options), ignoreEntity.Handle, 7));
        }
        static getClosestObject(model, coords, radius = 25, isMission = false) {
          const prop = GetClosestObjectOfType(coords.x, coords.y, coords.z, radius, model.Hash, isMission, false, false);
          if (prop !== 0) {
            return new Prop(prop);
          }
          return null;
        }
        static getAllProps() {
          const handles = GetGamePool("CObject");
          const props = [];
          handles.forEach((handle) => props.push(new Prop(handle)));
          return props;
        }
        static getAllPropsInGamePool() {
          return this.getAllProps();
        }
        static getAllPeds() {
          const handles = GetGamePool("CPed");
          const peds = [];
          handles.forEach((handle) => peds.push(new Ped(handle)));
          return peds;
        }
        static getAllPedsInGamePool() {
          return this.getAllPeds();
        }
        static getAllVehicles() {
          const handles = GetGamePool("CVehicle");
          const vehicles = [];
          handles.forEach((handle) => vehicles.push(new Vehicle(handle)));
          return vehicles;
        }
        static getAllVehiclesInGamePool() {
          return this.getAllVehicles();
        }
        static getClosestVehicle(coords) {
          const vehicles = this.getAllVehicles();
          let currentVeh = null;
          let lastDistance = 9999;
          for (const vehicle of vehicles) {
            if (!currentVeh) {
              currentVeh = vehicle;
              lastDistance = coords.distance(vehicle.Position);
              continue;
            }
            const distance = coords.distance(vehicle.Position);
            if (distance < lastDistance) {
              currentVeh = vehicle;
              lastDistance = distance;
            }
          }
          return currentVeh;
        }
        static getAllPickups() {
          const pickups = [];
          const [handle, entityHandle] = FindFirstPickup(0);
          let pickup = new Pickup(entityHandle);
          if (pickup !== void 0 && pickup !== null && pickup.exists()) {
            pickups.push(pickup);
          }
          let findResult = [false, 0];
          do {
            findResult = FindNextPickup(handle, 0);
            if (findResult[0]) {
              pickup = new Pickup(findResult[1]);
              if (pickup !== void 0 && pickup !== null && pickup.exists()) {
                pickups.push(pickup);
              }
            }
          } while (findResult[0]);
          EndFindPickup(handle);
          return pickups;
        }
        static getAllPickupsInGamePool() {
          const handles = GetGamePool("CPickup");
          const pickups = [];
          handles.forEach((handle) => pickups.push(new Pickup(handle)));
          return pickups;
        }
      };
      World.currentCloudHat = CloudHat.Clear;
      World.cloudHatDict = /* @__PURE__ */ new Map([
        [CloudHat.Unknown, "Unknown"],
        [CloudHat.Altostratus, "altostratus"],
        [CloudHat.Cirrus, "Cirrus"],
        [CloudHat.Cirrocumulus, "cirrocumulus"],
        [CloudHat.Clear, "Clear 01"],
        [CloudHat.Cloudy, "Cloudy 01"],
        [CloudHat.Contrails, "Contrails"],
        [CloudHat.Horizon, "Horizon"],
        [CloudHat.HorizonBand1, "horizonband1"],
        [CloudHat.HorizonBand2, "horizonband2"],
        [CloudHat.HorizonBand3, "horizonband3"],
        [CloudHat.Horsey, "horsey"],
        [CloudHat.Nimbus, "Nimbus"],
        [CloudHat.Puffs, "Puffs"],
        [CloudHat.Rain, "RAIN"],
        [CloudHat.Snowy, "Snowy 01"],
        [CloudHat.Stormy, "Stormy 01"],
        [CloudHat.Stratoscumulus, "stratoscumulus"],
        [CloudHat.Stripey, "Stripey"],
        [CloudHat.Shower, "shower"],
        [CloudHat.Wispy, "Wispy"]
      ]);
      World.weatherDict = [
        "EXTRASUNNY",
        "CLEAR",
        "CLOUDS",
        "SMOG",
        "FOGGY",
        "OVERCAST",
        "RAIN",
        "THUNDER",
        "CLEARING",
        "NEUTRAL",
        "SNOW",
        "BLIZZARD",
        "SNOWLIGHT",
        "XMAS"
      ];
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Checkpoint.js
  var init_Checkpoint2 = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/Checkpoint.js"() {
      init_enums();
      init_utils();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/GameplayCamera.js
  var GameplayCamera;
  var init_GameplayCamera = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/GameplayCamera.js"() {
      init_utils();
      GameplayCamera = class {
        static get Position() {
          const coords = GetGameplayCamCoords();
          return new Vector3(coords[0], coords[1], coords[2]);
        }
        static get Rotation() {
          const rot = GetGameplayCamRot(2);
          return new Vector3(rot[0], rot[1], rot[2]);
        }
        static get ForwardVector() {
          const rotation = Vector3.multiply(this.Rotation, Math.PI / 180);
          const normalized = Vector3.normalize(new Vector3(-Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.sin(rotation.x)));
          return new Vector3(normalized.x, normalized.y, normalized.z);
        }
        static get RelativePitch() {
          return GetGameplayCamRelativePitch();
        }
        static set RelativePitch(pitch) {
          SetGameplayCamRelativePitch(pitch, 1);
        }
        static get RelativeHeading() {
          return GetGameplayCamRelativeHeading();
        }
        static set RelativeHeading(heading) {
          SetGameplayCamRelativeHeading(heading);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ParticleEffect.js
  var init_ParticleEffect = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ParticleEffect.js"() {
      init_enums();
      init_utils();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ParticleEffectAsset.js
  var init_ParticleEffectAsset = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ParticleEffectAsset.js"() {
      init_enums();
      init_utils();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/RelationshipGroup.js
  var init_RelationshipGroup = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/RelationshipGroup.js"() {
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/TaskSequence.js
  var init_TaskSequence = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/TaskSequence.js"() {
      init_Ped();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/interfaces/index.js
  var init_interfaces = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/interfaces/index.js"() {
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Rectangle.js
  var Rectangle;
  var init_Rectangle = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Rectangle.js"() {
      init_utils();
      init_ui();
      Rectangle = class {
        constructor(pos, size, color) {
          this.pos = pos;
          this.size = size;
          this.color = color;
        }
        draw(arg1, arg2, color, resolution) {
          resolution = color === void 0 ? arg2 : resolution;
          resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
          if (color === void 0) {
            if (arg1 && arg1 instanceof Size) {
              arg1 = new Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
            } else {
              arg1 = this.pos;
            }
            arg2 = this.size;
          } else {
            if (!arg1) {
              arg1 = this.pos;
            } else {
              arg1 = arg1;
            }
            arg2 = arg2 || this.size;
          }
          color = color || this.color;
          const w = arg2.width / resolution.width;
          const h = arg2.height / resolution.height;
          const x = arg1.X / resolution.width + w * 0.5;
          const y = arg1.Y / resolution.height + h * 0.5;
          DrawRect(x, y, w, h, color.r, color.g, color.b, color.a);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Container.js
  var Container;
  var init_Container = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Container.js"() {
      init_utils();
      init_ui();
      Container = class {
        constructor(pos, size, color) {
          this.items = [];
          this.pos = pos;
          this.size = size;
          this.color = color;
        }
        addItem(items) {
          if (!Array.isArray(items)) {
            items = [items];
          }
          this.items.push(...items);
        }
        draw(offset, resolution) {
          resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
          offset = offset || new Size();
          const w = this.size.width / resolution.width;
          const h = this.size.height / resolution.height;
          const x = (this.pos.X + offset.width) / resolution.width + w * 0.5;
          const y = (this.pos.Y + offset.height) / resolution.height + h * 0.5;
          DrawRect(x, y, w, h, this.color.r, this.color.g, this.color.b, this.color.a);
          for (const item of this.items) {
            item.draw(new Size(this.pos.X + offset.width, this.pos.Y + offset.height), resolution);
          }
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Effects.js
  var Effects;
  var init_Effects = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Effects.js"() {
      Effects = class {
        static start(effectName, duration = 0, looped = false) {
          StartScreenEffect(this.effectToString(effectName), duration, looped);
        }
        static stop(screenEffect) {
          if (typeof screenEffect === "undefined") {
            StopAllScreenEffects();
          } else {
            StopScreenEffect(this.effectToString(screenEffect));
          }
        }
        static isActive(screenEffect) {
          return GetScreenEffectIsActive(this.effectToString(screenEffect));
        }
        static effectToString(screenEffect) {
          const effect = Number(screenEffect);
          if (effect >= 0 && effect <= this.effects.length) {
            return this.effects[effect];
          }
          return "INVALID";
        }
      };
      Effects.effects = [
        "SwitchHUDIn",
        "SwitchHUDOut",
        "FocusIn",
        "FocusOut",
        "MinigameEndNeutral",
        "MinigameEndTrevor",
        "MinigameEndFranklin",
        "MinigameEndMichael",
        "MinigameTransitionOut",
        "MinigameTransitionIn",
        "SwitchShortNeutralIn",
        "SwitchShortFranklinIn",
        "SwitchShortTrevorIn",
        "SwitchShortMichaelIn",
        "SwitchOpenMichaelIn",
        "SwitchOpenFranklinIn",
        "SwitchOpenTrevorIn",
        "SwitchHUDMichaelOut",
        "SwitchHUDFranklinOut",
        "SwitchHUDTrevorOut",
        "SwitchShortFranklinMid",
        "SwitchShortMichaelMid",
        "SwitchShortTrevorMid",
        "DeathFailOut",
        "CamPushInNeutral",
        "CamPushInFranklin",
        "CamPushInMichael",
        "CamPushInTrevor",
        "SwitchSceneFranklin",
        "SwitchSceneTrevor",
        "SwitchSceneMichael",
        "SwitchSceneNeutral",
        "MP_Celeb_Win",
        "MP_Celeb_Win_Out",
        "MP_Celeb_Lose",
        "MP_Celeb_Lose_Out",
        "DeathFailNeutralIn",
        "DeathFailMPDark",
        "DeathFailMPIn",
        "MP_Celeb_Preload_Fade",
        "PeyoteEndOut",
        "PeyoteEndIn",
        "PeyoteIn",
        "PeyoteOut",
        "MP_race_crash",
        "SuccessFranklin",
        "SuccessTrevor",
        "SuccessMichael",
        "DrugsMichaelAliensFightIn",
        "DrugsMichaelAliensFight",
        "DrugsMichaelAliensFightOut",
        "DrugsTrevorClownsFightIn",
        "DrugsTrevorClownsFight",
        "DrugsTrevorClownsFightOut",
        "HeistCelebPass",
        "HeistCelebPassBW",
        "HeistCelebEnd",
        "HeistCelebToast",
        "MenuMGHeistIn",
        "MenuMGTournamentIn",
        "MenuMGSelectionIn",
        "ChopVision",
        "DMT_flight_intro",
        "DMT_flight",
        "DrugsDrivingIn",
        "DrugsDrivingOut",
        "SwitchOpenNeutralFIB5",
        "HeistLocate",
        "MP_job_load",
        "RaceTurbo",
        "MP_intro_logo",
        "HeistTripSkipFade",
        "MenuMGHeistOut",
        "MP_corona_switch",
        "MenuMGSelectionTint",
        "SuccessNeutral",
        "ExplosionJosh3",
        "SniperOverlay",
        "RampageOut",
        "Rampage",
        "Dont_tazeme_bro"
      ];
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Fading.js
  var init_Fading = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Fading.js"() {
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Hud.js
  var Hud;
  var init_Hud = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Hud.js"() {
      init_enums();
      Hud = class {
        static isComponentActive(component) {
          return IsHudComponentActive(Number(component));
        }
        static showComponentThisFrame(component) {
          ShowHudComponentThisFrame(Number(component));
        }
        static hideComponentThisFrame(component) {
          HideHudComponentThisFrame(Number(component));
        }
        static showCursorThisFrame() {
          ShowCursorThisFrame();
        }
        static set CursorPosition(position) {
          SetCursorLocation(position.X, position.Y);
        }
        static get CursorSprite() {
          return CursorSprite.DownArrow;
        }
        static set CursorSprite(sprite) {
          SetCursorSprite(Number(sprite));
        }
        static get IsVisible() {
          return !(IsHudHidden() || !IsHudPreferenceSwitchedOn());
        }
        static set IsVisible(toggle) {
          DisplayHud(toggle);
        }
        static get IsRadarVisible() {
          return !(IsRadarHidden() || IsRadarPreferenceSwitchedOn());
        }
        static set IsRadarVisible(toggle) {
          DisplayRadar(toggle);
        }
        static set RadarZoom(zoomLevel) {
          SetRadarZoom(zoomLevel);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/LoadingPrompt.js
  var LoadingPrompt;
  var init_LoadingPrompt = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/LoadingPrompt.js"() {
      init_enums();
      LoadingPrompt = class {
        static show(loadingText = "", spinnerType = LoadingSpinnerType.RegularClockwise) {
          if (this.IsActive) {
            this.hide();
          }
          if (loadingText === "") {
            BeginTextCommandBusyString("");
          } else {
            BeginTextCommandBusyString("STRING");
            AddTextComponentSubstringPlayerName(loadingText);
          }
          EndTextCommandBusyString(Number(spinnerType));
        }
        static hide() {
          if (this.IsActive) {
            RemoveLoadingPrompt();
          }
        }
        static get IsActive() {
          return IsLoadingPromptBeingDisplayed();
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Notification.js
  var Notification;
  var init_Notification = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Notification.js"() {
      Notification = class {
        constructor(handle) {
          this.handle = handle;
        }
        hide() {
          RemoveNotification(this.handle);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Scaleform.js
  var init_Scaleform = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Scaleform.js"() {
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Screen.js
  var Screen;
  var init_Screen = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Screen.js"() {
      init_Audio();
      init_enums();
      init_utils();
      init_ui();
      Screen = class {
        static get Resolution() {
          const [width, height] = GetScreenActiveResolution();
          return new Size(width, height);
        }
        static get ScaledResolution() {
          const height = this.Height;
          return new Size(height * this.AspectRatio, height);
        }
        static get Width() {
          return this.Resolution.width;
        }
        static get ScaledWidth() {
          return this.Height * this.AspectRatio;
        }
        static get Height() {
          return this.Resolution.height;
        }
        static get AspectRatio() {
          return GetAspectRatio(false);
        }
        static showSubtitle(message, duration = 2500) {
          const strings = String2.stringToArray(message);
          BeginTextCommandPrint("CELL_EMAIL_BCON");
          strings.forEach((element) => {
            AddTextComponentSubstringPlayerName(element);
          });
          EndTextCommandPrint(duration, true);
        }
        static displayHelpTextThisFrame(message) {
          const strings = String2.stringToArray(message);
          BeginTextCommandDisplayHelp("CELL_EMAIL_BCON");
          strings.forEach((element) => {
            AddTextComponentSubstringPlayerName(element);
          });
          EndTextCommandDisplayHelp(0, false, false, -1);
        }
        static showNotification(message, blinking = false) {
          const strings = String2.stringToArray(message);
          SetNotificationTextEntry("CELL_EMAIL_BCON");
          strings.forEach((element) => {
            AddTextComponentSubstringPlayerName(element);
          });
          return new Notification(DrawNotification(blinking, true));
        }
        static showAdvancedNotification(message, title, subtitle, iconSet, icon, bgColor = HudColor.NONE, flashColor = Color.empty, blinking = false, type = NotificationType.Default, showInBrief = true, sound = true) {
          const strings = String2.stringToArray(message);
          SetNotificationTextEntry("CELL_EMAIL_BCON");
          strings.forEach((element) => {
            AddTextComponentSubstringPlayerName(element);
          });
          if (bgColor !== HudColor.NONE) {
            SetNotificationBackgroundColor(Number(bgColor));
          }
          if (flashColor !== Color.empty && blinking) {
            SetNotificationFlashColor(flashColor.r, flashColor.g, flashColor.b, flashColor.a);
          }
          if (sound) {
            Audio.playSoundFrontEnd("DELETE", "HUD_DEATHMATCH_SOUNDSET");
          }
          SetNotificationMessage(iconSet, icon, true, Number(type), title, subtitle);
          return new Notification(DrawNotification(blinking, showInBrief));
        }
        static worldToScreen(position, scaleWidth = false) {
          const coords = GetScreenCoordFromWorldCoord(position.x, position.y, position.z);
          return new Size(coords[1] * (scaleWidth ? this.ScaledWidth : this.Width), coords[2] * this.Height);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Sprite.js
  var Sprite;
  var init_Sprite = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Sprite.js"() {
      init_utils();
      init_ui();
      Sprite = class {
        constructor(textureDict, textureName, pos, size, heading = 0, color = Color.white) {
          this._textureDict = textureDict;
          this.textureName = textureName;
          this.pos = pos || new Point();
          this.size = size || new Size();
          this.heading = heading || 0;
          this.color = color || Color.white;
          this.visible = true;
        }
        loadTextureDictionary() {
          RequestStreamedTextureDict(this._textureDict, true);
          const interval = setInterval(() => {
            if (this.IsTextureDictionaryLoaded) {
              clearInterval(interval);
            }
          }, 0);
        }
        set TextureDict(v) {
          this._textureDict = v;
          if (!this.IsTextureDictionaryLoaded) {
            this.loadTextureDictionary();
          }
        }
        get TextureDict() {
          return this._textureDict;
        }
        get IsTextureDictionaryLoaded() {
          return HasStreamedTextureDictLoaded(this._textureDict);
        }
        draw(arg1, textureName, pos, size, heading, color, loadTexture = true, resolution) {
          const textureDictionary = arg1 && typeof arg1 === "string" ? arg1 : this.TextureDict;
          textureName = textureName || this.textureName;
          pos = pos || this.pos;
          size = size || this.size;
          heading = heading || this.heading;
          color = color || this.color;
          if (loadTexture) {
            if (!HasStreamedTextureDictLoaded(textureDictionary)) {
              RequestStreamedTextureDict(textureDictionary, false);
            }
          }
          resolution = arg1 instanceof Size ? arg1 : resolution;
          resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
          const w = size.width / resolution.width;
          const h = size.height / resolution.height;
          const x = pos.X / resolution.width + w * 0.5;
          const y = pos.Y / resolution.height + h * 0.5;
          DrawSprite(textureDictionary, textureName, x, y, w, h, heading, color.r, color.g, color.b, color.a);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Text.js
  var Text;
  var init_Text = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Text.js"() {
      init_enums();
      init_utils();
      init_ui();
      Text = class {
        constructor(caption, pos, scale = 1, color = Color.white, font = Font.ChaletLondon, alignment = Alignment.Left, dropShadow = false, outline = false, wordWrap = new Size(500, 300)) {
          this.caption = caption;
          this.pos = pos;
          this.scale = scale;
          this.color = color;
          this.font = font;
          this.alignment = alignment;
          this.dropShadow = dropShadow;
          this.outline = outline;
          this.wordWrap = wordWrap;
        }
        static draw(caption, pos, scale = 1, color = Color.white, font = Font.ChaletLondon, alignment = Alignment.Left, dropShadow = false, outline = false, wordWrap, resolution) {
          resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
          const x = pos.X / resolution.width;
          const y = pos.Y / resolution.height;
          SetTextFont(Number(font));
          SetTextScale(1, scale);
          SetTextColour(color.r, color.g, color.b, color.a);
          if (dropShadow) {
            SetTextDropshadow(2, 0, 0, 0, 0);
          }
          if (outline) {
            SetTextOutline();
          }
          switch (alignment) {
            case Alignment.Centered:
              SetTextCentre(true);
              break;
            case Alignment.Right:
              SetTextRightJustify(true);
              if (!wordWrap) {
                SetTextWrap(0, x);
              }
              break;
          }
          if (wordWrap) {
            SetTextWrap(x, (pos.X + wordWrap.width) / resolution.width);
          }
          SetTextEntry("STRING");
          Text.addLongString(caption);
          DrawText(x, y);
        }
        static addLongString(str) {
          const strLen = 99;
          for (let i = 0; i < str.length; i += strLen) {
            const substr = str.substr(i, Math.min(strLen, str.length - i));
            AddTextComponentSubstringPlayerName(substr);
          }
        }
        draw(arg1, arg2, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution) {
          resolution = arg2 instanceof Size ? arg2 : resolution;
          if (scale === void 0) {
            if (arg1 && arg1 instanceof Size) {
              arg2 = new Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
            } else {
              arg2 = this.pos;
            }
            arg1 = this.caption;
            scale = this.scale;
            color = this.color;
            font = this.font;
            alignment = this.alignment;
            dropShadow = this.dropShadow;
            outline = this.outline;
            wordWrap = this.wordWrap;
          } else {
            arg1 = arg1 || this.caption;
            if (!arg2) {
              arg2 = this.pos;
            } else {
              arg2 = arg2;
            }
            scale = scale !== void 0 && scale !== null ? scale : this.scale;
            color = color || this.color;
            font = font !== void 0 && font !== null ? font : this.font;
            alignment = alignment !== void 0 && alignment !== null ? alignment : this.alignment;
            dropShadow = typeof dropShadow === "boolean" ? dropShadow : dropShadow;
            outline = typeof outline === "boolean" ? outline : outline;
            wordWrap = wordWrap || this.wordWrap;
          }
          Text.draw(arg1, arg2, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Timerbar.js
  var activeTimerBars, drawText;
  var init_Timerbar = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/Timerbar.js"() {
      init_enums();
      init_utils();
      init_Hud();
      init_LoadingPrompt();
      init_Screen();
      init_Sprite();
      activeTimerBars = [];
      drawText = (text, position, options) => {
        options = Object.assign({
          align: 1,
          color: [255, 255, 255, 255],
          font: 4,
          outline: true,
          scale: 0.3,
          shadow: true
        }, options);
        const font = options.font;
        const scale = options.scale;
        const outline = options.outline;
        const shadow = options.shadow;
        const color = options.color;
        const align = options.align;
        SetTextEntry("CELL_EMAIL_BCON");
        for (let i = 0; i < text.length; i += 99) {
          const subStringText = text.substr(i, Math.min(99, text.length - i));
          AddTextComponentSubstringPlayerName(subStringText);
        }
        SetTextFont(font);
        SetTextScale(scale, scale);
        SetTextColour(color[0], color[1], color[2], color[3]);
        if (shadow) {
          SetTextDropShadow();
        }
        if (outline) {
          SetTextOutline();
        }
        switch (align) {
          case 1: {
            SetTextCentre(true);
            break;
          }
          case 2: {
            SetTextRightJustify(true);
            SetTextWrap(0, position[0] || 0);
            break;
          }
        }
        DrawText(position[0] || 0, position[1] || 0);
      };
      setTick(() => {
        if (activeTimerBars.length <= 0) {
          return;
        }
        const safeZone = GetSafeZoneSize();
        const safeZoneX = (1 - safeZone) * 0.5;
        const safeZoneY = (1 - safeZone) * 0.5;
        Hud.hideComponentThisFrame(HudComponent.AreaName);
        Hud.hideComponentThisFrame(HudComponent.StreetName);
        let loadingPromptOffset = 0;
        if (LoadingPrompt.IsActive) {
          loadingPromptOffset = 0.035 + 0.035 * 0.038 * 2;
        }
        activeTimerBars.forEach((timerbar) => {
          const drawY = 0.984 - loadingPromptOffset - safeZoneY - activeTimerBars.indexOf(timerbar) * 0.038;
          DrawSprite("timerbars", "all_black_bg", 0.918 - safeZoneX, drawY, 0.165, 0.035, 0, 255, 255, 255, 160);
          drawText(timerbar.Title, [0.918 - safeZoneX + 0.012, drawY - 9e-3 - (timerbar.PlayerStyle ? 625e-5 : 0)], {
            align: 2,
            color: timerbar.TextColor,
            font: timerbar.PlayerStyle ? 4 : 0,
            outline: false,
            scale: timerbar.PlayerStyle ? 0.465 : 0.3,
            shadow: timerbar.PlayerStyle
          });
          if (timerbar.UseProgressBar) {
            const pbarX = 0.918 - safeZoneX + 0.047;
            const pbarY = drawY + 15e-4;
            const width = 0.0616 * timerbar.Progress;
            DrawRect(pbarX, pbarY, 0.0616, 0.0105, typeof timerbar.ProgressbarBgColor === "number" ? timerbar.ProgressbarBgColor : timerbar.ProgressbarBgColor[0], typeof timerbar.ProgressbarBgColor === "number" ? timerbar.ProgressbarBgColor : timerbar.ProgressbarBgColor[1], typeof timerbar.ProgressbarBgColor === "number" ? timerbar.ProgressbarBgColor : timerbar.ProgressbarBgColor[2], typeof timerbar.ProgressbarBgColor === "number" ? timerbar.ProgressbarBgColor : timerbar.ProgressbarBgColor[3]);
            DrawRect(pbarX - 0.0616 / 2 + width / 2, pbarY, width, 0.0105, typeof timerbar.ProgressbarFgColor === "number" ? timerbar.ProgressbarFgColor : timerbar.ProgressbarFgColor[0], typeof timerbar.ProgressbarFgColor === "number" ? timerbar.ProgressbarFgColor : timerbar.ProgressbarFgColor[1], typeof timerbar.ProgressbarFgColor === "number" ? timerbar.ProgressbarFgColor : timerbar.ProgressbarFgColor[2], typeof timerbar.ProgressbarFgColor === "number" ? timerbar.ProgressbarFgColor : timerbar.ProgressbarFgColor[3]);
          } else {
            drawText(timerbar.Text, [0.918 - safeZoneX + 0.0785, drawY + -0.0165], {
              align: 2,
              color: timerbar.TextColor,
              font: 0,
              outline: false,
              scale: 0.425,
              shadow: false
            });
          }
        });
      });
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/AbstractUIMenuPanel.js
  var init_AbstractUIMenuPanel = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/AbstractUIMenuPanel.js"() {
      init_utils();
      init_ui();
      init_menu();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuGridPanel.js
  var init_UIMenuGridPanel = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuGridPanel.js"() {
      init_utils();
      init_panels();
      init_ui();
      init_enums();
      init_Game();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuColorPanel.js
  var init_UIMenuColorPanel = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuColorPanel.js"() {
      init_utils();
      init_panels();
      init_ui();
      init_enums();
      init_lib();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuPercentagePanel.js
  var init_UIMenuPercentagePanel = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuPercentagePanel.js"() {
      init_utils();
      init_panels();
      init_ui();
      init_enums();
      init_lib();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuStatisticsPanel.js
  var init_UIMenuStatisticsPanel = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuStatisticsPanel.js"() {
      init_utils();
      init_panels();
      init_ui();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuStatisticsPanelItem.js
  var init_UIMenuStatisticsPanelItem = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/UIMenuStatisticsPanelItem.js"() {
      init_utils();
      init_ui();
      init_enums();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/index.js
  var init_panels = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/panels/index.js"() {
      init_AbstractUIMenuPanel();
      init_UIMenuGridPanel();
      init_UIMenuColorPanel();
      init_UIMenuPercentagePanel();
      init_UIMenuStatisticsPanel();
      init_UIMenuStatisticsPanelItem();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuItem.js
  var UIMenuItem;
  var init_UIMenuItem = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuItem.js"() {
      init_menu();
      init_ui();
      init_enums();
      init_utils();
      UIMenuItem = class {
        constructor(text, description) {
          this.id = Crypto.uuidv4();
          this.enabled = true;
          this.selected = false;
          this.hovered = false;
          this.offset = new Point(0, 0);
          this.activated = new LiteEvent();
          this.panelActivated = new LiteEvent();
          this.supportsDescription = true;
          this.supportsPanels = true;
          this.supportsLeftBadge = true;
          this.supportsRightBadge = true;
          this.supportsRightLabel = true;
          this._description = "";
          this._formattedDescription = "";
          this._backColor = UIMenuItem.defaultBackColor;
          this._highlightedBackColor = UIMenuItem.defaultHighlightedBackColor;
          this._foreColor = UIMenuItem.defaultForeColor;
          this._highlightedForeColor = UIMenuItem.defaultHighlightedForeColor;
          this._leftBadge = BadgeStyle.None;
          this._rightBadge = BadgeStyle.None;
          this._event = { event: "", args: [] };
          this._panels = [];
          this.rectangle = new Rectangle(new Point(), new Size(431, 38), this._backColor);
          this.text = new Text("", new Point(), 0.33, this._foreColor, Font.ChaletLondon, Alignment.Left);
          this.selectedSprite = new Sprite("commonmenu", "gradient_nav", new Point(), new Size(431, 38), 0, this._highlightedBackColor);
          this.badgeLeft = new Sprite("", "");
          this.badgeRight = new Sprite("", "");
          this.labelText = new Text("", new Point(), 0.35, this._foreColor, 0, Alignment.Right);
          this.Text = text;
          this.Description = description !== null && description !== void 0 ? description : "";
        }
        static badgeToTextureDict(badge) {
          switch (badge) {
            case BadgeStyle.Male:
            case BadgeStyle.Female:
            case BadgeStyle.AudioMute:
            case BadgeStyle.AudioInactive:
            case BadgeStyle.AudioVol1:
            case BadgeStyle.AudioVol2:
            case BadgeStyle.AudioVol3:
              return "mpleaderboard";
            case BadgeStyle.InvArmWrestling:
            case BadgeStyle.InvBasejump:
            case BadgeStyle.InvMission:
            case BadgeStyle.InvDarts:
            case BadgeStyle.InvDeathmatch:
            case BadgeStyle.InvDrug:
            case BadgeStyle.InvCastle:
            case BadgeStyle.InvGolf:
            case BadgeStyle.InvBike:
            case BadgeStyle.InvBoat:
            case BadgeStyle.InvAnchor:
            case BadgeStyle.InvCar:
            case BadgeStyle.InvDollar:
            case BadgeStyle.InvCoke:
            case BadgeStyle.InvKey:
            case BadgeStyle.InvData:
            case BadgeStyle.InvHeli:
            case BadgeStyle.InvHeorin:
            case BadgeStyle.InvKeycard:
            case BadgeStyle.InvMeth:
            case BadgeStyle.InvBriefcase:
            case BadgeStyle.InvLink:
            case BadgeStyle.InvPerson:
            case BadgeStyle.InvPlane:
            case BadgeStyle.InvPlane2:
            case BadgeStyle.InvQuestionmark:
            case BadgeStyle.InvRemote:
            case BadgeStyle.InvSafe:
            case BadgeStyle.InvSteerWheel:
            case BadgeStyle.InvWeapon:
            case BadgeStyle.InvWeed:
            case BadgeStyle.InvRaceFlagPlane:
            case BadgeStyle.InvRaceFlagBicycle:
            case BadgeStyle.InvRaceFlagBoatAnchor:
            case BadgeStyle.InvRaceFlagPerson:
            case BadgeStyle.InvRaceFlagCar:
            case BadgeStyle.InvRaceFlagHelmet:
            case BadgeStyle.InvShootingRange:
            case BadgeStyle.InvSurvival:
            case BadgeStyle.InvTeamDeathmatch:
            case BadgeStyle.InvTennis:
            case BadgeStyle.InvVehicleDeathmatch:
              return "mpinventory";
            case BadgeStyle.Adversary:
            case BadgeStyle.BaseJumping:
            case BadgeStyle.Briefcase:
            case BadgeStyle.MissionStar:
            case BadgeStyle.Deathmatch:
            case BadgeStyle.Castle:
            case BadgeStyle.Trophy:
            case BadgeStyle.RaceFlag:
            case BadgeStyle.RaceFlagPlane:
            case BadgeStyle.RaceFlagBicycle:
            case BadgeStyle.RaceFlagPerson:
            case BadgeStyle.RaceFlagCar:
            case BadgeStyle.RaceFlagBoatAnchor:
            case BadgeStyle.Rockstar:
            case BadgeStyle.Stunt:
            case BadgeStyle.StuntPremium:
            case BadgeStyle.RaceFlagStuntJump:
            case BadgeStyle.Shield:
            case BadgeStyle.TeamDeathmatch:
            case BadgeStyle.VehicleDeathmatch:
              return "commonmenutu";
            case BadgeStyle.MpAmmoPickup:
            case BadgeStyle.MpAmmo:
            case BadgeStyle.MpCash:
            case BadgeStyle.MpRp:
            case BadgeStyle.MpSpectating:
              return "mphud";
            case BadgeStyle.Sale:
              return "mpshopsale";
            case BadgeStyle.GlobeWhite:
            case BadgeStyle.GlobeRed:
            case BadgeStyle.GlobeBlue:
            case BadgeStyle.GlobeYellow:
            case BadgeStyle.GlobeGreen:
            case BadgeStyle.GlobeOrange:
              return "mprankbadge";
            case BadgeStyle.CountryUsa:
            case BadgeStyle.CountryUk:
            case BadgeStyle.CountrySweden:
            case BadgeStyle.CountryKorea:
            case BadgeStyle.CountryJapan:
            case BadgeStyle.CountryItaly:
            case BadgeStyle.CountryGermany:
            case BadgeStyle.CountryFrance:
            case BadgeStyle.BrandAlbany:
            case BadgeStyle.BrandAnnis:
            case BadgeStyle.BrandBanshee:
            case BadgeStyle.BrandBenefactor:
            case BadgeStyle.BrandBf:
            case BadgeStyle.BrandBollokan:
            case BadgeStyle.BrandBravado:
            case BadgeStyle.BrandBrute:
            case BadgeStyle.BrandBuckingham:
            case BadgeStyle.BrandCanis:
            case BadgeStyle.BrandChariot:
            case BadgeStyle.BrandCheval:
            case BadgeStyle.BrandClassique:
            case BadgeStyle.BrandCoil:
            case BadgeStyle.BrandDeclasse:
            case BadgeStyle.BrandDewbauchee:
            case BadgeStyle.BrandDilettante:
            case BadgeStyle.BrandDinka:
            case BadgeStyle.BrandDundreary:
            case BadgeStyle.BrandEmporer:
            case BadgeStyle.BrandEnus:
            case BadgeStyle.BrandFathom:
            case BadgeStyle.BrandGalivanter:
            case BadgeStyle.BrandGrotti:
            case BadgeStyle.BrandHijak:
            case BadgeStyle.BrandHvy:
            case BadgeStyle.BrandImponte:
            case BadgeStyle.BrandInvetero:
            case BadgeStyle.BrandJacksheepe:
            case BadgeStyle.BrandJobuilt:
            case BadgeStyle.BrandKarin:
            case BadgeStyle.BrandLampadati:
            case BadgeStyle.BrandMaibatsu:
            case BadgeStyle.BrandMammoth:
            case BadgeStyle.BrandMtl:
            case BadgeStyle.BrandNagasaki:
            case BadgeStyle.BrandObey:
            case BadgeStyle.BrandOcelot:
            case BadgeStyle.BrandOverflod:
            case BadgeStyle.BrandPed:
            case BadgeStyle.BrandPegassi:
            case BadgeStyle.BrandPfister:
            case BadgeStyle.BrandPrincipe:
            case BadgeStyle.BrandProgen:
            case BadgeStyle.BrandSchyster:
            case BadgeStyle.BrandShitzu:
            case BadgeStyle.BrandSpeedophile:
            case BadgeStyle.BrandStanley:
            case BadgeStyle.BrandTruffade:
            case BadgeStyle.BrandUbermacht:
            case BadgeStyle.BrandVapid:
            case BadgeStyle.BrandVulcar:
            case BadgeStyle.BrandWeeny:
            case BadgeStyle.BrandWestern:
            case BadgeStyle.BrandWesternmotorcycle:
            case BadgeStyle.BrandWillard:
            case BadgeStyle.BrandZirconium:
              return "mpcarhud";
            case BadgeStyle.BrandGrotti2:
            case BadgeStyle.BrandLcc:
            case BadgeStyle.BrandProgen2:
            case BadgeStyle.BrandRune:
              return "mpcarhud2";
            case BadgeStyle.Info:
              return "shared";
            default:
              return "commonmenu";
          }
        }
        static getBadgeSpriteWidthOffset(sprite) {
          return (40 - sprite.size.width) / 2;
        }
        static getBadgeSpriteHeightOffset(sprite) {
          return (40 - sprite.size.height) / 2;
        }
        static getBadgeSize(badge) {
          switch (badge) {
            case BadgeStyle.Cash:
            case BadgeStyle.Coke:
            case BadgeStyle.Crown:
            case BadgeStyle.Heroin:
            case BadgeStyle.Meth:
            case BadgeStyle.Weed:
            case BadgeStyle.Adversary:
            case BadgeStyle.BaseJumping:
            case BadgeStyle.Briefcase:
            case BadgeStyle.MissionStar:
            case BadgeStyle.Deathmatch:
            case BadgeStyle.Castle:
            case BadgeStyle.Trophy:
            case BadgeStyle.RaceFlag:
            case BadgeStyle.RaceFlagPlane:
            case BadgeStyle.RaceFlagBicycle:
            case BadgeStyle.RaceFlagPerson:
            case BadgeStyle.RaceFlagCar:
            case BadgeStyle.RaceFlagBoatAnchor:
            case BadgeStyle.Rockstar:
            case BadgeStyle.Stunt:
            case BadgeStyle.StuntPremium:
            case BadgeStyle.RaceFlagStuntJump:
            case BadgeStyle.Shield:
            case BadgeStyle.TeamDeathmatch:
            case BadgeStyle.VehicleDeathmatch:
            case BadgeStyle.AudioMute:
            case BadgeStyle.AudioInactive:
            case BadgeStyle.AudioVol1:
            case BadgeStyle.AudioVol2:
            case BadgeStyle.AudioVol3:
            case BadgeStyle.BrandAlbany:
            case BadgeStyle.BrandAnnis:
            case BadgeStyle.BrandBanshee:
            case BadgeStyle.BrandBenefactor:
            case BadgeStyle.BrandBf:
            case BadgeStyle.BrandBollokan:
            case BadgeStyle.BrandBravado:
            case BadgeStyle.BrandBrute:
            case BadgeStyle.BrandBuckingham:
            case BadgeStyle.BrandCanis:
            case BadgeStyle.BrandChariot:
            case BadgeStyle.BrandCheval:
            case BadgeStyle.BrandClassique:
            case BadgeStyle.BrandCoil:
            case BadgeStyle.BrandDeclasse:
            case BadgeStyle.BrandDewbauchee:
            case BadgeStyle.BrandDilettante:
            case BadgeStyle.BrandDinka:
            case BadgeStyle.BrandDundreary:
            case BadgeStyle.BrandEmporer:
            case BadgeStyle.BrandEnus:
            case BadgeStyle.BrandFathom:
            case BadgeStyle.BrandGalivanter:
            case BadgeStyle.BrandGrotti:
            case BadgeStyle.BrandHijak:
            case BadgeStyle.BrandHvy:
            case BadgeStyle.BrandImponte:
            case BadgeStyle.BrandInvetero:
            case BadgeStyle.BrandJacksheepe:
            case BadgeStyle.BrandJobuilt:
            case BadgeStyle.BrandKarin:
            case BadgeStyle.BrandLampadati:
            case BadgeStyle.BrandMaibatsu:
            case BadgeStyle.BrandMammoth:
            case BadgeStyle.BrandMtl:
            case BadgeStyle.BrandNagasaki:
            case BadgeStyle.BrandObey:
            case BadgeStyle.BrandOcelot:
            case BadgeStyle.BrandOverflod:
            case BadgeStyle.BrandPed:
            case BadgeStyle.BrandPegassi:
            case BadgeStyle.BrandPfister:
            case BadgeStyle.BrandPrincipe:
            case BadgeStyle.BrandProgen:
            case BadgeStyle.BrandSchyster:
            case BadgeStyle.BrandShitzu:
            case BadgeStyle.BrandSpeedophile:
            case BadgeStyle.BrandStanley:
            case BadgeStyle.BrandTruffade:
            case BadgeStyle.BrandUbermacht:
            case BadgeStyle.BrandVapid:
            case BadgeStyle.BrandVulcar:
            case BadgeStyle.BrandWeeny:
            case BadgeStyle.BrandWestern:
            case BadgeStyle.BrandWesternmotorcycle:
            case BadgeStyle.BrandWillard:
            case BadgeStyle.BrandZirconium:
            case BadgeStyle.BrandGrotti2:
            case BadgeStyle.BrandLcc:
            case BadgeStyle.BrandProgen2:
            case BadgeStyle.BrandRune:
            case BadgeStyle.CountryUsa:
            case BadgeStyle.CountryUk:
            case BadgeStyle.CountrySweden:
            case BadgeStyle.CountryKorea:
            case BadgeStyle.CountryJapan:
            case BadgeStyle.CountryItaly:
            case BadgeStyle.CountryGermany:
            case BadgeStyle.CountryFrance:
              return new Size(30, 30);
            case BadgeStyle.MedalSilver:
            case BadgeStyle.MpAmmoPickup:
            case BadgeStyle.MpAmmo:
            case BadgeStyle.MpCash:
            case BadgeStyle.MpRp:
            case BadgeStyle.GlobeWhite:
            case BadgeStyle.GlobeBlue:
            case BadgeStyle.GlobeGreen:
            case BadgeStyle.GlobeOrange:
            case BadgeStyle.GlobeRed:
            case BadgeStyle.GlobeYellow:
            case BadgeStyle.InvArmWrestling:
            case BadgeStyle.InvBasejump:
            case BadgeStyle.InvMission:
            case BadgeStyle.InvDarts:
            case BadgeStyle.InvDeathmatch:
            case BadgeStyle.InvDrug:
            case BadgeStyle.InvCastle:
            case BadgeStyle.InvGolf:
            case BadgeStyle.InvBike:
            case BadgeStyle.InvBoat:
            case BadgeStyle.InvAnchor:
            case BadgeStyle.InvCar:
            case BadgeStyle.InvDollar:
            case BadgeStyle.InvCoke:
            case BadgeStyle.InvKey:
            case BadgeStyle.InvData:
            case BadgeStyle.InvHeli:
            case BadgeStyle.InvHeorin:
            case BadgeStyle.InvKeycard:
            case BadgeStyle.InvMeth:
            case BadgeStyle.InvBriefcase:
            case BadgeStyle.InvLink:
            case BadgeStyle.InvPerson:
            case BadgeStyle.InvPlane:
            case BadgeStyle.InvPlane2:
            case BadgeStyle.InvQuestionmark:
            case BadgeStyle.InvRemote:
            case BadgeStyle.InvSafe:
            case BadgeStyle.InvSteerWheel:
            case BadgeStyle.InvWeapon:
            case BadgeStyle.InvWeed:
            case BadgeStyle.InvRaceFlagPlane:
            case BadgeStyle.InvRaceFlagBicycle:
            case BadgeStyle.InvRaceFlagBoatAnchor:
            case BadgeStyle.InvRaceFlagPerson:
            case BadgeStyle.InvRaceFlagCar:
            case BadgeStyle.InvRaceFlagHelmet:
            case BadgeStyle.InvShootingRange:
            case BadgeStyle.InvSurvival:
            case BadgeStyle.InvTeamDeathmatch:
            case BadgeStyle.InvTennis:
            case BadgeStyle.InvVehicleDeathmatch:
              return new Size(25, 25);
            default:
              return new Size(40, 40);
          }
        }
        get Text() {
          return this.text.caption;
        }
        set Text(value) {
          this.text.caption = value ? value.trim() : "";
        }
        get Description() {
          if (!this.supportsDescription) {
            return "";
          }
          return this._description;
        }
        set Description(value) {
          if (!this.supportsDescription) {
            throw new Error("This item does not support description");
          }
          this._description = value ? value.trim() : "";
          this.formatDescription();
        }
        get FormattedDescription() {
          return this._formattedDescription;
        }
        get BackColor() {
          return this._backColor;
        }
        set BackColor(value) {
          value = value || this._backColor;
          this._backColor = value;
          this.rectangle.color = value;
        }
        get HighlightedBackColor() {
          return this._highlightedBackColor;
        }
        set HighlightedBackColor(value) {
          value = value || this._highlightedBackColor;
          this._highlightedBackColor = value;
          this.selectedSprite.color = value;
        }
        get ForeColor() {
          return this._foreColor;
        }
        set ForeColor(value) {
          value = value || this._foreColor;
          this._foreColor = value;
          this.text.color = value;
        }
        get HighlightedForeColor() {
          return this._highlightedForeColor;
        }
        set HighlightedForeColor(value) {
          this._highlightedForeColor = value || this._highlightedForeColor;
        }
        get LeftBadge() {
          if (!this.supportsLeftBadge) {
            return BadgeStyle.None;
          }
          return this._leftBadge;
        }
        set LeftBadge(value) {
          if (!this.supportsLeftBadge) {
            throw new Error("This item does not support left badge");
          }
          value = Number(value);
          this._leftBadge = value;
          this.badgeLeft.TextureDict = UIMenuItem.badgeToTextureDict(value);
          this.badgeLeft.size = UIMenuItem.getBadgeSize(value);
        }
        get RightBadge() {
          if (!this.supportsRightBadge) {
            return BadgeStyle.None;
          }
          return this._rightBadge;
        }
        set RightBadge(value) {
          if (!this.supportsRightBadge) {
            throw new Error("This item does not support right badge");
          }
          value = Number(value);
          this._rightBadge = value;
          this.badgeRight.TextureDict = UIMenuItem.badgeToTextureDict(value);
          this.badgeRight.size = UIMenuItem.getBadgeSize(value);
        }
        get RightLabel() {
          if (!this.supportsRightLabel) {
            return "";
          }
          return this.labelText.caption;
        }
        set RightLabel(value) {
          if (!this.supportsRightLabel) {
            throw new Error("This item does not support right label");
          }
          this.labelText.caption = value ? value.trim() : "";
        }
        get IsMouseInBounds() {
          return this.parent ? this.parent.isMouseInBounds(this.rectangle.pos, this.rectangle.size) : false;
        }
        get Panels() {
          if (!this.supportsPanels) {
            return [];
          }
          return this._panels;
        }
        set Panels(value) {
          if (!this.supportsPanels) {
            throw new Error("This item does not support panels");
          }
          this._panels = value;
        }
        addPanel(panel) {
          if (!this.supportsPanels) {
            throw new Error("This item does not support panels");
          }
          const panels = Array.isArray(panel) ? panel : [panel];
          panels.forEach((p) => {
            p.ParentItem = this;
          });
          this._panels.push(...panels);
        }
        findPanelIndex(panel) {
          if (!this.supportsPanels) {
            throw new Error("This item does not support panels");
          }
          const index = this._panels.findIndex((p) => p.id === panel.id);
          return index !== -1 ? index : 0;
        }
        removePanel(panelOrIndex) {
          if (!this.supportsPanels) {
            throw new Error("This item does not support panels");
          }
          if (typeof panelOrIndex === "number") {
            this._panels = this._panels.filter((p, index) => index !== panelOrIndex);
          } else {
            this._panels = this._panels.filter((p) => p.id !== panelOrIndex.id);
          }
        }
        addEvent(event, ...args) {
          this._event = { event, args };
        }
        fireEvent() {
          if (this._event) {
            TriggerEvent(this._event.event, ...this._event.args);
          }
        }
        formatDescription() {
          if (!this.parent) {
            return;
          }
          let input = this._description;
          if (input.length > 99) {
            input = input.slice(0, 99);
          }
          const maxPixelsPerLine = 425 + this.parent.WidthOffset;
          let aggregatePixels = 0;
          let output = "";
          const words = input.split(" ");
          const spaceWidth = String2.measureString(" ", Font.ChaletLondon, 0.33, Menu.screenWidth);
          for (const word of words) {
            const offset = String2.measureString(word, Font.ChaletLondon, 0.33, Menu.screenWidth);
            aggregatePixels += offset;
            if (aggregatePixels > maxPixelsPerLine) {
              output = `${output} 
${word} `;
              aggregatePixels = offset + spaceWidth;
            } else {
              output = `${output}${word} `;
              aggregatePixels += spaceWidth;
            }
          }
          this._formattedDescription = output;
        }
        badgeToTextureName(badge) {
          const selected = this.selected;
          switch (badge) {
            case BadgeStyle.None:
              return "";
            case BadgeStyle.Ammo:
              return selected ? "shop_ammo_icon_b" : "shop_ammo_icon_a";
            case BadgeStyle.Armor:
              return selected ? "shop_armour_icon_b" : "shop_armour_icon_a";
            case BadgeStyle.Barber:
              return selected ? "shop_barber_icon_b" : "shop_barber_icon_a";
            case BadgeStyle.Bike:
              return selected ? "shop_garage_bike_icon_b" : "shop_garage_bike_icon_a";
            case BadgeStyle.Car:
              return selected ? "shop_garage_icon_b" : "shop_garage_icon_a";
            case BadgeStyle.Cash:
              return "mp_specitem_cash";
            case BadgeStyle.Clothing:
              return selected ? "shop_clothing_icon_b" : "shop_clothing_icon_a";
            case BadgeStyle.Coke:
              return "mp_specitem_coke";
            case BadgeStyle.Crown:
              return "mp_hostcrown";
            case BadgeStyle.Franklin:
              return selected ? "shop_franklin_icon_b" : "shop_franklin_icon_a";
            case BadgeStyle.Gun:
              return selected ? "shop_gunclub_icon_b" : "shop_gunclub_icon_a";
            case BadgeStyle.HealthHeart:
              return selected ? "shop_health_icon_b" : "shop_health_icon_a";
            case BadgeStyle.Heroin:
              return "mp_specitem_heroin";
            case BadgeStyle.Lock:
              return "shop_lock";
            case BadgeStyle.MakeupBrush:
              return selected ? "shop_makeup_icon_b" : "shop_makeup_icon_a";
            case BadgeStyle.Mask:
              return selected ? "shop_mask_icon_b" : "shop_mask_icon_a";
            case BadgeStyle.MedalBronze:
              return "mp_medal_bronze";
            case BadgeStyle.MedalGold:
              return "mp_medal_gold";
            case BadgeStyle.MedalSilver:
              return "mp_medal_silver";
            case BadgeStyle.Meth:
              return "mp_specitem_meth";
            case BadgeStyle.Michael:
              return selected ? "shop_michael_icon_b" : "shop_michael_icon_a";
            case BadgeStyle.Star:
              return "shop_new_star";
            case BadgeStyle.Tattoo:
              return selected ? "shop_tattoos_icon_b" : "shop_tattoos_icon_a";
            case BadgeStyle.Tick:
              return "shop_tick_icon";
            case BadgeStyle.Trevor:
              return selected ? "shop_trevor_icon_b" : "shop_trevor_icon_a";
            case BadgeStyle.Warning:
              return "mp_alerttriangle";
            case BadgeStyle.Weed:
              return "mp_specitem_weed";
            case BadgeStyle.Male:
              return "leaderboard_male_icon";
            case BadgeStyle.Female:
              return "leaderboard_female_icon";
            case BadgeStyle.LockArena:
              return "shop_lock_arena";
            case BadgeStyle.Adversary:
              return "adversary";
            case BadgeStyle.BaseJumping:
              return "base_jumping";
            case BadgeStyle.Briefcase:
              return "capture_the_flag";
            case BadgeStyle.MissionStar:
              return "custom_mission";
            case BadgeStyle.Deathmatch:
              return "deathmatch";
            case BadgeStyle.Castle:
              return "gang_attack";
            case BadgeStyle.Trophy:
              return "last_team_standing";
            case BadgeStyle.RaceFlag:
              return "race";
            case BadgeStyle.RaceFlagPlane:
              return "race_air";
            case BadgeStyle.RaceFlagBicycle:
              return "race_bicycle";
            case BadgeStyle.RaceFlagPerson:
              return "race_foot";
            case BadgeStyle.RaceFlagCar:
              return "race_land";
            case BadgeStyle.RaceFlagBoatAnchor:
              return "race_water";
            case BadgeStyle.Rockstar:
              return "rockstar";
            case BadgeStyle.Stunt:
              return "stunt";
            case BadgeStyle.StuntPremium:
              return "stunt_premium";
            case BadgeStyle.RaceFlagStuntJump:
              return "stunt_race";
            case BadgeStyle.Shield:
              return "survival";
            case BadgeStyle.TeamDeathmatch:
              return "team_deathmatch";
            case BadgeStyle.VehicleDeathmatch:
              return "vehicle_deathmatch";
            case BadgeStyle.MpAmmoPickup:
              return "ammo_pickup";
            case BadgeStyle.MpAmmo:
              return "mp_anim_ammo";
            case BadgeStyle.MpCash:
              return "mp_anim_cash";
            case BadgeStyle.MpRp:
              return "mp_anim_rp";
            case BadgeStyle.MpSpectating:
              return "spectating";
            case BadgeStyle.Sale:
              return "saleicon";
            case BadgeStyle.GlobeWhite:
            case BadgeStyle.GlobeRed:
            case BadgeStyle.GlobeBlue:
            case BadgeStyle.GlobeYellow:
            case BadgeStyle.GlobeGreen:
            case BadgeStyle.GlobeOrange:
              return "globe";
            case BadgeStyle.InvArmWrestling:
              return "arm_wrestling";
            case BadgeStyle.InvBasejump:
              return "basejump";
            case BadgeStyle.InvMission:
              return "custom_mission";
            case BadgeStyle.InvDarts:
              return "darts";
            case BadgeStyle.InvDeathmatch:
              return "deathmatch";
            case BadgeStyle.InvDrug:
              return "drug_trafficking";
            case BadgeStyle.InvCastle:
              return "gang_attack";
            case BadgeStyle.InvGolf:
              return "golf";
            case BadgeStyle.InvBike:
              return "mp_specitem_bike";
            case BadgeStyle.InvBoat:
              return "mp_specitem_boat";
            case BadgeStyle.InvAnchor:
              return "mp_specitem_boatpickup";
            case BadgeStyle.InvCar:
              return "mp_specitem_car";
            case BadgeStyle.InvDollar:
              return "mp_specitem_cash";
            case BadgeStyle.InvCoke:
              return "mp_specitem_coke";
            case BadgeStyle.InvKey:
              return "mp_specitem_cuffkeys";
            case BadgeStyle.InvData:
              return "mp_specitem_data";
            case BadgeStyle.InvHeli:
              return "mp_specitem_heli";
            case BadgeStyle.InvHeorin:
              return "mp_specitem_heroin";
            case BadgeStyle.InvKeycard:
              return "mp_specitem_keycard";
            case BadgeStyle.InvMeth:
              return "mp_specitem_meth";
            case BadgeStyle.InvBriefcase:
              return "mp_specitem_package";
            case BadgeStyle.InvLink:
              return "mp_specitem_partnericon";
            case BadgeStyle.InvPerson:
              return "mp_specitem_ped";
            case BadgeStyle.InvPlane:
              return "mp_specitem_plane";
            case BadgeStyle.InvPlane2:
              return "mp_specitem_plane2";
            case BadgeStyle.InvQuestionmark:
              return "mp_specitem_randomobject";
            case BadgeStyle.InvRemote:
              return "mp_specitem_remote";
            case BadgeStyle.InvSafe:
              return "mp_specitem_safe";
            case BadgeStyle.InvSteerWheel:
              return "mp_specitem_steer_wheel";
            case BadgeStyle.InvWeapon:
              return "mp_specitem_weapons";
            case BadgeStyle.InvWeed:
              return "mp_specitem_weed";
            case BadgeStyle.InvRaceFlagPlane:
              return "race_air";
            case BadgeStyle.InvRaceFlagBicycle:
              return "race_bike";
            case BadgeStyle.InvRaceFlagBoatAnchor:
              return "race_boat";
            case BadgeStyle.InvRaceFlagPerson:
              return "race_foot";
            case BadgeStyle.InvRaceFlagCar:
              return "race_land";
            case BadgeStyle.InvRaceFlagHelmet:
              return "race_offroad";
            case BadgeStyle.InvShootingRange:
              return "shooting_range";
            case BadgeStyle.InvSurvival:
              return "survival";
            case BadgeStyle.InvTeamDeathmatch:
              return "team_deathmatch";
            case BadgeStyle.InvTennis:
              return "tennis";
            case BadgeStyle.InvVehicleDeathmatch:
              return "vehicle_deathmatch";
            case BadgeStyle.AudioMute:
              return "leaderboard_audio_mute";
            case BadgeStyle.AudioInactive:
              return "leaderboard_audio_inactive";
            case BadgeStyle.AudioVol1:
              return "leaderboard_audio_1";
            case BadgeStyle.AudioVol2:
              return "leaderboard_audio_2";
            case BadgeStyle.AudioVol3:
              return "leaderboard_audio_3";
            case BadgeStyle.CountryUsa:
              return "vehicle_card_icons_flag_usa";
            case BadgeStyle.CountryUk:
              return "vehicle_card_icons_flag_uk";
            case BadgeStyle.CountrySweden:
              return "vehicle_card_icons_flag_sweden";
            case BadgeStyle.CountryKorea:
              return "vehicle_card_icons_flag_korea";
            case BadgeStyle.CountryJapan:
              return "vehicle_card_icons_flag_japan";
            case BadgeStyle.CountryItaly:
              return "vehicle_card_icons_flag_italy";
            case BadgeStyle.CountryGermany:
              return "vehicle_card_icons_flag_germany";
            case BadgeStyle.CountryFrance:
              return "vehicle_card_icons_flag_france";
            case BadgeStyle.BrandAlbany:
              return "albany";
            case BadgeStyle.BrandAnnis:
              return "annis";
            case BadgeStyle.BrandBanshee:
              return "banshee";
            case BadgeStyle.BrandBenefactor:
              return "benefactor";
            case BadgeStyle.BrandBf:
              return "bf";
            case BadgeStyle.BrandBollokan:
              return "bollokan";
            case BadgeStyle.BrandBravado:
              return "bravado";
            case BadgeStyle.BrandBrute:
              return "brute";
            case BadgeStyle.BrandBuckingham:
              return "buckingham";
            case BadgeStyle.BrandCanis:
              return "canis";
            case BadgeStyle.BrandChariot:
              return "chariot";
            case BadgeStyle.BrandCheval:
              return "cheval";
            case BadgeStyle.BrandClassique:
              return "classique";
            case BadgeStyle.BrandCoil:
              return "coil";
            case BadgeStyle.BrandDeclasse:
              return "declasse";
            case BadgeStyle.BrandDewbauchee:
              return "dewbauchee";
            case BadgeStyle.BrandDilettante:
              return "dilettante";
            case BadgeStyle.BrandDinka:
              return "dinka";
            case BadgeStyle.BrandDundreary:
              return "dundreary";
            case BadgeStyle.BrandEmporer:
              return "emporer";
            case BadgeStyle.BrandEnus:
              return "enus";
            case BadgeStyle.BrandFathom:
              return "fathom";
            case BadgeStyle.BrandGalivanter:
              return "galivanter";
            case BadgeStyle.BrandGrotti:
              return "grotti";
            case BadgeStyle.BrandHijak:
              return "hijak";
            case BadgeStyle.BrandHvy:
              return "hvy";
            case BadgeStyle.BrandImponte:
              return "imponte";
            case BadgeStyle.BrandInvetero:
              return "invetero";
            case BadgeStyle.BrandJacksheepe:
              return "jacksheepe";
            case BadgeStyle.BrandJobuilt:
              return "jobuilt";
            case BadgeStyle.BrandKarin:
              return "karin";
            case BadgeStyle.BrandLampadati:
              return "lampadati";
            case BadgeStyle.BrandMaibatsu:
              return "maibatsu";
            case BadgeStyle.BrandMammoth:
              return "mammoth";
            case BadgeStyle.BrandMtl:
              return "mtl";
            case BadgeStyle.BrandNagasaki:
              return "nagasaki";
            case BadgeStyle.BrandObey:
              return "obey";
            case BadgeStyle.BrandOcelot:
              return "ocelot";
            case BadgeStyle.BrandOverflod:
              return "overflod";
            case BadgeStyle.BrandPed:
              return "ped";
            case BadgeStyle.BrandPegassi:
              return "pegassi";
            case BadgeStyle.BrandPfister:
              return "pfister";
            case BadgeStyle.BrandPrincipe:
              return "principe";
            case BadgeStyle.BrandProgen:
              return "progen";
            case BadgeStyle.BrandSchyster:
              return "schyster";
            case BadgeStyle.BrandShitzu:
              return "shitzu";
            case BadgeStyle.BrandSpeedophile:
              return "speedophile";
            case BadgeStyle.BrandStanley:
              return "stanley";
            case BadgeStyle.BrandTruffade:
              return "truffade";
            case BadgeStyle.BrandUbermacht:
              return "ubermacht";
            case BadgeStyle.BrandVapid:
              return "vapid";
            case BadgeStyle.BrandVulcar:
              return "vulcar";
            case BadgeStyle.BrandWeeny:
              return "weeny";
            case BadgeStyle.BrandWestern:
              return "western";
            case BadgeStyle.BrandWesternmotorcycle:
              return "westernmotorcycle";
            case BadgeStyle.BrandWillard:
              return "willard";
            case BadgeStyle.BrandZirconium:
              return "zirconium";
            case BadgeStyle.BrandGrotti2:
              return "grotti_2";
            case BadgeStyle.BrandLcc:
              return "lcc";
            case BadgeStyle.BrandProgen2:
              return "progen";
            case BadgeStyle.BrandRune:
              return "rune";
            case BadgeStyle.Info:
              return "info_icon_32";
            default:
              return "";
          }
        }
        badgeToColor(badge) {
          const selected = this.selected;
          const enabled = this.enabled;
          switch (badge) {
            case BadgeStyle.Crown:
            case BadgeStyle.Tick:
            case BadgeStyle.Male:
            case BadgeStyle.Female:
            case BadgeStyle.Lock:
            case BadgeStyle.LockArena:
            case BadgeStyle.Adversary:
            case BadgeStyle.BaseJumping:
            case BadgeStyle.Briefcase:
            case BadgeStyle.MissionStar:
            case BadgeStyle.Deathmatch:
            case BadgeStyle.Castle:
            case BadgeStyle.Trophy:
            case BadgeStyle.RaceFlag:
            case BadgeStyle.RaceFlagPlane:
            case BadgeStyle.RaceFlagBicycle:
            case BadgeStyle.RaceFlagPerson:
            case BadgeStyle.RaceFlagCar:
            case BadgeStyle.RaceFlagBoatAnchor:
            case BadgeStyle.Rockstar:
            case BadgeStyle.Stunt:
            case BadgeStyle.StuntPremium:
            case BadgeStyle.RaceFlagStuntJump:
            case BadgeStyle.Shield:
            case BadgeStyle.TeamDeathmatch:
            case BadgeStyle.VehicleDeathmatch:
            case BadgeStyle.MpSpectating:
            case BadgeStyle.GlobeWhite:
            case BadgeStyle.AudioMute:
            case BadgeStyle.AudioInactive:
            case BadgeStyle.AudioVol1:
            case BadgeStyle.AudioVol2:
            case BadgeStyle.AudioVol3:
            case BadgeStyle.BrandAlbany:
            case BadgeStyle.BrandAnnis:
            case BadgeStyle.BrandBanshee:
            case BadgeStyle.BrandBenefactor:
            case BadgeStyle.BrandBf:
            case BadgeStyle.BrandBollokan:
            case BadgeStyle.BrandBravado:
            case BadgeStyle.BrandBrute:
            case BadgeStyle.BrandBuckingham:
            case BadgeStyle.BrandCanis:
            case BadgeStyle.BrandChariot:
            case BadgeStyle.BrandCheval:
            case BadgeStyle.BrandClassique:
            case BadgeStyle.BrandCoil:
            case BadgeStyle.BrandDeclasse:
            case BadgeStyle.BrandDewbauchee:
            case BadgeStyle.BrandDilettante:
            case BadgeStyle.BrandDinka:
            case BadgeStyle.BrandDundreary:
            case BadgeStyle.BrandEmporer:
            case BadgeStyle.BrandEnus:
            case BadgeStyle.BrandFathom:
            case BadgeStyle.BrandGalivanter:
            case BadgeStyle.BrandGrotti:
            case BadgeStyle.BrandHijak:
            case BadgeStyle.BrandHvy:
            case BadgeStyle.BrandImponte:
            case BadgeStyle.BrandInvetero:
            case BadgeStyle.BrandJacksheepe:
            case BadgeStyle.BrandJobuilt:
            case BadgeStyle.BrandKarin:
            case BadgeStyle.BrandLampadati:
            case BadgeStyle.BrandMaibatsu:
            case BadgeStyle.BrandMammoth:
            case BadgeStyle.BrandMtl:
            case BadgeStyle.BrandNagasaki:
            case BadgeStyle.BrandObey:
            case BadgeStyle.BrandOcelot:
            case BadgeStyle.BrandOverflod:
            case BadgeStyle.BrandPed:
            case BadgeStyle.BrandPegassi:
            case BadgeStyle.BrandPfister:
            case BadgeStyle.BrandPrincipe:
            case BadgeStyle.BrandProgen:
            case BadgeStyle.BrandSchyster:
            case BadgeStyle.BrandShitzu:
            case BadgeStyle.BrandSpeedophile:
            case BadgeStyle.BrandStanley:
            case BadgeStyle.BrandTruffade:
            case BadgeStyle.BrandUbermacht:
            case BadgeStyle.BrandVapid:
            case BadgeStyle.BrandVulcar:
            case BadgeStyle.BrandWeeny:
            case BadgeStyle.BrandWestern:
            case BadgeStyle.BrandWesternmotorcycle:
            case BadgeStyle.BrandWillard:
            case BadgeStyle.BrandZirconium:
            case BadgeStyle.BrandGrotti2:
            case BadgeStyle.BrandLcc:
            case BadgeStyle.BrandProgen2:
            case BadgeStyle.BrandRune:
              return selected ? enabled ? Color.black : Color.fromRgb(50, 50, 50) : enabled ? Color.white : Color.fromRgb(109, 109, 109);
            case BadgeStyle.GlobeBlue:
              return enabled ? Color.fromRgb(10, 103, 166) : Color.fromRgb(11, 62, 117);
            case BadgeStyle.GlobeGreen:
              return enabled ? Color.fromRgb(10, 166, 85) : Color.fromRgb(5, 71, 22);
            case BadgeStyle.GlobeOrange:
              return enabled ? Color.fromRgb(232, 145, 14) : Color.fromRgb(133, 77, 12);
            case BadgeStyle.GlobeRed:
              return enabled ? Color.fromRgb(207, 43, 31) : Color.fromRgb(110, 7, 7);
            case BadgeStyle.GlobeYellow:
              return enabled ? Color.fromRgb(232, 207, 14) : Color.fromRgb(131, 133, 12);
            default:
              return enabled ? Color.white : Color.fromRgb(109, 109, 109);
          }
        }
        setVerticalPosition(y) {
          const yOffset = y + this.offset.Y;
          this.rectangle.pos.Y = yOffset + 144;
          this.selectedSprite.pos.Y = yOffset + 144;
          this.text.pos.Y = yOffset + 147;
          this.badgeLeft.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this.badgeLeft);
          this.badgeRight.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this.badgeRight);
          this.labelText.pos.Y = yOffset + 148;
        }
        draw() {
          if (this.selected) {
            this.selectedSprite.size.width = 431 + (this.parent ? this.parent.WidthOffset : 0);
            this.selectedSprite.pos.X = this.offset.X;
            this.selectedSprite.draw(Menu.screenResolution);
          } else {
            this.rectangle.size.width = 431 + (this.parent ? this.parent.WidthOffset : 0);
            this.rectangle.pos.X = this.offset.X;
            this.rectangle.color = this.hovered ? UIMenuItem.defaultHoveredBackColor : this._backColor;
            this.rectangle.draw(void 0, Menu.screenResolution);
          }
          this.text.color = this.enabled ? this.selected ? this._highlightedForeColor : this.hovered ? UIMenuItem.defaultHoveredForeColor : this._foreColor : new Color(255, 163, 159, 148);
          if (this.supportsLeftBadge && this._leftBadge !== BadgeStyle.None) {
            const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this.badgeLeft);
            this.badgeLeft.pos.X = this.offset.X + widthOffset;
            this.text.pos.X = this.offset.X + 40;
            this.badgeLeft.textureName = this.badgeToTextureName(this._leftBadge);
            this.badgeLeft.color = this.badgeToColor(this._leftBadge);
            this.badgeLeft.draw(Menu.screenResolution);
          } else {
            this.text.pos.X = this.offset.X + 8;
          }
          if (this.supportsRightBadge && this._rightBadge !== BadgeStyle.None) {
            this.labelText.pos.X = -40;
            const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this.badgeRight);
            this.badgeRight.pos.X = 431 + this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
            this.badgeRight.pos.X -= this.badgeRight.size.width + widthOffset;
            this.badgeRight.textureName = this.badgeToTextureName(this._rightBadge);
            this.badgeRight.color = this.badgeToColor(this._rightBadge);
            this.badgeRight.draw(Menu.screenResolution);
          } else {
            this.labelText.pos.X = -11;
          }
          if (this.supportsRightLabel && this.labelText.caption !== "") {
            this.labelText.pos.X += 431 + this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
            this.labelText.color = this.text.color;
            this.labelText.draw(void 0, Menu.screenResolution);
          }
          this.text.draw(void 0, Menu.screenResolution);
        }
      };
      UIMenuItem.defaultBackColor = Color.empty;
      UIMenuItem.defaultHighlightedBackColor = Color.white;
      UIMenuItem.defaultHoveredBackColor = new Color(20, 255, 255, 255);
      UIMenuItem.defaultForeColor = Color.whiteSmoke;
      UIMenuItem.defaultHoveredForeColor = UIMenuItem.defaultForeColor;
      UIMenuItem.defaultHighlightedForeColor = Color.black;
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuCheckboxItem.js
  var UIMenuCheckboxItem;
  var init_UIMenuCheckboxItem = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuCheckboxItem.js"() {
      init_ui();
      init_utils();
      init_items();
      init_enums();
      UIMenuCheckboxItem = class extends UIMenuItem {
        constructor(text, checked = false, description, style = CheckboxStyle.Tick) {
          super(text, description);
          this.checkboxChanged = new LiteEvent();
          this.supportsRightBadge = false;
          this.supportsRightLabel = false;
          this._checked = false;
          this._style = CheckboxStyle.Tick;
          this._checkboxSprite = new Sprite("commonmenu", "", new Point(410, 95), new Size(50, 50));
          this.Checked = checked;
          this.Style = style;
        }
        get Checked() {
          return this._checked;
        }
        set Checked(value) {
          this._checked = value || false;
        }
        get Style() {
          return this._style;
        }
        set Style(value) {
          this._style = Number(value);
        }
        setVerticalPosition(y) {
          super.setVerticalPosition(y);
          this._checkboxSprite.pos.Y = y + 138 + this.offset.Y;
        }
        draw() {
          super.draw();
          this._checkboxSprite.pos.X = 380 + this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
          this._checkboxSprite.textureName = this._getSpriteName();
          this._checkboxSprite.color = this._getSpriteColor();
          this._checkboxSprite.draw(Menu.screenResolution);
        }
        _getSpriteName() {
          let name = "blank";
          if (this._checked) {
            switch (this._style) {
              case CheckboxStyle.Tick:
                name = "tick";
                break;
              case CheckboxStyle.Cross:
                name = "cross";
                break;
            }
          }
          return `shop_box_${name}${this.selected ? "b" : ""}`;
        }
        _getSpriteColor() {
          return this.enabled ? Color.white : Color.fromRgb(109, 109, 109);
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuListItem.js
  var UIMenuListItem;
  var init_UIMenuListItem = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuListItem.js"() {
      init_ui();
      init_enums();
      init_utils();
      init_items();
      UIMenuListItem = class extends UIMenuItem {
        constructor(text, items, startIndex = 0, description, arrowOnlyOnSelected = true) {
          super(text, description);
          this.listChanged = new LiteEvent();
          this.listSelected = new LiteEvent();
          this.supportsRightBadge = false;
          this.supportsRightLabel = false;
          this._index = 0;
          this._arrowOnlyOnSelected = false;
          this._items = [];
          this._textWidth = 0;
          this._leftArrow = new Sprite("commonmenu", "arrowleft", new Point(), new Size(30, 30));
          this._rightArrow = new Sprite("commonmenu", "arrowright", new Point(), new Size(30, 30));
          this._itemText = new Text("", new Point(), 0.35, Color.white, Font.ChaletLondon, Alignment.Right);
          this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
          this.Items = items;
          this.Index = startIndex;
        }
        get Items() {
          return this._items;
        }
        set Items(value) {
          if (!value) {
            throw new Error("Items can't be null");
          }
          this._items = value;
        }
        get SelectedItem() {
          return this.Items[this.Index];
        }
        set SelectedItem(value) {
          const index = this.Items.findIndex((i) => i.id === value.id);
          if (index >= 0) {
            this.Index = index;
          }
        }
        get SelectedValue() {
          const item = this.SelectedItem;
          return item ? item.value : null;
        }
        get Index() {
          return this._index % this.Items.length;
        }
        set Index(value) {
          if (!this._items.length) {
            return;
          }
          value = value < 0 ? this._items.length - 1 : value > this._items.length - 1 ? 0 : value;
          this._index = value;
          this._textWidth = 0;
        }
        get ArrowOnlyOnSelected() {
          return this._arrowOnlyOnSelected;
        }
        set ArrowOnlyOnSelected(value) {
          this._arrowOnlyOnSelected = value;
        }
        get IsMouseInBoundsOfLeftArrow() {
          return this.parent ? this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size) : false;
        }
        get IsMouseInBoundsOfRightArrow() {
          return this.parent ? this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size) : false;
        }
        setVerticalPosition(y) {
          const yOffset = y + this.offset.Y + 147;
          this._leftArrow.pos.Y = yOffset;
          this._rightArrow.pos.Y = yOffset;
          this._itemText.pos.Y = yOffset;
          super.setVerticalPosition(y);
        }
        draw() {
          super.draw();
          if (this._textWidth === void 0) {
            const caption = this._getSelectedItemCaption();
            this._itemText.caption = caption;
            this._textWidth = String2.measureString(caption, this._itemText.font, this._itemText.scale, Menu.screenWidth);
          }
          this._rightArrow.pos.X = this.offset.X + (this.parent ? this.parent.WidthOffset : 0) + 400;
          this._itemText.pos.X = this._rightArrow.pos.X + 5;
          this._itemText.color = this.enabled ? this.selected ? this.HighlightedForeColor : this.ForeColor : new Color(255, 163, 159, 148);
          if (this._arrowOnlyOnSelected && !this.selected) {
            this._itemText.pos.X += this._rightArrow.size.width / 2;
          } else {
            this._leftArrow.color = this._itemText.color;
            this._rightArrow.color = this._itemText.color;
            this._leftArrow.pos.X = this._itemText.pos.X - this._textWidth - this._leftArrow.size.width + 5;
            this._leftArrow.draw(Menu.screenResolution);
            this._rightArrow.draw(Menu.screenResolution);
          }
          this._itemText.draw(void 0, Menu.screenResolution);
        }
        _getSelectedItemCaption() {
          const item = this.SelectedItem;
          return item ? item.name : "";
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuSeparatorItem.js
  var UIMenuSeparatorItem;
  var init_UIMenuSeparatorItem = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuSeparatorItem.js"() {
      init_items();
      init_enums();
      init_menu();
      UIMenuSeparatorItem = class extends UIMenuItem {
        constructor(text) {
          super(text !== null && text !== void 0 ? text : "");
          this.supportsDescription = false;
          this.supportsPanels = false;
          this.supportsLeftBadge = false;
          this.supportsRightBadge = false;
          this.supportsRightLabel = false;
          this.text.alignment = Alignment.Centered;
        }
        setVerticalPosition(y) {
          const yOffset = y + this.offset.Y;
          this.rectangle.pos.Y = yOffset + 144;
          this.text.pos.Y = yOffset + 147;
        }
        draw() {
          const width = 431 + (this.parent ? this.parent.WidthOffset : 0);
          this.rectangle.size.width = width;
          this.rectangle.pos.X = this.offset.X;
          this.rectangle.draw(void 0, Menu.screenResolution);
          if (this.text.caption !== "") {
            this.text.pos.X = this.offset.X + width / 2;
            this.text.draw(void 0, Menu.screenResolution);
          }
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuSliderItem.js
  var UIMenuSliderItem;
  var init_UIMenuSliderItem = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/UIMenuSliderItem.js"() {
      init_ui();
      init_items();
      init_utils();
      init_enums();
      UIMenuSliderItem = class extends UIMenuItem {
        constructor(text, items, startIndex = 0, description, showDivider = false, arrowOnlyOnSelected = false) {
          super(text, description);
          this.sliderChanged = new LiteEvent();
          this.sliderSelected = new LiteEvent();
          this.supportsRightBadge = false;
          this.supportsRightLabel = false;
          this._index = 0;
          this._items = [];
          this._showDivider = true;
          this._arrowOnlyOnSelected = false;
          this._leftSliderBadge = BadgeStyle.None;
          this._rightSliderBadge = BadgeStyle.None;
          this._background = new Rectangle(new Point(), new Size(150, 9), new Color(255, 4, 32, 57));
          this._slider = new Rectangle(new Point(), new Size(75, 9), new Color(255, 57, 116, 200));
          this._divider = new Rectangle(new Point(), new Size(2.5, 20), Color.whiteSmoke);
          this._leftArrow = new Sprite("commonmenutu", "arrowleft", new Point(), new Size(15, 15));
          this._rightArrow = new Sprite("commonmenutu", "arrowright", new Point(), new Size(15, 15));
          this._leftSliderBadgeSprite = new Sprite("", "");
          this._rightSliderBadgeSprite = new Sprite("", "");
          this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
          this.ShowDivider = showDivider;
          this.Items = items;
          this.Index = startIndex;
        }
        get Index() {
          return this._index % this._items.length;
        }
        set Index(value) {
          this._index = 1e8 - 1e8 % this._items.length + value;
        }
        get Item() {
          return this._items[this.Index];
        }
        get Items() {
          return this._items;
        }
        set Items(value) {
          this._items = value || [];
        }
        get ShowDivider() {
          return this._showDivider;
        }
        set ShowDivider(value) {
          this._showDivider = value;
        }
        get ArrowOnlyOnSelected() {
          return this._arrowOnlyOnSelected;
        }
        set ArrowOnlyOnSelected(value) {
          this._arrowOnlyOnSelected = value;
        }
        get BackgroundColor() {
          return this._background.color;
        }
        set BackgroundColor(value) {
          this._background.color = value || new Color(255, 4, 32, 57);
        }
        get SliderColor() {
          return this._slider.color;
        }
        set SliderColor(value) {
          this._slider.color = value || new Color(255, 57, 116, 200);
        }
        get DividerColor() {
          return this._divider.color;
        }
        set DividerColor(value) {
          this._divider.color = value || Color.whiteSmoke;
        }
        get LeftSliderBadge() {
          return this._leftSliderBadge;
        }
        set LeftSliderBadge(value) {
          value = Number(value);
          this._leftSliderBadge = value;
          this._leftSliderBadgeSprite.TextureDict = UIMenuItem.badgeToTextureDict(value);
          this._leftSliderBadgeSprite.size = UIMenuItem.getBadgeSize(value);
        }
        get RightSliderBadge() {
          return this._rightSliderBadge;
        }
        set RightSliderBadge(value) {
          value = Number(value);
          this._rightSliderBadge = value;
          this._rightSliderBadgeSprite.TextureDict = UIMenuItem.badgeToTextureDict(value);
          this._rightSliderBadgeSprite.size = UIMenuItem.getBadgeSize(value);
        }
        get IsMouseInBoundsOfLeftArrow() {
          return this.parent ? this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size) : false;
        }
        get IsMouseInBoundsOfRightArrow() {
          return this.parent ? this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size) : false;
        }
        indexToItem(index) {
          return this._items[index];
        }
        setVerticalPosition(y) {
          const yOffset = y + this.offset.Y;
          this._background.pos.Y = yOffset + 158.5;
          this._slider.pos.Y = yOffset + 158.5;
          this._divider.pos.Y = yOffset + 153;
          this._leftArrow.pos.Y = yOffset + 155.5;
          this._rightArrow.pos.Y = yOffset + 155.5;
          this._leftSliderBadgeSprite.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this._leftSliderBadgeSprite);
          this._rightSliderBadgeSprite.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this._rightSliderBadgeSprite);
          super.setVerticalPosition(y);
        }
        draw() {
          super.draw();
          const showArrows = !this._arrowOnlyOnSelected || this.selected;
          const x = this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
          this._background.pos.X = 431 + x - this._background.size.width;
          if (showArrows) {
            this._background.pos.X -= this._rightArrow.size.width / 2;
            this._leftSliderBadgeSprite.pos.X = -this._leftArrow.size.width / 2;
          } else {
            this._leftSliderBadgeSprite.pos.X = 0;
          }
          if (this._rightSliderBadge !== BadgeStyle.None) {
            const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this._rightSliderBadgeSprite);
            this._background.pos.X -= 40;
            this._rightSliderBadgeSprite.pos.X = 431 + x;
            this._rightSliderBadgeSprite.pos.X -= this._rightSliderBadgeSprite.size.width + widthOffset;
            this._rightSliderBadgeSprite.textureName = this.badgeToTextureName(this._rightSliderBadge);
            this._rightSliderBadgeSprite.color = this.badgeToColor(this._rightSliderBadge);
            this._rightSliderBadgeSprite.draw(Menu.screenResolution);
          } else {
            this._background.pos.X -= this._rightArrow.size.width / 2;
          }
          if (this._leftSliderBadge !== BadgeStyle.None) {
            const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this._leftSliderBadgeSprite);
            this._leftSliderBadgeSprite.pos.X -= this._leftSliderBadgeSprite.size.width + widthOffset;
            this._leftSliderBadgeSprite.pos.X += this._background.pos.X;
            this._leftSliderBadgeSprite.textureName = this.badgeToTextureName(this._leftSliderBadge);
            this._leftSliderBadgeSprite.color = this.badgeToColor(this._leftSliderBadge);
            this._leftSliderBadgeSprite.draw(Menu.screenResolution);
          }
          const sliderXOffset = (this._background.size.width - this._slider.size.width) / (this._items.length - 1) * this.Index;
          this._slider.pos.X = this._background.pos.X + sliderXOffset;
          this._leftArrow.color = this.enabled ? this.selected ? Color.black : Color.whiteSmoke : new Color(255, 163, 159, 148);
          this._rightArrow.color = this._leftArrow.color;
          this._background.draw(void 0, Menu.screenResolution);
          this._slider.draw(void 0, Menu.screenResolution);
          if (showArrows) {
            this._leftArrow.pos.X = this._background.pos.X - 15;
            this._rightArrow.pos.X = this._background.pos.X + this._background.size.width;
            this._leftArrow.draw(Menu.screenResolution);
            this._rightArrow.draw(Menu.screenResolution);
          }
          if (this._showDivider) {
            this._divider.pos.X = this._background.pos.X + this._background.size.width / 2;
            this._divider.draw(void 0, Menu.screenResolution);
          }
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/index.js
  var init_items = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/items/index.js"() {
      init_panels();
      init_UIMenuItem();
      init_UIMenuCheckboxItem();
      init_UIMenuListItem();
      init_UIMenuSeparatorItem();
      init_UIMenuSliderItem();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/modules/ListItem.js
  var init_ListItem = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/modules/ListItem.js"() {
      init_utils();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/modules/index.js
  var init_modules = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/modules/index.js"() {
      init_ListItem();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/Menu.js
  var __awaiter3, Menu;
  var init_Menu = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/Menu.js"() {
      init_ui();
      init_lib();
      init_enums();
      init_utils();
      init_items();
      __awaiter3 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Menu = class {
        constructor(title, subtitle, offset = new Point(), spriteLibrary = "commonmenu", spriteName = "interaction_bgd") {
          this.id = Crypto.uuidv4();
          this.visible = false;
          this.items = [];
          this.children = /* @__PURE__ */ new Map();
          this.menuOpen = new LiteEvent();
          this.menuClose = new LiteEvent();
          this.menuChange = new LiteEvent();
          this.indexChange = new LiteEvent();
          this.listChange = new LiteEvent();
          this.sliderChange = new LiteEvent();
          this.checkboxChange = new LiteEvent();
          this.listSelect = new LiteEvent();
          this.sliderSelect = new LiteEvent();
          this.itemSelect = new LiteEvent();
          this.panelActivated = new LiteEvent();
          this._counterPretext = "";
          this._counterOverride = "";
          this._alignment = MenuAlignment.Left;
          this._navigationDelay = 140;
          this._lastUpDownNavigation = 0;
          this._lastLeftRightNavigation = 0;
          this._activeItem = 1e3;
          this._widthOffset = 0;
          this._drawOffset = new Point();
          this._justOpened = true;
          this._mousePressed = false;
          this._minItem = 0;
          this._maxItem = 9;
          this._maxItemsOnScreen = this._maxItem;
          this._controls = new MenuControls();
          this._settings = new MenuSettings();
          this._offset = offset;
          this._mainMenu = new Container(new Point(), new Size(700, 500), Color.transparent);
          this._logo = new Sprite(spriteLibrary || "", spriteName || "", new Point(this._offset.X, this._offset.Y), new Size(431, 107));
          this._mainMenu.addItem([
            this._title = new Text(title || "", new Point(431 / 2 + this._offset.X, 20 + this._offset.Y), 1.15, Color.white, 1, Alignment.Centered),
            this._subtitleResRectangle = new Rectangle(new Point(this._offset.X, 107 + this._offset.Y), new Size(431, 37), Color.black),
            this._subtitle = new Text(subtitle || "", new Point(8 + this._offset.X, 110 + this._offset.Y), 0.35, Color.white, 0, Alignment.Left)
          ]);
          if (this._subtitle.caption.startsWith("~")) {
            this._counterPretext = this._subtitle.caption.substr(0, 3);
          }
          this._counterText = new Text("", new Point(425 + this._offset.X, 110 + this._offset.Y), 0.35, Color.white, 0, Alignment.Right);
          this._upAndDownSprite = new Sprite("commonmenu", "shop_arrows_upanddown", new Point(), new Size(50, 50));
          const extraRectanglePos = new Point(this._offset.X);
          const extraRectangleSize = new Size(431, 18);
          const extraRectangleColor = new Color(200, 0, 0, 0);
          this._extraRectangleUp = new Rectangle(extraRectanglePos, extraRectangleSize, extraRectangleColor);
          this._extraRectangleDown = new Rectangle(Object.assign({}, extraRectanglePos), Object.assign({}, extraRectangleSize), Object.assign({}, extraRectangleColor));
          this._descriptionBar = new Rectangle(new Point(this._offset.X), new Size(431, 4), Color.black);
          this._descriptionRectangle = new Sprite("commonmenu", "gradient_bgd", new Point(this._offset.X), new Size(431, 30));
          this._descriptionText = new Text("Description", new Point(this._offset.X + 8), 0.35, Color.white, Font.ChaletLondon, Alignment.Left);
          this._background = new Sprite("commonmenu", "gradient_bgd", new Point(this._offset.X, 144 + this._offset.Y), new Size(290, 25));
          setTick(() => {
            this._render();
          });
        }
        set Title(text) {
          this._title.caption = text;
        }
        get Title() {
          return this._title.caption;
        }
        get TitleFont() {
          return this._title.font;
        }
        set TitleFont(font) {
          this._title.font = font;
        }
        set Subtitle(text) {
          this._subtitle.caption = text;
        }
        get Subtitle() {
          return this._subtitle.caption;
        }
        set SubtitleFont(font) {
          this._subtitle.font = font;
        }
        get SubtitleFont() {
          return this._subtitle.font;
        }
        set SubtitleForeColor(color) {
          this._subtitle.color = color;
        }
        get SubtitleForeColor() {
          return this._subtitle.color;
        }
        set SubtitleBackColor(color) {
          this._subtitleResRectangle.color = color;
        }
        get SubtitleBackColor() {
          return this._subtitleResRectangle.color;
        }
        get CurrentItem() {
          return this.items[this._activeItem % this.items.length];
        }
        set CurrentItem(value) {
          const index = this.items.findIndex((i) => i.id === value.id);
          if (index !== -1) {
            this.CurrentSelection = index;
          }
        }
        get CurrentSelection() {
          return this._activeItem % this.items.length;
        }
        set CurrentSelection(v) {
          this.CurrentItem.selected = false;
          this._activeItem = 1e3 - 1e3 % this.items.length + v;
          const currentSelection = this.CurrentSelection;
          if (currentSelection > this._maxItem) {
            this._maxItem = currentSelection;
            this._minItem = currentSelection - this._maxItemsOnScreen;
          } else if (currentSelection < this._minItem) {
            this._maxItem = this._maxItemsOnScreen + currentSelection;
            this._minItem = currentSelection;
          }
        }
        get Alignment() {
          return this._alignment;
        }
        set Alignment(alignment) {
          this._alignment = alignment;
        }
        get WidthOffset() {
          return this._widthOffset;
        }
        set WidthOffset(widthOffset) {
          this._widthOffset = widthOffset;
          const width = 431 + widthOffset;
          if (this._logo) {
            this._logo.size.width = width;
          }
          this._mainMenu.items[0].pos.X = width / 2 + this._offset.X;
          if (this._counterText) {
            this._counterText.pos.X = 425 + this._offset.X + widthOffset;
          }
          if (this._subtitleResRectangle) {
            this._subtitleResRectangle.size.width = width;
          }
          this._extraRectangleUp.size.width = width;
          this._extraRectangleDown.size.width = width;
          this._upAndDownSprite.pos.X = 190 + this._offset.X + widthOffset / 2;
          this._descriptionBar.size.width = width;
          this._descriptionRectangle.size.width = width;
          this.items.forEach((item) => {
            item.formatDescription();
          });
        }
        get DrawOffset() {
          return this._drawOffset;
        }
        get Controls() {
          return this._controls;
        }
        get Settings() {
          return this._settings;
        }
        addNewSubMenu(text, description, inherit = true) {
          let menu;
          if (inherit) {
            menu = new Menu(this._title.caption, text, this._offset, this._logo.TextureDict, this._logo.textureName);
            menu.Alignment = this.Alignment;
            menu.WidthOffset = this.WidthOffset;
            menu._settings = this._settings;
            menu.TitleFont = this.TitleFont;
            menu.SubtitleFont = this.SubtitleFont;
          } else {
            menu = new Menu(this._title.caption, text);
          }
          const item = new UIMenuItem(text, description);
          this.addItem(item);
          this.bindMenuToItem(menu, item);
          return menu;
        }
        addSubMenu(subMenuToAdd, text, description, inherit = true) {
          if (inherit) {
            subMenuToAdd.Alignment = this.Alignment;
            subMenuToAdd.WidthOffset = this.WidthOffset;
            subMenuToAdd._settings = this._settings;
            subMenuToAdd.TitleFont = this.TitleFont;
            subMenuToAdd.SubtitleFont = this.SubtitleFont;
          }
          const item = new UIMenuItem(text, description);
          this.addItem(item);
          this.bindMenuToItem(subMenuToAdd, item);
          return subMenuToAdd;
        }
        addItem(items) {
          if (!Array.isArray(items)) {
            items = [items];
          }
          items.forEach((item) => {
            item.offset = this._offset;
            item.parent = this;
            item.formatDescription();
          });
          this.items.push(...items);
          this.refreshIndex();
        }
        removeItem(itemOrIndex) {
          if (typeof itemOrIndex === "number") {
            this.items = this.items.filter((i, index) => index !== itemOrIndex);
          } else {
            this.items = this.items.filter((i) => i.id !== itemOrIndex.id);
          }
          this.refreshIndex();
        }
        bindMenuToItem(menuToBind, itemToBindTo) {
          menuToBind.parentMenu = this;
          menuToBind.parentItem = itemToBindTo;
          this.children.set(itemToBindTo.id, menuToBind);
        }
        releaseMenuFromItem(releaseFrom) {
          if (!this.children.has(releaseFrom.id)) {
            return false;
          }
          const menu = this.children.get(releaseFrom.id);
          if (menu instanceof Menu) {
            menu.parentItem = void 0;
            menu.parentMenu = void 0;
          }
          this.children.delete(releaseFrom.id);
          return true;
        }
        refreshIndex() {
          if (this.items.length === 0) {
            this._activeItem = 1e3;
            this._maxItem = this._maxItemsOnScreen;
            this._minItem = 0;
            return;
          }
          for (const item of this.items) {
            item.selected = false;
          }
          this._activeItem = 1e3 - 1e3 % this.items.length;
          this._maxItem = this._maxItemsOnScreen;
          this._minItem = 0;
          if (this.CurrentItem instanceof UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
            this.goDown();
          }
        }
        clear() {
          this.items = [];
          this._recalculateUpAndDown();
          this._recalculateDescriptionPosition();
        }
        open() {
          this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
          this.visible = true;
          this._justOpened = true;
          if (!this.parentMenu && this.Settings.resetCursorOnOpen) {
            Hud.CursorPosition = new Point(0.5, 0.5);
            Hud.CursorSprite = CursorSprite.Normal;
          }
          this.menuOpen.emit();
        }
        close() {
          this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
          this.visible = false;
          this.refreshIndex();
          this.menuClose.emit();
        }
        goLeft() {
          const item = this.CurrentItem;
          if (item instanceof UIMenuListItem) {
            if (!item.Items.length) {
              return;
            }
            item.Index -= 1;
            this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
            this.listChange.emit(item, item.Index, item.SelectedItem);
            item.listChanged.emit(item.Index, item.SelectedItem);
          } else if (item instanceof UIMenuSliderItem) {
            if (!item.Items.length) {
              return;
            }
            item.Index -= 1;
            this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
            this.sliderChange.emit(item, item.Index, item.indexToItem(item.Index));
            item.sliderChanged.emit(item.Index, item.indexToItem(item.Index));
          }
        }
        goRight() {
          const item = this.CurrentItem;
          if (item instanceof UIMenuListItem) {
            if (item.Items.length === 0) {
              return;
            }
            item.Index += 1;
            this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
            this.listChange.emit(item, item.Index, item.SelectedItem);
            item.listChanged.emit(item.Index, item.SelectedItem);
          } else if (item instanceof UIMenuSliderItem) {
            item.Index += 1;
            this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
            this.sliderChange.emit(item, item.Index, item.indexToItem(item.Index));
            item.sliderChanged.emit(item.Index, item.indexToItem(item.Index));
          }
        }
        selectItem() {
          const item = this.CurrentItem;
          if (!item.enabled) {
            this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
            return;
          }
          this._playSoundAndReleaseId(this.Settings.audio.select, this.Settings.audio.library);
          if (item instanceof UIMenuCheckboxItem) {
            item.Checked = !item.Checked;
            this.checkboxChange.emit(item, item.Checked);
            item.checkboxChanged.emit(item.Checked);
          } else if (item instanceof UIMenuListItem) {
            this.listSelect.emit(item, item.Index, item.SelectedItem);
            item.listSelected.emit(item.Index, item.SelectedItem);
          } else if (item instanceof UIMenuSliderItem) {
            this.sliderSelect.emit(item, item.Index, item.indexToItem(item.Index));
            item.sliderSelected.emit(item.Index, item.indexToItem(item.Index));
          } else {
            this.itemSelect.emit(item, this.CurrentSelection);
            item.activated.emit();
            if (this.children.has(item.id)) {
              const subMenu = this.children.get(item.id);
              this.visible = false;
              if (subMenu instanceof Menu) {
                subMenu.visible = true;
                subMenu._justOpened = true;
                subMenu.menuOpen.emit();
              }
              this.menuChange.emit(subMenu, true);
            }
          }
          item.fireEvent();
        }
        isMouseInBounds(pos, size, drawOffset = true) {
          const resolution = Menu.screenResolution;
          const cX = GetControlNormal(0, Control.CursorX) * resolution.width / resolution.width;
          const cY = GetControlNormal(0, Control.CursorY) * resolution.height / resolution.height;
          let x = pos.X / resolution.width;
          let y = pos.Y / resolution.height;
          const w = size.width / resolution.width;
          const h = size.height / resolution.height;
          if (drawOffset) {
            x += this._drawOffset.X;
            y += this._drawOffset.Y;
          }
          return cX >= x && cX <= x + w && cY > y && cY < y + h;
        }
        goUp() {
          this.CurrentItem.selected = false;
          if (this.items.length > this._maxItemsOnScreen + 1) {
            if (this.CurrentSelection <= this._minItem) {
              if (this.CurrentSelection === 0) {
                this._minItem = this.items.length - this._maxItemsOnScreen - 1;
                this._maxItem = this.items.length - 1;
                this._activeItem = 1e3 - 1e3 % this.items.length;
                this._activeItem += this.items.length - 1;
              } else {
                this._minItem--;
                this._maxItem--;
                this._activeItem--;
              }
            } else {
              this._activeItem--;
            }
          } else {
            this._activeItem--;
          }
          if (this.CurrentItem instanceof UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
            this.goUp();
          } else {
            this.CurrentItem.selected = true;
            this._playSoundAndReleaseId(this.Settings.audio.upDown, this.Settings.audio.library);
            this.indexChange.emit(this.CurrentSelection);
          }
        }
        goDown() {
          this.CurrentItem.selected = false;
          if (this.items.length > this._maxItemsOnScreen + 1) {
            if (this.CurrentSelection >= this._maxItem) {
              if (this.CurrentSelection === this.items.length - 1) {
                this._minItem = 0;
                this._maxItem = this._maxItemsOnScreen;
                this._activeItem = 1e3 - 1e3 % this.items.length;
              } else {
                this._minItem++;
                this._maxItem++;
                this._activeItem++;
              }
            } else {
              this._activeItem++;
            }
          } else {
            this._activeItem++;
          }
          if (this.CurrentItem instanceof UIMenuSeparatorItem && this._isThereAnyItemExcludingSeparators()) {
            this.goDown();
          } else {
            this.CurrentItem.selected = true;
            this._playSoundAndReleaseId(this.Settings.audio.upDown, this.Settings.audio.library);
            this.indexChange.emit(this.CurrentSelection);
          }
        }
        goBack() {
          this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
          this.visible = false;
          if (this.parentMenu != null) {
            this.parentMenu.visible = true;
            this.parentMenu._justOpened = true;
            this.parentMenu.menuOpen.emit();
            this.menuChange.emit(this.parentMenu, false);
          }
          this.menuClose.emit();
        }
        _processMouse() {
          if (!this.visible || this._justOpened || !this.items.length || Game.CurrentInputMode === InputMode.GamePad || !this.Settings.mouseControlsEnabled) {
            Game.enableControlThisFrame(0, Control.LookUp);
            Game.enableControlThisFrame(0, Control.LookDown);
            Game.enableControlThisFrame(0, Control.Attack);
            Game.enableControlThisFrame(0, Control.Aim);
            return;
          }
          Hud.showCursorThisFrame();
          if (this.Settings.mouseEdgeEnabled) {
            if (this.isMouseInBounds(new Point(), new Size(30, Menu.screenHeight), false)) {
              GameplayCamera.RelativeHeading += 1;
              Hud.CursorSprite = CursorSprite.LeftArrow;
            } else if (this.isMouseInBounds(new Point(Menu.screenWidth - 30), new Size(30, Menu.screenHeight), false)) {
              GameplayCamera.RelativeHeading -= 1;
              Hud.CursorSprite = CursorSprite.RightArrow;
            } else {
              Hud.CursorSprite = CursorSprite.Normal;
            }
          }
          if (this._mousePressed) {
            return;
          }
          let hoveredItem, hoveredItemIndex;
          const limit = this.items.length > this._maxItemsOnScreen + 1 ? this._maxItem : this.items.length - 1;
          for (let i = this._minItem; i <= limit; i++) {
            const item = this.items[i];
            if (item instanceof UIMenuSeparatorItem) {
              continue;
            }
            if (!hoveredItem && item.IsMouseInBounds) {
              item.hovered = true;
              hoveredItem = item;
              hoveredItemIndex = i;
            } else {
              item.hovered = false;
            }
          }
          if (hoveredItem && Game.isDisabledControlJustPressed(0, Control.Attack)) {
            (() => __awaiter3(this, void 0, void 0, function* () {
              this._mousePressed = true;
              if (hoveredItem.selected) {
                if (hoveredItem.enabled) {
                  if (hoveredItem instanceof UIMenuListItem || hoveredItem instanceof UIMenuSliderItem) {
                    if (hoveredItem.IsMouseInBoundsOfLeftArrow) {
                      this.goLeft();
                    } else if (hoveredItem.IsMouseInBoundsOfRightArrow) {
                      this.goRight();
                    } else {
                      this.selectItem();
                    }
                  } else {
                    this.selectItem();
                  }
                } else {
                  this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                }
              } else {
                this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                this.CurrentSelection = hoveredItemIndex !== null && hoveredItemIndex !== void 0 ? hoveredItemIndex : 0;
                this.indexChange.emit(this.CurrentSelection);
              }
              yield Wait(this._navigationDelay);
              while (Game.isDisabledControlPressed(0, Control.Attack) && hoveredItem.IsMouseInBounds) {
                if (hoveredItem.selected) {
                  if (hoveredItem.enabled) {
                    if (hoveredItem instanceof UIMenuListItem || hoveredItem instanceof UIMenuSliderItem) {
                      if (hoveredItem.IsMouseInBoundsOfLeftArrow) {
                        this.goLeft();
                      } else if (hoveredItem.IsMouseInBoundsOfRightArrow) {
                        this.goRight();
                      }
                    }
                  } else {
                    this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                  }
                } else {
                  this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                  this.CurrentSelection = hoveredItemIndex !== null && hoveredItemIndex !== void 0 ? hoveredItemIndex : 0;
                  this.indexChange.emit(this.CurrentSelection);
                }
                yield Wait(125);
              }
              this._mousePressed = false;
            }))();
          }
          if (this.items.length <= this._maxItemsOnScreen + 1 || this._mousePressed) {
            return;
          }
          if (this.isMouseInBounds(this._extraRectangleUp.pos, this._extraRectangleUp.size)) {
            this._extraRectangleUp.color = Color.fromRgb(30, 30, 30);
            if (Game.isDisabledControlJustPressed(0, Control.Attack)) {
              (() => __awaiter3(this, void 0, void 0, function* () {
                this._mousePressed = true;
                this.goUp();
                yield Wait(this._navigationDelay);
                while (Game.isDisabledControlPressed(0, Control.Attack)) {
                  this.goUp();
                  yield Wait(125);
                }
                this._mousePressed = false;
              }))();
            }
          } else {
            this._extraRectangleUp.color = new Color(200, 0, 0, 0);
          }
          if (this._mousePressed) {
            return;
          }
          if (this.isMouseInBounds(this._extraRectangleDown.pos, this._extraRectangleDown.size)) {
            this._extraRectangleDown.color = Color.fromRgb(30, 30, 30);
            if (Game.isDisabledControlJustPressed(0, Control.Attack)) {
              (() => __awaiter3(this, void 0, void 0, function* () {
                this._mousePressed = true;
                this.goDown();
                yield Wait(this._navigationDelay);
                while (Game.isDisabledControlPressed(0, Control.Attack)) {
                  this.goDown();
                  yield Wait(125);
                }
                this._mousePressed = false;
              }))();
            }
          } else {
            this._extraRectangleDown.color = new Color(200, 0, 0, 0);
          }
        }
        _processControl() {
          if (!this.visible) {
            return;
          }
          if (this._justOpened) {
            this._justOpened = false;
            return;
          }
          if (this.Controls.back.Enabled && Game.isDisabledControlJustReleased(0, Control.PhoneCancel)) {
            this.goBack();
          }
          if (this.items.length === 0) {
            return;
          }
          if (this.Controls.up.Enabled && (Game.isDisabledControlPressed(0, Control.PhoneUp) || Game.isDisabledControlPressed(0, Control.CursorScrollUp)) && this._lastUpDownNavigation + this._navigationDelay < Date.now()) {
            this._lastUpDownNavigation = Date.now();
            this.goUp();
          }
          if (this.Controls.down.Enabled && (Game.isDisabledControlPressed(0, Control.PhoneDown) || Game.isDisabledControlPressed(0, Control.CursorScrollDown)) && this._lastUpDownNavigation + this._navigationDelay < Date.now()) {
            this._lastUpDownNavigation = Date.now();
            this.goDown();
          }
          if (this.Controls.left.Enabled && Game.isDisabledControlPressed(0, Control.PhoneLeft) && this._lastLeftRightNavigation + this._navigationDelay < Date.now()) {
            this._lastLeftRightNavigation = Date.now();
            this.goLeft();
          }
          if (this.Controls.right.Enabled && Game.isDisabledControlPressed(0, Control.PhoneRight) && this._lastLeftRightNavigation + this._navigationDelay < Date.now()) {
            this._lastLeftRightNavigation = Date.now();
            this.goRight();
          }
          if (this.Controls.select.Enabled && Game.isDisabledControlJustPressed(0, Control.FrontendAccept)) {
            this.selectItem();
          }
        }
        _isThereAnyItemExcludingSeparators() {
          return !!this.items.filter((item) => !(item instanceof UIMenuSeparatorItem)).length;
        }
        _playSoundAndReleaseId(sound, set) {
          const soundId = Audio.playSoundFrontEnd(sound, set);
          Audio.releaseSound(soundId);
        }
        _disEnableControls() {
          Game.disableAllControlsThisFrame(InputMode.GamePad);
          for (const control of this._settings.enabledControls[Game.CurrentInputMode]) {
            Game.enableControlThisFrame(0, control);
          }
        }
        _recalculateUpAndDown() {
          const y = this._offset.Y;
          this._extraRectangleUp.pos.Y = 144 + 38 * (this._maxItemsOnScreen + 1) + y;
          this._extraRectangleDown.pos.Y = 144 + 18 + 38 * (this._maxItemsOnScreen + 1) + y;
          this._upAndDownSprite.pos.Y = 147 + 37 * (this._maxItemsOnScreen + 1) + y;
        }
        _recalculateDescriptionPosition() {
          let y = 149 + this._offset.Y;
          let count = this.items.length;
          if (count > this._maxItemsOnScreen + 1) {
            count = this._maxItemsOnScreen + 2;
          }
          y += 38 * count;
          this._descriptionBar.pos.Y = y;
          this._descriptionRectangle.pos.Y = y;
          this._descriptionText.pos.Y = y + 6;
        }
        _calculateItemHeight() {
          const y = 149 + this._offset.Y;
          let count = this.items.length;
          if (count > this._maxItemsOnScreen + 1) {
            count = this._maxItemsOnScreen + 2;
          }
          return y + 38 * count;
        }
        _calculatePanelPosition(hasDescription) {
          let height = 0;
          if (hasDescription) {
            height += this._descriptionRectangle.size.height + 5;
          }
          return this._calculateItemHeight() + height;
        }
        _render() {
          if (!this.visible || Game.IsPaused) {
            return;
          }
          if (this._justOpened) {
            if (this._logo != null && !this._logo.IsTextureDictionaryLoaded) {
              this._logo.loadTextureDictionary();
            }
            if (!this._background.IsTextureDictionaryLoaded) {
              this._background.loadTextureDictionary();
            }
            if (!this._descriptionRectangle.IsTextureDictionaryLoaded) {
              this._descriptionRectangle.loadTextureDictionary();
            }
            if (!this._upAndDownSprite.IsTextureDictionaryLoaded) {
              this._upAndDownSprite.loadTextureDictionary();
            }
          }
          SetScriptGfxAlign(this._alignment, 84);
          const menuWidth = (431 + this._widthOffset) / Menu.screenWidth;
          if (this.Settings.scaleWithSafezone) {
            SetScriptGfxAlignParams(0, 0, menuWidth, 0);
            const pos = GetScriptGfxPosition(0, 0);
            this._drawOffset.X = pos[0];
            this._drawOffset.Y = pos[1];
          } else {
            const sSize = (1 - GetSafeZoneSize()) / 2;
            if (this._alignment === MenuAlignment.Right) {
              SetScriptGfxAlignParams(sSize, -sSize, menuWidth, 0);
              const pos = GetScriptGfxPosition(0, 0);
              this._drawOffset.X = pos[0];
              this._drawOffset.Y = pos[1];
            } else {
              SetScriptGfxAlignParams(-sSize, -sSize, menuWidth, 0);
              const pos = GetScriptGfxPosition(0, 0);
              this._drawOffset.X = pos[0];
              this._drawOffset.Y = pos[1];
            }
          }
          this._mainMenu.draw(void 0, Menu.screenResolution);
          this._processControl();
          this._processMouse();
          if (this.Settings.controlDisablingEnabled) {
            this._disEnableControls();
          }
          this._background.size = this.items.length > this._maxItemsOnScreen + 1 ? new Size(431 + this._widthOffset, 38 * (this._maxItemsOnScreen + 1)) : new Size(431 + this._widthOffset, 38 * this.items.length);
          this._background.draw(Menu.screenResolution);
          if (this.items.length > 0) {
            let hasDescription = false;
            if (this.CurrentItem.Description && this.CurrentItem.Description !== "")
              hasDescription = true;
            this.CurrentItem.selected = true;
            if (hasDescription) {
              this._recalculateDescriptionPosition();
              this._descriptionText.caption = this.CurrentItem.FormattedDescription;
              const numLines = this._descriptionText.caption.split("\n").length;
              this._descriptionRectangle.size = new Size(431 + this._widthOffset, numLines * 25 + 15);
              this._descriptionBar.draw(void 0, Menu.screenResolution);
              this._descriptionRectangle.draw(Menu.screenResolution);
              this._descriptionText.draw(void 0, Menu.screenResolution);
            }
            if (this.CurrentItem.Panels && this.CurrentItem.Panels.length) {
              let offset = this._calculatePanelPosition(hasDescription);
              for (let i = 0; i < this.CurrentItem.Panels.length; i++) {
                if (i > 0) {
                  offset += this.CurrentItem.Panels[i - 1].Height + 5;
                }
                this.CurrentItem.Panels[i].setVerticalPosition(offset);
                this.CurrentItem.Panels[i].draw();
              }
            }
          }
          if (this.items.length <= this._maxItemsOnScreen + 1) {
            let count = 0;
            for (const menuItem of this.items) {
              menuItem.setVerticalPosition(count * 38);
              menuItem.draw();
              count += 1;
            }
            if (this._counterText && this._counterOverride) {
              this._counterText.caption = this._counterPretext + this._counterOverride;
              this._counterText.draw(void 0, Menu.screenResolution);
            }
          } else {
            let count = 0;
            for (let index = this._minItem; index <= this._maxItem; index++) {
              const item = this.items[index];
              item.setVerticalPosition(count * 38);
              item.draw();
              count++;
            }
            this._recalculateUpAndDown();
            this._extraRectangleUp.draw(void 0, Menu.screenResolution);
            this._extraRectangleDown.draw(void 0, Menu.screenResolution);
            this._upAndDownSprite.draw(Menu.screenResolution);
            if (this._counterText) {
              if (!this._counterOverride) {
                const cap = `${this.CurrentSelection + 1} / ${this.items.length}`;
                this._counterText.caption = this._counterPretext + cap;
              } else {
                this._counterText.caption = this._counterPretext + this._counterOverride;
              }
              this._counterText.draw(void 0, Menu.screenResolution);
            }
          }
          this._logo.draw(Menu.screenResolution);
          ResetScriptGfxAlign();
        }
      };
      Menu.screenAspectRatio = IsDuplicityVersion() ? 0 : Screen.AspectRatio;
      Menu.screenHeight = 1080;
      Menu.screenWidth = Menu.screenHeight * Menu.screenAspectRatio;
      Menu.screenResolution = new Size(Menu.screenWidth, Menu.screenHeight);
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/MenuControl.js
  var MenuControl;
  var init_MenuControl = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/MenuControl.js"() {
      MenuControl = class {
        constructor(enabled = true) {
          this._enabled = enabled;
        }
        get Enabled() {
          return this._enabled;
        }
        set Enabled(value) {
          this._enabled = value;
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/MenuControls.js
  var MenuControls;
  var init_MenuControls = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/MenuControls.js"() {
      init_MenuControl();
      MenuControls = class {
        constructor() {
          this.back = new MenuControl();
          this.select = new MenuControl();
          this.left = new MenuControl();
          this.right = new MenuControl();
          this.up = new MenuControl();
          this.down = new MenuControl();
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/MenuSettings.js
  var MenuSettings;
  var init_MenuSettings = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/MenuSettings.js"() {
      init_lib();
      init_enums();
      MenuSettings = class {
        constructor() {
          this.scaleWithSafezone = true;
          this.resetCursorOnOpen = true;
          this.mouseControlsEnabled = true;
          this.mouseEdgeEnabled = true;
          this.controlDisablingEnabled = true;
          this.audio = {
            library: "HUD_FRONTEND_DEFAULT_SOUNDSET",
            upDown: "NAV_UP_DOWN",
            leftRight: "NAV_LEFT_RIGHT",
            select: "SELECT",
            back: "BACK",
            error: "ERROR"
          };
          this.enabledControls = {
            [InputMode.GamePad]: [Control.LookUpDown, Control.LookLeftRight, Control.Aim, Control.Attack],
            [InputMode.MouseAndKeyboard]: [
              Control.FrontendAccept,
              Control.FrontendAxisX,
              Control.FrontendAxisY,
              Control.FrontendDown,
              Control.FrontendUp,
              Control.FrontendLeft,
              Control.FrontendRight,
              Control.FrontendCancel,
              Control.FrontendSelect,
              Control.CursorScrollDown,
              Control.CursorScrollUp,
              Control.CursorX,
              Control.CursorY,
              Control.MoveUpDown,
              Control.MoveLeftRight,
              Control.Sprint,
              Control.Jump,
              Control.Enter,
              Control.VehicleExit,
              Control.VehicleAccelerate,
              Control.VehicleBrake,
              Control.VehicleHandbrake,
              Control.VehicleMoveLeftRight,
              Control.VehicleFlyYawLeft,
              Control.VehicleFlyYawRight,
              Control.FlyLeftRight,
              Control.FlyUpDown
            ]
          };
        }
      };
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/index.js
  var init_menu = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/menu/index.js"() {
      init_items();
      init_modules();
      init_Menu();
      init_MenuControl();
      init_MenuControls();
      init_MenuSettings();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/index.js
  var init_ui = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/ui/index.js"() {
      init_interfaces();
      init_Rectangle();
      init_Container();
      init_Effects();
      init_Fading();
      init_Hud();
      init_LoadingPrompt();
      init_Notification();
      init_Scaleform();
      init_Screen();
      init_Sprite();
      init_Text();
      init_Timerbar();
      init_menu();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponTint.js
  var WeaponTint;
  var init_WeaponTint = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponTint.js"() {
      (function(WeaponTint2) {
        WeaponTint2[WeaponTint2["Mk2ClassicBlack"] = 0] = "Mk2ClassicBlack";
        WeaponTint2[WeaponTint2["Mk2ClassicGray"] = 1] = "Mk2ClassicGray";
        WeaponTint2[WeaponTint2["Mk2ClassicTwoTone"] = 2] = "Mk2ClassicTwoTone";
        WeaponTint2[WeaponTint2["Mk2ClassicWhite"] = 3] = "Mk2ClassicWhite";
        WeaponTint2[WeaponTint2["Mk2ClassicBeige"] = 4] = "Mk2ClassicBeige";
        WeaponTint2[WeaponTint2["Mk2ClassicGreen"] = 5] = "Mk2ClassicGreen";
        WeaponTint2[WeaponTint2["Mk2ClassicBlue"] = 6] = "Mk2ClassicBlue";
        WeaponTint2[WeaponTint2["Mk2ClassicEarth"] = 7] = "Mk2ClassicEarth";
        WeaponTint2[WeaponTint2["Mk2ClassicBrownAndBlack"] = 8] = "Mk2ClassicBrownAndBlack";
        WeaponTint2[WeaponTint2["Mk2RedContrast"] = 9] = "Mk2RedContrast";
        WeaponTint2[WeaponTint2["Mk2BlueContrast"] = 10] = "Mk2BlueContrast";
        WeaponTint2[WeaponTint2["Mk2YellowContrast"] = 11] = "Mk2YellowContrast";
        WeaponTint2[WeaponTint2["Mk2OrangeContrast"] = 12] = "Mk2OrangeContrast";
        WeaponTint2[WeaponTint2["Mk2BoldPink"] = 13] = "Mk2BoldPink";
        WeaponTint2[WeaponTint2["Mk2BoldPurpleAndYellow"] = 14] = "Mk2BoldPurpleAndYellow";
        WeaponTint2[WeaponTint2["Mk2BoldOrange"] = 15] = "Mk2BoldOrange";
        WeaponTint2[WeaponTint2["Mk2BoldGreenAndPurple"] = 16] = "Mk2BoldGreenAndPurple";
        WeaponTint2[WeaponTint2["Mk2BoldRedFeatures"] = 17] = "Mk2BoldRedFeatures";
        WeaponTint2[WeaponTint2["Mk2BoldGreenFeatures"] = 18] = "Mk2BoldGreenFeatures";
        WeaponTint2[WeaponTint2["Mk2BoldCyanFeatures"] = 19] = "Mk2BoldCyanFeatures";
        WeaponTint2[WeaponTint2["Mk2BoldYellowFeatures"] = 20] = "Mk2BoldYellowFeatures";
        WeaponTint2[WeaponTint2["Mk2BoldRedAndWhite"] = 21] = "Mk2BoldRedAndWhite";
        WeaponTint2[WeaponTint2["Mk2BoldBlueAndWhite"] = 22] = "Mk2BoldBlueAndWhite";
        WeaponTint2[WeaponTint2["Mk2MetallicGold"] = 23] = "Mk2MetallicGold";
        WeaponTint2[WeaponTint2["Mk2MetallicPlatinum"] = 24] = "Mk2MetallicPlatinum";
        WeaponTint2[WeaponTint2["Mk2MetallicGrayAndLilac"] = 25] = "Mk2MetallicGrayAndLilac";
        WeaponTint2[WeaponTint2["Mk2MetallicPurpleAndLime"] = 26] = "Mk2MetallicPurpleAndLime";
        WeaponTint2[WeaponTint2["Mk2MetallicRed"] = 27] = "Mk2MetallicRed";
        WeaponTint2[WeaponTint2["Mk2MetallicGreen"] = 28] = "Mk2MetallicGreen";
        WeaponTint2[WeaponTint2["Mk2MetallicBlue"] = 29] = "Mk2MetallicBlue";
        WeaponTint2[WeaponTint2["Mk2MetallicWhiteAndAqua"] = 30] = "Mk2MetallicWhiteAndAqua";
        WeaponTint2[WeaponTint2["Mk2MetallicRedAndYellow"] = 31] = "Mk2MetallicRedAndYellow";
        WeaponTint2[WeaponTint2["Normal"] = 0] = "Normal";
        WeaponTint2[WeaponTint2["Green"] = 1] = "Green";
        WeaponTint2[WeaponTint2["Gold"] = 2] = "Gold";
        WeaponTint2[WeaponTint2["Pink"] = 3] = "Pink";
        WeaponTint2[WeaponTint2["Army"] = 4] = "Army";
        WeaponTint2[WeaponTint2["LSPD"] = 5] = "LSPD";
        WeaponTint2[WeaponTint2["Orange"] = 6] = "Orange";
        WeaponTint2[WeaponTint2["Platinum"] = 7] = "Platinum";
      })(WeaponTint || (WeaponTint = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponGroup.js
  var WeaponGroup;
  var init_WeaponGroup = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponGroup.js"() {
      (function(WeaponGroup2) {
        WeaponGroup2[WeaponGroup2["Unarmed"] = 2685387236] = "Unarmed";
        WeaponGroup2[WeaponGroup2["Melee"] = 3566412244] = "Melee";
        WeaponGroup2[WeaponGroup2["Pistol"] = 416676503] = "Pistol";
        WeaponGroup2[WeaponGroup2["SMG"] = 3337201093] = "SMG";
        WeaponGroup2[WeaponGroup2["AssaultRifle"] = 970310034] = "AssaultRifle";
        WeaponGroup2[WeaponGroup2["DigiScanner"] = 3539449195] = "DigiScanner";
        WeaponGroup2[WeaponGroup2["FireExtinguisher"] = 4257178988] = "FireExtinguisher";
        WeaponGroup2[WeaponGroup2["MG"] = 1159398588] = "MG";
        WeaponGroup2[WeaponGroup2["NightVision"] = 3493187224] = "NightVision";
        WeaponGroup2[WeaponGroup2["Parachute"] = 431593103] = "Parachute";
        WeaponGroup2[WeaponGroup2["Shotgun"] = 860033945] = "Shotgun";
        WeaponGroup2[WeaponGroup2["Sniper"] = 3082541095] = "Sniper";
        WeaponGroup2[WeaponGroup2["Stungun"] = 690389602] = "Stungun";
        WeaponGroup2[WeaponGroup2["Heavy"] = 2725924767] = "Heavy";
        WeaponGroup2[WeaponGroup2["Thrown"] = 1548507267] = "Thrown";
        WeaponGroup2[WeaponGroup2["PetrolCan"] = 1595662460] = "PetrolCan";
      })(WeaponGroup || (WeaponGroup = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponLivery.js
  var WeaponLivery;
  var init_WeaponLivery = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponLivery.js"() {
      (function(WeaponLivery2) {
        WeaponLivery2[WeaponLivery2["Digital"] = 0] = "Digital";
        WeaponLivery2[WeaponLivery2["Brushstroke"] = 1] = "Brushstroke";
        WeaponLivery2[WeaponLivery2["Woodland"] = 2] = "Woodland";
        WeaponLivery2[WeaponLivery2["Skull"] = 3] = "Skull";
        WeaponLivery2[WeaponLivery2["Sessanta"] = 4] = "Sessanta";
        WeaponLivery2[WeaponLivery2["Perseus"] = 5] = "Perseus";
        WeaponLivery2[WeaponLivery2["Leopard"] = 6] = "Leopard";
        WeaponLivery2[WeaponLivery2["Zebra"] = 7] = "Zebra";
        WeaponLivery2[WeaponLivery2["Geometric"] = 8] = "Geometric";
        WeaponLivery2[WeaponLivery2["Boom"] = 9] = "Boom";
        WeaponLivery2[WeaponLivery2["Patriotic"] = 10] = "Patriotic";
      })(WeaponLivery || (WeaponLivery = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponLiveryColor.js
  var WeaponLiveryColor;
  var init_WeaponLiveryColor = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponLiveryColor.js"() {
      (function(WeaponLiveryColor2) {
        WeaponLiveryColor2[WeaponLiveryColor2["Gray"] = 0] = "Gray";
        WeaponLiveryColor2[WeaponLiveryColor2["DarkGray"] = 1] = "DarkGray";
        WeaponLiveryColor2[WeaponLiveryColor2["Black"] = 2] = "Black";
        WeaponLiveryColor2[WeaponLiveryColor2["White"] = 3] = "White";
        WeaponLiveryColor2[WeaponLiveryColor2["Blue"] = 4] = "Blue";
        WeaponLiveryColor2[WeaponLiveryColor2["Cyan"] = 5] = "Cyan";
        WeaponLiveryColor2[WeaponLiveryColor2["Aqua"] = 6] = "Aqua";
        WeaponLiveryColor2[WeaponLiveryColor2["CoolBlue"] = 7] = "CoolBlue";
        WeaponLiveryColor2[WeaponLiveryColor2["DarkBlue"] = 8] = "DarkBlue";
        WeaponLiveryColor2[WeaponLiveryColor2["RoyalBlue"] = 9] = "RoyalBlue";
        WeaponLiveryColor2[WeaponLiveryColor2["Plum"] = 10] = "Plum";
        WeaponLiveryColor2[WeaponLiveryColor2["DarkPurple"] = 11] = "DarkPurple";
        WeaponLiveryColor2[WeaponLiveryColor2["Purple"] = 12] = "Purple";
        WeaponLiveryColor2[WeaponLiveryColor2["Red"] = 13] = "Red";
        WeaponLiveryColor2[WeaponLiveryColor2["WineRed"] = 14] = "WineRed";
        WeaponLiveryColor2[WeaponLiveryColor2["Magenta"] = 15] = "Magenta";
        WeaponLiveryColor2[WeaponLiveryColor2["Pink"] = 16] = "Pink";
        WeaponLiveryColor2[WeaponLiveryColor2["Salmon"] = 17] = "Salmon";
        WeaponLiveryColor2[WeaponLiveryColor2["HotPink"] = 18] = "HotPink";
        WeaponLiveryColor2[WeaponLiveryColor2["RustOrange"] = 19] = "RustOrange";
        WeaponLiveryColor2[WeaponLiveryColor2["Brown"] = 20] = "Brown";
        WeaponLiveryColor2[WeaponLiveryColor2["Earth"] = 21] = "Earth";
        WeaponLiveryColor2[WeaponLiveryColor2["Orange"] = 22] = "Orange";
        WeaponLiveryColor2[WeaponLiveryColor2["LightOrange"] = 23] = "LightOrange";
        WeaponLiveryColor2[WeaponLiveryColor2["DarkYellow"] = 24] = "DarkYellow";
        WeaponLiveryColor2[WeaponLiveryColor2["Yellow"] = 25] = "Yellow";
        WeaponLiveryColor2[WeaponLiveryColor2["LightBrown"] = 26] = "LightBrown";
        WeaponLiveryColor2[WeaponLiveryColor2["LimeGreen"] = 27] = "LimeGreen";
        WeaponLiveryColor2[WeaponLiveryColor2["Olive"] = 28] = "Olive";
        WeaponLiveryColor2[WeaponLiveryColor2["Moss"] = 29] = "Moss";
        WeaponLiveryColor2[WeaponLiveryColor2["Turquoise"] = 30] = "Turquoise";
        WeaponLiveryColor2[WeaponLiveryColor2["DarkGreen"] = 31] = "DarkGreen";
      })(WeaponLiveryColor || (WeaponLiveryColor = {}));
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponAsset.js
  var init_WeaponAsset = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/WeaponAsset.js"() {
      init_Weapon();
      init_Game();
      init_utils();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/index.js
  var init_weapon = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weapon/index.js"() {
      init_DlcWeaponData();
      init_WeaponHudStats();
      init_WeaponTint();
      init_WeaponGroup();
      init_WeaponLivery();
      init_WeaponLiveryColor();
      init_Weapon();
      init_WeaponAsset();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/index.js
  var init_weaponComponent = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/weaponComponent/index.js"() {
      init_DlcWeaponComponentData();
      init_WeaponComponentHudStats();
      init_ComponentAttachmentPoint();
      init_WeaponComponentHash();
      init_InvalidWeaponComponent();
    }
  });

  // node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/index.js
  var init_lib = __esm({
    "node_modules/.pnpm/@nativewrappers+client@1.6.1/node_modules/@nativewrappers/client/lib/index.js"() {
      init_Game();
      init_World();
      init_Model();
      init_Audio();
      init_Blip2();
      init_Camera();
      init_Checkpoint2();
      init_GameplayCamera();
      init_ParticleEffect();
      init_ParticleEffectAsset();
      init_Pickup();
      init_Raycast();
      init_RelationshipGroup();
      init_Tasks();
      init_TaskSequence();
      init_models();
      init_utils();
      init_enums();
      init_hashes();
      init_ui();
      init_weapon();
      init_weaponComponent();
    }
  });

  // shared/utils.ts
  var WEAPON_LIST;
  var init_utils2 = __esm({
    "shared/utils.ts"() {
      init_lib();
      WEAPON_LIST = /* @__PURE__ */ new Map();
      WEAPON_LIST.set(GetHashKey("WEAPON_BOTTLE"), {
        model: new Model("prop_w_me_bottle"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_KNUCKLE"), {
        model: new Model("prop_w_me_dagger"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_SWITCHBLADE"), {
        model: new Model("prop_w_me_dagger"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_FLAREGUN"), {
        model: new Model("w_pi_flaregun"),
        bone: 58271,
        offset: new Vector3(-0.01, 0.1, -0.07),
        rotation: new Vector3(-55, 0.1, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_MINIGUN"), {
        model: new Model("w_mg_minigun"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 8 /* Heavy */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_RAILGUN"), {
        model: new Model("w_ar_railgun"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 8 /* Heavy */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_HOMINGLAUNCHER"), {
        model: new Model("w_lr_homing"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 8 /* Heavy */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_STICKYBOMB"), {
        model: new Model("prop_bomb_01_s"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_MOLOTOV"), {
        model: new Model("w_ex_molotov"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_FIREEXTINGUISHER"), {
        model: new Model("w_am_fire_exting"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_PETROLCAN"), {
        model: new Model("w_am_jerrycan"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_SNOWBALL"), {
        model: new Model("w_ex_snowball"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_BALL"), {
        model: new Model("w_am_baseball"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_GRENADE"), {
        model: new Model("w_ex_grenadefrag"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_SMOKEGRENADE"), {
        model: new Model("w_ex_grenadesmoke"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_BZGAS"), {
        model: new Model("w_ex_grenadesmoke"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 9 /* Throw */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_DIGISCANNER"), {
        model: new Model("w_am_digiscanner"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 10 /* Other */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_DAGGER"), {
        model: new Model("prop_w_me_dagger"),
        bone: 51826,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 10 /* Other */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_WRENCH"), {
        model: new Model("w_me_hammer"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 10 /* Other */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_VINTAGEPISTOL"), {
        model: new Model("w_pi_vintage_pistol"),
        bone: 51826,
        offset: new Vector3(-0.01, 0.1, 0.07),
        rotation: new Vector3(-115, 0, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_BULLPUPRIFLE"), {
        model: new Model("w_ar_bullpuprifle"),
        bone: 24818,
        offset: new Vector3(0.05, -0.17, -0.02),
        rotation: new Vector3(0, 155, 0),
        category: 3 /* Assault */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_CROWBAR"), {
        model: new Model("w_me_crowbar"),
        bone: 24818,
        offset: new Vector3(-0.1, -0.15, -0),
        rotation: new Vector3(180, 90, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_SNIPERRIFLE"), {
        model: new Model("w_sr_sniperrifle"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 5 /* Sniper */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_HEAVYPISTOL"), {
        model: new Model("w_pi_heavypistol"),
        bone: 51826,
        offset: new Vector3(-0.01, 0.1, 0.07),
        rotation: new Vector3(-115, 0, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_POOLCUE"), {
        model: new Model("w_me_poolcue"),
        bone: 24818,
        offset: new Vector3(-0.25, -0.17, -0),
        rotation: new Vector3(180, 90, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_PISTOL"), {
        model: new Model("w_pi_pistol"),
        bone: 51826,
        offset: new Vector3(-0.01, 0.1, 0.07),
        rotation: new Vector3(-115, 0, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_SMG"), {
        model: new Model("w_sb_smg"),
        bone: 24818,
        offset: new Vector3(0, -0.15, 0),
        rotation: new Vector3(0, 155, 0),
        category: 2 /* SMG */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_GOLFCLUB"), {
        model: new Model("w_me_gclub"),
        bone: 24818,
        offset: new Vector3(-0.1, -0.15, -0),
        rotation: new Vector3(180, 90, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_MACHETE"), {
        model: new Model("prop_ld_w_me_machette"),
        bone: 24818,
        offset: new Vector3(-0.1, -0.15, -0),
        rotation: new Vector3(180, 90, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_FLASHLIGHT"), {
        model: new Model("prop_w_me_dagger"),
        bone: 58271,
        offset: new Vector3(0, 0, 0),
        rotation: new Vector3(0, 0, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_HAMMER"), {
        model: new Model("prop_tool_hammer"),
        bone: 51826,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_HUNTINGRIFLE"), {
        model: new Model("w_sr_huntingrifle"),
        bone: 24818,
        offset: new Vector3(-0.25, -0.17, -0.1),
        rotation: new Vector3(180, 0, 0),
        category: 6 /* Rifle */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_GRENADELAUNCHER"), {
        model: new Model("w_lr_grenadelauncher"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 8 /* Heavy */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_APPISTOL"), {
        model: new Model("w_pi_appistol"),
        bone: 51826,
        offset: new Vector3(-0.01, 0.1, 0.07),
        rotation: new Vector3(-115, 0, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_BATTLEAXE"), {
        model: new Model("w_me_battleaxe"),
        bone: 24818,
        offset: new Vector3(-0.1, -0.15, -0),
        rotation: new Vector3(180, 90, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_STUNGUN"), {
        model: new Model("w_pi_stungun"),
        bone: 58271,
        offset: new Vector3(-0.01, 0.1, -0.07),
        rotation: new Vector3(-55, 0.1, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_PISTOL50"), {
        model: new Model("w_pi_pistol50"),
        bone: 51826,
        offset: new Vector3(-0.01, 0.1, 0.07),
        rotation: new Vector3(-115, 0, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_COMBATMG"), {
        model: new Model("w_mg_combatmg"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 2 /* SMG */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTSMG"), {
        model: new Model("w_sb_smg"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 2 /* SMG */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_KNIFE"), {
        model: new Model("prop_w_me_knife_01"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_MICROSMG"), {
        model: new Model("w_sb_microsmg"),
        bone: 51826,
        offset: new Vector3(0, 9e-3, 0.15),
        rotation: new Vector3(270, -10, 0),
        category: 2 /* SMG */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_MARKSMANRIFLE"), {
        model: new Model("w_sr_marksmanrifle"),
        bone: 24818,
        offset: new Vector3(0, -0.17, -0.02),
        rotation: new Vector3(0, 155, 0),
        category: 6 /* Rifle */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_RPG"), {
        model: new Model("w_lr_rpg"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 8 /* Heavy */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_MARKSMANRIFLE_MK2"), {
        model: new Model("w_sr_marksmanrifle"),
        bone: 24818,
        offset: new Vector3(0.05, -0.17, -0.02),
        rotation: new Vector3(0, 155, 0),
        category: 7 /* Police */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_FIREWORK"), {
        model: new Model("w_lr_firework"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 8 /* Heavy */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_ADVANCEDRIFLE"), {
        model: new Model("w_ar_advancedrifle"),
        bone: 24818,
        offset: new Vector3(0.05, -0.17, -0.02),
        rotation: new Vector3(0, 155, 0),
        category: 7 /* Police */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_MG"), {
        model: new Model("w_mg_mg"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 2 /* SMG */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTSHOTGUN"), {
        model: new Model("w_sg_assaultshotgun"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 4 /* Shotgun */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_SPECIALCARBINE"), {
        model: new Model("w_ar_specialcarbine"),
        bone: 24818,
        offset: new Vector3(0.05, -0.17, -0.02),
        rotation: new Vector3(0, 155, 0),
        category: 7 /* Police */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_MUSKET"), {
        model: new Model("w_ar_musket"),
        bone: 24818,
        offset: new Vector3(-0.25, -0.17, -0.1),
        rotation: new Vector3(180, 0, 0),
        category: 4 /* Shotgun */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_HEAVYSNIPER"), {
        model: new Model("w_sr_heavysniper"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 135, 0),
        category: 5 /* Sniper */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_CARBINERIFLE"), {
        model: new Model("w_ar_carbinerifle"),
        bone: 24818,
        offset: new Vector3(0.05, -0.17, -0.02),
        rotation: new Vector3(0, 155, 0),
        category: 7 /* Police */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_BULLPUPSHOTGUN"), {
        model: new Model("w_sg_bullpupshotgun"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 135, 0),
        category: 4 /* Shotgun */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
        model: new Model("w_ar_assaultrifle"),
        bone: 24818,
        offset: new Vector3(0.05, -0.17, -0.02),
        rotation: new Vector3(0, 155, 0),
        category: 3 /* Assault */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_HATCHET"), {
        model: new Model("w_me_hatchet"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_PUMPSHOTGUN_MK2"), {
        model: new Model("w_sg_pumpshotgunmk2"),
        bone: 24818,
        offset: new Vector3(0.05, -0.15, 0.065),
        rotation: new Vector3(0, 155, 0),
        category: 4 /* Shotgun */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_PUMPSHOTGUN"), {
        model: new Model("w_sg_pumpshotgun"),
        bone: 24818,
        offset: new Vector3(0.05, -0.17, -0.02),
        rotation: new Vector3(180, 155, 0),
        category: 4 /* Shotgun */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_BEANBAG"), {
        model: new Model("w_sg_beanbag"),
        bone: 24818,
        offset: new Vector3(0.1, -0.17, -0.1),
        rotation: new Vector3(180, 155, 0),
        category: 4 /* Shotgun */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_HEAVYSHOTGUN"), {
        model: new Model("w_sg_heavyshotgun"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 225, 0),
        category: 4 /* Shotgun */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_NIGHTSTICK"), {
        model: new Model("w_me_nightstick"),
        bone: 51826,
        offset: new Vector3(-0.15, 0.07, 0.125),
        rotation: new Vector3(270, 90, 0),
        category: 0 /* Melee */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_GUSENBERG"), {
        model: new Model("w_sb_gusenberg"),
        bone: 24818,
        offset: new Vector3(0.1, -0.15, 0),
        rotation: new Vector3(0, 0, 0),
        category: 2 /* SMG */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_COMBATPISTOL"), {
        model: new Model("w_pi_combatpistol"),
        bone: 51826,
        offset: new Vector3(-0.01, 0.1, 0.07),
        rotation: new Vector3(-115, 0, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_SNSPISTOL"), {
        model: new Model("w_pi_sns_pistol"),
        bone: 58271,
        offset: new Vector3(-0.01, 0.1, -0.07),
        rotation: new Vector3(-55, 0.1, 0),
        category: 1 /* HandGuns */
      });
      WEAPON_LIST.set(GetHashKey("WEAPON_BAT"), {
        model: new Model("w_me_bat"),
        bone: 24818,
        offset: new Vector3(-0.25, -0.17, -0),
        rotation: new Vector3(90, 90, 0),
        category: 0 /* Melee */
      });
    }
  });

  // client/utils.ts
  var Delay;
  var init_utils3 = __esm({
    "client/utils.ts"() {
      Delay = (ms) => new Promise((res) => setTimeout(res, ms));
    }
  });

  // typings/weapons.ts
  var WEAPON_BAG_TYPES;
  var init_weapons = __esm({
    "typings/weapons.ts"() {
      WEAPON_BAG_TYPES = ["weapons:melee", "weapons:handGuns", "weapons:heavy"];
    }
  });

  // client/states.ts
  var weapons, handleMapSet, serverId, handleDeleteForServerId;
  var init_states = __esm({
    "client/states.ts"() {
      init_lib();
      init_utils2();
      init_weapons();
      init_utils3();
      weapons = /* @__PURE__ */ new Map();
      on("onClientResourceStop", (resource) => {
        if (resource !== GetCurrentResourceName())
          return;
        for (const [source] of weapons) {
          handleDeleteForServerId(source);
        }
      });
      handleMapSet = (plySrc, prop, weaponType) => {
        let weaponData = weapons.get(plySrc);
        if (weaponData) {
          if (weaponType === "weapons:melee") {
            if (weaponData.melee) {
              weaponData.melee.delete();
            }
            weaponData.melee = prop;
          } else if (weaponType === "weapons:handGuns") {
            if (weaponData.handgun) {
              weaponData.handgun.delete();
            }
            weaponData.handgun = prop;
          } else if (weaponType === "weapons:heavy") {
            if (weaponData.heavy) {
              weaponData.heavy.delete();
            }
            weaponData.heavy = prop;
          }
        } else {
          let weaponData2 = {
            melee: void 0,
            handgun: void 0,
            heavy: void 0
          };
          if (weaponType === "weapons:melee") {
            weaponData2.melee = prop;
          } else if (weaponType === "weapons:handGuns") {
            weaponData2.handgun = prop;
          } else if (weaponType === "weapons:heavy") {
            weaponData2.heavy = prop;
          }
          weapons.set(plySrc, weaponData2);
        }
      };
      serverId = GetPlayerServerId(PlayerId());
      for (const stateBagName of WEAPON_BAG_TYPES) {
        AddStateBagChangeHandler(stateBagName, null, (bagName, _key, value, _reserved, replicated) => __async(void 0, null, function* () {
          const plySrc = Number(bagName.replace("player:", ""));
          if (replicated && plySrc === serverId)
            return;
          if (value == 0) {
            handleDeleteForServerId(plySrc);
            return;
          }
          const weaponInfo = WEAPON_LIST.get(value);
          if (!weaponInfo)
            return console.log("no valid weapon");
          const ply = Player.fromServerId(plySrc);
          while (ply.Ped.Handle == 0) {
            yield Delay(0);
          }
          const ped = ply.Ped;
          const weaponObj = yield World.createProp(weaponInfo.model, ped.Position, true, true, false);
          if (!weaponObj)
            return;
          handleMapSet(plySrc, weaponObj, stateBagName);
          weaponObj.attachToBone(ped.Bones.getBone(weaponInfo.bone), weaponInfo.offset, weaponInfo.rotation, false, true, false, 2);
        }));
      }
      onNet("onPlayerDropped", (serverId2) => {
        handleDeleteForServerId(serverId2);
      });
      handleDeleteForServerId = (serverId2) => {
        const gun = weapons.get(serverId2);
        if (gun) {
          const { handgun, melee, heavy } = gun;
          if (handgun) {
            handgun.delete();
          }
          if (melee) {
            melee.delete();
          }
          if (heavy) {
            heavy.delete();
          }
          weapons.delete(serverId2);
        }
      };
    }
  });

  // client/main.ts
  var require_main = __commonJS({
    "client/main.ts"(exports) {
      init_lib();
      init_utils2();
      init_utils3();
      init_states();
      var currentWeapons = {
        melee: 0,
        handgun: 0,
        heavy: 0
      };
      setTick(() => __async(exports, null, function* () {
        const ped = Game.PlayerPed;
        const currWeapon = GetSelectedPedWeapon(ped.Handle);
        for (const [hash, weaponData] of WEAPON_LIST) {
          if (!HasPedGotWeapon(ped.Handle, hash, false))
            continue;
          if (currWeapon === hash) {
            switch (weaponData.category) {
              case 0 /* Melee */:
                if (hash === currWeapon) {
                  currentWeapons.melee = 0;
                }
                break;
              case 1 /* HandGuns */:
                if (hash === currWeapon) {
                  currentWeapons.handgun = 0;
                }
                break;
              default:
                if (hash == currWeapon) {
                  currentWeapons.heavy = 0;
                }
                break;
            }
          } else {
            switch (weaponData.category) {
              case 0 /* Melee */:
                if (currentWeapons.melee === 0) {
                  currentWeapons.melee = hash;
                }
                break;
              case 1 /* HandGuns */:
                if (currentWeapons.handgun === 0) {
                  currentWeapons.handgun = hash;
                }
                break;
              default:
                if (currentWeapons.heavy === 0) {
                  currentWeapons.heavy = hash;
                }
                break;
            }
          }
        }
        if (LocalPlayer.state["weapons:melee"] !== currentWeapons.melee) {
          LocalPlayer.state.set("weapons:melee", currentWeapons.melee, true);
        }
        if (LocalPlayer.state["weapons:handGuns"] !== currentWeapons.handgun) {
          LocalPlayer.state.set("weapons:handGuns", currentWeapons.handgun, true);
        }
        if (LocalPlayer.state["weapons:heavy"] !== currentWeapons.heavy) {
          LocalPlayer.state.set("weapons:heavy", currentWeapons.heavy, true);
        }
        yield Delay(250);
      }));
    }
  });
  require_main();
})();

//import { UAParser } from 'ua-parser-js'
//import { getAyoba } from './ayobaInit'

import { MAX_CHALLENGES } from '../constants/settings'
import { GAME_TITLE } from '../constants/strings'
import { getGuessStatuses } from './statuses'
import { solutionIndex, unicodeSplit } from './words'

/*const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()
const ayoba = getAyoba()*/

export const shareStatus = async (
  solution: string,
  guesses: string[],
  lost: boolean,
  isHardMode: boolean,
  isDarkMode: boolean,
  isHighContrastMode: boolean,
  handleShareToClipboard: () => void,
  handleShareFailure: () => void
) => {
  const textToShare =
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
    generateEmojiGrid(
      solution,
      guesses,
      getEmojiTiles(isDarkMode, isHighContrastMode)
    )

  const shareData = { text: textToShare }

  let shareSuccess = false

  // Modern method for copying to clipboard
  if (!shareSuccess && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(textToShare);
      handleShareToClipboard();
    } catch (error) {
      handleShareFailure();
    }
  }

  // Fallback method for copying to clipboard
  if (!shareSuccess) {
    try {
      const el = document.createElement('textarea');
      el.value = shareData.text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      shareSuccess = true
      handleShareToClipboard();
      console.log('Copied to clipboard')
    }
    catch (error) {
      handleShareFailure()
      console.error(error)
    }
  }
}

export const generateEmojiGrid = (
  solution: string,
  guesses: string[],
  tiles: string[]
) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(solution, guess)
      const splitGuess = unicodeSplit(guess)

      return splitGuess
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return tiles[0]
            case 'present':
              return tiles[1]
            default:
              return tiles[2]
          }
        })
        .join('')
    })
    .join('\n')
}

const getEmojiTiles = (isDarkMode: boolean, isHighContrastMode: boolean) => {
  let tiles: string[] = []
  tiles.push(isHighContrastMode ? '🟧' : '🟩')
  tiles.push(isHighContrastMode ? '🟦' : '🟨')
  tiles.push(isDarkMode ? '⬛' : '⬜')
  return tiles
}
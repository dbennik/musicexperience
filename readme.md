# AI Powered Music Experience

This is a Music Discovery application which will search for a suitable song with AI
(Gemini) based on the user prompt given. This Application is made as an assessment within
the limit of 8 hours work.

## Installation

- Run `npm install` to install all packages.
- Replace the `spotifyAccessToken` in spotify.service.ts with a valid Spotify Web API access token. 
Run `curl -X POST "https://accounts.spotify.com/api/token" -H "Content-Type: application/x-www-form-urlencoded" -d "grant_type=client_credentials&client_id=a392836bf6ea4959bdb15ac96d1a7fed&client_secret=0329a529403441f7956e98d2edd34a78"`
to create this token.
- Run `ng serve` to start the local host and visit the app on localhost:4200

## Usage

Enter any prompt in the input field to search for the best suited music song.

## ToDo

- OAuth2 auth code flow implementation for Spotify API.
- Web music player embedded
- Unit tests
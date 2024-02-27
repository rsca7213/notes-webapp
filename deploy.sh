GREEN='\033[0;32m'
echo -e "${GREEN} Deploying application..."
echo -e "${GREEN} Installing TypeScript, Angular CLI and NestJS CLI..."
npm install -g typescript
npm install -g @angular/cli
npm install -g @nestjs/cli
echo -e "${GREEN} Resetting SQLite Database..."
rm -f backend/notes-app
echo -e "${GREEN} Installing dependencies for Back-End..."
cd backend
npm install
echo -e "${GREEN} Building Back-End..."
npm run build
cd ../frontend
echo -e "${GREEN} Installing dependencies for Front-End..."
npm install
echo -e "${GREEN} Building Front-End..."
ng build --output-path=../backend/public
cd ../backend
echo -e "${GREEN} Starting Deployed App, running on http:localhost:3000..."
npm run start:prod
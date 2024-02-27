echo "Deploying application..."
echo "Installing TypeScript, Angular CLI and NestJS CLI..."
npm install -g typescript
npm install -g @angular/cli
npm install -g @nestjs/cli
echo "Resetting SQLite Database..."
rm -f backend/notes-app
echo "Installing dependencies for Back-End..."
cd backend
npm install
echo "Building Back-End..."
npm run build
cd ..
cd frontend
echo "Installing dependencies for Front-End..."
npm install
echo "Building Front-End..."
ng build --output-path=../backend/public
cd ..
cd backend
echo "Starting Deployed App, running on http:localhost:3000/app..."
npm run start:prod
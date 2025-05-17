FROM node:18-alpine AS base

# Install build dependencies for bcrypt native module
RUN apk add --no-cache python3 make g++ 

WORKDIR /app

# Install only production dependencies first
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
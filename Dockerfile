#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY WebAngular.csproj ./
RUN dotnet restore "./WebAngular.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "WebAngular.csproj" -c Release -o /app/build

FROM build AS publish

# docker中安装npm
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq
RUN dotnet publish "WebAngular.csproj" -c Release -o /app/publish

## Angular build
#FROM node AS nodebuilder
#
## set working directory
#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#
## add to path
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
#
## install
#COPY ClientApp/package.json /usr/src/app/package.json
#RUN npm install
#RUN npm install -g @angular/cli@8.3.22
#
## add app
#COPY ClientApp/. /usr/src/app
#
#RUN npm run build
#
## End angular build


FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
RUN mkdir -p /app/ClientApp/dist
COPY --from=nodebuilder /usr/src/app/dist/. /app/ClientApp/dist
ENTRYPOINT ["dotnet", "WebAngular.dll"]

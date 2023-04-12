# https://hub.docker.com/_/microsoft-dotnet
FROM sphinxworldbiznew/custom-images:cache-1 AS build
WORKDIR /build

# copy everything else and build app
COPY . .
WORKDIR /build
RUN dotnet tool install --global dotnet-ef --version 5.0.2
ENV PATH="${PATH}:/root/.dotnet/tools"
RUN dotnet ef database update --context ThreedContext &&\
    dotnet dev-certs https --clean &&\
    dotnet dev-certs https &&\
    dotnet dev-certs https --trust &&\
    dotnet publish -c release -o published

FROM sphinxworldbiznew/custom-images:cache-2 AS node-builder
WORKDIR /node
COPY ./ClientApp /node
RUN npm run-script build

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
ENV ASPNETCORE_URLS="https://*:443;http://*:80"
WORKDIR /app
RUN mkdir /app/wwwroot
COPY --from=build /build/published .
COPY --from=build /build/threed.db .
COPY --from=build /root/.dotnet/corefx/cryptography/x509stores/my/* /root/.dotnet/corefx/cryptography/x509stores/my/
COPY --from=node-builder /node/build ./wwwroot
ENTRYPOINT ["dotnet", "reactnet3.dll"]
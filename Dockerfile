FROM ubuntu:16.04

COPY ["package.json", "package-lock.json", "oracle-instantclient*.deb", "/usr/src/"]

WORKDIR /usr/src

RUN apt-get update && \
apt-get install -y curl libaio1 && \
apt-get update

RUN dpkg --install oracle-instantclient11.2-basiclite_11.2.0.4.0-2_amd64.deb

RUN export ORACLE_HOME=/usr/lib/oracle/11.2/client64 &&\
export LD_LIBRARY_PATH=/usr/lib/oracle/11.2/client64/lib &&\
export PATH=$PATH:$ORACLE_HOME/bin

RUN sh -c "echo /usr/lib/oracle/11.2/client64/lib > /etc/ld.so.conf.d/oracle-instantclient.conf" && \
ldconfig

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
apt-get install -y nodejs && \
npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["npm","run", "start:prod"]

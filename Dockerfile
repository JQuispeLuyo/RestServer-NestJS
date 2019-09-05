FROM ubuntu:16.04

COPY ["package.json", "package-lock.json", "oracle-instantclient*.rpm", "/usr/src/"]

WORKDIR /usr/src

RUN apt-get update && \
apt-get -y install sudo && \
apt-get install -y alien libaio1 && \
apt-get update

RUN alien -i oracle-instantclient11.2-basiclite-11.2.0.4.0-1.x86_64.rpm

RUN export ORACLE_HOME=/usr/lib/oracle/11.2/client64 &&\
export LD_LIBRARY_PATH=/usr/lib/oracle/11.2/client64/lib &&\
export PATH=$PATH:$ORACLE_HOME/bin

RUN sh -c "echo /usr/lib/oracle/11.2/client64/lib > /etc/ld.so.conf.d/oracle-instantclient.conf" && \
ldconfig

RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - && \
apt-get install -y nodejs && \
npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["npm","run", "start:prod"]

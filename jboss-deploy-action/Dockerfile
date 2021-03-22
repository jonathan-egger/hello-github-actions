FROM registry.access.redhat.com/jboss-eap-7/eap71-openshift

ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]


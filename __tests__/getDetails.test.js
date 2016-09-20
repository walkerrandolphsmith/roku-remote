const allChannelsResponse = `
<?xml version="1.0" encoding="UTF-8" ?>
<apps>
    <app id="31012" type="menu" version="1.6.8">Movie Store and TV Store</app>
    <app id="31863" type="menu" version="1.2.6">Roku Home News</app>
    <app id="12" type="appl" version="4.2.132">Netflix</app>
    <app id="43594" type="appl" version="1.3.60">Cinema Now</app>
    <app id="13" type="appl" version="6.0.0">Amazon Video</app>
    <app id="46041" type="appl" version="5.0.13">Sling TV </app>
    <app id="8838" type="appl" version="1.6.1944">Showtime</app>
    <app id="2285" type="appl" version="4.5.3">Hulu</app>
    <app id="2213" type="appl" version="4.1.1521">Roku Media Player</app>
    <app id="19977" type="appl" version="1.0.80000021">Spotify</app>
    <app id="65917" type="appl" version="1.2.0">TheGreatCoursesPlus</app>
    <app id="81920" type="appl" version="1.0.0">History Vault</app>
</apps>`;

const deviceInfoResponse = `
<?xml version="1.0" encoding="UTF-8" ?>
<device-info>
    <udn>29a40003-6807-10ef-800f-000000000000</udn>
    <serial-number>YY003J519951</serial-number>
    <device-id>4U9633519951</device-id>
    <advertising-id>af3114b5-a289-5ab3-a41a-3b52a6fd9200</advertising-id>
    <vendor-name>Roku</vendor-name>
    <model-name>Roku 4</model-name>
    <model-number>4400X</model-number>
    <model-region>US</model-region>
    <wifi-mac>08:05:81:ea:63:0e</wifi-mac>
    <ethernet-mac>08:05:81:ea:63:0f</ethernet-mac>
    <network-type>ethernet</network-type>
    <user-device-name/>
    <software-version>7.2.0</software-version>
    <software-build>4100</software-build>
    <secure-device>true</secure-device>
    <language>en</language>
    <country>US</country>
    <locale>en_US</locale>
    <time-zone>US/Eastern</time-zone>
    <time-zone-offset>-240</time-zone-offset>
    <power-mode>PowerOn</power-mode>
    <supports-suspend>true</supports-suspend>
    <developer-enabled>true</developer-enabled>
    <keyed-developer-id/>
    <search-enabled>true</search-enabled>
    <voice-search-enabled>true</voice-search-enabled>
    <notifications-enabled>true</notifications-enabled>
    <notifications-first-use>true</notifications-first-use>
    <headphones-connected>false</headphones-connected>
</device-info>
`;

describe('getDetails', () => {
    it('TODO write tests', () => {
        expect(true).toEqual(true);
    });
});